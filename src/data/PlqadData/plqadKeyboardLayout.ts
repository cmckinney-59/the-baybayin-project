import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import { getLatinSlotQwertyLayout } from "../shared/latinSlotKeyboardLayout";

/** Digraphs remapped by the standard pIqaD processor. */
export const PLQAD_DIGRAPHS = ["ch", "gh", "ng", "tlh", "Q"] as const;

export type PlqadKeyboardOptions = {
  /** Klinzhai / English-input mode uses plain QWERTY with no digraph row. */
  useKlinzhai: boolean;
};

export function getPlqadKeyboardLayout(
  options: PlqadKeyboardOptions,
): KeyboardLayout {
  return getLatinSlotQwertyLayout({
    digraphs: options.useKlinzhai ? undefined : PLQAD_DIGRAPHS,
  });
}

export function getPlqadFontClass(useKlinzhai: boolean): string {
  return useKlinzhai ? "plqad-font-klinzhai" : "plqad-font";
}
