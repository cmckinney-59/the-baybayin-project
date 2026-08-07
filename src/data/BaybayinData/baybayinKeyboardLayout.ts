import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  BAYBAYIN_KEYBOARD_GLYPH,
  BAYBAYIN_KEYBOARD_PHONETIC_TOKEN,
  toPhoneticInput,
} from "./baybayinPhoneticMap";

/**
 * Show Baybayin glyphs on the key; insert slash-delimited phonetic sound
 * into the Latin input (e.g. ᜀ → "/a/").
 */
function letterKey(id: string): KeyboardLayout[number][number] {
  const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  const glyph = BAYBAYIN_KEYBOARD_GLYPH[id] ?? id;
  return {
    id,
    label: glyph,
    value: toPhoneticInput(token, false),
  };
}

/** On-screen Baybayin alphabet layout. */
export const BAYBAYIN_KEYBOARD_LAYOUT: KeyboardLayout = [
  [letterKey("a"), letterKey("i"), letterKey("u")],
  [
    letterKey("b"),
    letterKey("k"),
    letterKey("d"),
    letterKey("g"),
    letterKey("h"),
    letterKey("l"),
    letterKey("m"),
    letterKey("n"),
    letterKey("ng"),
    letterKey("p"),
  ],
  [
    letterKey("r"),
    letterKey("s"),
    letterKey("t"),
    letterKey("w"),
    letterKey("y"),
    letterKey("kudlit_e"),
    letterKey("kudlit_o"),
    letterKey("virama"),
  ],
  [
    {
      id: "space",
      label: "⎵",
      action: "space",
      width: 5,
    },
    {
      id: "enter",
      label: "↵",
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
