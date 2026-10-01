import {
  isDictionaryLoaded,
  loadDictionary,
  lookupPronunciation,
} from "@ingglish/dictionary";
import { wordToArpabet } from "@ingglish/g2p";
import {
  DESERET_LETTERS,
  DESERET_MODERN,
} from "../../data/DeseretData/DESERET_DATA";
import { replacePhoneticSlashTokens } from "../../data/DeseretData/deseretPhoneticMap";

let dictionaryLoad: Promise<unknown> | null = null;

async function ensureDictionaryLoaded(): Promise<void> {
  if (isDictionaryLoaded()) {
    return;
  }
  dictionaryLoad ??= loadDictionary();
  await dictionaryLoad;
}

/**
 * Pull ARPAbet pronunciations from ingglish's CMU dictionary,
 * map them to Deseret, then restore casing from the English input.
 * Unknown words fall back to rule-based G2P (same as ingglish's pipeline).
 *
 * Slash-delimited phonemes (e.g. `/oo/`, `/th/`) map directly to Deseret
 * letters before English word lookup — similar to explicit sound overrides
 * on https://www.2deseret.com/
 *
 * Example: "family" -> "𐑁𐐰𐑋𐐲𐑊𐐨"
 * Example: "/b//oo//k/" -> "𐐺𐐭𐐿"
 */
export type DeseretMode = "classic" | "modern";

export default async function processDeseretText(
  text: string,
  mode: DeseretMode = "classic",
): Promise<string> {
  await ensureDictionaryLoaded();

  const withPhonetics = replacePhoneticSlashTokens(text, mode === "modern");

  return withPhonetics.replace(/[A-Za-z']+/g, (word) => {
    const standaloneLetter = mapStandaloneLetterWord(word, mode);
    if (standaloneLetter) {
      return standaloneLetter;
    }

    const phonemes = getPronunciation(word);
    if (!phonemes.length) {
      return word;
    }

    let processedWord = replaceER(phonemes.join(" "));
    processedWord = replaceYou(processedWord);
    processedWord = replaceVowels(processedWord, mode);
    processedWord = replaceLigatures(processedWord, mode);
    processedWord = replaceConsonants(processedWord, mode);
    processedWord = removeExtraSpaces(processedWord);
    return applyWordCasing(word, processedWord);
  });
}

/** Prefer CMU; if missing, estimate phonemes with G2P letter-to-sound rules. */
function getPronunciation(word: string): string[] {
  return lookupPronunciation(word) ?? wordToArpabet(word);
}

/**
 * Words with a fixed Deseret spelling (stored in capitals; casing applied from English).
 * e.g. "the" → DH, "and" → SA+N+D (𐐰𐑌𐐼).
 */
const FIXED_DESERET_WORDS: Record<string, string> = {
  bee: DESERET_LETTERS.B.upper,
  gay: DESERET_LETTERS.G.upper,
  the: DESERET_LETTERS.DH.upper,
  and: DESERET_LETTERS.SA.upper + DESERET_LETTERS.N.upper + DESERET_LETTERS.D.upper,
};

const FIXED_DESERET_MODERN_WORDS: Record<string, string> = {
  // Common Small Words
  a: DESERET_LETTERS.SU.upper,
  an: DESERET_LETTERS.SU.upper,
  and: DESERET_LETTERS.N.upper,
  are: DESERET_LETTERS.R.upper,
  at: DESERET_LETTERS.SA.upper,
  be: DESERET_LETTERS.B.upper,
  bee: DESERET_LETTERS.B.upper,
  do: DESERET_LETTERS.D.upper,
  gay: DESERET_LETTERS.G.upper,
  is: DESERET_LETTERS.Z.upper,
  not: DESERET_LETTERS.SO.upper,
  of: DESERET_LETTERS.V.upper,
  the: DESERET_LETTERS.DH.upper,
  to: DESERET_LETTERS.T.upper,
  will: DESERET_LETTERS.L.upper,
  with: DESERET_MODERN.TH.upper,

  // Pronouns
  i: DESERET_LETTERS.EYE.upper,
  you: DESERET_LETTERS.EW.upper,
  he: DESERET_LETTERS.H.upper,
  she: DESERET_LETTERS.S.upper,
  we: DESERET_LETTERS.W.upper,
  they: DESERET_LETTERS.M.upper,
};

function mapStandaloneLetterWord(word: string, mode: DeseretMode): string | null {
  let capital: string | undefined;
  if (mode === "modern") {
    capital = FIXED_DESERET_MODERN_WORDS[word.toLowerCase()];
  } else {
    capital = FIXED_DESERET_WORDS[word.toLowerCase()];
  }
  if (!capital) {
    return null;
  }
  return applyWordCasing(word, capital);
}

function replaceConsonants(text: string, mode: DeseretMode): string {
  text = removeToneNumbers(text, "B", DESERET_LETTERS.B.upper);
  text = removeToneNumbers(text, "D", DESERET_LETTERS.D.upper);
  text = removeToneNumbers(text, "F", DESERET_LETTERS.F.upper);
  text = removeToneNumbers(text, "G", DESERET_LETTERS.G.upper);
  text = removeToneNumbers(text, "HH", DESERET_LETTERS.H.upper);
  text = removeToneNumbers(text, "JH", DESERET_LETTERS.J.upper);
  text = removeToneNumbers(text, "K", DESERET_LETTERS.K.upper);
  text = removeToneNumbers(text, "L", DESERET_LETTERS.L.upper);
  text = removeToneNumbers(text, "M", DESERET_LETTERS.M.upper);
  text = removeToneNumbers(text, "N", DESERET_LETTERS.N.upper);
  text = removeToneNumbers(text, "R", DESERET_LETTERS.R.upper);
  text = removeToneNumbers(text, "T", DESERET_LETTERS.T.upper);
  text = removeToneNumbers(text, "V", DESERET_LETTERS.V.upper);
  text = removeToneNumbers(text, "W", DESERET_LETTERS.W.upper);
  text = removeToneNumbers(text, "Z", DESERET_LETTERS.Z.upper);
  if (mode === "modern") {
    text = removeToneNumbers(text, "P", DESERET_MODERN.P.upper);
    text = removeToneNumbers(text, "S", DESERET_MODERN.S.upper);
    text = removeToneNumbers(text, "Y", DESERET_MODERN.Y.upper);
  } else {
    text = removeToneNumbers(text, "P", DESERET_LETTERS.P.upper);
    text = removeToneNumbers(text, "S", DESERET_LETTERS.S.upper);
    text = removeToneNumbers(text, "Y", DESERET_LETTERS.Y.upper);
  }
  return text;
}

function replaceLigatures(text: string, mode: DeseretMode): string {
  text = removeToneNumbers(text, "CH", DESERET_LETTERS.CH.upper);
  text = removeToneNumbers(text, "DH", DESERET_LETTERS.DH.upper);
  text = removeToneNumbers(text, "NG", DESERET_LETTERS.NG.upper);
  text = removeToneNumbers(text, "ZH", DESERET_LETTERS.ZH.upper);
  if (mode === "modern") {
  text = removeToneNumbers(text, "TH", DESERET_MODERN.TH.upper);
  text = removeToneNumbers(text, "SH", DESERET_MODERN.SH.upper);
  } else {
  text = removeToneNumbers(text, "TH", DESERET_LETTERS.TH.upper);
  text = removeToneNumbers(text, "SH", DESERET_LETTERS.SH.upper);
  }
  return text;
}

function replaceVowels(text: string, mode: DeseretMode): string {
  text = removeToneNumbers(text, "AE", DESERET_LETTERS.SA.upper);
  text = removeToneNumbers(text, "AH", DESERET_LETTERS.SU.upper);
  text = removeToneNumbers(text, "AW", DESERET_LETTERS.OW.upper);
  text = removeToneNumbers(text, "AY", DESERET_LETTERS.EYE.upper);
  text = removeToneNumbers(text, "EH", DESERET_LETTERS.SE.upper);
  text = removeToneNumbers(text, "EY", DESERET_LETTERS.LA.upper);
  text = removeToneNumbers(text, "OW", DESERET_LETTERS.LO.upper);
  text = removeToneNumbers(text, "OY", DESERET_LETTERS.OI.upper);
  text = removeToneNumbers(text, "UW", DESERET_LETTERS.LOO.upper);
  if (mode === "modern") {
  text = removeToneNumbers(text, "AA", DESERET_MODERN.LAH.upper);
  text = removeToneNumbers(text, "AO", DESERET_MODERN.LAW.upper);
  text = removeToneNumbers(text, "IH", DESERET_MODERN.SI.upper);
  text = removeToneNumbers(text, "IY", DESERET_MODERN.LE.upper);
  text = removeToneNumbers(text, "UH", DESERET_MODERN.SOO.upper);
} else {
  text = removeToneNumbers(text, "AA", DESERET_LETTERS.LAH.upper);
  text = removeToneNumbers(text, "AO", DESERET_LETTERS.LAW.upper);
  text = removeToneNumbers(text, "IH", DESERET_LETTERS.SI.upper);
  text = removeToneNumbers(text, "IY", DESERET_LETTERS.LE.upper);
  text = removeToneNumbers(text, "UH", DESERET_LETTERS.SOO.upper);
}
  return text;
}

function replaceER(text: string): string {
  text = removeToneNumbers(text, "ER", DESERET_LETTERS.SU.upper + DESERET_LETTERS.R.upper);
  return text;
}

function replaceYou(text: string): string {
  text = removeToneNumbers(text, "Y UW", DESERET_LETTERS.EW.upper);
  return text;
}

function removeToneNumbers(
  text: string,
  sound: string,
  replacement: string,
): string {
  // Global replace — plain replace() only swaps the first match, so words
  // like "test" (T EH1 S T) would leave the second T as Latin.
  const escaped = sound.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`${escaped}[012]?`, "g"), replacement);
}

function removeExtraSpaces(text: string): string {
  text = text.replace(/\s+/g, "");
  return text;
}

const DESERET_CAPITAL_START = 0x10400;
const DESERET_CAPITAL_END = 0x10427;
const DESERET_CASE_OFFSET = 0x28;

/** Map Deseret capitals down to small letters based on English word casing. */
function applyWordCasing(englishWord: string, deseretWord: string): string {
  const letters = [...englishWord].filter((char) => /\p{L}/u.test(char));
  if (letters.length === 0) {
    return deseretWord;
  }

  const chars = [...deseretWord];
  const allUpper = letters.every(isUppercaseLetter);

  if (allUpper) {
    return deseretWord;
  }

  if (isUppercaseLetter(letters[0])) {
    // Title case: keep the first Deseret letter capital, lower the rest.
    let sawFirstDeseret = false;
    return chars
      .map((char) => {
        if (!isDeseretCapitalLetter(char)) {
          return char;
        }
        if (!sawFirstDeseret) {
          sawFirstDeseret = true;
          return char;
        }
        return toDeseretLower(char);
      })
      .join("");
  }

  // All lowercase English → all lowercase Deseret.
  return chars.map(toDeseretLower).join("");
}

function isUppercaseLetter(char: string): boolean {
  return char !== char.toLowerCase() && char === char.toUpperCase();
}

function isDeseretCapitalLetter(char: string): boolean {
  const codePoint = char.codePointAt(0);
  return (
    codePoint !== undefined &&
    codePoint >= DESERET_CAPITAL_START &&
    codePoint <= DESERET_CAPITAL_END
  );
}

function toDeseretLower(char: string): string {
  if (!isDeseretCapitalLetter(char)) {
    return char;
  }
  return String.fromCodePoint(char.codePointAt(0)! + DESERET_CASE_OFFSET);
}
