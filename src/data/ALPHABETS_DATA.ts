export type Alphabet = {
  name: string;
  description: string;
  experimental: boolean;
  fictional: boolean;
  fontName: string;
  downloadName: string;
};

export const ALPHABETS_DATA: Alphabet[] = [
  {
    name: "Ancients",
    description: "A fictional alphabet from Stargate SG-11",
    experimental: true,
    fictional: true,
    fontName: "Ancients",
    downloadName: "ancients.zip",
  },
  {
    name: "Atlantean",
    description: "A fictional alphabet from Atlantis: The Lost Empire",
    experimental: true,
    fictional: true,
    fontName: "Atlantean",
    downloadName: "atlantean-regular_xMmTX.zip",
  },
  {
    name: "Aurebesh",
    description: "A fictional alphabet from Star Wars",
    experimental: false,
    fictional: true,
    fontName: "Aurebesh",
    downloadName: "aurebesh.zip",
  },
  {
    name: "Baybayin",
    description: "A traditional Filipino alphabet",
    experimental: false,
    fictional: false,
    fontName: "Baybayin",
    downloadName: "tagalog-stylized-font.zip",
  },
  {
    name: "Cirth",
    description: "A fictional alphabet made by J.R.R. Tolkien",
    experimental: true,
    fictional: true,
    fontName: "Cirth",
    downloadName: "cirth-erebor.zip",
  },
  {
    name: "Deseret",
    description: "An alphabet created by Brigham Young",
    experimental: true,
    fictional: false,
    fontName: "Deseret",
    downloadName: "deseret.zip",
  },
  {
    name: "Gallifreyan",
    description: "A fictional alphabet from Doctor Who",
    experimental: true,
    fictional: true,
    fontName: "Gallifreyan",
    downloadName: "ws_simple_gallifreyan.zip",
  },
  {
    name: "MarasEye",
    description: "A fictional alphabet from the Indiana Jones ride",
    experimental: true,
    fictional: true,
    fontName: "MarasEye",
    downloadName: "maras-eye-font.zip",
  },
  {
    name: "Matoran",
    description: "A fictional alphabet from the Bionicle franchise",
    experimental: true,
    fictional: true,
    fontName: "Matoran",
    downloadName: "matoran.zip",
  },
  {
    name: "Plqad",
    description: "A fictional alphabet from the Star Trek franchise",
    experimental: true,
    fictional: true,
    fontName: "Plqad",
    downloadName: "klingon.zip",
  },
  {
    name: "Steel",
    description: "A fictional alphabet from the Mistborn series",
    experimental: true,
    fictional: true,
    fontName: "Steel",
    downloadName: "steel alphabet font - aligned.zip",
  },
  {
    name: "Tengwar",
    description: "A fictional alphabet from The Lord of the Rings",
    experimental: true,
    fictional: true,
    fontName: "Tengwar",
    downloadName: "tengwar_quenya.zip",
  },
  {
    name: "Unown",
    description: "A fictional alphabet from the Pokémon series",
    experimental: true,
    fictional: true,
    fontName: "Unown",
    downloadName: "unown.zip",
  },
];
