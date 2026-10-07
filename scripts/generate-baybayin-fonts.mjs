import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const fontkit = require("fontkit");

const root = "src/assets/fonts/baybayin";
const UNICODE_SAMPLE = "ᜋᜊᜓᜑᜌ᜔";
const LATIN_PLUS_SAMPLE = "Mbuhy+";
const LATIN_X_SAMPLE = "Mabuhayx";

/** @typedef {{
 *  id: string,
 *  label: string,
 *  familyName: string,
 *  outputFontClass: string,
 *  downloadPath: string,
 *  downloadName: string,
 *  license: string,
 *  creator: string,
 *  sourceUrl?: string,
 *  supportsUnicodeLabel: "Yes"|"No"|"Both",
 *  sample: string,
 *  supportsUnicodeOption?: boolean,
 *  unicodeOnly?: boolean,
 *  supportsXVowelKiller?: boolean,
 *  supportsHollowKudlits?: boolean,
 *  supportsRaKey?: boolean,
 *  format: "truetype"|"opentype",
 * }} FontDef */

/** @type {FontDef[]} */
const core = [
  {
    id: "noto-sans",
    label: "Noto Sans Baybayin",
    familyName: "Noto Sans Baybayin",
    outputFontClass: "noto-sans-baybayin",
    downloadPath: "baybayin/NotoSansTagalog-Regular.ttf",
    downloadName: "NotoSansTagalog-Regular.ttf",
    license: "OFL",
    creator: "Google",
    sourceUrl: "https://fonts.google.com/noto/specimen/Noto+Sans+Tagalog",
    unicodeOnly: true,
    supportsHollowKudlits: true,
    supportsRaKey: true,
    supportsUnicodeLabel: "Yes",
    sample: UNICODE_SAMPLE,
    format: "truetype",
  },
  {
    id: "noto-serif",
    label: "Noto Serif Baybayin",
    familyName: "Noto Serif Baybayin",
    outputFontClass: "noto-serif-baybayin",
    downloadPath: "baybayin/NotoSerifTagalog/NotoSerifTagalog-Regular.ttf",
    downloadName: "NotoSerifTagalog-Regular.ttf",
    license: "OFL",
    creator: "Fredrick Brennan / Google Noto",
    sourceUrl: "https://github.com/ctrlcctrlv/Noto-Serif-Tagalog",
    unicodeOnly: true,
    supportsHollowKudlits: true,
    supportsRaKey: true,
    supportsUnicodeLabel: "Yes",
    sample: UNICODE_SAMPLE,
    format: "truetype",
  },
  {
    id: "open-baybayin",
    label: "OpenBaybayin",
    familyName: "OpenBaybayin",
    outputFontClass: "open-baybayin-font",
    downloadPath: "baybayin/OpenBaybayin/OpenBaybayin.otf",
    downloadName: "OpenBaybayin.otf",
    license: "OFL",
    creator: "Fredrick Brennan",
    sourceUrl: "https://github.com/ctrlcctrlv/OpenBaybayin",
    unicodeOnly: true,
    supportsHollowKudlits: true,
    supportsRaKey: true,
    supportsUnicodeLabel: "Yes",
    sample: UNICODE_SAMPLE,
    format: "opentype",
  },
  {
    id: "baybayin-neue",
    label: "Baybayin Neue",
    familyName: "Baybayin Neue",
    outputFontClass: "baybayin-neue-font",
    downloadPath: "baybayin/BaybayinNeue/BaybayinNeue-Regular.otf",
    downloadName: "BaybayinNeue-Regular.otf",
    license: "OFL",
    creator: "John Abila",
    sourceUrl: "https://github.com/JohnAbila/BaybayinNeue",
    unicodeOnly: true,
    supportsUnicodeLabel: "Yes",
    sample: UNICODE_SAMPLE,
    format: "opentype",
  },
  {
    id: "tagalog-doctrina",
    label: "Tagalog Doctrina 1593",
    familyName: "Baybayin",
    outputFontClass: "baybayin-font",
    downloadPath: "baybayin/TagDoc93.ttf",
    downloadName: "TagDoc93.ttf",
    license: "Free",
    creator: "Paul Morrow",
    sourceUrl: "http://www.paulmorrow.ca/fonts.htm",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "baybayin-lopez",
    label: "Baybayin Lopez",
    familyName: "Baybayin Lopez",
    outputFontClass: "baybayin-lopez-font",
    downloadPath: "baybayin/PaulMorrow/BayLopez.ttf",
    downloadName: "BayLopez.ttf",
    license: "Free",
    creator: "Paul Morrow",
    sourceUrl: "http://www.paulmorrow.ca/fonts.htm",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "bikol-mintz",
    label: "Bikol Mintz",
    familyName: "Bikol Mintz",
    outputFontClass: "bikol-mintz-font",
    downloadPath: "baybayin/PaulMorrow/BikMintz.ttf",
    downloadName: "BikMintz.ttf",
    license: "Free",
    creator: "Paul Morrow",
    sourceUrl: "http://www.paulmorrow.ca/fonts.htm",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "bisaya-hervas",
    label: "Bisaya Hervás",
    familyName: "Bisaya Hervas",
    outputFontClass: "bisaya-hervas-font",
    downloadPath: "baybayin/PaulMorrow/BisHerv.ttf",
    downloadName: "BisHerv.ttf",
    license: "Free",
    creator: "Paul Morrow",
    sourceUrl: "http://www.paulmorrow.ca/fonts.htm",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "stylized",
    label: "Tagalog Stylized",
    familyName: "Baybayin Stylized",
    outputFontClass: "baybayin-stylized-font",
    downloadPath: "baybayin/tagalog-stylized-font.zip",
    downloadName: "tagalog-stylized-font.zip",
    license: "Free",
    creator: "Paul Morrow",
    sourceUrl: "http://www.paulmorrow.ca/fonts.htm",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "tayo",
    label: "Baybayin Tayo Handwriting",
    familyName: "Baybayin Tayo Handwriting",
    outputFontClass: "baybayin-tayo-font",
    downloadPath: "baybayin/Tayo/BaybayinBTB30.ttf",
    downloadName: "BaybayinBTB30.ttf",
    license: "Free",
    creator: "Elijah Bayles",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "bagwis",
    label: "Bagwis Baybayin",
    familyName: "Bagwis Baybayin",
    outputFontClass: "bagwis-font",
    downloadPath: "baybayin/bagwis-baybayin-font.zip",
    downloadName: "bagwis-baybayin-font.zip",
    license: "Freeware",
    creator: "EdeL (edelpona)",
    sourceUrl: "https://www.dafont.com/bagwis-baybayin.font",
    supportsXVowelKiller: true,
    supportsRaKey: true,
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "truetype",
  },
  {
    id: "hiraya",
    label: "Hiraya Baybayin",
    familyName: "Hiraya_edl_b18x",
    outputFontClass: "hiraya-baybayin-font",
    downloadPath: "baybayin/Hiraya/Hiraya_Baybayin.ttf",
    downloadName: "Hiraya_Baybayin.ttf",
    license: "Freeware",
    creator: "EdeL (edelpona)",
    sourceUrl: "https://www.dafont.com/hiraya-baybayin.font",
    supportsXVowelKiller: true,
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "truetype",
  },
  {
    id: "mahiwaga",
    label: "Mahiwaga Baybayin",
    familyName: "Mahiwaga_baybayin_font",
    outputFontClass: "mahiwaga-baybayin-font",
    downloadPath: "baybayin/Mahiwaga/Mahiwaga_Baybayin_Font.ttf",
    downloadName: "Mahiwaga_Baybayin_Font.ttf",
    license: "Freeware",
    creator: "EdeL (edelpona)",
    sourceUrl: "https://www.dafont.com/mahiwaga-baybayin.font",
    supportsXVowelKiller: true,
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "truetype",
  },
  {
    id: "rounded",
    label: "Baybayin Rounded",
    familyName: "Baybayin Rounded",
    outputFontClass: "baybayin-rounded-font",
    downloadPath: "baybayin/Rounded/BaybayinRoundedRegular-3VXy.ttf",
    downloadName: "BaybayinRoundedRegular-3VXy.ttf",
    license: "Freeware",
    creator: "Alvin Funelas",
    sourceUrl: "https://www.fontspace.com/baybayin-rounded-font-f30348",
    supportsUnicodeLabel: "No",
    sample: "Mabuhay",
    format: "truetype",
  },
  {
    id: "kasarinlan",
    label: "Kasarinlan Baybayin",
    familyName: "Kasarinlan Baybayin Font",
    outputFontClass: "kasarinlan-baybayin-font",
    downloadPath: "baybayin/Kasarinlan/KasarinlanBaybayinFont-Regular.ttf",
    downloadName: "KasarinlanBaybayinFont-Regular.ttf",
    license: "Freeware",
    creator: "Alvin Funelas",
    sourceUrl: "https://www.dafont.com/kasarinlan-baybayin.font",
    supportsUnicodeLabel: "No",
    sample: "Mabuhay",
    format: "truetype",
  },
  {
    id: "taal",
    label: "TAAL",
    familyName: "TAAL",
    outputFontClass: "taal-baybayin-font",
    downloadPath: "baybayin/TAAL/TAAL.ttf",
    downloadName: "TAAL.ttf",
    license: "Personal use only",
    creator: "Apulakan Siklab (Marthy Austria)",
    sourceUrl: "https://www.dafont.com/taal.font",
    supportsXVowelKiller: true,
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "truetype",
  },
  {
    id: "tagalogika",
    label: "Tagalogika",
    familyName: "Tagalogika",
    outputFontClass: "tagalogika-font",
    downloadPath: "baybayin/Tagalogika/Tagalogika.ttf",
    downloadName: "Tagalogika.ttf",
    license: "Freeware",
    creator: "Gunarta",
    sourceUrl: "https://www.fontspace.com/tagalogika-font-f22087",
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "truetype",
  },
  {
    id: "doctrina-lor",
    label: "Baybayin Doctrina (Lor)",
    familyName: "Baybayin Doctrina",
    outputFontClass: "baybayin-doctrina-lor-font",
    downloadPath: "baybayin/JohnrelLor/BaybayinDoctrina.otf",
    downloadName: "BaybayinDoctrina.otf",
    license: "Personal use only",
    creator: "Johnrel Lor",
    sourceUrl: "https://www.dafont.com/baybayin-doctrina.font",
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "opentype",
  },
  {
    id: "doctrina-lor-clear",
    label: "Baybayin Doctrina Clear",
    familyName: "BaybayinDoctrinaClear",
    outputFontClass: "baybayin-doctrina-clear-font",
    downloadPath: "baybayin/JohnrelLor/BaybayinDoctrinaClear.ttf",
    downloadName: "BaybayinDoctrinaClear.ttf",
    license: "Personal use only",
    creator: "Johnrel Lor",
    sourceUrl: "https://www.dafont.com/baybayin-doctrina.font",
    supportsXVowelKiller: true,
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "truetype",
  },
  {
    id: "tawbid",
    label: "Tawbid Pilipinas",
    familyName: "Tawbid Pilipinas",
    outputFontClass: "tawbid-pilipinas-font",
    downloadPath: "baybayin/Tawbid/TawbidPilipinas21R.ttf",
    downloadName: "TawbidPilipinas21R.ttf",
    license: "Personal use only",
    creator: "Tawbid Baybayin / John Van Leyson",
    sourceUrl: "https://www.dafont.com/tawbid-pilipinas.font",
    supportsUnicodeOption: true,
    supportsUnicodeLabel: "Both",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "robotika",
    label: "Baybayin Robotika",
    familyName: "Baybayin Robotika",
    outputFontClass: "baybayin-robotika-font",
    downloadPath: "baybayin/BaybayinRobotika.ttf",
    downloadName: "BaybayinRobotika.ttf",
    license: "Free (personal & commercial)",
    creator: "Lloyd Zapanta",
    sourceUrl: "https://lloydzapanta.gumroad.com/",
    supportsUnicodeLabel: "No",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "chochin",
    label: "Baybayin Chochin",
    familyName: "Baybayin Chochin",
    outputFontClass: "baybayin-chochin-font",
    downloadPath: "baybayin/BAYBAYIN CHOCHIN FREE_09242018.ttf",
    downloadName: "BaybayinChochin.ttf",
    license: "Freeware",
    creator: "Lloyd Zapanta",
    sourceUrl: "https://lloydzapanta.gumroad.com/",
    supportsUnicodeLabel: "No",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "malibata-neue",
    label: "Malibata Neue",
    familyName: "Malibata Neue",
    outputFontClass: "malibata-neue-font",
    downloadPath: "baybayin/Malibata-Neue.ttf",
    downloadName: "Malibata-Neue.ttf",
    license: "CC BY-SA 3.0",
    creator: "Aaron Amar",
    sourceUrl: "https://fontstruct.com/fontstructions/show/635926",
    supportsUnicodeLabel: "No",
    sample: LATIN_PLUS_SAMPLE,
    format: "truetype",
  },
  {
    id: "matatas-one",
    label: "Matatas One",
    familyName: "Matatas One",
    outputFontClass: "matatas-one-font",
    downloadPath: "baybayin/matatas_one.otf",
    downloadName: "matatas_one.otf",
    license: "Free (personal & commercial)",
    creator: "Aaron Amar",
    sourceUrl: "https://aaronamar.gumroad.com/l/matatas1",
    supportsXVowelKiller: true,
    supportsUnicodeLabel: "No",
    sample: LATIN_X_SAMPLE,
    format: "opentype",
  },
];

const nordenxDir = path.join(root, "Nordenx");
const nordenxFiles = fs
  .readdirSync(nordenxDir)
  .filter((f) => /\.(ttf|otf)$/i.test(f))
  .sort();

/** @type {FontDef[]} */
const nordenx = nordenxFiles.map((file) => {
  const font = fontkit.openSync(path.join(nordenxDir, file));
  const tag = font.characterSet.filter((c) => c >= 0x1700 && c <= 0x171f).length;
  const style = file.replace(/^BaybayinModern-/, "").replace(/\.(ttf|otf)$/i, "");
  const id = `nordenx-${style.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const hasUnicode = tag > 0;
  return {
    id,
    label: `Baybayin Modern ${style}`,
    familyName: font.familyName,
    outputFontClass: `baybayin-font-${id}`,
    downloadPath: `baybayin/Nordenx/${file}`,
    downloadName: file,
    license: "Personal use only",
    creator: "Norman de los Santos (Nordenx)",
    sourceUrl: "http://nordenx.blogspot.com/p/downloads.html",
    supportsUnicodeOption: hasUnicode || undefined,
    supportsUnicodeLabel: hasUnicode ? "Both" : "No",
    sample: LATIN_PLUS_SAMPLE,
    format: file.toLowerCase().endsWith(".otf") ? "opentype" : "truetype",
  };
});

const all = [...core, ...nordenx];

function flags(f) {
  const lines = [];
  if (f.supportsUnicodeOption) lines.push("    supportsUnicodeOption: true,");
  if (f.unicodeOnly) lines.push("    unicodeOnly: true,");
  if (f.supportsXVowelKiller) lines.push("    supportsXVowelKiller: true,");
  if (f.supportsHollowKudlits) lines.push("    supportsHollowKudlits: true,");
  if (f.supportsRaKey) lines.push("    supportsRaKey: true,");
  return lines.join("\n");
}

const ids = all.map((f) => `  | "${f.id}"`).join("\n");
const entries = all
  .map((f) => {
    const fl = flags(f);
    return `  {
    id: "${f.id}",
    label: ${JSON.stringify(f.label)},
    familyName: ${JSON.stringify(f.familyName)},
    outputFontClass: "${f.outputFontClass}",
    downloadPath: ${JSON.stringify(f.downloadPath)},
    downloadName: ${JSON.stringify(f.downloadName)},
    license: ${JSON.stringify(f.license)},
    supportsUnicodeLabel: ${JSON.stringify(f.supportsUnicodeLabel)},
    sample: ${JSON.stringify(f.sample)},
    creator: ${JSON.stringify(f.creator)},${
      f.sourceUrl ? `\n    sourceUrl: ${JSON.stringify(f.sourceUrl)},` : ""
    }${fl ? `\n${fl}` : ""}
  }`;
  })
  .join(",\n");

const ts = `export type BaybayinFontId =
${ids};

export type BaybayinFont = {
  id: BaybayinFontId;
  label: string;
  /** CSS font-family name declared in font-faces.css */
  familyName: string;
  outputFontClass: string;
  /** Path under \`src/assets/fonts/\`. */
  downloadPath: string;
  downloadName: string;
  license: string;
  /** Display value for Fonts table Unicode column. */
  supportsUnicodeLabel: "Yes" | "No" | "Both";
  sample: string;
  creator?: string;
  /** Attribution / homepage for the font family. */
  sourceUrl?: string;
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
${entries},
];

/** Fonts that expose the "Use Unicode" checkbox. */
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
  return BAYBAYIN_FONTS.find((font) => font.id === id) ?? BAYBAYIN_FONTS[0];
}

export function getBaybayinFontClass(id: BaybayinFontId): string {
  return getBaybayinFontById(id).outputFontClass;
}
`;

fs.writeFileSync("src/data/BaybayinData/BAYBAYIN_FONTS_DATA.ts", ts);

let css = fs.readFileSync("src/font-faces.css", "utf8");
const classAnchor = ".ancients-font {";
const faceInsertAt = css.indexOf(classAnchor);
if (faceInsertAt === -1) throw new Error("Could not find class anchor in font-faces.css");

let faces = "\n/* Additional Baybayin faces */\n";
let classes = "";
const alreadyFamily = new Set();
for (const f of all) {
  if (f.downloadPath.endsWith(".zip")) continue;
  const familyDecl = `font-family: "${f.familyName}"`;
  const needsFace =
    !css.includes(familyDecl) && !alreadyFamily.has(f.familyName);
  if (needsFace) {
    faces += `
@font-face {
  font-family: "${f.familyName}";
  src: url("./assets/fonts/${f.downloadPath}") format("${f.format}");
  font-display: swap;
}
`;
    alreadyFamily.add(f.familyName);
  }
  if (!css.includes(`.${f.outputFontClass}`)) {
    classes += `.${f.outputFontClass} {
  font-family: "${f.familyName}", sans-serif;
}
`;
  }
}

css = css.slice(0, faceInsertAt) + faces + "\n" + css.slice(faceInsertAt);
const matatasBlock = `.matatas-one-font {
  font-family: "Matatas One", sans-serif;
}`;
if (!css.includes(matatasBlock)) throw new Error("matatas block missing");
css = css.replace(matatasBlock, `${matatasBlock}\n${classes}`);

fs.writeFileSync("src/font-faces.css", css);
console.log(`Wrote ${all.length} Baybayin fonts (${nordenx.length} Nordenx).`);
