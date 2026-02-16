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

export async function submitParticipation(
  categoryId: number,
  formData: Record<string, string>,
  files: File[]
): Promise<ApiResponse<unknown>> {
  const body = new FormData();

  Object.entries(formData).forEach(([key, value]) => {
    body.append(key, value);
  });

  files.forEach((file) => {
    body.append("files", file);
  });

  try {
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
