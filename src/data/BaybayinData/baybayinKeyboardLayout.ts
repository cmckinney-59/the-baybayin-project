import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  BAYBAYIN_KEYBOARD_GLYPH,
  BAYBAYIN_KEYBOARD_PHONETIC_TOKEN,
  baybayinFromPhoneticToken,
  baybayinKeyboardInputValue,
  type BaybayinPhoneticOptions,
} from "./baybayinPhoneticMap";

function letterKey(
  id: string,
  options: BaybayinPhoneticOptions,
): KeyboardLayout[number][number] {
  const token = BAYBAYIN_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  const glyph =
    baybayinFromPhoneticToken(id, options) ??
    baybayinFromPhoneticToken(token, options) ??
    BAYBAYIN_KEYBOARD_GLYPH[id] ??
    id;
  return {
    id,
    label: glyph,
    value: baybayinKeyboardInputValue(id, token),
  };
}

/**
 * On-screen Baybayin layout whose key labels match the active font
 * (Unicode glyphs for Noto / Use Unicode; Latin-mapped letters otherwise).
 */
export function getBaybayinKeyboardLayout(
  options: BaybayinPhoneticOptions,
): KeyboardLayout {
  return [
    [
      letterKey("b", options),
      letterKey("k", options),
      letterKey("d", options),
      letterKey("g", options),
      letterKey("h", options),
      letterKey("l", options),
      letterKey("m", options),
      letterKey("n", options),
    ],
    [
      letterKey("ng", options),
      letterKey("p", options),
      letterKey("r", options),
      letterKey("s", options),
      letterKey("t", options),
      letterKey("w", options),
      letterKey("y", options),
    ],
    [
      letterKey("a", options),
      letterKey("i", options),
      letterKey("u", options),
      letterKey("kudlit_e", options),
      letterKey("kudlit_o", options),
      letterKey("virama", options),
      letterKey("comma", options),
      letterKey("period", options),
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
}
