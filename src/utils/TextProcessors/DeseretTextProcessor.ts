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
    return phonemes ? phonemes.join(" ") : word;
  });
}

function replaceConsonants(text: string): string {
  text = text.replace(/B/g, _consonantsUpper.B);
  text = text.replace(/D/g, _consonantsUpper.D);
  text = text.replace(/F/g, _consonantsUpper.F);
  text = text.replace(/G/g, _consonantsUpper.G);
  text = text.replace(/HH/g, _consonantsUpper.H);
  text = text.replace(/JH/g, _consonantsUpper.J);
  text = text.replace(/K/g, _consonantsUpper.K);
  text = text.replace(/L/g, _consonantsUpper.L);
  text = text.replace(/M/g, _consonantsUpper.M);
  text = text.replace(/N/g, _consonantsUpper.N);
  text = text.replace(/P/g, _consonantsUpper.P);
  text = text.replace(/R/g, _consonantsUpper.R);
  text = text.replace(/S/g, _consonantsUpper.S);
  text = text.replace(/T/g, _consonantsUpper.T);
  text = text.replace(/V/g, _consonantsUpper.V);
  text = text.replace(/W/g, _consonantsUpper.W);
  text = text.replace(/Y/g, _consonantsUpper.Y);
  text = text.replace(/Z/g, _consonantsUpper.Z);
  return text;
}

function replaceLigatures(text: string): string {
  text = text.replace(/CH/g, _consonantsUpper.CH);
  text = text.replace(/DH/g, _consonantsUpper.DH);
  text = text.replace(/NG/g, _consonantsUpper.NG);
  text = text.replace(/SH/g, _consonantsUpper.SH);
  text = text.replace(/TH/g, _consonantsUpper.TH);
  text = text.replace(/ZH/g, _consonantsUpper.ZH);
  return text;
}

function replaceVowels(text: string): string {
  text = text.replace(/AA/g, _vowelsUpper.LAH);
  text = text.replace(/AE/g, _vowelsUpper.SA);
  text = text.replace(/AH/g, _vowelsUpper.SU);
  text = text.replace(/AO/g, _vowelsUpper.LAW);
  text = text.replace(/AW/g, _vowelsUpper.OW);
  text = text.replace(/AY/g, _vowelsUpper.EYE);
  text = text.replace(/EH/g, _vowelsUpper.SE);
  text = text.replace(/EY/g, _vowelsUpper.LA);
  text = text.replace(/IH/g, _vowelsUpper.SI);
  text = text.replace(/IY/g, _vowelsUpper.LE);
  text = text.replace(/OW/g, _vowelsUpper.LO);
  text = text.replace(/OY/g, _vowelsUpper.OI);
  text = text.replace(/UH/g, _vowelsUpper.SOO);
  text = text.replace(/UW/g, _vowelsUpper.LOO);
  return text;
}

function replaceER(text: string): string {
  // OG
  text = text.replace(/ER/g, _vowelsUpper.SO + _consonantsUpper.R);

  // New
  text = text.replace(/ER/g, _vowelsUpper.SU + _consonantsUpper.R);
  return text;
}
