import { ALPHABETS_DATA } from "./ALPHABETS_DATA";
import { BAYBAYIN_FONTS } from "./BaybayinData/BAYBAYIN_FONTS_DATA";

export type FontTableRow = {
  id: string;
  name: string;
  fontClass: string;
  sample: string;
  /** Path under `src/assets/fonts/`. */
  downloadPath: string;
  downloadName: string;
  supportsUnicode: string;
  license: string;
};

const FONT_ASSETS = import.meta.glob(
  "../assets/fonts/**/*.{zip,ttf,otf,TTF,OTF}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const AUREBESH_FONT_ROWS: FontTableRow[] = [
  {
    id: "canon",
    name: "Aurebesh Canon",
    fontClass: "aurebesh-font-canon",
    sample: "Aurek",
    downloadPath: "aurebesh/AurebeshAF-Canon.otf",
    downloadName: "AurebeshAF-Canon.otf",
    supportsUnicode: "No",
    license: "Personal",
  },
  {
    id: "canon-tech",
    name: "Aurebesh Canon Tech",
    fontClass: "aurebesh-font-canon-tech",
    sample: "1138",
    downloadPath: "aurebesh/AurebeshAF-CanonTech.otf",
    downloadName: "AurebeshAF-CanonTech.otf",
    supportsUnicode: "No",
    license: "Yes",
  },
  {
    id: "legends",
    name: "Aurebesh Legends",
    fontClass: "aurebesh-font-legends",
    sample: "Aurek",
    downloadPath: "aurebesh/AurebeshAF-Legends.otf",
    downloadName: "AurebeshAF-Legends.otf",
    supportsUnicode: "No",
    license: "Yes",
  },
  {
    id: "legends-tech",
    name: "Aurebesh Legends Tech",
    fontClass: "aurebesh-font-legends-tech",
    sample: "1138",
    downloadPath: "aurebesh/AurebeshAF-LegendsTech.otf",
    downloadName: "AurebeshAF-LegendsTech.otf",
    supportsUnicode: "No",
    license: "Personal",
  },
];

const PLQAD_FONT_ROWS: FontTableRow[] = [
  {
    id: "plqad",
    name: "Plqad (pIqaD)",
    fontClass: "plqad-font",
    sample: "tlhIngan",
    downloadPath: "klingon/klingon.zip",
    downloadName: "klingon.zip",
    supportsUnicode: "No",
    license: "Personal",
  },
  {
    id: "klinzhai",
    name: "Plqad Klinzhai",
    fontClass: "plqad-font-klinzhai",
    sample: "Hello",
    downloadPath: "klingon/Klinzhai.ttf",
    downloadName: "Klinzhai.ttf",
    supportsUnicode: "No",
    license: "Personal",
  },
];

const BAYBAYIN_FONT_DOWNLOAD: Record<
  string,
  {
    downloadPath: string;
    downloadName: string;
    sample: string;
    supportsUnicode: string;
    license: string;
  }
> = {
  "noto-sans": {
    sample: "ᜋᜊᜓᜑᜌ᜔",
    downloadPath: "baybayin/NotoSansTagalog-Regular.ttf",
    downloadName: "NotoSansTagalog-Regular.ttf",
    supportsUnicode: "Yes",
    license: "Free",
  },
  "tagalog-doctrina": {
    sample: "Mbuhy+",
    downloadPath: "baybayin/TagDoc93.ttf",
    downloadName: "TagDoc93.ttf",
    supportsUnicode: "Both",
    license: "Free",
  },
  bagwis: {
    sample: "Mabuhayx",
    downloadPath: "baybayin/bagwis-baybayin-font.zip",
    downloadName: "bagwis-baybayin-font.zip",
    supportsUnicode: "No",
    license: "Free",
  },
  stylized: {
    sample: "Mbuhy+",
    downloadPath: "baybayin/tagalog-stylized-font.zip",
    downloadName: "tagalog-stylized-font.zip",
    supportsUnicode: "Both",
    license: "Free",
  },
  robotika: {
    sample: "Mbuhy+",
    downloadPath: "baybayin/BaybayinRobotika.ttf",
    downloadName: "BaybayinRobotika.ttf",
    supportsUnicode: "No",
    license: "Free",
  },
};

const UNICODE_ALPHABETS = new Set(["Deseret", "Hanunoo", "Ogham"]);

const ALPHABET_LICENSE: Record<string, string> = {
  Deseret: "Free",
  Hanunoo: "Free",
};

const ALPHABET_DOWNLOAD_PATH: Record<string, string> = {
  Ancients: "ancients/ancients.zip",
  Atlantean: "atlantean/atlantean-regular_xMmTX.zip",
  Cirth: "cirth/cirth-erebor.zip",
  Deseret: "deseret/deseret.zip",
  Gallifreyan: "gallifreyan/ws_simple_gallifreyan.zip",
  Hanunoo: "hanunoo/Noto_Sans_Hanunoo.zip",
  MarasEye: "maras-eye/maras-eye-font.zip",
  Matoran: "matoran/matoran.zip",
  Ogham: "ogham/Noto_Sans_Ogham.zip",
  Steel: "steel/steel alphabet font - aligned.zip",
  Tengwar: "tengwar/tengwar_quenya.zip",
  Unown: "unown/unown.zip",
};

/** Resolve a path under `src/assets/fonts/` to a Vite asset URL. */
export function getFontDownloadUrl(downloadPath: string): string | undefined {
  const key = `../assets/fonts/${downloadPath}`;
  return FONT_ASSETS[key];
}

/** Fonts available for the transliterator alphabet shown in How To Use. */
export function getFontTableRows(alphabetName: string): FontTableRow[] {
  if (alphabetName === "Baybayin") {
    return BAYBAYIN_FONTS.map((font) => {
      const download = BAYBAYIN_FONT_DOWNLOAD[font.id];
      return {
        id: font.id,
        name: font.label,
        fontClass: font.outputFontClass,
        sample: download?.sample ?? "Aba",
        downloadPath: download?.downloadPath ?? "",
        downloadName: download?.downloadName ?? "",
        supportsUnicode: download?.supportsUnicode ?? "No",
        license: download?.license ?? "Personal",
      };
    });
  }

  if (alphabetName === "Aurebesh") {
    return AUREBESH_FONT_ROWS;
  }

  if (alphabetName === "Plqad") {
    return PLQAD_FONT_ROWS;
  }

  const entry = ALPHABETS_DATA.find(
    (alphabet) => alphabet.name === alphabetName,
  );
  if (!entry) {
    return [];
  }

  const downloadPath =
    ALPHABET_DOWNLOAD_PATH[alphabetName] ??
    `${alphabetName.toLowerCase()}/${entry.downloadName}`;

  return [
    {
      id: entry.name.toLowerCase(),
      name: entry.fontName,
      fontClass: entry.outputFontClass,
      sample: getDefaultSample(alphabetName),
      downloadPath,
      downloadName: entry.downloadName,
      supportsUnicode: UNICODE_ALPHABETS.has(alphabetName) ? "Yes" : "No",
      license: ALPHABET_LICENSE[alphabetName] ?? "Personal",
    },
  ];
}

function getDefaultSample(alphabetName: string): string {
  switch (alphabetName) {
    case "Deseret":
      return "Deseret";
    case "Hanunoo":
      return "ᜋᜊᜓᜑᜌ";
    case "Ogham":
      return "Ogham";
    case "Tengwar":
      return "Tengwar";
    default:
      return alphabetName;
  }
}
