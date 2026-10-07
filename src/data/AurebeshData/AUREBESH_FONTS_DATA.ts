/**
 * Aurebesh font catalog for the transliterator picker and Fonts table.
 * License strings distinguish personal-only vs personal+commercial use.
 */

export type AurebeshFontId =
  | "af"
  | "pixel-sagas"
  | "cantina"
  | "hand"
  | "rodian"
  | "typewriter"
  | "docking-bay-94"
  | "oma-tres"
  | "naboo-af"
  | "ft-regular"
  | "ft-bold"
  | "droid"
  | "english";

export type AurebeshFont = {
  id: AurebeshFontId;
  label: string;
  /** CSS font-family name declared in font-faces.css */
  familyName: string;
  outputFontClass: string;
  /** Path under `src/assets/fonts/`. */
  downloadPath: string;
  downloadName: string;
  /** Short license label shown in the Fonts table. */
  license: string;
  /**
   * Explicit use scope for the UI.
   * - commercial: free for personal and commercial use
   * - personal: free for personal use only
   */
  useScope: "commercial" | "personal";
  creator: string;
  sourceUrl?: string;
  /**
   * When true, digraph + tech-number checkboxes select among the four
   * Aurebesh AF style faces (Canon / Legends × Arabic / Tech).
   */
  supportsStyleMatrix?: boolean;
};

/** Downloadable faces shown in the Fonts table (includes AF style variants). */
export type AurebeshFontTableFace = {
  id: string;
  label: string;
  fontClass: string;
  sample: string;
  downloadPath: string;
  downloadName: string;
  license: string;
  useScope: "commercial" | "personal";
  creator: string;
  sourceUrl?: string;
};

const AUREK_SOURCE = "https://aurekfonts.github.io/";
const SAMPLE = "Aurebesh 123";

export const AUREBESH_FONTS: AurebeshFont[] = [
  {
    id: "af",
    label: "Aurebesh AF",
    familyName: "Aurebesh Canon",
    outputFontClass: "aurebesh-font-canon",
    downloadPath: "aurebesh/aurebesh.zip",
    downloadName: "aurebesh.zip",
    license: "Public Domain (commercial OK)",
    useScope: "commercial",
    creator: "AurekFonts",
    sourceUrl: `${AUREK_SOURCE}?font=AurebeshAF`,
    supportsStyleMatrix: true,
  },
  {
    id: "ft-regular",
    label: "FT Aurebesh",
    familyName: "FT Aurebesh",
    outputFontClass: "aurebesh-font-ft-regular",
    downloadPath: "aurebesh/FTAurebesh/FTAurebesh-Regular.otf",
    downloadName: "FTAurebesh-Regular.otf",
    license: "OFL (commercial OK)",
    useScope: "commercial",
    creator: "Rodrigo Fuenzalida",
    sourceUrl: "https://fontesk.com/ft-aurebesh-font/",
  },
  {
    id: "ft-bold",
    label: "FT Aurebesh Bold",
    familyName: "FT Aurebesh Bold",
    outputFontClass: "aurebesh-font-ft-bold",
    downloadPath: "aurebesh/FTAurebesh/FTAurebesh-Bold.otf",
    downloadName: "FTAurebesh-Bold.otf",
    license: "OFL (commercial OK)",
    useScope: "commercial",
    creator: "Rodrigo Fuenzalida",
    sourceUrl: "https://fontesk.com/ft-aurebesh-font/",
  },
  {
    id: "rodian",
    label: "Aurebesh Rodian",
    familyName: "Aurebesh_Rodian",
    outputFontClass: "aurebesh-font-rodian",
    downloadPath: "aurebesh/Rodian/Aurebesh_Rodian.otf",
    downloadName: "Aurebesh_Rodian.otf",
    license: "Free (commercial OK)",
    useScope: "commercial",
    creator: "AurekFonts",
    sourceUrl: "https://www.dafont.com/aurebesh-rodian.font",
  },
  {
    id: "typewriter",
    label: "Aurebesh Typewriter",
    familyName: "Aurebesh_Typewriter",
    outputFontClass: "aurebesh-font-typewriter",
    downloadPath: "aurebesh/Typewriter/Aurebesh_Typewriter.otf",
    downloadName: "Aurebesh_Typewriter.otf",
    license: "Free (commercial OK)",
    useScope: "commercial",
    creator: "AurekFonts",
    sourceUrl: "https://www.dafont.com/aurebesh-typewriter.font",
  },
  {
    id: "docking-bay-94",
    label: "Docking Bay 94",
    familyName: "Docking Bay 94",
    outputFontClass: "aurebesh-font-docking-bay-94",
    downloadPath: "aurebesh/DockingBay94/DockingBay94.ttf",
    downloadName: "DockingBay94.ttf",
    license: "MIT (commercial OK)",
    useScope: "commercial",
    creator: "AurekFonts",
    sourceUrl: "https://github.com/AurekFonts/DockingBay94",
  },
  {
    id: "oma-tres",
    label: "Aurebesh Oma Tres",
    familyName: "Aurebesh_OmaTres_beta",
    outputFontClass: "aurebesh-font-oma-tres",
    downloadPath: "aurebesh/OmaTres/Aurebesh_OmaTres.otf",
    downloadName: "Aurebesh_OmaTres.otf",
    license: "MIT (commercial OK)",
    useScope: "commercial",
    creator: "AurekFonts",
    sourceUrl: "https://github.com/AurekFonts/Aurebesh_OmaTres",
  },
  {
    id: "naboo-af",
    label: "Naboo AF Aurebesh",
    familyName: "Naboo AF Aurebesh",
    outputFontClass: "aurebesh-font-naboo-af",
    downloadPath: "aurebesh/NabooAF/NabooAFAurebesh-Regular.otf",
    downloadName: "NabooAFAurebesh-Regular.otf",
    license: "Public Domain (commercial OK)",
    useScope: "commercial",
    creator: "AurekFonts",
    sourceUrl: "https://www.fontspace.com/naboo-af-aurebesh-font-f118825",
  },
  {
    id: "droid",
    label: "Aurebesh Droid",
    familyName: "Aurebesh_droid",
    outputFontClass: "aurebesh-font-droid",
    downloadPath: "aurebesh/Droid/Aurebesh-Droid.ttf",
    downloadName: "Aurebesh-Droid.ttf",
    license: "Freeware (commercial OK)",
    useScope: "commercial",
    creator: "StormtrooperOnWeekends",
    sourceUrl: "https://www.fontspace.com/aurebesh-droid-font-f35317",
  },
  {
    id: "english",
    label: "Aurebesh English",
    familyName: "Aurebesh_english",
    outputFontClass: "aurebesh-font-english",
    downloadPath: "aurebesh/English/Aurebesh-English.ttf",
    downloadName: "Aurebesh-English.ttf",
    license: "Freeware (commercial OK)",
    useScope: "commercial",
    creator: "StormtrooperOnWeekends",
    sourceUrl: "https://www.fontspace.com/aurebesh-english-font-f35314",
  },
  {
    id: "pixel-sagas",
    label: "Aurebesh (Pixel Sagas)",
    familyName: "Aurebesh",
    outputFontClass: "aurebesh-font-pixel-sagas",
    downloadPath: "aurebesh/PixelSagas/Aurebesh.otf",
    downloadName: "Aurebesh.otf",
    license: "Personal use only",
    useScope: "personal",
    creator: "Pixel Sagas (Neale Davidson)",
    sourceUrl: "https://www.dafont.com/aurebesh.font",
  },
  {
    id: "cantina",
    label: "Aurebesh Cantina",
    familyName: "Aurebesh Cantina",
    outputFontClass: "aurebesh-font-cantina",
    downloadPath: "aurebesh/Cantina/AurebeshCantina.otf",
    downloadName: "AurebeshCantina.otf",
    license: "Personal use only",
    useScope: "personal",
    creator: "Pixel Sagas (Neale Davidson)",
    sourceUrl: "https://www.dafont.com/aurebesh-cantina.font",
  },
  {
    id: "hand",
    label: "Aurebesh Hand",
    familyName: "AurebeshHand",
    outputFontClass: "aurebesh-font-hand",
    downloadPath: "aurebesh/Hand/AurebeshHand-Regular.otf",
    downloadName: "AurebeshHand-Regular.otf",
    license: "Personal use only",
    useScope: "personal",
    creator: "Cinematic Captures",
    sourceUrl: "https://www.dafont.com/aurebesh-hand.font",
  },
];

export const DEFAULT_AUREBESH_FONT_ID: AurebeshFontId = "af";

export function getAurebeshFontById(id: AurebeshFontId): AurebeshFont {
  return AUREBESH_FONTS.find((font) => font.id === id) ?? AUREBESH_FONTS[0];
}

const AF_STYLE_MATRIX = [
  ["aurebesh-font-canon", "aurebesh-font-canon-tech"],
  ["aurebesh-font-legends", "aurebesh-font-legends-tech"],
] as const;

/** Resolve CSS class for the active Aurebesh font + AF style options. */
export function getAurebeshOutputFontClass(
  fontId: AurebeshFontId,
  useCombinedCharacters: boolean,
  useTechNumbers: boolean,
): string {
  const font = getAurebeshFontById(fontId);
  if (font.supportsStyleMatrix) {
    return AF_STYLE_MATRIX[Number(useCombinedCharacters)][
      Number(useTechNumbers)
    ];
  }
  return font.outputFontClass;
}

export function aurebeshFontSupportsStyleMatrix(fontId: AurebeshFontId): boolean {
  return !!getAurebeshFontById(fontId).supportsStyleMatrix;
}

/** Rows for the Fonts table, expanding Aurebesh AF into its four style faces. */
export function getAurebeshFontTableFaces(): AurebeshFontTableFace[] {
  const faces: AurebeshFontTableFace[] = [
    {
      id: "canon",
      label: "Aurebesh AF Canon",
      fontClass: "aurebesh-font-canon",
      sample: SAMPLE,
      downloadPath: "aurebesh/AurebeshAF-Canon.otf",
      downloadName: "AurebeshAF-Canon.otf",
      license: "Public Domain (commercial OK)",
      useScope: "commercial",
      creator: "AurekFonts",
      sourceUrl: `${AUREK_SOURCE}?font=AurebeshAF`,
    },
    {
      id: "canon-tech",
      label: "Aurebesh AF Canon Tech",
      fontClass: "aurebesh-font-canon-tech",
      sample: SAMPLE,
      downloadPath: "aurebesh/AurebeshAF-CanonTech.otf",
      downloadName: "AurebeshAF-CanonTech.otf",
      license: "Public Domain (commercial OK)",
      useScope: "commercial",
      creator: "AurekFonts",
      sourceUrl: `${AUREK_SOURCE}?font=AurebeshAF`,
    },
    {
      id: "legends",
      label: "Aurebesh AF Legends",
      fontClass: "aurebesh-font-legends",
      sample: SAMPLE,
      downloadPath: "aurebesh/AurebeshAF-Legends.otf",
      downloadName: "AurebeshAF-Legends.otf",
      license: "Public Domain (commercial OK)",
      useScope: "commercial",
      creator: "AurekFonts",
      sourceUrl: `${AUREK_SOURCE}?font=AurebeshAF`,
    },
    {
      id: "legends-tech",
      label: "Aurebesh AF Legends Tech",
      fontClass: "aurebesh-font-legends-tech",
      sample: SAMPLE,
      downloadPath: "aurebesh/AurebeshAF-LegendsTech.otf",
      downloadName: "AurebeshAF-LegendsTech.otf",
      license: "Public Domain (commercial OK)",
      useScope: "commercial",
      creator: "AurekFonts",
      sourceUrl: `${AUREK_SOURCE}?font=AurebeshAF`,
    },
  ];

  for (const font of AUREBESH_FONTS) {
    if (font.supportsStyleMatrix) continue;
    faces.push({
      id: font.id,
      label: font.label,
      fontClass: font.outputFontClass,
      sample: SAMPLE,
      downloadPath: font.downloadPath,
      downloadName: font.downloadName,
      license: font.license,
      useScope: font.useScope,
      creator: font.creator,
      sourceUrl: font.sourceUrl,
    });
  }

  return faces;
}
