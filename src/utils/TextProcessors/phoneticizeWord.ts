import {
  ensureDictionaryLoaded,
  tagalizeIfEnglish,
} from "./tagalizeEnglish";
import { ensureSpanishDictionaryLoaded } from "./spanishDictionary";
import { tagalizeIfSpanish } from "./tagalizeSpanish";

export { ensureDictionaryLoaded } from "./tagalizeEnglish";
export { ensureSpanishDictionaryLoaded } from "./spanishDictionary";

export type PhoneticPriority = "english" | "spanish";

export type PhoneticizeOptions = {
  useEnglish?: boolean;
  useSpanish?: boolean;
  priority?: PhoneticPriority;
};

/** Load pronunciation dictionaries needed for the current Phonetic mode options. */
export async function ensurePhoneticDictionariesLoaded(
  options: Pick<PhoneticizeOptions, "useEnglish" | "useSpanish"> = {},
): Promise<void> {
  const useEnglish = options.useEnglish ?? true;
  const useSpanish = options.useSpanish ?? true;
  const loads: Promise<void>[] = [];
  if (useEnglish) {
    loads.push(ensureDictionaryLoaded());
  }
  if (useSpanish) {
    loads.push(ensureSpanishDictionaryLoaded());
  }
  await Promise.all(loads);
}

/**
 * Tagalize from enabled pronunciation dictionaries.
 * When both are enabled, `priority` chooses which language is tried first.
 * Returns null if nothing matches (caller keeps orthographic processing).
 */
export function phoneticizeIfKnown(
  word: string,
  options: PhoneticizeOptions = {},
): string | null {
  const useEnglish = options.useEnglish ?? true;
  const useSpanish = options.useSpanish ?? true;
  const priority = options.priority ?? "english";

  if (!useEnglish && !useSpanish) {
    return null;
  }

  if (useEnglish && useSpanish) {
    if (priority === "spanish") {
      return tagalizeIfSpanish(word) ?? tagalizeIfEnglish(word);
    }
    return tagalizeIfEnglish(word) ?? tagalizeIfSpanish(word);
  }

  if (useEnglish) {
    return tagalizeIfEnglish(word);
  }
  return tagalizeIfSpanish(word);
}
