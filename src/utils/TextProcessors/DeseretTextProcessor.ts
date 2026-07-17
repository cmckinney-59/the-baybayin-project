const configuredUrl = (
  import.meta.env.VITE_DESERET_TRANSLATION_URL as string | undefined
)?.trim();

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

// In local dev, prefer the Vite proxy (faster than Apps Script → 2deseret).
const DESERET_API_URL = import.meta.env.DEV
  ? `${baseUrl}api/deseret/json/translation`
  : configuredUrl || `${baseUrl}api/deseret/json/translation`;

type DeseretTranslationResponse = {
  deseret?: string;
  english?: string;
  error?: string;
};

const translationCache = new Map<string, string>();
const inFlight = new Map<string, Promise<string>>();

function isAppsScriptProxy(url: string): boolean {
  return url.includes("script.google.com");
}

export default async function processDeseretText(
  text: string,
): Promise<string> {
  if (!text.trim()) {
    return text;
  }

  const cached = translationCache.get(text);
  if (cached !== undefined) {
    return cached;
  }

  const pending = inFlight.get(text);
  if (pending) {
    return pending;
  }

  const request = translateViaApi(text)
    .then((deseret) => {
      translationCache.set(text, deseret);
      return deseret;
    })
    .finally(() => {
      inFlight.delete(text);
    });

  inFlight.set(text, request);
  return request;
}

async function translateViaApi(text: string): Promise<string> {
  // Match 2deseret.com by calling their translation endpoint through a proxy:
  // - Local: Vite proxies /api/deseret → https://2deseret.com
  // - Production: set VITE_DESERET_TRANSLATION_URL to an Apps Script /exec URL
  const response = isAppsScriptProxy(DESERET_API_URL)
    ? await fetchAppsScript(text)
    : await fetchJsonPost(text);

  if (!response.ok) {
    throw new Error(`Deseret translation failed (${response.status}).`);
  }

  const payload = (await response.json()) as DeseretTranslationResponse;
  if (typeof payload.deseret !== "string") {
    throw new Error(
      payload.error ?? "Unexpected response from Deseret translation API.",
    );
  }

  return payload.deseret;
}

async function fetchJsonPost(text: string): Promise<Response> {
  return fetch(DESERET_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ english: text }),
  });
}

async function fetchAppsScript(text: string): Promise<Response> {
  const url = new URL(DESERET_API_URL);
  url.searchParams.set("english", text);
  return fetch(url.toString(), {
    method: "GET",
    redirect: "follow",
  });
}
