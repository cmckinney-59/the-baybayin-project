import type { KeyboardLayout } from "../components/Keyboard/Keyboard";
import { ALPHABETS_DATA } from "./ALPHABETS_DATA";
import {
  getAurebeshOutputFontClass,
  type AurebeshFontId,
} from "./AurebeshData/AUREBESH_FONTS_DATA";
import { getAurebeshKeyboardLayout } from "./AurebeshData/aurebeshKeyboardLayout";
import { getBaybayinKeyboardLayout } from "./BaybayinData/baybayinKeyboardLayout";
import {
  getBaybayinFontClass,
  type BaybayinFontId,
} from "./BaybayinData/BAYBAYIN_FONTS_DATA";
import {
  getDeseretKeyboardFontClass,
  type DeseretFontId,
} from "./DeseretData/DESERET_FONTS_DATA";
import { BUHID_KEYBOARD_LAYOUT } from "./BuhidData/buhidKeyboardLayout";
import { getDeseretKeyboardLayout } from "./DeseretData/deseretKeyboardLayout";
import { HANUNOO_KEYBOARD_LAYOUT } from "./HanunooData/hanunooKeyboardLayout";
import { OGHAM_KEYBOARD_LAYOUT } from "./OghamData/oghamKeyboardLayout";
import {
  getPlqadFontClass,
  getPlqadKeyboardLayout,
} from "./PlqadData/plqadKeyboardLayout";
import {
  getLatinSlotQwertyLayout,
  isLatinSlotKeyboardAlphabet,
} from "./shared/latinSlotKeyboardLayout";
import { TAGBANWA_KEYBOARD_LAYOUT } from "./TagbanwaData/tagbanwaKeyboardLayout";

export type AlphabetKeyboardConfig = {
  layout: KeyboardLayout;
  fontClass: string;
};

export type ResolveKeyboardOptions = {
  useCombinedCharacters: boolean;
  useTechNumbers: boolean;
  useKlinzhai: boolean;
  selectedAurebeshFont?: AurebeshFontId;
  selectedBaybayinFont: BaybayinFontId;
  selectedDeseretFont?: DeseretFontId;
  useHollowKudlits: boolean;
  useXVowelKiller: boolean;
  deseretModern?: boolean;
};

/** Alphabets that always show a keyboard (not gated by experimental features). */
export const STABLE_KEYBOARD_ALPHABETS = [
  "Aurebesh",
  "Baybayin",
  "Deseret",
] as const;

export function alphabetHasKeyboard(name: string): boolean {
  if ((STABLE_KEYBOARD_ALPHABETS as readonly string[]).includes(name)) {
    return true;
  }
  if (isLatinSlotKeyboardAlphabet(name)) return true;
  return (
    name === "Buhid" ||
    name === "Hanunoo" ||
    name === "Tagbanwa" ||
    name === "Ogham" ||
    name === "Plqad"
  );
}

export function isExperimentalAlphabet(name: string): boolean {
  return !!ALPHABETS_DATA.find((a) => a.name === name)?.experimental;
}

/**
 * Resolve layout + font for the on-screen keyboard.
 * Returns null when the alphabet has no keyboard.
 */
export function resolveAlphabetKeyboard(
  name: string,
  options: ResolveKeyboardOptions,
): AlphabetKeyboardConfig | null {
  if (name === "Aurebesh") {
    return {
      layout: getAurebeshKeyboardLayout({
        useCombinedCharacters: options.useCombinedCharacters,
      }),
      fontClass: getAurebeshOutputFontClass(
        options.selectedAurebeshFont ?? "af",
        options.useCombinedCharacters,
        options.useTechNumbers,
      ),
    };
  }

  if (name === "Baybayin") {
    return {
      layout: getBaybayinKeyboardLayout({
        fontId: options.selectedBaybayinFont,
        useUnicode: false,
        useHollowKudlits: options.useHollowKudlits,
        useXVowelKiller: options.useXVowelKiller,
      }),
      fontClass: getBaybayinFontClass(options.selectedBaybayinFont),
    };
  }

  if (name === "Deseret") {
    return {
      layout: getDeseretKeyboardLayout(options.deseretModern),
      fontClass: getDeseretKeyboardFontClass(
        options.selectedDeseretFont ?? "noto-sans",
      ),
    };
  }

  if (name === "Buhid") {
    return { layout: BUHID_KEYBOARD_LAYOUT, fontClass: "buhid-font" };
  }

  if (name === "Hanunoo") {
    return { layout: HANUNOO_KEYBOARD_LAYOUT, fontClass: "hanunoo-font" };
  }

  if (name === "Tagbanwa") {
    return { layout: TAGBANWA_KEYBOARD_LAYOUT, fontClass: "tagbanwa-font" };
  }

  if (name === "Ogham") {
    return { layout: OGHAM_KEYBOARD_LAYOUT, fontClass: "ogham-font" };
  }

  if (name === "Plqad") {
    return {
      layout: getPlqadKeyboardLayout({ useKlinzhai: options.useKlinzhai }),
      fontClass: getPlqadFontClass(options.useKlinzhai),
    };
  }

  if (isLatinSlotKeyboardAlphabet(name)) {
    const entry = ALPHABETS_DATA.find((a) => a.name === name);
    return {
      layout: getLatinSlotQwertyLayout(),
      fontClass: entry?.outputFontClass ?? "",
    };
  }

  return null;
}
