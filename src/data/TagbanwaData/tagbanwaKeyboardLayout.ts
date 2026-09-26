import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  BAYBAYIN_KEYBOARD_PHONETIC_TOKEN,
  baybayinKeyboardInputValue,
} from "../BaybayinData/baybayinPhoneticMap";
import {
  TAGBANWA_CONSONANTS,
  TAGBANWA_KUDLITS,
  TAGBANWA_VOWELS,
  TAGBANWA_VOWEL_KILLER,
} from "./TAGBANWA_DATA";

/** Glyph shown on each Tagbanwa keyboard key. */
export const TAGBANWA_KEYBOARD_GLYPH: Record<string, string> = {
  a: TAGBANWA_VOWELS.A,
  i: TAGBANWA_VOWELS.I,
  u: TAGBANWA_VOWELS.U,
  b: TAGBANWA_CONSONANTS.B,
  d: TAGBANWA_CONSONANTS.D,
  g: TAGBANWA_CONSONANTS.G,
  h: TAGBANWA_CONSONANTS.H,
  k: TAGBANWA_CONSONANTS.K,
  l: TAGBANWA_CONSONANTS.L,
  m: TAGBANWA_CONSONANTS.M,
  n: TAGBANWA_CONSONANTS.N,
  ng: TAGBANWA_CONSONANTS.NG,
  p: TAGBANWA_CONSONANTS.P,
  r: TAGBANWA_CONSONANTS.R,
  s: TAGBANWA_CONSONANTS.S,
  t: TAGBANWA_CONSONANTS.T,
  w: TAGBANWA_CONSONANTS.W,
  y: TAGBANWA_CONSONANTS.Y,
  kudlit_e: TAGBANWA_KUDLITS.I,
  kudlit_i: TAGBANWA_KUDLITS.I,
  kudlit_o: TAGBANWA_KUDLITS.U,
  kudlit_u: TAGBANWA_KUDLITS.U,
  virama: TAGBANWA_VOWEL_KILLER,
  pamudpod: TAGBANWA_VOWEL_KILLER,
};

function letterKey(id: string): KeyboardLayout[number][number] {
  const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  return {
    id,
    label: TAGBANWA_KEYBOARD_GLYPH[id] ?? id,
    value: baybayinKeyboardInputValue(id, token),
  };
}

/**
 * Noto Sans Tagbanwa 2.001 has no outlines for the Unicode 14 additions
 * la (U+176D), ra (U+1771), and virama (U+1774). Keys for those show as
 * rectangles, so they are left off the keyboard.
 */
const TAGBANWA_FONT_CODE_POINTS = new Set<number>([
  0x1760, 0x1761, 0x1762, 0x1763, 0x1764, 0x1765, 0x1766, 0x1767, 0x1768,
  0x1769, 0x176a, 0x176b, 0x176c, 0x176e, 0x176f, 0x1770, 0x1772, 0x1773,
]);

function fontCanDraw(id: string): boolean {
  const glyph = TAGBANWA_KEYBOARD_GLYPH[id];
  const codePoint = glyph?.codePointAt(0);
  return codePoint !== undefined && TAGBANWA_FONT_CODE_POINTS.has(codePoint);
}

function letterRow(ids: readonly string[]): KeyboardLayout[number] {
  return ids.filter(fontCanDraw).map(letterKey);
}

/** On-screen Tagbanwa layout (Unicode glyphs; Latin syllabic input). */
export const TAGBANWA_KEYBOARD_LAYOUT: KeyboardLayout = [
  letterRow(["b", "k", "d", "g", "h", "l", "m"]),
  letterRow(["n", "ng", "p", "r", "s", "t", "w", "y"]),
  letterRow(["a", "i", "u", "kudlit_e", "kudlit_o", "virama"]),
  [
    {
      id: "space",
      label: "Space",
      action: "space",
      width: 5,
    },
    {
      id: "enter",
      label: "Enter",
      action: "enter",
      width: 1.2,
    },
    {
      id: "backspace",
      label: "⌫",
      action: "backspace",
      width: 1.2,
    },
  ],
];

const TAGBANWA_GLYPH_TO_TOKEN: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [id, glyph] of Object.entries(TAGBANWA_KEYBOARD_GLYPH)) {
    if (!glyph) continue;
    const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id];
    if (!token) continue;
    if (!map[glyph]) map[glyph] = token;
  }
  return map;
})();

/** Map Tagbanwa output back to plain Latin input (output-only editing). */
export function phoneticFromTagbanwaText(text: string): string {
  return [...text]
    .map((char) => TAGBANWA_GLYPH_TO_TOKEN[char] ?? char)
    .join("");
}
