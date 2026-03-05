import { supabase } from "./supabase";
import { CONNECTION_ERROR, UNKNOWN_ERROR, VALIDATION_ERROR_FALLBACK } from "./messages";

const BASE_URL =
  typeof import.meta !== "undefined" && import.meta.env?.PUBLIC_API_URL
    ? import.meta.env.PUBLIC_API_URL
    : "/api/v1";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

function parseApiError(detail: unknown): string {
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const messages = detail
      .map((d: { msg?: string }) => d?.msg)
      .filter(Boolean) as string[];
    return messages.length > 0 ? messages.join(". ") : VALIDATION_ERROR_FALLBACK;
  }
  return UNKNOWN_ERROR;
}

async function getAuthHeaders(): Promise<Record<string, string>> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session?.access_token) {
    return { Authorization: `Bearer ${session.access_token}` };
  }
  return {};
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  authenticated = false
): Promise<ApiResponse<T>> {
  try {
    const authHeaders = authenticated ? await getAuthHeaders() : {};

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...authHeaders,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const detail = errorData?.detail ?? `Error ${response.status}: ${response.statusText}`;
      return { error: parseApiError(detail) };
    }

    const data = await response.json();
    return { data };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : CONNECTION_ERROR,
    };
  }
}

export async function submitContact(payload: {
  nombre: string;
  email: string;
  mensaje: string;
}) {
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function subscribeNewsletter(payload: { email: string }) {
  return request("/newsletter", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function submitColabora(payload: {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  comentarios: string;
}) {
  return request("/colabora", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export interface CategoryDTO {
  id: number;
  name: string;
  description: string | null;
}

export async function getCategoryByName(
  name: string
): Promise<ApiResponse<CategoryDTO[]>> {
  return request<CategoryDTO[]>(
    `/category?name=${encodeURIComponent(name)}`
  );
}

interface PresignedFileInfo {
  filename: string;
  presigned_url: string;
  key: string;
}

interface PresignUploadResponse {
  uploads: PresignedFileInfo[];
}

async function getPresignedUrls(
  categoryId: number,
  files: File[]
): Promise<ApiResponse<PresignUploadResponse>> {
  return request<PresignUploadResponse>(
    `/category/${categoryId}/presign-upload`,
    {
      method: "POST",
      body: JSON.stringify({
        files: files.map((f) => ({
          filename: f.name,
          content_type: f.type || "application/octet-stream",
        })),
      }),
    },
    true
  );
}

export type ProgressCallback = (progress: number) => void;

function uploadFileWithProgress(
  url: string,
  file: File,
  onProgress: (loaded: number, total: number) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", file.type || "application/octet-stream");
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress(e.loaded, e.total);
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve();
      } else {
        reject(new Error(`Failed to upload ${file.name}`));
      }
    };
    xhr.onerror = () => reject(new Error(`Failed to upload ${file.name}`));
    xhr.send(file);
  });
}

async function uploadFilesToS3(
  files: File[],
  uploads: PresignedFileInfo[],
  onProgress: ProgressCallback
): Promise<void> {
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  if (totalBytes === 0) return;

  const progressPerFile = files.map((f) => f.size / totalBytes);
  const loadedPerFile = new Array(files.length).fill(0);
  const totalPerFile = files.map((f) => f.size);

  const updateProgress = () => {
    const totalLoaded = loadedPerFile.reduce((a, b) => a + b, 0);
    const s3Progress = totalLoaded / totalBytes;
    const overall = 5 + s3Progress * 90;
    onProgress(Math.min(overall, 95));
  };

  await Promise.all(
    files.map((file, i) =>
      uploadFileWithProgress(uploads[i].presigned_url, file, (loaded, total) => {
        loadedPerFile[i] = total > 0 ? (loaded / total) * totalPerFile[i] : 0;
        updateProgress();
      })
    )
  );
}

export async function submitParticipation(
  categoryId: number,
  formData: Record<string, string>,
  files: File[],
  onProgress?: ProgressCallback
): Promise<ApiResponse<unknown>> {
  try {
    let contentUrls: string[] = [];

    if (files.length > 0) {
      const presignResult = await getPresignedUrls(categoryId, files);
      if (presignResult.error || !presignResult.data) {
        return { error: presignResult.error };
      }

      onProgress?.(5);
      await uploadFilesToS3(files, presignResult.data.uploads, onProgress ?? (() => {}));
      contentUrls = presignResult.data.uploads.map((u) => u.key);
    }

    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value);
    });
    if (contentUrls.length > 0) {
      body.append("content_urls", JSON.stringify(contentUrls));
    }

    const authHeaders = await getAuthHeaders();

    const response = await fetch(
      `${BASE_URL}/category/${categoryId}/participate`,
      {
        method: "POST",
        headers: authHeaders,
        body,
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const detail = errorData?.detail ?? `Error ${response.status}: ${response.statusText}`;
      return { error: parseApiError(detail) };
    }

    onProgress?.(100);

    const data = await response.json();
    return { data };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : CONNECTION_ERROR,
    };
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session !== null;
}
