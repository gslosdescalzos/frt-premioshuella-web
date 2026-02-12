const BASE_URL =
  typeof import.meta !== "undefined" && import.meta.env?.PUBLIC_API_URL
    ? import.meta.env.PUBLIC_API_URL
    : "/api/v1";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        error: errorData?.detail || `Error ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return { data };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "Error de conexión",
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
    const response = await fetch(
      `${BASE_URL}/category/${categoryId}/participate`,
      {
        method: "POST",
        body,
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        error:
          errorData?.detail ||
          `Error ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return { data };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "Error de conexión",
    };
  }
}
