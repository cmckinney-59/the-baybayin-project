import type { KeyboardKey } from "../../components/Keyboard/Keyboard";
import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  DESERET_LETTERS,
  DESERET_MODERN,
} from "./DESERET_DATA";
import {
  DESERET_KEYBOARD_PHONETIC_TOKEN,
  toPhoneticInput,
} from "./deseretPhoneticMap";

/**
 * Show Deseret glyphs on the key; insert slash-delimited phonetic sound
 * into the Latin input (e.g. 𐐭 → "/oo/"). Shift/caps capitalizes the token.
 */
function letterKey(
  id: string,
  lowerGlyph: string,
  upperGlyph: string,
  fontClass?: string,
): KeyboardKey {
  const token = DESERET_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  return {
    id,
    label: lowerGlyph,
    value: toPhoneticInput(token, false),
    shiftLabel: upperGlyph,
    shiftValue: toPhoneticInput(token, true),
    ...(fontClass !== undefined ? { fontClass } : {}),
  };
}

/** On-screen Deseret alphabet layout (shift/caps for capitals). */
export function getDeseretKeyboardLayout(modern = false): KeyboardLayout {
  const glyph = (
    id: keyof typeof DESERET_LETTERS,
    fontClass?: string,
  ) => {
    const letter = DESERET_LETTERS[id];
    const modernGlyph = modern
      ? DESERET_MODERN[id as keyof typeof DESERET_MODERN]
      : undefined;
    return letterKey(
      id.toLowerCase(),
      modernGlyph?.lower ?? letter.lower,
      modernGlyph?.upper ?? letter.upper,
      modernGlyph ? "" : fontClass,
    );
  };

  return [
  [
    glyph("LE"),
    glyph("LA"),
    glyph("LAH"),
    glyph("LAW"),
    glyph("LO"),
    glyph("LOO"),
    glyph("SI"),
    glyph("SE"),
    glyph("SA"),
    glyph("SO"),
  ],
  [
    glyph("SU"),
    glyph("SOO"),
    glyph("EYE"),
    glyph("OW"),
    glyph("OI"),
    glyph("EW"),
    glyph("W"),
    glyph("Y"),
    glyph("H"),
    glyph("P"),
  ],
  [
    glyph("B"),
    glyph("TH"),
    glyph("DH"),
    glyph("S"),
    glyph("Z"),
    glyph("SH"),
    glyph("ZH"),
    glyph("T"),
    glyph("D"),
    glyph("CH"),
  ],
  [
    glyph("J"),
    glyph("K"),
    glyph("G"),
    glyph("F"),
    glyph("V"),
    glyph("R"),
    glyph("L"),
    glyph("M"),
    glyph("N"),
    glyph("NG"),
  ],
  [
    {
      id: "caps",
      label: "Caps",
      action: "caps",
      width: 1.2,
    },
    {
      id: "shift",
      label: "Shift",
      action: "shift",
      width: 1.2,
    },
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
}
