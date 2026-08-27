import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";

/** Aurebesh digraphs that ligate in Legends fonts (combined characters). */
export const AUREBESH_DIGRAPHS = [
  "ae",
  "ch",
  "eo",
  "kh",
  "ng",
  "oo",
  "sh",
  "th",
] as const;

const AUREBESH_FONT_MATRIX = [
  ["aurebesh-font-canon", "aurebesh-font-canon-tech"],
  ["aurebesh-font-legends", "aurebesh-font-legends-tech"],
] as const;

export function getAurebeshFontClass(
  useCombinedCharacters: boolean,
  useTechNumbers: boolean,
): string {
  return AUREBESH_FONT_MATRIX[Number(useCombinedCharacters)][
    Number(useTechNumbers)
  ];
}

/**
 * Show Latin (rendered in Aurebesh font) on the key; insert the same Latin
 * into the input — Aurebesh is a font cipher, not a phonetic remap.
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

type AurebeshKeyboardOptions = {
  useCombinedCharacters: boolean;
};

/**
 * QWERTY Aurebesh layout. Combined digraph keys appear only when
 * "Include combined characters" is enabled (Legends fonts).
 */
export function getAurebeshKeyboardLayout(
  options: AurebeshKeyboardOptions,
): KeyboardLayout {
  const rows: KeyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(digitKey),
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(letterKey),
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"].map(letterKey),
    ["z", "x", "c", "v", "b", "n", "m"].map(letterKey),
  ];

  if (options.useCombinedCharacters) {
    rows.push([...AUREBESH_DIGRAPHS].map(letterKey));
  }

  rows.push([
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
  ]);

  return rows;
}
