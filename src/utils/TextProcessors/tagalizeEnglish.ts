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

const VOWEL_PHONEMES = new Set([
  "AA",
  "AE",
  "AH",
  "AO",
  "AW",
  "AY",
  "EH",
  "ER",
  "EY",
  "IH",
  "IY",
  "OW",
  "OY",
  "UH",
  "UW",
]);

/** Spellings that can realize each phoneme, longest first. */
const PHONEME_GRAPHEMES: Record<string, readonly string[]> = {
  K: ["ck", "qu", "q", "c", "k", "x"],
  W: ["wh", "w", "u"],
  Y: ["y"],
  SH: ["sh", "ti", "si", "ci", "s"],
  CH: ["tch", "ch", "ti", "t"],
  JH: ["dge", "ge", "j", "g"],
  TH: ["th"],
  DH: ["th"],
  NG: ["ng", "n"],
  ZH: ["si", "s"],
  P: ["pp", "p"],
  B: ["bb", "b"],
  T: ["tt", "t"],
  D: ["dd", "d"],
  F: ["ph", "ff", "f"],
  V: ["v"],
  G: ["gg", "g"],
  HH: ["h"],
  L: ["ll", "l"],
  M: ["mm", "m"],
  N: ["kn", "gn", "nn", "n"],
  R: ["wr", "rr", "r"],
  S: ["ss", "c", "s"],
  Z: ["zz", "s", "z"],
  AA: ["au", "aw", "o", "a"],
  AE: ["ai", "a"],
  AH: ["a", "e", "i", "o", "u", "y"],
  AO: ["aw", "au", "o", "a"],
  AW: ["ou", "ow", "au"],
  AY: ["igh", "ie", "i", "y"],
  EH: ["ea", "e", "a"],
  ER: ["ear", "er", "or", "ur", "ir", "ar", "re"],
  EY: ["ay", "ai", "ei", "ey", "a"],
  IH: ["i", "e", "y"],
  IY: ["ee", "ea", "ie", "i", "y", "e"],
  OW: ["ow", "oa", "ou", "o"],
  OY: ["oy", "oi"],
  UH: ["oo", "ou", "u"],
  UW: ["oo", "ew", "ue", "u", "o"],
};

function phonemeStress(phoneme: string): number | undefined {
  const match = /(\d)$/.exec(phoneme);
  return match ? Number(match[1]) : undefined;
}

function matchGrapheme(word: string, index: number, base: string): string {
  const options = PHONEME_GRAPHEMES[base] ?? [];
  for (const grapheme of options) {
    if (word.startsWith(grapheme, index)) return grapheme;
  }
  return "";
}

/**
 * Unstressed schwa (AH0) is not a real "a". Keep the written vowel
 * (computer → kom…, quality → …li…) instead of the pronunciation.
 * -tion / -sion still use "a" (question → …san).
 */
function unstressedSchwaSpelling(
  word: string,
  index: number,
  grapheme: string,
): string | null {
  if (!grapheme) return null;
  const suffix = word.slice(Math.max(0, index - 2));
  if (/^(ti|si|ci)on/.test(suffix)) return "a";
  const letter = grapheme[0];
  if (letter === "y") return "i";
  if ("eiou".includes(letter)) return letter;
  return null;
}

function arpabetToTagalog(word: string, phonemes: string[]): string {
  const letters = word.toLowerCase();
  let index = 0;
  let result = "";

  const consume = (base: string): string => {
    let grapheme = matchGrapheme(letters, index, base);
    if (!grapheme && index < letters.length && !/[aeiou]/.test(letters[index])) {
      // Silent letter (the "e" in "pines") before the real grapheme.
      const skipped = matchGrapheme(letters, index + 1, base);
      if (skipped) {
        index += 1;
        grapheme = skipped;
      }
    }
    index += grapheme.length || (index < letters.length ? 1 : 0);
    return grapheme;
  };

  for (let i = 0; i < phonemes.length; i++) {
    const raw = phonemes[i];
    const base = stripStress(raw);
    const next = i + 1 < phonemes.length ? stripStress(phonemes[i + 1]) : "";

    // "qu" / "kw" → kuw (quality → kuwaliti, question → kuwestsan)
    if (base === "K" && next === "W") {
      result += "kuw";
      const consumed = matchGrapheme(letters, index, "K");
      if (consumed === "qu" || consumed === "q") {
        index += consumed === "qu" ? 2 : 1;
        if (letters[index] === "u") index += 1;
      } else {
        consume("K");
        consume("W");
      }
      i += 1;
      continue;
    }

    // /ju/ written as "u" (computer → pyu): insert y, let the vowel keep the letter.
    if (
      base === "Y" &&
      next &&
      VOWEL_PHONEMES.has(next) &&
      letters[index] !== "y" &&
      /[aeiou]/.test(letters[index] ?? "")
    ) {
      result += "y";
      continue;
    }

    const grapheme = consume(base);
    if (base === "AH" && phonemeStress(raw) === 0) {
      result += unstressedSchwaSpelling(letters, index - grapheme.length, grapheme) ?? "a";
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
  return arpabetToTagalog(word, phonemes);
}
