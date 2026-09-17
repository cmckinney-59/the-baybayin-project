import {
  isDictionaryLoaded,
  loadDictionary,
  lookupPronunciation,
} from "@ingglish/dictionary";
import { stripStress } from "@ingglish/phonemes";

let dictionaryLoad: Promise<unknown> | null = null;

/** Shared with Deseret-style processors that need the CMU dictionary. */
export async function ensureDictionaryLoaded(): Promise<void> {
  if (isDictionaryLoaded()) {
    return;
  }
  dictionaryLoad ??= loadDictionary();
  await dictionaryLoad;
}

/**
 * ARPAbet → Tagalog-friendly Latin spelling ("Tagalized").
 * Matches how-to-read borrowed-sound conventions (siy, diy, ts, kuw, …).
 */
const ARPABET_TO_TAGALOG: Record<string, string> = {
  // Vowels
  AA: "a",
  AE: "a",
  AH: "a",
  AO: "o",
  AW: "aw",
  AY: "ay",
  EH: "e",
  ER: "er",
  EY: "e",
  IH: "i",
  IY: "i",
  OW: "o",
  OY: "oy",
  UH: "u",
  UW: "u",
  // Consonants
  B: "b",
  CH: "ts",
  D: "d",
  DH: "d",
  F: "f",
  G: "g",
  HH: "h",
  JH: "diy",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  NG: "ng",
  P: "p",
  R: "r",
  S: "s",
  SH: "siy",
  T: "t",
  TH: "t",
  V: "b",
  W: "w",
  Y: "y",
  Z: "s",
  ZH: "siy",
};

function arpabetToTagalog(phonemes: string[]): string {
  let result = "";
  for (let i = 0; i < phonemes.length; i++) {
    const base = stripStress(phonemes[i]);
    // "qu" / "kw" → kuw (quality → kuwalati, question → kuwestsan)
    if (
      base === "K" &&
      i + 1 < phonemes.length &&
      stripStress(phonemes[i + 1]) === "W"
    ) {
      result += "kuw";
      i += 1;
      continue;
    }
    result += ARPABET_TO_TAGALOG[base] ?? base.toLowerCase();
  }
  return result;
}

/**
 * If the word has a CMU English pronunciation, return its Tagalized spelling.
 * Otherwise return null so the caller can keep orthographic Tagalog processing.
 */
export function tagalizeIfEnglish(word: string): string | null {
  const phonemes = lookupPronunciation(word);
  if (!phonemes?.length) {
    return null;
  }
  return arpabetToTagalog(phonemes);
}
