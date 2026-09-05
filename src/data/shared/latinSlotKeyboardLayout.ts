import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";

/**
 * Latin-slot font ciphers: key label and insert value are the same Latin letter,
 * rendered in the alphabet's font (Ancients, Cirth, Tengwar, Unown, etc.).
 */
function letterKey(ch: string): KeyboardLayout[number][number] {
  const lower = ch.toLowerCase();
  const upper = ch.toUpperCase();
  return {
    id: lower,
    label: lower,
    value: lower,
    shiftLabel: upper,
    shiftValue: upper,
  };
}

function digitKey(digit: string): KeyboardLayout[number][number] {
  return {
    id: digit,
    label: digit,
    value: digit,
  };
}

function actionRow(): KeyboardLayout[number] {
  return [
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
  ];
}

export type LatinSlotKeyboardOptions = {
  /** Extra digraph/ligature keys (e.g. Plqad ch/gh/ng). */
  digraphs?: readonly string[];
  includeDigits?: boolean;
};

/** Standard QWERTY layout for Latin-slot (font-cipher) alphabets. */
export function getLatinSlotQwertyLayout(
  options: LatinSlotKeyboardOptions = {},
): KeyboardLayout {
  const includeDigits = options.includeDigits !== false;
  const rows: KeyboardLayout = [];

  if (includeDigits) {
    rows.push(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(digitKey));
  }

  rows.push(
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(letterKey),
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"].map(letterKey),
    ["z", "x", "c", "v", "b", "n", "m"].map(letterKey),
  );

  if (options.digraphs?.length) {
    rows.push([...options.digraphs].map(letterKey));
  }

  rows.push(actionRow());
  return rows;
}

/** Alphabets that use a plain Latin-slot QWERTY keyboard (font cipher). */
export const LATIN_SLOT_KEYBOARD_ALPHABETS = [
  "Ancients",
  "Atlantean",
  "Cirth",
  "Gallifreyan",
  "MarasEye",
  "Matoran",
  "Steel",
  "Tengwar",
  "Unown",
] as const;

export type LatinSlotKeyboardAlphabet =
  (typeof LATIN_SLOT_KEYBOARD_ALPHABETS)[number];

export function isLatinSlotKeyboardAlphabet(
  name: string,
): name is LatinSlotKeyboardAlphabet {
  return (LATIN_SLOT_KEYBOARD_ALPHABETS as readonly string[]).includes(name);
}
