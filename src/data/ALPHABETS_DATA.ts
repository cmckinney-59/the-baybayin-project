import processAncientsText from "../utils/TextProcessors/AncientsTextProcessor";
import processAtlanteanText from "../utils/TextProcessors/AtlanteanTextProcessor";
import processAurebeshText from "../utils/TextProcessors/AurebeshTextProcessor";
import processBaybayinText from "../utils/TextProcessors/BaybayinTextProcessor";
import processCirthText from "../utils/TextProcessors/CirthTextProcessor";
import processDeseretText from "../utils/TextProcessors/DeseretTextProcessor";
import processGallifreyanText from "../utils/TextProcessors/GallifreyanTextProcessor";
import processMarasEyeText from "../utils/TextProcessors/MarasEyeTextProcessor";
import processMatoranText from "../utils/TextProcessors/MatoranTextProcessor";
import processPlqadText from "../utils/TextProcessors/PlqadTextProcessor";
import processSteelText from "../utils/TextProcessors/SteelTextProcessor";
import processTengwarText from "../utils/TextProcessors/TengwarTextProcessor";
import processUnownText from "../utils/TextProcessors/UnownTextProcessor";

export type Alphabet = {
  name: string;
  description: string;
  experimental: boolean;
  fictional: boolean;
  fontName: string;
  downloadName: string;
  processor: (word: string) => string | Promise<string>;
};

export const ALPHABETS_DATA: Alphabet[] = [
  {
    name: "Ancients",
    description: "A fictional alphabet from Stargate SG-11",
    experimental: true,
    fictional: true,
    fontName: "Ancients",
    downloadName: "ancients.zip",
    processor: processAncientsText,
  },
  {
    name: "Atlantean",
    description: "A fictional alphabet from Atlantis: The Lost Empire",
    experimental: true,
    fictional: true,
    fontName: "Atlantean",
    downloadName: "atlantean-regular_xMmTX.zip",
    processor: processAtlanteanText,
  },
  {
    name: "Aurebesh",
    description: "A fictional alphabet from Star Wars",
    experimental: false,
    fictional: true,
    fontName: "Aurebesh",
    downloadName: "aurebesh.zip",
    processor: processAurebeshText,
  },
  {
    name: "Baybayin",
    description: "A traditional Filipino alphabet",
    experimental: false,
    fictional: false,
    fontName: "Baybayin",
    downloadName: "tagalog-stylized-font.zip",
    processor: processBaybayinText,
  },
  {
    name: "Cirth",
    description: "A fictional alphabet made by J.R.R. Tolkien",
    experimental: true,
    fictional: true,
    fontName: "Cirth",
    downloadName: "cirth-erebor.zip",
    processor: processCirthText,
  },
  {
    name: "Deseret",
    description: "An alphabet created by Brigham Young",
    experimental: true,
    fictional: false,
    fontName: "Deseret",
    downloadName: "deseret.zip",
    processor: processDeseretText,
  },
  {
    name: "Gallifreyan",
    description: "A fictional alphabet from Doctor Who",
    experimental: true,
    fictional: true,
    fontName: "Gallifreyan",
    downloadName: "ws_simple_gallifreyan.zip",
    processor: processGallifreyanText,
  },
  {
    name: "MarasEye",
    description: "A fictional alphabet from the Indiana Jones ride",
    experimental: true,
    fictional: true,
    fontName: "MarasEye",
    downloadName: "maras-eye-font.zip",
    processor: processMarasEyeText,
  },
  {
    name: "Matoran",
    description: "A fictional alphabet from the Bionicle franchise",
    experimental: true,
    fictional: true,
    fontName: "Matoran",
    downloadName: "matoran.zip",
    processor: processMatoranText,
  },
  {
    name: "Plqad",
    description: "A fictional alphabet from the Star Trek franchise",
    experimental: true,
    fictional: true,
    fontName: "Plqad",
    downloadName: "klingon.zip",
    processor: processPlqadText,
  },
  {
    name: "Steel",
    description: "A fictional alphabet from the Mistborn series",
    experimental: true,
    fictional: true,
    fontName: "Steel",
    downloadName: "steel alphabet font - aligned.zip",
    processor: processSteelText,
  },
  {
    name: "Tengwar",
    description: "A fictional alphabet from The Lord of the Rings",
    experimental: true,
    fictional: true,
    fontName: "Tengwar",
    downloadName: "tengwar_quenya.zip",
    processor: processTengwarText,
  },
  {
    name: "Unown",
    description: "A fictional alphabet from the Pokémon series",
    experimental: true,
    fictional: true,
    fontName: "Unown",
    downloadName: "unown.zip",
    processor: processUnownText,
  },
];
