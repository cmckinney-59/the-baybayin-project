import type { PhilippineAbugidaConfig } from "../../utils/TextProcessors/philippineAbugidaUnicode";

export type BuhidData = {
  symbol: string;
  letter: string;
  sound: string;
  type: "letter" | "punctuation";
};

export const BUHID_VOWELS = {
  A: "\u1740",
  I: "\u1741",
  U: "\u1742",
};

export const BUHID_CONSONANTS = {
  K: "\u1743",
  G: "\u1744",
  NG: "\u1745",
  T: "\u1746",
  D: "\u1747",
  N: "\u1748",
  S: "\u1749",
  H: "\u174A",
  P: "\u174B",
  B: "\u174C",
  M: "\u174D",
  Y: "\u174E",
  L: "\u174F",
  W: "\u1750",
  R: "\u1751",
};

export const BUHID_KUDLITS = {
  I: "\u1752",
  U: "\u1753",
};

/** Shared Pilipino pamudpod (no Buhid-specific vowel killer in Unicode). */
export const BUHID_VOWEL_KILLER = "\u1734";

const BUHID_ABUGIDA_VOWELS = {
  A: BUHID_VOWELS.A,
  E: BUHID_VOWELS.I,
  I: BUHID_VOWELS.I,
  O: BUHID_VOWELS.U,
  U: BUHID_VOWELS.U,
};

const BUHID_ABUGIDA_KUDLITS = {
  E: BUHID_KUDLITS.I,
  I: BUHID_KUDLITS.I,
  O: BUHID_KUDLITS.U,
  U: BUHID_KUDLITS.U,
};

export const BUHID_ABUGIDA_CONFIG: PhilippineAbugidaConfig = {
  consonants: BUHID_CONSONANTS,
  vowels: BUHID_ABUGIDA_VOWELS,
  kudlits: BUHID_ABUGIDA_KUDLITS,
  virama: BUHID_VOWEL_KILLER,
};

export const BUHID_DATA: BuhidData[] = [
  {
    symbol: BUHID_VOWELS.A,
    letter: "A",
    sound: "/a/",
    type: "letter",
  },
  {
    symbol: BUHID_VOWELS.I,
    letter: "I / E",
    sound: "/i/ /e/",
    type: "letter",
  },
  {
    symbol: BUHID_VOWELS.U,
    letter: "U / O",
    sound: "/u/ /o/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.K,
    letter: "Ka",
    sound: "/ka/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.G,
    letter: "Ga",
    sound: "/ga/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.NG,
    letter: "Nga",
    sound: "/nga/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.T,
    letter: "Ta",
    sound: "/ta/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.D,
    letter: "Da",
    sound: "/da/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.N,
    letter: "Na",
    sound: "/na/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.S,
    letter: "Sa",
    sound: "/sa/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.H,
    letter: "Ha",
    sound: "/ha/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.P,
    letter: "Pa",
    sound: "/pa/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.B,
    letter: "Ba",
    sound: "/ba/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.M,
    letter: "Ma",
    sound: "/ma/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.Y,
    letter: "Ya",
    sound: "/ya/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.L,
    letter: "La",
    sound: "/la/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.W,
    letter: "Wa",
    sound: "/wa/",
    type: "letter",
  },
  {
    symbol: BUHID_CONSONANTS.R,
    letter: "Ra",
    sound: "/ra/",
    type: "letter",
  },
  {
    symbol: BUHID_KUDLITS.I,
    letter: "Kudlit I / E",
    sound: "/i/ /e/",
    type: "letter",
  },
  {
    symbol: BUHID_KUDLITS.U,
    letter: "Kudlit U / O",
    sound: "/u/ /o/",
    type: "letter",
  },
  {
    symbol: BUHID_VOWEL_KILLER,
    letter: "Pamudpod",
    sound: "vowel killer",
    type: "punctuation",
  },
];
