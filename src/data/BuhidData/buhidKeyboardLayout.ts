import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  BAYBAYIN_KEYBOARD_PHONETIC_TOKEN,
  baybayinKeyboardInputValue,
} from "../BaybayinData/baybayinPhoneticMap";
import {
  BUHID_CONSONANTS,
  BUHID_KUDLITS,
  BUHID_VOWELS,
  BUHID_VOWEL_KILLER,
} from "./BUHID_DATA";

/** Glyph shown on each Buhid keyboard key. */
export const BUHID_KEYBOARD_GLYPH: Record<string, string> = {
  a: BUHID_VOWELS.A,
  i: BUHID_VOWELS.I,
  u: BUHID_VOWELS.U,
  b: BUHID_CONSONANTS.B,
  d: BUHID_CONSONANTS.D,
  g: BUHID_CONSONANTS.G,
  h: BUHID_CONSONANTS.H,
  k: BUHID_CONSONANTS.K,
  l: BUHID_CONSONANTS.L,
  m: BUHID_CONSONANTS.M,
  n: BUHID_CONSONANTS.N,
  ng: BUHID_CONSONANTS.NG,
  p: BUHID_CONSONANTS.P,
  r: BUHID_CONSONANTS.R,
  s: BUHID_CONSONANTS.S,
  t: BUHID_CONSONANTS.T,
  w: BUHID_CONSONANTS.W,
  y: BUHID_CONSONANTS.Y,
  kudlit_e: BUHID_KUDLITS.I,
  kudlit_i: BUHID_KUDLITS.I,
  kudlit_o: BUHID_KUDLITS.U,
  kudlit_u: BUHID_KUDLITS.U,
  virama: BUHID_VOWEL_KILLER,
  pamudpod: BUHID_VOWEL_KILLER,
};

function letterKey(id: string): KeyboardLayout[number][number] {
  const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  return {
    id,
    label: BUHID_KEYBOARD_GLYPH[id] ?? id,
    value: baybayinKeyboardInputValue(id, token),
  };
}

/** On-screen Buhid layout (Unicode glyphs; Latin syllabic input). */
export const BUHID_KEYBOARD_LAYOUT: KeyboardLayout = [
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

const BUHID_GLYPH_TO_TOKEN: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [id, glyph] of Object.entries(BUHID_KEYBOARD_GLYPH)) {
    if (!glyph) continue;
    const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id];
    if (!token) continue;
    if (!map[glyph]) map[glyph] = token;
  }
  return map;
})();

/** Map Buhid output back to plain Latin input (output-only editing). */
export function phoneticFromBuhidText(text: string): string {
  return [...text]
    .map((char) => BUHID_GLYPH_TO_TOKEN[char] ?? char)
    .join("");
}
