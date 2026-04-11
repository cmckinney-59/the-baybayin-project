import processBaybayinText from "../utils/TextProcessors/BaybayinTextProcessor";
import processDeseretText from "../utils/TextProcessors/DeseretTextProcessor";
import processPlqadText from "../utils/TextProcessors/PlqadTextProcessor";
import processText from "../utils/TextProcessors/DefaultTextProcessor";

export type OutputFontClassMatrix = readonly [
  readonly [string, string],
  readonly [string, string],
];

export type Alphabet = {
  name: string;
  description: string;
  experimental: boolean;
  fictional: boolean;
  fontName: string;
  downloadName: string;
  processor: (word: string) => string | Promise<string>;
  outputFontClass: string;
  outputFontClassMatrix?: OutputFontClassMatrix;
};

export const ALPHABETS_DATA: Alphabet[] = [
  {
    name: "Ancients",
    description: "A fictional alphabet from Stargate SG-11",
    experimental: true,
    fictional: true,
    fontName: "Ancients",
    downloadName: "ancients.zip",
    processor: processText,
    outputFontClass: "ancients-font",
  },
  {
    name: "Atlantean",
    description: "A fictional alphabet from Atlantis: The Lost Empire",
    experimental: true,
    fictional: true,
    fontName: "Atlantean",
    downloadName: "atlantean-regular_xMmTX.zip",
    processor: processText,
    outputFontClass: "atlantean-font",
  },
  {
    name: "Aurebesh",
    description: "A fictional alphabet from Star Wars",
    experimental: false,
    fictional: true,
    fontName: "Aurebesh",
    downloadName: "aurebesh.zip",
    processor: processText,
    outputFontClassMatrix: [
      ["aurebesh-font-canon", "aurebesh-font-canon-tech"],
      ["aurebesh-font-legends", "aurebesh-font-legends-tech"],
    ],
    outputFontClass: "aurebesh-font",
  },
  {
    name: "Baybayin",
    description: "A traditional Filipino alphabet",
    experimental: false,
    fictional: false,
    fontName: "Tagalog Doctrina 1593",
    downloadName: "tagalog-stylized-font.zip",
    processor: processBaybayinText,
    outputFontClass: "baybayin-font",
  },
  {
    name: "Cirth",
    description: "A fictional alphabet made by J.R.R. Tolkien",
    experimental: true,
    fictional: true,
    fontName: "Cirth Erebor",
    downloadName: "cirth-erebor.zip",
    processor: processText,
    outputFontClass: "cirth-font",
  },
  {
    name: "Deseret",
    description: "An alphabet created by Brigham Young",
    experimental: true,
    fictional: false,
    fontName: "Deseret",
    downloadName: "deseret.zip",
    processor: processDeseretText,
    outputFontClass: "deseret-font",
  },
  {
    name: "Gallifreyan",
    description: "A fictional alphabet from Doctor Who",
    experimental: true,
    fictional: true,
    fontName: "WS Simple Gallifreyan",
    downloadName: "ws_simple_gallifreyan.zip",
    processor: processText,
    outputFontClass: "gallifreyan-font",
  },
  {
    name: "MarasEye",
    description: "A fictional alphabet from the Indiana Jones ride",
    experimental: true,
    fictional: true,
    fontName: "Maras Eye",
    downloadName: "maras-eye-font.zip",
    processor: processText,
    outputFontClass: "maras-eye-font",
  },
  {
    name: "Matoran",
    description: "A fictional alphabet from the Bionicle franchise",
    experimental: true,
    fictional: true,
    fontName: "Matoran",
    downloadName: "matoran.zip",
    processor: processText,
    outputFontClass: "matoran-font",
  },
  {
    name: "Plqad",
    description: "A fictional alphabet from the Star Trek franchise",
    experimental: true,
    fictional: true,
    fontName: "klingon font",
    downloadName: "klingon.zip",
    processor: processPlqadText,
    outputFontClass: "plqad-font",
  },
  {
    name: "Steel",
    description: "A fictional alphabet from the Mistborn series",
    experimental: true,
    fictional: true,
    fontName: "steelAlphabet",
    downloadName: "steel alphabet font - aligned.zip",
    processor: processText,
    outputFontClass: "steel-font",
  },
  {
    name: "Tengwar",
    description: "A fictional alphabet from The Lord of the Rings",
    experimental: true,
    fictional: true,
    fontName: "Tengwar Quenya",
    downloadName: "tengwar_quenya.zip",
    processor: processText,
    outputFontClass: "tengwar-font",
  },
  {
    name: "Unown",
    description: "A fictional alphabet from the Pokémon series",
    experimental: true,
    fictional: true,
    fontName: "Unown",
    downloadName: "unown.zip",
    processor: processText,
    outputFontClass: "unown-font",
  },
];

/** URL segment under `/transliterator/` (kebab-case of `name`). */
export function alphabetNameToRouteSegment(name: string): string {
  if (!name) return "";
  return name
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

/** Word/Excel font when no alphabet is selected or the key is unknown (matches previous default). */
const DEFAULT_EXPORT_FONT_NAME =
  ALPHABETS_DATA.find((a) => a.name === "Baybayin")?.fontName ??
  "Tagalog Doctrina 1593";

/** Office / export font name for a transliterator alphabet key (e.g. Word, Excel). */
export function exportFontNameForAlphabet(alphabet: string): string {
  const entry = ALPHABETS_DATA.find((a) => a.name === alphabet);
  return entry?.fontName ?? DEFAULT_EXPORT_FONT_NAME;
}
