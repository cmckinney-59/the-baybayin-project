export type DeseretFontId =
  | "noto-sans"
  | "adamic-bee"
  | "times-bee"
  | "tumble-bee"
  | "queen-bee"
  | "queen-bee-star"
  | "deseret-bee"
  | "honey-bee"
  | "reader-bee"
  | "zarahemla-bee"
  | "tubee-blunt"
  | "tubee-blunt-hollow-light"
  | "tubee-blunt-hollow-medium"
  | "tubee-blunt-shadow"
  | "tubee-round"
  | "tubee-round-hollow-light"
  | "tubee-round-hollow-medium"
  | "tubee-round-shadow"
  | "mellifera"
  | "huneybee"
  | "bee-skep"
  | "deseret-legacy"
  | "deseret-legacy-alt"
  | "deseret-legacy-underscore"
  | "deseret-bee-legacy";

export type DeseretFont = {
  id: DeseretFontId;
  label: string;
  /** CSS font-family name declared in font-faces.css */
  familyName: string;
  outputFontClass: string;
  /** Path under `src/assets/fonts/`. */
  downloadPath: string;
  downloadName: string;
  /**
   * When false, glyphs live on Latin/Bee keyboard code points and Unicode
   * Deseret output must be remapped before display.
   */
  supportsUnicode: boolean;
  license: string;
  category: "unicode" | "serif" | "sans-serif" | "other";
  creator?: string;
  /** Attribution / homepage for the font family. */
  sourceUrl?: string;
};

/** Host page where Joshua Erickson Bee/Other font files were collected. */
const DESERET_FONT_SOURCE_URL =
  "https://www.chem.ucla.edu/~jericks/Fonts/";

type DeseretFontAttribution = {
  creator: string;
  sourceUrl?: string;
};

/** Attribution overrides (Bee serif/sans default to Joshua Erickson). */
const DESERET_FONT_ATTRIBUTION: Partial<
  Record<DeseretFontId, DeseretFontAttribution>
> = {
  mellifera: {
    creator: "sigilante",
    sourceUrl: "https://github.com/sigilante/font-mellifera",
  },
  "deseret-legacy": { creator: "Edward J. Bateman" },
  "deseret-legacy-alt": { creator: "Daniel U. Thibault / James Kass" },
  "deseret-legacy-underscore": { creator: "Unknown" },
  huneybee: { creator: "Daniel U. Thibault / James Kass" },
  "bee-skep": { creator: "Joseph Spicer" },
  "deseret-bee-legacy": { creator: "Joshua Erickson / Greg Kearney" },
};

type DeseretFontBase = Omit<DeseretFont, "creator" | "sourceUrl">;

const DESERET_FONTS_BASE: DeseretFontBase[] = [
  {
    id: "noto-sans",
    label: "Noto Sans Deseret",
    familyName: "Noto Sans Deseret",
    outputFontClass: "deseret-font-noto-sans",
    downloadPath: "deseret/noto-sans-deseret/deseret.zip",
    downloadName: "deseret.zip",
    supportsUnicode: true,
    license: "Free",
    category: "unicode",
  },
  {
    id: "adamic-bee",
    label: "AdamicBee",
    familyName: "AdamicBee",
    outputFontClass: "deseret-font-adamic-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Serif/AdamicBee3/_AdamicBee3_0.ttf",
    downloadName: "AdamicBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "serif",
  },
  {
    id: "times-bee",
    label: "TimesBee",
    familyName: "TimesBee",
    outputFontClass: "deseret-font-times-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Serif/TimesBee2/TimesBee2.ttf",
    downloadName: "TimesBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "serif",
  },
  {
    id: "tumble-bee",
    label: "TumbleBee",
    familyName: "TumbleBee",
    outputFontClass: "deseret-font-tumble-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Serif/TumbleBee2/_TumbleBee2.ttf",
    downloadName: "TumbleBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "serif",
  },
  {
    id: "queen-bee",
    label: "QueenBee",
    familyName: "QueenBee",
    outputFontClass: "deseret-font-queen-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Serif/QueenBee2/_QueenBee_2.ttf",
    downloadName: "QueenBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "serif",
  },
  {
    id: "queen-bee-star",
    label: "QueenBee Star",
    familyName: "QueenBee Star",
    outputFontClass: "deseret-font-queen-bee-star",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Serif/QueenBeeStar2/_QueenBee Star 2.ttf",
    downloadName: "QueenBeeStar.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "serif",
  },
  {
    id: "deseret-bee",
    label: "DeseretBee",
    familyName: "DeseretBee",
    outputFontClass: "deseret-font-deseret-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/DeseretBee2/_DeseretBee2.ttf",
    downloadName: "DeseretBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "honey-bee",
    label: "HoneyBee",
    familyName: "HoneyBee",
    outputFontClass: "deseret-font-honey-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/HoneyBee2/_HoneyBee2.ttf",
    downloadName: "HoneyBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "reader-bee",
    label: "ReaderBee",
    familyName: "ReaderBee",
    outputFontClass: "deseret-font-reader-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/ReaderBee2/_ReaderBee2_0.ttf",
    downloadName: "ReaderBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "zarahemla-bee",
    label: "ZarahemlaBee",
    familyName: "ZarahemlaBee",
    outputFontClass: "deseret-font-zarahemla-bee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/ZarahelmlaBee2/_ZarahemlaBee2.ttf",
    downloadName: "ZarahemlaBee.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-blunt",
    label: "TuBee Blunt",
    familyName: "TuBee Blunt",
    outputFontClass: "deseret-font-tubee-blunt",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeBlunt/_TuBee Blunt kern 2.ttf",
    downloadName: "TuBeeBlunt.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-blunt-hollow-light",
    label: "TuBee Blunt Hollow Light",
    familyName: "TuBee Blunt Hollow Light",
    outputFontClass: "deseret-font-tubee-blunt-hollow-light",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeBlunt/_TuBee Blunt Hollow Light2.ttf",
    downloadName: "TuBeeBluntHollowLight.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-blunt-hollow-medium",
    label: "TuBee Blunt Hollow Medium",
    familyName: "TuBee Blunt Hollow Medium",
    outputFontClass: "deseret-font-tubee-blunt-hollow-medium",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeBlunt/_TuBee Blunt Hollow Medium2.ttf",
    downloadName: "TuBeeBluntHollowMedium.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-blunt-shadow",
    label: "TuBee Blunt Shadow",
    familyName: "TuBee Blunt Shadow",
    outputFontClass: "deseret-font-tubee-blunt-shadow",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeBlunt/_TuBee Blunt Shadow2.ttf",
    downloadName: "TuBeeBluntShadow.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-round",
    label: "TuBee Round",
    familyName: "TuBee Round",
    outputFontClass: "deseret-font-tubee-round",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeRound/_TuBee Round3_0.ttf",
    downloadName: "TuBeeRound.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-round-hollow-light",
    label: "TuBee Round Hollow Light",
    familyName: "TuBee Round Hollow Light",
    outputFontClass: "deseret-font-tubee-round-hollow-light",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeRound/_TuBee Round Hollow Light2.ttf",
    downloadName: "TuBeeRoundHollowLight.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-round-hollow-medium",
    label: "TuBee Round Hollow Medium",
    familyName: "TuBee Round Hollow Medium",
    outputFontClass: "deseret-font-tubee-round-hollow-medium",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeRound/_TuBee Round Hollow Medium2.ttf",
    downloadName: "TuBeeRoundHollowMedium.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "tubee-round-shadow",
    label: "TuBee Round Shadow",
    familyName: "TuBee Round Shadow",
    outputFontClass: "deseret-font-tubee-round-shadow",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/SanSerif/TuBeeRound/_TuBee Round Shadow2.ttf",
    downloadName: "TuBeeRoundShadow.ttf",
    supportsUnicode: true,
    license: "Free",
    category: "sans-serif",
  },
  {
    id: "mellifera",
    label: "Mellifera Deseret",
    familyName: "Mellifera Deseret Master",
    outputFontClass: "deseret-font-mellifera",
    downloadPath: "deseret/Mellifera/MelliferaDeseretMaster.otf",
    downloadName: "MelliferaDeseretMaster.otf",
    supportsUnicode: true,
    license: "OFL",
    category: "serif",
  },
  {
    id: "huneybee",
    label: "HuneyBee",
    familyName: "Deseret HuneyBee",
    outputFontClass: "deseret-font-huneybee",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Other/Huneybee.ttf",
    downloadName: "Huneybee.ttf",
    supportsUnicode: false,
    license: "Free",
    category: "other",
  },
  {
    id: "bee-skep",
    label: "Bee Skep Serif",
    familyName: "Bee Skep Serif",
    outputFontClass: "deseret-font-bee-skep",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Other/beeskeps.otf",
    downloadName: "beeskeps.otf",
    supportsUnicode: false,
    license: "Free",
    category: "other",
  },
  {
    id: "deseret-legacy",
    label: "Deseret (Bateman)",
    familyName: "Deseret Legacy",
    outputFontClass: "deseret-font-legacy",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Other/DESERET.TTF",
    downloadName: "DESERET.TTF",
    supportsUnicode: false,
    license: "Free",
    category: "other",
  },
  {
    id: "deseret-legacy-alt",
    label: "Deseret (Thibault/Kass)",
    familyName: "Deseret Legacy Alt",
    outputFontClass: "deseret-font-legacy-alt",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Other/Deseret.ttf",
    downloadName: "Deseret.ttf",
    supportsUnicode: false,
    license: "Free",
    category: "other",
  },
  {
    id: "deseret-legacy-underscore",
    label: "Deseret (1991)",
    familyName: "Deseret Legacy Underscore",
    outputFontClass: "deseret-font-legacy-underscore",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Other/Deseret_.ttf",
    downloadName: "Deseret_.ttf",
    supportsUnicode: false,
    license: "Free",
    category: "other",
  },
  {
    id: "deseret-bee-legacy",
    label: "DeseretBee (legacy)",
    familyName: "DeseretBee Legacy",
    outputFontClass: "deseret-font-deseret-bee-legacy",
    downloadPath:
      "deseret/FontsFromJoshuaEricksonWebpage/Other/_DeseretBee.ttf",
    downloadName: "DeseretBee-legacy.ttf",
    supportsUnicode: false,
    license: "Free",
    category: "other",
  },
];

export const DESERET_FONTS: DeseretFont[] = DESERET_FONTS_BASE.map((font) => {
  if (font.id === "noto-sans") {
    return font;
  }

  const attribution = DESERET_FONT_ATTRIBUTION[font.id];
  const creator =
    attribution?.creator ??
    (font.category === "serif" || font.category === "sans-serif"
      ? "Joshua Erickson"
      : undefined);

  return {
    ...font,
    sourceUrl: attribution?.sourceUrl ?? DESERET_FONT_SOURCE_URL,
    ...(creator ? { creator } : {}),
  };
});

export const DEFAULT_DESERET_FONT_ID: DeseretFontId = "noto-sans";

export function getDeseretFontById(id: DeseretFontId): DeseretFont {
  return DESERET_FONTS.find((font) => font.id === id) ?? DESERET_FONTS[0];
}

export function getDeseretFontClass(id: DeseretFontId): string {
  return getDeseretFontById(id).outputFontClass;
}

export function deseretFontSupportsUnicode(id: DeseretFontId): boolean {
  return getDeseretFontById(id).supportsUnicode;
}

/** Keyboard labels need Unicode glyphs; fall back to Noto for Latin-mapped fonts. */
export function getDeseretKeyboardFontClass(id: DeseretFontId): string {
  const font = getDeseretFontById(id);
  return font.supportsUnicode
    ? font.outputFontClass
    : getDeseretFontClass(DEFAULT_DESERET_FONT_ID);
}
