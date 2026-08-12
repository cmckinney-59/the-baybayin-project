import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  BAYBAYIN_KEYBOARD_GLYPH,
  BAYBAYIN_KEYBOARD_PHONETIC_TOKEN,
  baybayinKeyboardInputValue,
} from "./baybayinPhoneticMap";

/**
 * Show Baybayin glyphs on the key; insert plain Latin phonetic text
 * into the input (e.g. ᜀ → "a", ᜊ → "ba").
 */
function letterKey(id: string): KeyboardLayout[number][number] {
  const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  const glyph = BAYBAYIN_KEYBOARD_GLYPH[id] ?? id;
  return {
    id,
    label: glyph,
    value: baybayinKeyboardInputValue(id, token),
  };
}

/** On-screen Baybayin alphabet layout. */
export const BAYBAYIN_KEYBOARD_LAYOUT: KeyboardLayout = [
  [
    letterKey("b"),
    letterKey("k"),
    letterKey("d"),
    letterKey("g"),
    letterKey("h"),
    letterKey("l"),
    letterKey("m"),
    letterKey("n"),
  ],
  [
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
    letterKey("comma"),
    letterKey("period"),
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
