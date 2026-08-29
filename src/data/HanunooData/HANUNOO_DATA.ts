export type HanunooData = {
  symbol: string;
  letter: string;
  sound: string;
  type: "letter" | "punctuation";
};

export const HANUNOO_VOWELS = {
  A: "\u1720",
  I: "\u1721",
  U: "\u1722",
};

export const HANUNOO_CONSONANTS = {
  K: "\u1723",
  G: "\u1724",
  NG: "\u1725",
  T: "\u1726",
  D: "\u1727",
  N: "\u1728",
  S: "\u1729",
  H: "\u172A",
  P: "\u172B",
  B: "\u172C",
  M: "\u172D",
  Y: "\u172E",
  R: "\u172F",
  L: "\u1730",
  W: "\u1731",
};

export const HANUNOO_KUDLITS = {
  I: "\u1732",
  U: "\u1733",
};

export const HANUNOO_VOWEL_KILLER = "\u1734";

export const HANUNOO_DATA: HanunooData[] = [
  {
    symbol: HANUNOO_VOWELS.A,
    letter: "A",
    sound: "/a/",
    type: "letter",
  },
  {
    symbol: HANUNOO_VOWELS.I,
    letter: "I / E",
    sound: "/i/ /e/",
    type: "letter",
  },
  {
    symbol: HANUNOO_VOWELS.U,
    letter: "U / O",
    sound: "/u/ /o/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.K,
    letter: "Ka",
    sound: "/ka/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.G,
    letter: "Ga",
    sound: "/ga/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.NG,
    letter: "Nga",
    sound: "/nga/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.T,
    letter: "Ta",
    sound: "/ta/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.D,
    letter: "Da",
    sound: "/da/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.N,
    letter: "Na",
    sound: "/na/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.S,
    letter: "Sa",
    sound: "/sa/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.H,
    letter: "Ha",
    sound: "/ha/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.P,
    letter: "Pa",
    sound: "/pa/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.B,
    letter: "Ba",
    sound: "/ba/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.M,
    letter: "Ma",
    sound: "/ma/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.Y,
    letter: "Ya",
    sound: "/ya/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.R,
    letter: "Ra",
    sound: "/ra/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.L,
    letter: "La",
    sound: "/la/",
    type: "letter",
  },
  {
    symbol: HANUNOO_CONSONANTS.W,
    letter: "Wa",
    sound: "/wa/",
    type: "letter",
  },
  {
    symbol: HANUNOO_KUDLITS.I,
    letter: "Kudlit I / E",
    sound: "/i/ /e/",
    type: "letter",
  },
  {
    symbol: HANUNOO_KUDLITS.U,
    letter: "Kudlit U / O",
    sound: "/u/ /o/",
    type: "letter",
  },
  {
    symbol: HANUNOO_VOWEL_KILLER,
    letter: "Pamudpod",
    sound: "vowel killer",
    type: "punctuation",
  },
];
