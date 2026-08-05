import {
  BAYBAYIN_CONSONANTS,
  BAYBAYIN_VOWELS,
  BAYBAYIN_KUDLITS,
  BAYBAYIN_VOWEL_KILLERS,
} from "./BAYBAYIN_DATA";

/** Primary phonetic token inserted by the on-screen keyboard for each key id. */
export const BAYBAYIN_KEYBOARD_PHONETIC_TOKEN: Record<string, string> = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
  b: "b",
  d: "d",
  g: "g",
  h: "h",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  ng: "ng",
  p: "p",
  r: "r",
  s: "s",
  t: "t",
  w: "w",
  y: "y",
  kudlit_e: "e",
  kudlit_i: "i",
  kudlit_o: "o",
  kudlit_u: "u",
  virama: "x",
  pamudpod: "x",
};

/** Glyph shown on each keyboard key. */
export const BAYBAYIN_KEYBOARD_GLYPH: Record<string, string> = {
  a: BAYBAYIN_VOWELS.A,
  e: BAYBAYIN_VOWELS.E,
  i: BAYBAYIN_VOWELS.I,
  o: BAYBAYIN_VOWELS.O,
  u: BAYBAYIN_VOWELS.U,
  b: BAYBAYIN_CONSONANTS.B,
  d: BAYBAYIN_CONSONANTS.D,
  g: BAYBAYIN_CONSONANTS.G,
  h: BAYBAYIN_CONSONANTS.H,
  k: BAYBAYIN_CONSONANTS.K,
  l: BAYBAYIN_CONSONANTS.L,
  m: BAYBAYIN_CONSONANTS.M,
  n: BAYBAYIN_CONSONANTS.N,
  ng: BAYBAYIN_CONSONANTS.NG,
  p: BAYBAYIN_CONSONANTS.P,
  r: BAYBAYIN_CONSONANTS.R,
  s: BAYBAYIN_CONSONANTS.S,
  t: BAYBAYIN_CONSONANTS.T,
  w: BAYBAYIN_CONSONANTS.W,
  y: BAYBAYIN_CONSONANTS.Y,
  kudlit_e: BAYBAYIN_KUDLITS.E ?? "",
  kudlit_i: BAYBAYIN_KUDLITS.I ?? "",
  kudlit_o: BAYBAYIN_KUDLITS.O ?? "",
  kudlit_u: BAYBAYIN_KUDLITS.U ?? "",
  virama: BAYBAYIN_VOWEL_KILLERS.VIRAMA,
  pamudpod: BAYBAYIN_VOWEL_KILLERS.PAMUDPOD,
};

/** Wrap a phonetic token for Latin input, e.g. "a" → "/a/". */
export function toPhoneticInput(token: string, capitalize = false): string {
  const body = capitalize ? token.toUpperCase() : token.toLowerCase();
  return `/${body}/`;
}

/** Glyph → primary keyboard phonetic token. */
const BAYBAYIN_GLYPH_TO_TOKEN: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [id, glyph] of Object.entries(BAYBAYIN_KEYBOARD_GLYPH)) {
    if (!glyph) continue;
    const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id];
    if (!token) continue;
    if (!map[glyph]) map[glyph] = token;
  }
  return map;
})();

/**
 * Map Baybayin output text back to slash-phonetic Latin input
 * (e.g. ᜊᜓᜃ → "/b//u//k/").
 */
export function phoneticFromBaybayinText(text: string): string {
  return [...text]
    .map((char) => {
      const token = BAYBAYIN_GLYPH_TO_TOKEN[char];
      if (!token) return char;
      return toPhoneticInput(token, false);
    })
    .join("");
}
