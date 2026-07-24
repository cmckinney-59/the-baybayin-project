import {
  isDictionaryLoaded,
  loadDictionary,
  lookupPronunciation,
} from "@ingglish/dictionary";
import {
  DESERET_CONSONANTS_UPPER as _consonantsUpper,
  DESERET_CONSONANTS_LOWER as _consonantsLower,
  DESERET_VOWELS_UPPER as _vowelsUpper,
  DESERET_VOWELS_LOWER as _vowelsLower,
} from "../../data/DeseretData/DESERET_DATA";

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
    console.log("phonemes", phonemes);
    let processedWord = replaceER(phonemes?.join(" ") ?? "");
    processedWord = replaceVowels(processedWord);
    processedWord = replaceLigatures(processedWord);
    processedWord = replaceConsonants(processedWord);
    processedWord = removeToneNumbers(processedWord, "0", "");
    processedWord = removeExtraSpaces(processedWord);
    return processedWord ?? word;
  });
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
  text = removeToneNumbers(text, "ER", _vowelsUpper.SO + _consonantsUpper.R);

  // New
  text = removeToneNumbers(text, "ER", _vowelsUpper.SU + _consonantsUpper.R);
  return text;
}

function removeToneNumbers(
  text: string,
  sound: string,
  replacement: string,
): string {
  text = text.replace(sound + "0", replacement);
  text = text.replace(sound + "1", replacement);
  text = text.replace(sound + "2", replacement);
  text = text.replace(sound, replacement);
  return text;
}

function removeExtraSpaces(text: string): string {
  text = text.replace(/\s+/g, "");
  return text;
}
