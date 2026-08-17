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
 * On-screen Baybayin layout whose key labels always match the selected font.
 * When hollow kudlits are enabled, e/o (hollow) and i/u (solid) each get a key
 * only for the Unicode-capable Noto Sans Baybayin font.
 */
export function getBaybayinKeyboardLayout(
  options: BaybayinPhoneticOptions,
): KeyboardLayout {
  const showSeparateHollowKudlits =
    options.useHollowKudlits && options.fontId === "noto-sans";

  const kudlitKeys = showSeparateHollowKudlits
    ? [
        letterKey("kudlit_e", options),
        letterKey("kudlit_i", options),
        letterKey("kudlit_o", options),
        letterKey("kudlit_u", options),
      ]
    : [letterKey("kudlit_e", options), letterKey("kudlit_o", options)];

  // Dedicated ra is only in Bagwis and Noto Sans Baybayin.
  const showRaKey =
    options.fontId === "bagwis" || options.fontId === "noto-sans";

  return [
    [
      letterKey("b", options),
      letterKey("k", options),
      letterKey("d", options),
      letterKey("g", options),
      letterKey("h", options),
      letterKey("l", options),
      letterKey("m", options),
    ],
    [
      letterKey("n", options),
      letterKey("ng", options),
      letterKey("p", options),
      ...(showRaKey ? [letterKey("r", options)] : []),
      letterKey("s", options),
      letterKey("t", options),
      letterKey("w", options),
      letterKey("y", options),
    ],
    [
      letterKey("a", options),
      letterKey("i", options),
      letterKey("u", options),
      ...kudlitKeys,
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
