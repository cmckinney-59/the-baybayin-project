/**
 * Mexican / Latin-American Spanish pronunciation dictionary.
 *
 * Source: Montreal Forced Aligner Spanish MFA dictionary (CC BY 4.0)
 * https://mfa-models.readthedocs.io/ — LatAm-compatible phones (e.g. gracias → …s…, not θ).
 *
 * open-dict-data/ipa-dict `es_MX` was evaluated but is conjugation-skewed and
 * missing common lemmas (familia, gracias, México, …), so MFA is bundled instead.
 *
 * Values are space-separated MFA phone strings.
 */
export type SpanishPronunciationDict = Record<string, string>;

let dict: SpanishPronunciationDict | null = null;
let loadPromise: Promise<SpanishPronunciationDict> | null = null;

function stripAccents(word: string): string {
  return word.normalize("NFD").replace(/\p{M}/gu, "");
}

export async function ensureSpanishDictionaryLoaded(): Promise<void> {
  if (dict) {
    return;
  }
  loadPromise ??= import("../../data/SpanishData/es_MX.json").then((mod) => {
    dict = mod.default as SpanishPronunciationDict;
    return dict;
  });
  await loadPromise;
}

export function isSpanishDictionaryLoaded(): boolean {
  return dict !== null;
}

/**
 * Look up MFA phones for a Spanish word. Tries exact lowercase, then
 * accent-stripped form. Returns null if not in the dictionary.
 */
export function lookupSpanishPronunciation(word: string): string[] | null {
  if (!dict) {
    return null;
  }
  const lower = word.toLowerCase();
  const phones = dict[lower] ?? dict[stripAccents(lower)];
  if (!phones) {
    return null;
  }
  const parts = phones.split(/\s+/).filter(Boolean);
  return parts.length ? parts : null;
}
