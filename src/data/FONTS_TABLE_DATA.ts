import { ALPHABETS_DATA } from "./ALPHABETS_DATA";
import { getAurebeshFontTableFaces } from "./AurebeshData/AUREBESH_FONTS_DATA";
import { BAYBAYIN_FONTS } from "./BaybayinData/BAYBAYIN_FONTS_DATA";
import { DESERET_LETTERS } from "./DeseretData/DESERET_DATA";
import { DESERET_FONTS } from "./DeseretData/DESERET_FONTS_DATA";
import { deseretUnicodeToLatin } from "./DeseretData/deseretLatinMap";

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
  creator?: string;
  sourceUrl?: string;
  /** When set, the font file is not hosted here. The table links out instead. */
  externalUrl?: string;
  externalLabel?: string;
  /**
   * Optional table grouping. Unicode-remapped legacy faces are shown in a
   * separate section with a short disclosure.
   */
  section?: "unicode-remapped";
};

const FONT_ASSETS = import.meta.glob(
  "../assets/fonts/**/*.{zip,ttf,otf,woff,woff2,TTF,OTF,WOFF,WOFF2}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const PLQAD_FONT_ROWS: FontTableRow[] = [
  {
    id: "plqad",
    name: "Plqad (pIqaD)",
    fontClass: "plqad-font",
    sample: "tlhIngan",
    downloadPath: "klingon/klingon.zip",
    downloadName: "klingon.zip",
    supportsUnicode: "No",
    license: "Personal use only",
    creator: "kaiserzharkhan",
    sourceUrl: "http://truefonts.blogspot.com",
  },
  {
    id: "klinzhai",
    name: "Plqad Klinzhai",
    fontClass: "plqad-font-klinzhai",
    sample: "Hello",
    downloadPath: "klingon/Klinzhai.ttf",
    downloadName: "Klinzhai.ttf",
    supportsUnicode: "No",
    license: "All rights reserved",
    creator: "PsychoGlyph",
  },
  {
    id: "plqad-mandel",
    name: "Klingon pIqaD Mandel",
    fontClass: "plqad-font-mandel",
    sample: "tlhIngan",
    downloadPath: "klingon/Klingon-pIqaD-Mandel.ttf",
    downloadName: "Klingon-pIqaD-Mandel.ttf",
    supportsUnicode: "No",
    license: "OFL",
    creator: "Mike Neff / Michael Everson",
    sourceUrl: "https://www.evertype.com/",
  },
];

const UNICODE_ALPHABETS = new Set([
  "Buhid",
  "Hanunoo",
  "Ogham",
  "Tagbanwa",
]);

type AlphabetFontCredit = {
  creator?: string;
  sourceUrl?: string;
  license: string;
  externalUrl?: string;
  externalLabel?: string;
};

/** Credits for scripts that ship a single face. Taken from each font's name table or readme. */
const ALPHABET_FONT_CREDIT: Record<string, AlphabetFontCredit> = {
  Ancients: {
    creator: "Joseph Spicer",
    license: "All rights reserved",
  },
  Atlantean: {
    creator: "The Walt Disney Company",
    license: "Copyright 1999; all rights reserved",
    externalUrl: "https://omniglot.com/conscripts/atlantean.htm",
    externalLabel: "Omniglot",
  },
  Buhid: {
    creator: "Noto Project Authors / Monotype",
    sourceUrl: "https://github.com/notofonts/buhid",
    license: "OFL",
  },
  Cirth: {
    creator: "Daniel Steven Smith",
    license: "Copyright 1998",
  },
  Gallifreyan: {
    creator: "Melanie J. Cook (Wiccked)",
    sourceUrl: "https://www.dafont.com/ws-simple-gallifreyan.font",
    license: "Personal use only; no redistribution",
    externalUrl: "https://www.dafont.com/ws-simple-gallifreyan.font",
    externalLabel: "DaFont",
  },
  Hanunoo: {
    creator: "Noto Project Authors / Monotype",
    sourceUrl: "https://github.com/notofonts/hanunoo",
    license: "OFL",
  },
  MarasEye: {
    creator: "Neale Davidson (Pixel Sagas)",
    sourceUrl: "https://www.pixelsagas.com",
    license: "Personal use only; no direct download",
    externalUrl: "https://www.pixelsagas.com",
    externalLabel: "Pixel Sagas",
  },
  Matoran: {
    creator: "Daniel U. Thibault",
    license: "Freeware",
  },
  Ogham: {
    creator: "Noto Project Authors / Monotype",
    sourceUrl: "https://github.com/notofonts/ogham",
    license: "OFL",
  },
  Steel: {
    creator: "Claincy (Colin M.)",
    license: "Unspecified",
  },
  Tagbanwa: {
    creator: "Noto Project Authors / Monotype",
    sourceUrl: "https://github.com/notofonts/tagbanwa",
    license: "OFL",
  },
  Tengwar: {
    creator: "Daniel Steven Smith",
    license: "Copyright 1998",
  },
  Unown: {
    license: "Unspecified",
  },
};

const ALPHABET_DOWNLOAD_PATH: Record<string, string> = {
  Ancients: "ancients/ancients.zip",
  Buhid: "buhid/Noto_Sans_Buhid.zip",
  Cirth: "cirth/cirth-erebor.zip",
  Hanunoo: "hanunoo/Noto_Sans_Hanunoo.zip",
  Matoran: "matoran/matoran.zip",
  Ogham: "ogham/Noto_Sans_Ogham.zip",
  Steel: "steel/steel alphabet font - aligned.zip",
  Tagbanwa: "tagbanwa/Noto_Sans_Tagbanwa.zip",
  Tengwar: "tengwar/tengwar_quenya.zip",
  Unown: "unown/unown.zip",
};

/** Resolve a path under `src/assets/fonts/` to a Vite asset URL. */
export function getFontDownloadUrl(downloadPath: string): string | undefined {
  const key = `../assets/fonts/${downloadPath}`;
  return FONT_ASSETS[key];
}

/** Fonts available for the transliterator alphabet shown in the Fonts section. */
export function getFontTableRows(alphabetName: string): FontTableRow[] {
  if (alphabetName === "Baybayin") {
    return BAYBAYIN_FONTS.map((font) => ({
      id: font.id,
      name: font.label,
      fontClass: font.outputFontClass,
      sample: font.sample,
      downloadPath: font.downloadPath,
      downloadName: font.downloadName,
      supportsUnicode: font.supportsUnicodeLabel,
      license: font.license,
      creator: font.creator,
      sourceUrl: font.sourceUrl,
    }));
  }

  if (alphabetName === "Aurebesh") {
    return getAurebeshFontTableFaces().map((font) => ({
      id: font.id,
      name: font.label,
      fontClass: font.fontClass,
      sample: font.sample,
      downloadPath: font.downloadPath,
      downloadName: font.downloadName,
      supportsUnicode: "No",
      license: font.license,
      creator: font.creator,
      sourceUrl: font.sourceUrl,
    }));
  }

  if (alphabetName === "Deseret") {
    const unicodeSample = Object.values(DESERET_LETTERS)
      .map((letter) => letter.upper)
      .join("");
    return DESERET_FONTS.map((font) => ({
      id: font.id,
      name: font.label,
      fontClass: font.outputFontClass,
      sample: font.supportsUnicode
        ? unicodeSample
        : deseretUnicodeToLatin(unicodeSample),
      downloadPath: font.downloadPath,
      downloadName: font.downloadName,
      supportsUnicode: font.supportsUnicode ? "Yes" : "No",
      license: font.license,
      creator: font.creator,
      sourceUrl: font.sourceUrl,
      ...(font.downloadPath.includes("unicode added/")
        ? { section: "unicode-remapped" as const }
        : {}),
    }));
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

  const credit = ALPHABET_FONT_CREDIT[alphabetName];
  const downloadPath = credit?.externalUrl
    ? ""
    : (ALPHABET_DOWNLOAD_PATH[alphabetName] ??
      `${alphabetName.toLowerCase()}/${entry.downloadName}`);

  return [
    {
      id: entry.name.toLowerCase(),
      name: entry.fontName,
      fontClass: entry.outputFontClass,
      sample: getDefaultSample(alphabetName),
      downloadPath,
      downloadName: entry.downloadName,
      supportsUnicode: UNICODE_ALPHABETS.has(alphabetName) ? "Yes" : "No",
      license: credit?.license ?? "Unspecified",
      ...(credit?.creator ? { creator: credit.creator } : {}),
      ...(credit?.sourceUrl ? { sourceUrl: credit.sourceUrl } : {}),
      ...(credit?.externalUrl
        ? {
            externalUrl: credit.externalUrl,
            externalLabel: credit.externalLabel,
          }
        : {}),
    },
  ];
}

function getDefaultSample(alphabetName: string): string {
  switch (alphabetName) {
    case "Buhid":
      return "ᝋᝃᝒᝇ";
    case "Hanunoo":
      return "ᜋᜊᜓᜑᜌ";
    case "Ogham":
      return "Ogham";
    case "Tagbanwa":
      return "ᝫᝪᝳᝰᝮ";
    case "Tengwar":
      return "Tengwar";
    default:
      return alphabetName;
  }
}
