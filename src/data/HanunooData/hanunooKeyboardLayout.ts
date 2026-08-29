import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  BAYBAYIN_KEYBOARD_PHONETIC_TOKEN,
  baybayinKeyboardInputValue,
} from "../BaybayinData/baybayinPhoneticMap";
import {
  HANUNOO_CONSONANTS,
  HANUNOO_KUDLITS,
  HANUNOO_VOWELS,
  HANUNOO_VOWEL_KILLER,
} from "./HANUNOO_DATA";

/** Glyph shown on each Hanunoo keyboard key. */
export const HANUNOO_KEYBOARD_GLYPH: Record<string, string> = {
  a: HANUNOO_VOWELS.A,
  i: HANUNOO_VOWELS.I,
  u: HANUNOO_VOWELS.U,
  b: HANUNOO_CONSONANTS.B,
  d: HANUNOO_CONSONANTS.D,
  g: HANUNOO_CONSONANTS.G,
  h: HANUNOO_CONSONANTS.H,
  k: HANUNOO_CONSONANTS.K,
  l: HANUNOO_CONSONANTS.L,
  m: HANUNOO_CONSONANTS.M,
  n: HANUNOO_CONSONANTS.N,
  ng: HANUNOO_CONSONANTS.NG,
  p: HANUNOO_CONSONANTS.P,
  r: HANUNOO_CONSONANTS.R,
  s: HANUNOO_CONSONANTS.S,
  t: HANUNOO_CONSONANTS.T,
  w: HANUNOO_CONSONANTS.W,
  y: HANUNOO_CONSONANTS.Y,
  kudlit_e: HANUNOO_KUDLITS.I,
  kudlit_i: HANUNOO_KUDLITS.I,
  kudlit_o: HANUNOO_KUDLITS.U,
  kudlit_u: HANUNOO_KUDLITS.U,
  virama: HANUNOO_VOWEL_KILLER,
  pamudpod: HANUNOO_VOWEL_KILLER,
};

function letterKey(id: string): KeyboardLayout[number][number] {
  const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  return {
    id,
    label: HANUNOO_KEYBOARD_GLYPH[id] ?? id,
    value: baybayinKeyboardInputValue(id, token),
  };
}

/** On-screen Hanunoo layout (Unicode glyphs; Latin syllabic input). */
export const HANUNOO_KEYBOARD_LAYOUT: KeyboardLayout = [
  [
    letterKey("b"),
    letterKey("k"),
    letterKey("d"),
    letterKey("g"),
    letterKey("h"),
    letterKey("l"),
    letterKey("m"),
  ],
  [
    letterKey("n"),
    letterKey("ng"),
    letterKey("p"),
    letterKey("r"),
    letterKey("s"),
    letterKey("t"),
    letterKey("w"),
    letterKey("y"),
  ],
  [
    letterKey("a"),
    letterKey("i"),
    letterKey("u"),
    letterKey("kudlit_e"),
    letterKey("kudlit_o"),
    letterKey("virama"),
  ],
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

const HANUNOO_GLYPH_TO_TOKEN: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [id, glyph] of Object.entries(HANUNOO_KEYBOARD_GLYPH)) {
    if (!glyph) continue;
    const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id];
    if (!token) continue;
    if (!map[glyph]) map[glyph] = token;
  }
  return map;
})();

/** Map Hanunoo output back to plain Latin input (output-only editing). */
export function phoneticFromHanunooText(text: string): string {
  return [...text]
    .map((char) => HANUNOO_GLYPH_TO_TOKEN[char] ?? char)
    .join("");
}
