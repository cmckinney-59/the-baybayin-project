export type BaybayinFontId =
  | "tagalog-doctrina"
  | "bagwis"
  | "stylized"
  | "noto-sans"
  | "robotika";

export type BaybayinFont = {
  id: BaybayinFontId;
  label: string;
  outputFontClass: string;
  /** When true, the user can toggle Latin-mapped vs Unicode output. */
  supportsUnicodeOption?: boolean;
  supportsXVowelKiller?: boolean;
};

export const BAYBAYIN_FONTS: BaybayinFont[] = [
  {
    id: "noto-sans",
    label: "Noto Sans Baybayin",
    outputFontClass: "noto-sans-baybayin",
  },
  {
    id: "tagalog-doctrina",
    label: "Tagalog Doctrina 1593",
    outputFontClass: "baybayin-font",
    supportsUnicodeOption: true,
  },
  {
    id: "bagwis",
    label: "Bagwis Baybayin",
    outputFontClass: "bagwis-font",
    supportsXVowelKiller: true,
  },
  {
    id: "stylized",
    label: "Tagalog Stylized",
    outputFontClass: "baybayin-stylized-font",
    supportsUnicodeOption: true,
  },
  {
    id: "robotika",
    label: "Baybayin Robotika",
    outputFontClass: "baybayin-robotika-font",
  },
];

/** Fonts that expose the "Use Unicode" checkbox (Tagalog Doctrina, Tagalog Stylized). */
export function baybayinSupportsUnicodeOption(fontId: BaybayinFontId): boolean {
  return !!getBaybayinFontById(fontId).supportsUnicodeOption;
}

/** Whether Baybayin output should use Unicode glyphs for the active font + option. */
export function baybayinUsesUnicodeOutput(
  fontId: BaybayinFontId,
  useUnicodeOption: boolean,
): boolean {
  if (fontId === "noto-sans") return true;
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
