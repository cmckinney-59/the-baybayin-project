export type BaybayinFontId =
  | "noto-sans"
  | "noto-serif"
  | "open-baybayin"
  | "tagalog-doctrina"
  | "baybayin-lopez"
  | "bikol-mintz"
  | "bisaya-hervas"
  | "stylized"
  | "tayo"
  | "bagwis"
  | "robotika"
  | "chochin"
  | "malibata-neue"
  | "matatas-one";

export type BaybayinFont = {
  id: BaybayinFontId;
  label: string;
  outputFontClass: string;
  /** When true, the user can toggle Latin-mapped vs Unicode output. */
  supportsUnicodeOption?: boolean;
  /** Always emit Unicode Tagalog code points (no Latin remap path). */
  unicodeOnly?: boolean;
  supportsXVowelKiller?: boolean;
  /** Hollow kudlit marks for e/o (Noto-style Unicode fonts). */
  supportsHollowKudlits?: boolean;
  /** Dedicated on-screen keyboard key for ra. */
  supportsRaKey?: boolean;
};

export const BAYBAYIN_FONTS: BaybayinFont[] = [
  {
    id: "noto-sans",
    label: "Noto Sans Baybayin",
    outputFontClass: "noto-sans-baybayin",
    unicodeOnly: true,
    supportsHollowKudlits: true,
    supportsRaKey: true,
  },
  {
    id: "noto-serif",
    label: "Noto Serif Baybayin",
    outputFontClass: "noto-serif-baybayin",
    unicodeOnly: true,
    supportsHollowKudlits: true,
    supportsRaKey: true,
  },
  {
    id: "open-baybayin",
    label: "OpenBaybayin",
    outputFontClass: "open-baybayin-font",
    unicodeOnly: true,
    supportsHollowKudlits: true,
    supportsRaKey: true,
  },
  {
    id: "tagalog-doctrina",
    label: "Tagalog Doctrina 1593",
    outputFontClass: "baybayin-font",
    supportsUnicodeOption: true,
  },
  {
    id: "baybayin-lopez",
    label: "Baybayin Lopez",
    outputFontClass: "baybayin-lopez-font",
    supportsUnicodeOption: true,
  },
  {
    id: "bikol-mintz",
    label: "Bikol Mintz",
    outputFontClass: "bikol-mintz-font",
    supportsUnicodeOption: true,
  },
  {
    id: "bisaya-hervas",
    label: "Bisaya Hervás",
    outputFontClass: "bisaya-hervas-font",
    supportsUnicodeOption: true,
  },
  {
    id: "stylized",
    label: "Tagalog Stylized",
    outputFontClass: "baybayin-stylized-font",
    supportsUnicodeOption: true,
  },
  {
    id: "tayo",
    label: "Baybayin Tayo Handwriting",
    outputFontClass: "baybayin-tayo-font",
    supportsUnicodeOption: true,
  },
  {
    id: "bagwis",
    label: "Bagwis Baybayin",
    outputFontClass: "bagwis-font",
    supportsXVowelKiller: true,
    supportsRaKey: true,
  },
  {
    id: "robotika",
    label: "Baybayin Robotika",
    outputFontClass: "baybayin-robotika-font",
  },
  {
    id: "chochin",
    label: "Baybayin Chochin",
    outputFontClass: "baybayin-chochin-font",
  },
  {
    id: "malibata-neue",
    label: "Malibata Neue",
    outputFontClass: "malibata-neue-font",
  },
  {
    id: "matatas-one",
    label: "Matatas One",
    outputFontClass: "matatas-one-font",
    supportsXVowelKiller: true,
  },
];

/** Fonts that expose the "Use Unicode" checkbox (Paul Morrow dual-encoded faces, etc.). */
export function baybayinSupportsUnicodeOption(fontId: BaybayinFontId): boolean {
  return !!getBaybayinFontById(fontId).supportsUnicodeOption;
}

/** Whether Baybayin output should use Unicode glyphs for the active font + option. */
export function baybayinUsesUnicodeOutput(
  fontId: BaybayinFontId,
  useUnicodeOption: boolean,
): boolean {
  const font = getBaybayinFontById(fontId);
  if (font.unicodeOnly) return true;
  if (baybayinSupportsUnicodeOption(fontId)) return useUnicodeOption;
  return false;
}

export const DEFAULT_BAYBAYIN_FONT_ID: BaybayinFontId = "noto-sans";

export function getBaybayinFontById(id: BaybayinFontId): BaybayinFont {
  return (
    BAYBAYIN_FONTS.find((font) => font.id === id) ?? BAYBAYIN_FONTS[0]
  );
}

export function getBaybayinFontClass(id: BaybayinFontId): string {
  return getBaybayinFontById(id).outputFontClass;
}
