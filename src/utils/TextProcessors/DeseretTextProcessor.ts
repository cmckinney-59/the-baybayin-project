import {
  isDictionaryLoaded,
  loadDictionary,
  lookupPronunciation,
} from "@ingglish/dictionary";

let dictionaryLoad: Promise<unknown> | null = null;

async function ensureDictionaryLoaded(): Promise<void> {
  if (isDictionaryLoaded()) {
    return;
  }
  dictionaryLoad ??= loadDictionary();
  await dictionaryLoad;
}

/**
 * Pull ARPAbet pronunciations from ingglish's CMU dictionary.
 * Words not in the dictionary are left unchanged.
 *
 * Example: "family" -> "F AE1 M AH0 L IY0"
 */
export default async function processDeseretText(
  text: string,
): Promise<string> {
  await ensureDictionaryLoaded();

  return text.replace(/[A-Za-z']+/g, (word) => {
    const phonemes = lookupPronunciation(word);
    return phonemes ? phonemes.join(" ") : word;
  });
}

function swapCharacters(text: string): string {
  return text.replace();
}
