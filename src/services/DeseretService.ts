const DESERET_TRANSLATION_URL = "http://2deseret.com/json/translation";

export interface DeseretTranslationRequest {
  english: string;
}

export interface DeseretTranslationResponse {
  deseret: string;
}

export interface DeseretTranslationErrorBody {
  status: string;
  status_code: number;
  error_message: string;
}

/**
 * Translates English text to Deseret via 2deseret.com.
 * If the browser blocks the request (CORS), use a dev proxy or call from your own backend.
 */
export async function translateEnglishToDeseret(
  english: string,
  init?: Omit<RequestInit, "method" | "body">,
): Promise<DeseretTranslationResponse> {
  const headers = new Headers(init?.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(DESERET_TRANSLATION_URL, {
    ...init,
    method: "POST",
    headers,
    body: JSON.stringify({ english } satisfies DeseretTranslationRequest),
  });

  const data: unknown = await res.json();

  if (!res.ok) {
    const err = data as Partial<DeseretTranslationErrorBody>;
    throw new Error(
      err.error_message ?? `Deseret translation failed (${res.status})`,
    );
  }

  return data as DeseretTranslationResponse;
}
