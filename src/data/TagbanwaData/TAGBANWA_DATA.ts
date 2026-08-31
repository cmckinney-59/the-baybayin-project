import type { PhilippineAbugidaConfig } from "../../utils/TextProcessors/philippineAbugidaUnicode";

export type TagbanwaData = {
  symbol: string;
  letter: string;
  sound: string;
  type: "letter" | "punctuation";
};

export const TAGBANWA_VOWELS = {
  A: "\u1760",
  I: "\u1761",
  U: "\u1762",
};

export const TAGBANWA_CONSONANTS = {
  K: "\u1763",
  G: "\u1764",
  NG: "\u1765",
  T: "\u1766",
  D: "\u1767",
  N: "\u1768",
  S: "\u1769",
  B: "\u176A",
  M: "\u176B",
  P: "\u176C",
  L: "\u176D",
  W: "\u176E",
  /** Tagbanwa has no ya letter; wa is used for /ya/ syllables. */
  Y: "\u176E",
  H: "\u1770",
  R: "\u1771",
};

export const TAGBANWA_KUDLITS = {
  I: "\u1772",
  U: "\u1773",
};

export const TAGBANWA_VOWEL_KILLER = "\u1774";

const TAGBANWA_ABUGIDA_VOWELS = {
  A: TAGBANWA_VOWELS.A,
  E: TAGBANWA_VOWELS.I,
  I: TAGBANWA_VOWELS.I,
  O: TAGBANWA_VOWELS.U,
  U: TAGBANWA_VOWELS.U,
};

const TAGBANWA_ABUGIDA_KUDLITS = {
  E: TAGBANWA_KUDLITS.I,
  I: TAGBANWA_KUDLITS.I,
  O: TAGBANWA_KUDLITS.U,
  U: TAGBANWA_KUDLITS.U,
};

export const TAGBANWA_ABUGIDA_CONFIG: PhilippineAbugidaConfig = {
  consonants: TAGBANWA_CONSONANTS,
  vowels: TAGBANWA_ABUGIDA_VOWELS,
  kudlits: TAGBANWA_ABUGIDA_KUDLITS,
  virama: TAGBANWA_VOWEL_KILLER,
};

export const TAGBANWA_DATA: TagbanwaData[] = [
  {
    symbol: TAGBANWA_VOWELS.A,
    letter: "A",
    sound: "/a/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_VOWELS.I,
    letter: "I / E",
    sound: "/i/ /e/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_VOWELS.U,
    letter: "U / O",
    sound: "/u/ /o/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.K,
    letter: "Ka",
    sound: "/ka/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.G,
    letter: "Ga",
    sound: "/ga/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.NG,
    letter: "Nga",
    sound: "/nga/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.T,
    letter: "Ta",
    sound: "/ta/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.D,
    letter: "Da",
    sound: "/da/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.N,
    letter: "Na",
    sound: "/na/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.S,
    letter: "Sa",
    sound: "/sa/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.B,
    letter: "Ba",
    sound: "/ba/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.M,
    letter: "Ma",
    sound: "/ma/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.P,
    letter: "Pa",
    sound: "/pa/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.L,
    letter: "La",
    sound: "/la/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.W,
    letter: "Wa",
    sound: "/wa/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.H,
    letter: "Ha",
    sound: "/ha/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_CONSONANTS.R,
    letter: "Ra",
    sound: "/ra/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_KUDLITS.I,
    letter: "Kudlit I / E",
    sound: "/i/ /e/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_KUDLITS.U,
    letter: "Kudlit U / O",
    sound: "/u/ /o/",
    type: "letter",
  },
  {
    symbol: TAGBANWA_VOWEL_KILLER,
    letter: "Virama",
    sound: "vowel killer",
    type: "punctuation",
  },
];
