export type TransliteratorFontSize = "small" | "medium" | "large" | "xlarge";

export const DEFAULT_TRANSLITERATOR_FONT_SIZE: TransliteratorFontSize =
  "medium";

export const TRANSLITERATOR_FONT_SIZE_OPTIONS: {
  id: TransliteratorFontSize;
  label: string;
  /** Longer label for tooltips / accessibility. */
  title: string;
  px: number;
}[] = [
  { id: "small", label: "S", title: "Small", px: 16 },
  { id: "medium", label: "M", title: "Medium", px: 20 },
  { id: "large", label: "L", title: "Large", px: 28 },
  { id: "xlarge", label: "XL", title: "Extra large", px: 36 },
];

export function getTransliteratorFontSizePx(
  size: TransliteratorFontSize,
): number {
  return (
    TRANSLITERATOR_FONT_SIZE_OPTIONS.find((option) => option.id === size)?.px ??
    20
  );
}
