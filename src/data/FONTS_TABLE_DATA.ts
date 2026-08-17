import { ALPHABETS_DATA } from "./ALPHABETS_DATA";
import { BAYBAYIN_FONTS } from "./BaybayinData/BAYBAYIN_FONTS_DATA";

export type FontTableRow = {
  id: string;
  name: string;
  fontClass: string;
  sample: string;
};

const AUREBESH_FONT_ROWS: FontTableRow[] = [
  {
    id: "canon",
    name: "Aurebesh Canon",
    fontClass: "aurebesh-font-canon",
    sample: "Aurek",
  },
  {
    id: "canon-tech",
    name: "Aurebesh Canon Tech",
    fontClass: "aurebesh-font-canon-tech",
    sample: "1138",
  },
  {
    id: "legends",
    name: "Aurebesh Legends",
    fontClass: "aurebesh-font-legends",
    sample: "Aurek",
  },
  {
    id: "legends-tech",
    name: "Aurebesh Legends Tech",
    fontClass: "aurebesh-font-legends-tech",
    sample: "1138",
  },
];

const PLQAD_FONT_ROWS: FontTableRow[] = [
  {
    id: "plqad",
    name: "Plqad (pIqaD)",
    fontClass: "plqad-font",
    sample: "tlhIngan",
  },
  {
    id: "klinzhai",
    name: "Plqad Klinzhai",
    fontClass: "plqad-font-klinzhai",
    sample: "Hello",
  },
];

/** Preview text shown for each Baybayin font in the fonts table. */
const BAYBAYIN_FONT_SAMPLE: Record<string, string> = {
  "noto-sans": "ᜀᜊᜃ",
  "tagalog-doctrina": "Aba",
  bagwis: "Aba",
  stylized: "Aba",
};

/** Fonts available for the transliterator alphabet shown in How To Use. */
export function getFontTableRows(alphabetName: string): FontTableRow[] {
  if (alphabetName === "Baybayin") {
    return BAYBAYIN_FONTS.map((font) => ({
      id: font.id,
      name: font.label,
      fontClass: font.outputFontClass,
      sample: BAYBAYIN_FONT_SAMPLE[font.id] ?? "Aba",
    }));
  }

  if (alphabetName === "Aurebesh") {
    return AUREBESH_FONT_ROWS;
  }

  if (alphabetName === "Plqad") {
    return PLQAD_FONT_ROWS;
  }

  const entry = ALPHABETS_DATA.find((alphabet) => alphabet.name === alphabetName);
  if (!entry) {
    return [];
  }

  return [
    {
      id: entry.name.toLowerCase(),
      name: entry.fontName,
      fontClass: entry.outputFontClass,
      sample: getDefaultSample(alphabetName),
    },
  ];
}

function getDefaultSample(alphabetName: string): string {
  switch (alphabetName) {
    case "Deseret":
      return "Deseret";
    case "Ogham":
      return "Ogham";
    case "Tengwar":
      return "Tengwar";
    default:
      return alphabetName;
  }
}
