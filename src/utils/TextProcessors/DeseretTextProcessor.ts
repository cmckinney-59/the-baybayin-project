import {
  isDictionaryLoaded,
  loadDictionary,
  lookupPronunciation,
} from "@ingglish/dictionary";
import { wordToArpabet } from "@ingglish/g2p";
import {
  DESERET_CONSONANTS_UPPER as _consonantsUpper,
  DESERET_VOWELS_UPPER as _vowelsUpper,
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
export default async function processDeseretText(
  text: string,
): Promise<string> {
  await ensureDictionaryLoaded();

  const withPhonetics = replacePhoneticSlashTokens(text);

  return withPhonetics.replace(/[A-Za-z']+/g, (word) => {
    const standaloneLetter = mapStandaloneLetterWord(word);
    if (standaloneLetter) {
      return standaloneLetter;
    }

    const phonemes = getPronunciation(word);
    if (!phonemes.length) {
      return word;
    }

    let processedWord = replaceER(phonemes.join(" "));
    processedWord = replaceYou(processedWord);
    processedWord = replaceVowels(processedWord);
    processedWord = replaceLigatures(processedWord);
    processedWord = replaceConsonants(processedWord);
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
  the: _consonantsUpper.DH,
  bee: _consonantsUpper.B,
  gay: _consonantsUpper.G,
  and: _vowelsUpper.SA + _consonantsUpper.N + _consonantsUpper.D,
};

function mapStandaloneLetterWord(word: string): string | null {
  const capital = FIXED_DESERET_WORDS[word.toLowerCase()];
  if (!capital) {
    return null;
  }
  return applyWordCasing(word, capital);
}

function replaceConsonants(text: string): string {
  text = removeToneNumbers(text, "B", _consonantsUpper.B);
  text = removeToneNumbers(text, "D", _consonantsUpper.D);
  text = removeToneNumbers(text, "F", _consonantsUpper.F);
  text = removeToneNumbers(text, "G", _consonantsUpper.G);
  text = removeToneNumbers(text, "HH", _consonantsUpper.H);
  text = removeToneNumbers(text, "JH", _consonantsUpper.J);
  text = removeToneNumbers(text, "K", _consonantsUpper.K);
  text = removeToneNumbers(text, "L", _consonantsUpper.L);
  text = removeToneNumbers(text, "M", _consonantsUpper.M);
  text = removeToneNumbers(text, "N", _consonantsUpper.N);
  text = removeToneNumbers(text, "P", _consonantsUpper.P);
  text = removeToneNumbers(text, "R", _consonantsUpper.R);
  text = removeToneNumbers(text, "S", _consonantsUpper.S);
  text = removeToneNumbers(text, "T", _consonantsUpper.T);
  text = removeToneNumbers(text, "V", _consonantsUpper.V);
  text = removeToneNumbers(text, "W", _consonantsUpper.W);
  text = removeToneNumbers(text, "Y", _consonantsUpper.Y);
  text = removeToneNumbers(text, "Z", _consonantsUpper.Z);
  return text;
}

function replaceLigatures(text: string): string {
  text = removeToneNumbers(text, "CH", _consonantsUpper.CH);
  text = removeToneNumbers(text, "DH", _consonantsUpper.DH);
  text = removeToneNumbers(text, "NG", _consonantsUpper.NG);
  text = removeToneNumbers(text, "SH", _consonantsUpper.SH);
  text = removeToneNumbers(text, "TH", _consonantsUpper.TH);
  text = removeToneNumbers(text, "ZH", _consonantsUpper.ZH);
  return text;
}

function replaceVowels(text: string): string {
  text = removeToneNumbers(text, "AA", _vowelsUpper.LAH);
  text = removeToneNumbers(text, "AE", _vowelsUpper.SA);
  text = removeToneNumbers(text, "AH", _vowelsUpper.SU);
  text = removeToneNumbers(text, "AO", _vowelsUpper.LAW);
  text = removeToneNumbers(text, "AW", _vowelsUpper.OW);
  text = removeToneNumbers(text, "AY", _vowelsUpper.EYE);
  text = removeToneNumbers(text, "EH", _vowelsUpper.SE);
  text = removeToneNumbers(text, "EY", _vowelsUpper.LA);
  text = removeToneNumbers(text, "IH", _vowelsUpper.SI);
  text = removeToneNumbers(text, "IY", _vowelsUpper.LE);
  text = removeToneNumbers(text, "OW", _vowelsUpper.LO);
  text = removeToneNumbers(text, "OY", _vowelsUpper.OI);
  text = removeToneNumbers(text, "UH", _vowelsUpper.SOO);
  text = removeToneNumbers(text, "UW", _vowelsUpper.LOO);
  return text;
}

function replaceER(text: string): string {
  // OG
  // text = removeToneNumbers(text, "ER", _vowelsUpper.SO + _consonantsUpper.R);

  // New
  text = removeToneNumbers(text, "ER", _vowelsUpper.SU + _consonantsUpper.R);
  return text;
}

function replaceYou(text: string): string {
  text = removeToneNumbers(text, "Y UW", _vowelsUpper.EW);
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
