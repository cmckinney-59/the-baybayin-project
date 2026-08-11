import {
  BAYBAYIN_CONSONANTS,
  BAYBAYIN_VOWELS,
  BAYBAYIN_KUDLITS,
  BAYBAYIN_KUDLITS_HOLLOW,
  BAYBAYIN_VOWEL_KILLERS,
} from "./BAYBAYIN_DATA";
import type { BaybayinFontId } from "./BAYBAYIN_FONTS_DATA";

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

/** Glyph shown on each keyboard key (Unicode Baybayin). */
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

/** Consonant keys on the keyboard represent inherent-a syllables (ba, ka, …). */
const INHERENT_A_CONSONANT_IDS = new Set([
  "b",
  "k",
  "d",
  "g",
  "h",
  "l",
  "m",
  "n",
  "ng",
  "p",
  "r",
  "s",
  "t",
  "w",
  "y",
]);

/** Latin input inserted when a keyboard key is pressed. */
export function baybayinKeyboardInputValue(id: string, token: string): string {
  if (id === "virama" || id === "pamudpod") {
    return "+";
  }
  if (INHERENT_A_CONSONANT_IDS.has(id)) {
    return `${token}a`;
  }
  return token;
}

const KUDLIT_MARKS = /^[eioux+]$/i;

/**
 * When a kudlit or virama is typed after an inherent-a syllable (ba, ka, nga, …),
 * replace the trailing `a` instead of appending (ba + e → be, ba + + → b+).
 * Returns null when the insert should be appended as-is.
 */
export function mergeBaybayinKudlit(
  before: string,
  mark: string,
): string | null {
  if (!KUDLIT_MARKS.test(mark)) {
    return null;
  }
  const replacement = mark.toLowerCase();
  if (/nga$/i.test(before)) {
    return before.slice(0, -1) + replacement;
  }
  if (/[bcdfghjklmnpqrstwxy]a$/i.test(before)) {
    return before.slice(0, -1) + replacement;
  }
  return null;
}

/**
 * Latin-mapped font output for each phonetic token (Tagalog Doctrina / Bagwis / Stylized).
 * Consonants are inherent-a forms (`b` = ba); kudlits are trailing vowel letters.
 */
const BAYBAYIN_PHONETIC_TO_LATIN: Record<string, string> = {
  a: "A",
  e: "e",
  i: "I",
  o: "o",
  u: "U",
  b: "b",
  d: "d",
  g: "g",
  h: "h",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  ng: "N",
  p: "p",
  r: "r",
  s: "s",
  t: "t",
  w: "w",
  y: "y",
  x: "+",
};

export type BaybayinPhoneticOptions = {
  fontId: BaybayinFontId;
  useUnicode?: boolean;
  useHollowKudlits?: boolean;
  useXVowelKiller?: boolean;
};

function usesUnicodeOutput(options: BaybayinPhoneticOptions): boolean {
  return options.fontId === "noto-sans" || !!options.useUnicode;
}

/**
 * Map a slash token body (without slashes) to Baybayin output for the active font.
 * Matches the glyph shown on the on-screen keyboard (inherent-a consonants, not virama forms).
 */
export function baybayinFromPhoneticToken(
  token: string,
  options: BaybayinPhoneticOptions,
): string | null {
  const key = token.toLowerCase();

  if (usesUnicodeOutput(options)) {
    if (key === "e" || key === "kudlit_e") {
      return options.useHollowKudlits
        ? (BAYBAYIN_KUDLITS_HOLLOW.E ?? BAYBAYIN_KUDLITS.E ?? "")
        : (BAYBAYIN_KUDLITS.E ?? "");
    }
    if (key === "o" || key === "kudlit_o") {
      return options.useHollowKudlits
        ? (BAYBAYIN_KUDLITS_HOLLOW.O ?? BAYBAYIN_KUDLITS.O ?? "")
        : (BAYBAYIN_KUDLITS.O ?? "");
    }
    if (key === "x" || key === "virama") {
      return BAYBAYIN_VOWEL_KILLERS.VIRAMA;
    }
    if (key === "pamudpod") {
      return BAYBAYIN_VOWEL_KILLERS.PAMUDPOD;
    }
    const glyph = BAYBAYIN_KEYBOARD_GLYPH[key];
    return glyph || null;
  }

  if (key === "x" || key === "virama" || key === "pamudpod") {
    return options.useXVowelKiller ? "x" : "+";
  }
  return BAYBAYIN_PHONETIC_TO_LATIN[key] ?? null;
}

/**
 * Replace `/a/`, `/b/`, `/ng/`, etc. with Baybayin output for the active font.
 * Unknown `/tokens/` are left as-is.
 */
export function replacePhoneticSlashTokens(
  text: string,
  options: BaybayinPhoneticOptions,
): string {
  return text.replace(/\/([^/\n]+)\//gu, (match, token: string) => {
    return baybayinFromPhoneticToken(token, options) ?? match;
  });
}

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
 * Map Baybayin output text back to plain Latin phonetic input
 * (e.g. ᜊᜓᜃ → "buk").
 */
export function phoneticFromBaybayinText(text: string): string {
  return [...text]
    .map((char) => {
      const token = BAYBAYIN_GLYPH_TO_TOKEN[char];
      return token ?? char;
    })
    .join("");
}
