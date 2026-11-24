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
  /** Path under `src/assets/fonts/` for the license or copyright notice. */
  licenseNoticePath?: string;
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
    downloadPath: "",
    downloadName: "klingon.zip",
    supportsUnicode: "No",
    license: "Personal use only",
    creator: "kaiserzharkhan",
    sourceUrl: "https://truefonts.blogspot.com",
    externalUrl: "https://truefonts.blogspot.com",
    externalLabel: "truefonts",
  },
  {
    id: "klinzhai",
    name: "Plqad Klinzhai",
    fontClass: "plqad-font-klinzhai",
    sample: "Hello",
    downloadPath: "",
    downloadName: "Klinzhai.ttf",
    supportsUnicode: "No",
    license: "All rights reserved",
    creator: "PsychoGlyph",
    sourceUrl: "https://www.kli.org/",
    externalUrl: "https://www.kli.org/",
    externalLabel: "Klingon Language Institute",
  },
  {
    id: "plqad-mandel",
    name: "Klingon pIqaD Mandel",
    fontClass: "plqad-font-mandel",
    sample: "tlhIngan",
    downloadPath: "klingon/klingon-piqad-mandel.zip",
    downloadName: "klingon-piqad-mandel.zip",
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
  /** Keep the face in the transliterator, and offer no file from this site. */
  noDownload?: boolean;
};

/** Credits for scripts that ship a single face. Taken from each font's name table or readme. */
const ALPHABET_FONT_CREDIT: Record<string, AlphabetFontCredit> = {
  Ancients: {
    creator: "Joseph Spicer",
    license: "All rights reserved",
    noDownload: true,
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
    sourceUrl: "https://www.acondia.com/fonts/",
    license: "Copyright 1998",
    externalUrl: "https://www.acondia.com/fonts/",
    externalLabel: "Dan Smith",
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
    sourceUrl: "https://www.17thshard.com/blogs/entry/455-steel-alphabet-font/",
    license: "Unspecified",
    externalUrl: "https://www.17thshard.com/blogs/entry/455-steel-alphabet-font/",
    externalLabel: "17th Shard",
  },
  Tagbanwa: {
    creator: "Noto Project Authors / Monotype",
    sourceUrl: "https://github.com/notofonts/tagbanwa",
    license: "OFL",
  },
  Tengwar: {
    creator: "Daniel Steven Smith",
    sourceUrl: "https://www.acondia.com/fonts/",
    license: "Copyright 1998",
    externalUrl: "https://www.acondia.com/fonts/",
    externalLabel: "Dan Smith",
  },
  Unown: {
    license: "Unspecified",
    noDownload: true,
  },
};

const ALPHABET_DOWNLOAD_PATH: Record<string, string> = {
  Buhid: "buhid/Noto_Sans_Buhid.zip",
  Hanunoo: "hanunoo/Noto_Sans_Hanunoo.zip",
  Matoran: "matoran/matoran.zip",
  Ogham: "ogham/Noto_Sans_Ogham.zip",
  Tagbanwa: "tagbanwa/Noto_Sans_Tagbanwa.zip",
};

const NORDENX_DOWNLOADS = "https://nordenx.blogspot.com/p/downloads.html";

const BAYBAYIN_DAFONT_HOSTS: Record<string, string> = {
  taal: "https://www.dafont.com/taal.font",
  "doctrina-lor": "https://www.dafont.com/baybayin-doctrina.font",
  "doctrina-lor-clear": "https://www.dafont.com/baybayin-doctrina.font",
  tawbid: "https://www.dafont.com/tawbid-pilipinas.font",
};

function baybayinHost(
  id: string,
): { externalUrl: string; externalLabel: string } | undefined {
  if (id.startsWith("nordenx-")) {
    return { externalUrl: NORDENX_DOWNLOADS, externalLabel: "Nordenx" };
  }
  const dafont = BAYBAYIN_DAFONT_HOSTS[id];
  if (dafont) {
    return { externalUrl: dafont, externalLabel: "DaFont" };
  }
  return undefined;
}

const LICENSE_ASSETS = {
  ...(import.meta.glob("../assets/fonts/**/*.{txt,md,rtf}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
  ...(import.meta.glob("../assets/fonts/**/LICENSE", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>),
};

/**
 * Open-license faces whose download is a bare font, or a zip that does not
 * already contain the license. The notice is packed into the download.
 */
const LICENSE_NOTICE_BY_FONT: Record<string, string> = {
  "baybayin/NotoSansTagalog-Regular.ttf": "baybayin/NotoTagalog-OFL.txt",
  "baybayin/NotoSerifTagalog/NotoSerifTagalog-Regular.ttf":
    "baybayin/NotoTagalog-OFL.txt",
  "baybayin/OpenBaybayin/OpenBaybayin.otf": "baybayin/OpenBaybayin/LICENSE.txt",
  "baybayin/BaybayinNeue/BaybayinNeue-Regular.otf":
    "baybayin/BaybayinNeue/OFL.txt",
  "baybayin/Tayo/BaybayinBTB30.ttf": "baybayin/Tayo/OFL.txt",
  "deseret/Analecta/Analecta.ttf": "deseret/Analecta/README.txt",
  "deseret/MPH2BDamase/damase_v.2.ttf": "deseret/MPH2BDamase/README.txt",
  "deseret/Desalph/desalph.otf": "deseret/Desalph/OFL.txt",
  "deseret/Xylocopa/IDCXylocopa.otf": "deseret/Xylocopa/LICENSE.txt",
  "deseret/Nomada/IDCNomada.otf": "deseret/Nomada/OFL.txt",
  "deseret/Hesperapis/Hesperapis-Regular.otf": "deseret/Hesperapis/OFL.txt",
  "deseret/Xenoglossa/IDCXenoglossa.ttf": "deseret/Xenoglossa/LICENSE",
  "deseret/Xenoglossa/IDCXenoglossaAlt.ttf": "deseret/Xenoglossa/LICENSE",
  "deseret/UnifontUpper/unifont_upper-18.0.01.otf":
    "deseret/UnifontUpper/OFL.txt",
  "deseret/Mellifera/MelliferaDeseretMaster.otf": "deseret/Mellifera/OFL.txt",
  "aurebesh/aurebesh.zip": "aurebesh/AUREBESH-AF-NOTICE.txt",
  "aurebesh/AurebeshAF-Canon.otf": "aurebesh/AUREBESH-AF-NOTICE.txt",
  "aurebesh/AurebeshAF-CanonTech.otf": "aurebesh/AUREBESH-AF-NOTICE.txt",
  "aurebesh/AurebeshAF-Legends.otf": "aurebesh/AUREBESH-AF-NOTICE.txt",
  "aurebesh/AurebeshAF-LegendsTech.otf": "aurebesh/AUREBESH-AF-NOTICE.txt",
  "aurebesh/FTAurebesh/FTAurebesh-Regular.otf": "aurebesh/FTAurebesh/OFL.txt",
  "aurebesh/FTAurebesh/FTAurebesh-Bold.otf": "aurebesh/FTAurebesh/OFL.txt",
  "aurebesh/DockingBay94/DockingBay94.ttf": "aurebesh/DockingBay94/LICENSE.txt",
  "aurebesh/OmaTres/Aurebesh_OmaTres.otf": "aurebesh/OmaTres/LICENSE",
  "aurebesh/NabooAF/NabooAFAurebesh-Regular.otf": "aurebesh/NabooAF/README.txt",
  "aurebesh/Web/AurebeshBloopsAF.woff2":
    "aurebesh/Web/AurebeshBloopsAF-NOTICE.txt",
  "aurebesh/Web/DroidobeshDepot-Regular.woff2":
    "aurebesh/Web/DroidobeshDepot-NOTICE.txt",
  "aurebesh/Web/ProtobeshAF.woff2": "aurebesh/Web/ProtobeshAF-NOTICE.txt",
};

function withLicenseNotice(row: FontTableRow): FontTableRow {
  const notice = LICENSE_NOTICE_BY_FONT[row.downloadPath];
  if (!notice || row.externalUrl) return row;
  const downloadName = row.downloadName.toLowerCase().endsWith(".zip")
    ? row.downloadName
    : `${row.downloadName.replace(/\.[^.]+$/, "")}.zip`;
  return { ...row, licenseNoticePath: notice, downloadName };
}

/** Resolve a path under `src/assets/fonts/` to a Vite asset URL. */
export function getFontDownloadUrl(downloadPath: string): string | undefined {
  const key = `../assets/fonts/${downloadPath}`;
  return FONT_ASSETS[key];
}

/** Resolve a license or copyright notice under `src/assets/fonts/`. */
export function getLicenseNoticeUrl(noticePath: string): string | undefined {
  const key = `../assets/fonts/${noticePath}`;
  return LICENSE_ASSETS[key];
}

/** Fonts available for the transliterator alphabet shown in the Fonts section. */
export function getFontTableRows(alphabetName: string): FontTableRow[] {
  if (alphabetName === "Baybayin") {
    return BAYBAYIN_FONTS.map((font) => {
      const host = baybayinHost(font.id);
      return {
        id: font.id,
        name: font.label,
        fontClass: font.outputFontClass,
        sample: font.sample,
        downloadPath: host ? "" : font.downloadPath,
        downloadName: font.downloadName,
        supportsUnicode: font.supportsUnicodeLabel,
        license: font.license,
        creator: font.creator,
        sourceUrl: host?.externalUrl ?? font.sourceUrl,
        ...(host ?? {}),
      };
    }).map(withLicenseNotice);
  }

  if (alphabetName === "Aurebesh") {
    return getAurebeshFontTableFaces().map((font) => ({
      id: font.id,
      name: font.label,
      fontClass: font.fontClass,
      sample: font.sample,
      downloadPath: font.externalUrl ? "" : font.downloadPath,
      downloadName: font.downloadName,
      supportsUnicode: "No",
      license: font.license,
      creator: font.creator,
      sourceUrl: font.sourceUrl,
      ...(font.externalUrl
        ? {
            externalUrl: font.externalUrl,
            externalLabel: font.externalLabel,
          }
        : {}),
    })).map(withLicenseNotice);
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
    })).map(withLicenseNotice);
  }

  if (alphabetName === "Plqad") {
    return PLQAD_FONT_ROWS.map(withLicenseNotice);
  }

  const entry = ALPHABETS_DATA.find(
    (alphabet) => alphabet.name === alphabetName,
  );
  if (!entry) {
    return [];
  }

  const credit = ALPHABET_FONT_CREDIT[alphabetName];
  const downloadPath =
    credit?.externalUrl || credit?.noDownload
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
  ].map(withLicenseNotice);
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
