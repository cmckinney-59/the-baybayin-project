import { lookupSpanishPronunciation } from "./spanishDictionary";

/**
 * MFA Spanish phones → Tagalog-friendly Latin spelling.
 * Tuned for Mexican / LatAm inventory (seseo, yeísmo approximations).
 */
const MFA_TO_TAGALOG: Record<string, string> = {
  // Vowels
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
  // Glides
  j: "y",
  w: "w",
  // Stops / fricatives
  p: "p",
  b: "b",
  β: "b",
  t: "t",
  "t̪": "t",
  d: "d",
  "d̪": "d",
  ð: "d",
  k: "k",
  c: "k", // MFA palatal stop; "que" → ke
  ç: "h", // soft /x/-like in MFA (méxico, jesús)
  x: "h", // jota
  ɡ: "g",
  g: "g",
  ɣ: "g",
  ɟ: "g",
  f: "f",
  s: "s",
  θ: "s", // Castilian → Mexican seseo
  z: "s",
  ʃ: "siy",
  "tʃ": "ts",
  // Nasals / liquids
  m: "m",
  n: "n",
  ŋ: "ng",
  ɲ: "ny",
  l: "l",
  ʎ: "y", // yeísmo
  ʝ: "y",
  "ɟʝ": "y",
  r: "r",
  ɾ: "r",
};

function mfaPhonesToTagalog(phones: string[]): string {
  let result = "";
  for (const phone of phones) {
    result += MFA_TO_TAGALOG[phone] ?? phone.replace(/[^\p{L}]/gu, "").toLowerCase();
  }
  return result;
}

/**
 * If the word is in the Spanish (es_MX / MFA LatAm) dictionary, return its
 * Tagalized spelling. Otherwise null.
 */
export function tagalizeIfSpanish(word: string): string | null {
  const phones = lookupSpanishPronunciation(word);
  if (!phones?.length) {
    return null;
  }
  return mfaPhonesToTagalog(phones);
}
