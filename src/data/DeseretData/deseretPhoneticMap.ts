import { DESERET_LETTERS, DESERET_MODERN } from "./DESERET_DATA";

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
  ee: DESERET_LETTERS.LE.upper,
  ey: DESERET_LETTERS.LA.upper,
  ah: DESERET_LETTERS.LAH.upper,
  aw: DESERET_LETTERS.LAW.upper,
  oh: DESERET_LETTERS.LO.upper,
  oo: DESERET_LETTERS.LOO.upper,
  eye: DESERET_LETTERS.EYE.upper,
  ow: DESERET_LETTERS.OW.upper,
  ou: DESERET_LETTERS.OW.upper,
  oi: DESERET_LETTERS.OI.upper,
  yu: DESERET_LETTERS.EW.upper,
  you: DESERET_LETTERS.EW.upper,
  ew: DESERET_LETTERS.EW.upper,

  // Short vowels
  ih: DESERET_LETTERS.SI.upper,
  eh: DESERET_LETTERS.SE.upper,
  a: DESERET_LETTERS.SA.upper,
  ae: DESERET_LETTERS.SA.upper,
  o: DESERET_LETTERS.SO.upper,
  uh: DESERET_LETTERS.SU.upper,
  uu: DESERET_LETTERS.SOO.upper,

  // Consonants
  w: DESERET_LETTERS.W.upper,
  woo: DESERET_LETTERS.W.upper,
  y: DESERET_LETTERS.Y.upper,
  yee: DESERET_LETTERS.Y.upper,
  h: DESERET_LETTERS.H.upper,
  p: DESERET_LETTERS.P.upper,
  b: DESERET_LETTERS.B.upper,
  bee: DESERET_LETTERS.B.upper,
  t: DESERET_LETTERS.T.upper,
  d: DESERET_LETTERS.D.upper,
  ch: DESERET_LETTERS.CH.upper,
  j: DESERET_LETTERS.J.upper,
  k: DESERET_LETTERS.K.upper,
  g: DESERET_LETTERS.G.upper,
  gay: DESERET_LETTERS.G.upper,
  f: DESERET_LETTERS.F.upper,
  v: DESERET_LETTERS.V.upper,
  th: DESERET_LETTERS.TH.upper,
  eth: DESERET_LETTERS.TH.upper,
  dh: DESERET_LETTERS.DH.upper,
  the: DESERET_LETTERS.DH.upper,
  s: DESERET_LETTERS.S.upper,
  z: DESERET_LETTERS.Z.upper,
  sh: DESERET_LETTERS.SH.upper,
  zh: DESERET_LETTERS.ZH.upper,
  r: DESERET_LETTERS.R.upper,
  l: DESERET_LETTERS.L.upper,
  m: DESERET_LETTERS.M.upper,
  n: DESERET_LETTERS.N.upper,
  ng: DESERET_LETTERS.NG.upper,
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
export function deseretFromPhoneticToken(
  token: string,
  modern = false,
): string | null {
  const key = token.toLowerCase();
  const modernUpper =
    modern && (key === "ih" || key === "th" || key === "eth")
      ? key === "ih"
        ? DESERET_MODERN.SI.upper
        : DESERET_MODERN.TH.upper
      : undefined;
  const upper = modernUpper ?? DESERET_PHONETIC_TO_UPPER[key];
  if (!upper) {
    return null;
  }
  const hasLetter = /[A-Za-z]/.test(token);
  const allUpper = hasLetter && token === token.toUpperCase();
  const titleCase = /^[A-Z]/.test(token);
  if (allUpper || titleCase) {
    return upper;
  }
  if (modernUpper) {
    return key === "ih" ? DESERET_MODERN.SI.lower : DESERET_MODERN.TH.lower;
  }
  return toDeseretLower(upper);
}

/**
 * Replace `/oo/`, `/th/`, etc. with Deseret letters. Unknown `/tokens/` are left as-is.
 */
export function replacePhoneticSlashTokens(
  text: string,
  modern = false,
): string {
  return text.replace(/\/([^/\n]+)\//gu, (match, token: string) => {
    return deseretFromPhoneticToken(token, modern) ?? match;
  });
}

/** Glyph → primary keyboard phonetic token (lowercase). */
const DESERET_GLYPH_TO_TOKEN: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [id, token] of Object.entries(DESERET_KEYBOARD_PHONETIC_TOKEN)) {
    const upper = DESERET_PHONETIC_TO_UPPER[token];
    if (!upper) continue;
    // Prefer the first (primary) token if multiple phonemes map to one letter.
    if (!map[upper]) map[upper] = token;
    const lower = toDeseretLower(upper);
    if (!map[lower]) map[lower] = token;
    void id;
  }
  map[DESERET_MODERN.SI.upper] = "ih";
  map[DESERET_MODERN.SI.lower] = "ih";
  map[DESERET_MODERN.TH.upper] = "th";
  map[DESERET_MODERN.TH.lower] = "th";
  return map;
})();

function isDeseretCapitalLetter(char: string): boolean {
  const codePoint = char.codePointAt(0);
  return (
    codePoint !== undefined &&
    codePoint >= DESERET_CAPITAL_START &&
    codePoint <= DESERET_CAPITAL_END
  );
}

/**
 * Map Deseret output text back to slash-phonetic Latin input
 * (e.g. 𐐺𐐭𐐿 → "/b//oo//k/").
 */
export function phoneticFromDeseretText(text: string): string {
  return [...text]
    .map((char) => {
      const token = DESERET_GLYPH_TO_TOKEN[char];
      if (!token) return char;
      const capital =
        isDeseretCapitalLetter(char) ||
        char === DESERET_MODERN.SI.upper ||
        char === DESERET_MODERN.TH.upper;
      return toPhoneticInput(token, capital);
    })
    .join("");
}
