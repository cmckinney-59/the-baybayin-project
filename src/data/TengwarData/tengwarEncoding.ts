/**
 * Dan Smith's Tengwar Quenya (1998) character codes.
 * Vowel tehtar have four horizontal positions. The class is chosen so the
 * mark sits over the bow of that tengwa, or on a carrier.
 */

export type TehtaClass = "left" | "right" | "open" | "carrier";

export type VowelName = "a" | "e" | "i" | "o" | "u" | "y";

export const TEHTA: Record<TehtaClass, Record<VowelName, string>> = {
  // Shifted right: stems on the left, and open letters such as lambe.
  left: { a: "E", e: "R", i: "T", o: "Y", u: "U", y: "\u00da" },
  // Shifted left: stems on the right.
  right: { a: "#", e: "$", i: "%", o: "^", u: "&", y: "\u00d8" },
  // Centered: no upward stem (hyarmen, rómen, silme nuquerna, yanta, úre).
  open: { a: "D", e: "F", i: "G", o: "H", u: "J", y: "\u00d9" },
  // Short carrier (`) and long carrier (~).
  carrier: { a: "C", e: "V", i: "B", o: "N", u: "M", y: "\u00db" },
};

/** Under-dot for a silent final e, matched to the same four positions. */
export const UNDER_E: Record<TehtaClass, string> = {
  left: "\u00ca",
  right: "\u00c8",
  open: "\u00c9",
  carrier: "\u00cb",
};

export const SHORT_CARRIER = "`";
export const LONG_CARRIER = "~";

/** Whole English words Tolkien wrote as a single tengwa. */
export const TENGWAR_WORD: Record<string, string> = {
  the: "@",
  of: "W",
  and: "2{",
};

export type TengwarConsonant = {
  latin: string;
  base: string;
  cls: TehtaClass;
  /** Swap to this glyph when a vowel mark sits on the letter (silme / esse). */
  nuquerna?: string;
};

/** English orthography → Tengwar Quenya keys. `latin` is the spelling the table shows. */
export const TENGWAR_CONSONANTS: readonly TengwarConsonant[] = [
  { latin: "t", base: "1", cls: "left" },
  { latin: "p", base: "q", cls: "right" },
  { latin: "ch", base: "a", cls: "left" },
  { latin: "k", base: "z", cls: "right" },
  { latin: "d", base: "2", cls: "left" },
  { latin: "b", base: "w", cls: "right" },
  { latin: "j", base: "s", cls: "left" },
  { latin: "g", base: "x", cls: "right" },
  { latin: "th", base: "3", cls: "left" },
  { latin: "dh", base: "4", cls: "left" },
  { latin: "f", base: "e", cls: "right" },
  { latin: "sh", base: "d", cls: "left" },
  { latin: "v", base: "r", cls: "right" },
  { latin: "gh", base: "v", cls: "right" },
  { latin: "n", base: "5", cls: "left" },
  { latin: "m", base: "t", cls: "right" },
  { latin: "ng", base: "b", cls: "right" },
  { latin: "r (before a vowel)", base: "7", cls: "open" },
  { latin: "r (elsewhere)", base: "6", cls: "left" },
  { latin: "w", base: "y", cls: "right" },
  { latin: "w (after a vowel)", base: ".", cls: "carrier" },
  { latin: "y", base: "h", cls: "open" },
  { latin: "y (after a vowel)", base: "l", cls: "carrier" },
  { latin: "l", base: "j", cls: "left" },
  { latin: "s", base: "8", cls: "open", nuquerna: "i" },
  { latin: "z", base: "k", cls: "open", nuquerna: "," },
  { latin: "h", base: "9", cls: "open" },
  { latin: "wh", base: "o", cls: "right" },
];

export const TENGWAR_VOWELS: readonly { latin: string; sample: string }[] = (
  ["a", "e", "i", "o", "u", "y"] as const
).map((vowel) => ({
  latin: vowel,
  sample: SHORT_CARRIER + TEHTA.carrier[vowel],
}));

/** Glyphs for the drifting background. */
export const TENGWAR_PARTICLE_GLYPHS = [
  "1E",
  "q#",
  "t#",
  "jR",
  "9",
  "8",
  "7D",
  "`C",
  "`V",
  "2",
  "z#",
  "w",
  "5",
  "e",
];
