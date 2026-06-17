export type BaybayinFontId =
  | "tagalog-doctrina"
  | "bagwis"
  | "stylized"
  | "noto-sans";

export type BaybayinFont = {
  id: BaybayinFontId;
  label: string;
  outputFontClass: string;
  supportsXVowelKiller?: boolean;
};

export const BAYBAYIN_FONTS: BaybayinFont[] = [
  {
    id: "tagalog-doctrina",
    label: "Tagalog Doctrina 1593",
    outputFontClass: "baybayin-font",
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
  },
  {
    id: "noto-sans",
    label: "Noto Sans Baybayin",
    outputFontClass: "noto-sans-baybayin",
  },
];

export const DEFAULT_BAYBAYIN_FONT_ID: BaybayinFontId = "tagalog-doctrina";

export function getBaybayinFontById(id: BaybayinFontId): BaybayinFont {
  return (
    BAYBAYIN_FONTS.find((font) => font.id === id) ?? BAYBAYIN_FONTS[0]
  );
}

export function getBaybayinFontClass(id: BaybayinFontId): string {
  return getBaybayinFontById(id).outputFontClass;
}
