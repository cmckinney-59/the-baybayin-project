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

export type DeseretKeyboardOptions = {
  modern?: boolean;
  /** When false, omit Long Aw 𐐃 from the keyboard. Default true. */
  includeLongAw?: boolean;
  /** When false, omit Short O 𐐉 from the keyboard. Default false. */
  includeShortO?: boolean;
};

/** On-screen Deseret alphabet layout (shift/caps for capitals). */
export function getDeseretKeyboardLayout(
  modernOrOptions: boolean | DeseretKeyboardOptions = false,
): KeyboardLayout {
  const options: DeseretKeyboardOptions =
    typeof modernOrOptions === "boolean"
      ? { modern: modernOrOptions }
      : modernOrOptions;
  const modern = options.modern ?? false;
  // Modern always shows both letters; classic honors the toggles.
  const includeLongAw = modern ? true : (options.includeLongAw ?? true);
  const includeShortO = modern ? true : (options.includeShortO ?? false);

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

  const vowelRow = [
    glyph("LE"),
    glyph("LA"),
    glyph("LAH"),
    ...(includeLongAw ? [glyph("LAW")] : []),
    glyph("LO"),
    glyph("LOO"),
    glyph("SI"),
    glyph("SE"),
    glyph("SA"),
    ...(includeShortO ? [glyph("SO")] : []),
  ];

  return [
  vowelRow,
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
