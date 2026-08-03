import {
  DESERET_CONSONANTS_UPPER,
  DESERET_VOWELS_UPPER,
} from "./DESERET_DATA";

/**
 * Slash-delimited phonetic tokens → Deseret capitals.
 * Type `/oo/` in the English input to force Long OO (𐐭), similar to
 * explicit phoneme overrides on https://www.2deseret.com/
 *
 * Tokens are unique (e.g. long oo = "oo", short oo = "uu") so each letter
 * has a stable keyboard insert value.
 */
export const DESERET_PHONETIC_TO_UPPER: Record<string, string> = {
  // Long vowels / diphthongs
  ee: DESERET_VOWELS_UPPER.LE,
  ey: DESERET_VOWELS_UPPER.LA,
  ah: DESERET_VOWELS_UPPER.LAH,
  aw: DESERET_VOWELS_UPPER.LAW,
  oh: DESERET_VOWELS_UPPER.LO,
  oo: DESERET_VOWELS_UPPER.LOO,
  eye: DESERET_VOWELS_UPPER.EYE,
  ow: DESERET_VOWELS_UPPER.OW,
  ou: DESERET_VOWELS_UPPER.OW,
  oi: DESERET_VOWELS_UPPER.OI,
  yu: DESERET_VOWELS_UPPER.EW,
  you: DESERET_VOWELS_UPPER.EW,
  ew: DESERET_VOWELS_UPPER.EW,

  // Short vowels
  ih: DESERET_VOWELS_UPPER.SI,
  eh: DESERET_VOWELS_UPPER.SE,
  a: DESERET_VOWELS_UPPER.SA,
  ae: DESERET_VOWELS_UPPER.SA,
  o: DESERET_VOWELS_UPPER.SO,
  uh: DESERET_VOWELS_UPPER.SU,
  uu: DESERET_VOWELS_UPPER.SOO,

  // Consonants
  w: DESERET_CONSONANTS_UPPER.W,
  woo: DESERET_CONSONANTS_UPPER.W,
  y: DESERET_CONSONANTS_UPPER.Y,
  yee: DESERET_CONSONANTS_UPPER.Y,
  h: DESERET_CONSONANTS_UPPER.H,
  p: DESERET_CONSONANTS_UPPER.P,
  b: DESERET_CONSONANTS_UPPER.B,
  bee: DESERET_CONSONANTS_UPPER.B,
  t: DESERET_CONSONANTS_UPPER.T,
  d: DESERET_CONSONANTS_UPPER.D,
  ch: DESERET_CONSONANTS_UPPER.CH,
  j: DESERET_CONSONANTS_UPPER.J,
  k: DESERET_CONSONANTS_UPPER.K,
  g: DESERET_CONSONANTS_UPPER.G,
  gay: DESERET_CONSONANTS_UPPER.G,
  f: DESERET_CONSONANTS_UPPER.F,
  v: DESERET_CONSONANTS_UPPER.V,
  th: DESERET_CONSONANTS_UPPER.TH,
  eth: DESERET_CONSONANTS_UPPER.TH,
  dh: DESERET_CONSONANTS_UPPER.DH,
  the: DESERET_CONSONANTS_UPPER.DH,
  s: DESERET_CONSONANTS_UPPER.S,
  z: DESERET_CONSONANTS_UPPER.Z,
  sh: DESERET_CONSONANTS_UPPER.SH,
  zh: DESERET_CONSONANTS_UPPER.ZH,
  r: DESERET_CONSONANTS_UPPER.R,
  l: DESERET_CONSONANTS_UPPER.L,
  m: DESERET_CONSONANTS_UPPER.M,
  n: DESERET_CONSONANTS_UPPER.N,
  ng: DESERET_CONSONANTS_UPPER.NG,
};

/** Primary token shown/inserted by the on-screen keyboard for each letter id. */
export const DESERET_KEYBOARD_PHONETIC_TOKEN: Record<string, string> = {
  le: "ee",
  la: "ey",
  lah: "ah",
  law: "aw",
  lo: "oh",
  loo: "oo",
  si: "ih",
  se: "eh",
  sa: "a",
  so: "o",
  su: "uh",
  soo: "uu",
  eye: "eye",
  ow: "ow",
  oi: "oi",
  ew: "yu",
  w: "w",
  y: "y",
  h: "h",
  p: "p",
  b: "b",
  th: "th",
  dh: "dh",
  s: "s",
  z: "z",
  sh: "sh",
  zh: "zh",
  t: "t",
  d: "d",
  ch: "ch",
  j: "j",
  k: "k",
  g: "g",
  f: "f",
  v: "v",
  r: "r",
  l: "l",
  m: "m",
  n: "n",
  ng: "ng",
};

const DESERET_CAPITAL_START = 0x10400;
const DESERET_CAPITAL_END = 0x10427;
const DESERET_CASE_OFFSET = 0x28;

function toDeseretLower(char: string): string {
  const codePoint = char.codePointAt(0);
  if (
    codePoint === undefined ||
    codePoint < DESERET_CAPITAL_START ||
    codePoint > DESERET_CAPITAL_END
  ) {
    return char;
  }
  return String.fromCodePoint(codePoint + DESERET_CASE_OFFSET);
}

/** Wrap a phonetic token for Latin input, e.g. "oo" → "/oo/". */
export function toPhoneticInput(token: string, capitalize = false): string {
  const body = capitalize
    ? token.toUpperCase()
    : token.toLowerCase();
  return `/${body}/`;
}

/**
 * Map a slash token body (without slashes) to a Deseret letter.
 * Uppercase / title-case tokens yield capital Deseret.
 */
export function deseretFromPhoneticToken(token: string): string | null {
  const upper = DESERET_PHONETIC_TO_UPPER[token.toLowerCase()];
  if (!upper) {
    return null;
  }
  const hasLetter = /[A-Za-z]/.test(token);
  const allUpper = hasLetter && token === token.toUpperCase();
  const titleCase = /^[A-Z]/.test(token);
  if (allUpper || titleCase) {
    return upper;
  }
  return toDeseretLower(upper);
}

/**
 * Replace `/oo/`, `/th/`, etc. with Deseret letters. Unknown `/tokens/` are left as-is.
 */
export function replacePhoneticSlashTokens(text: string): string {
  return text.replace(/\/([^/\n]+)\//gu, (match, token: string) => {
    return deseretFromPhoneticToken(token) ?? match;
  });
}
