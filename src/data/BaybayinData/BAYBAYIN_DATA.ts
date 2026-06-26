export type BaybayinData = {
  symbol: string;
  letter: string;
  sound: string;
  type: "letter" | "punctuation";
};

export const BAYBAYIN_CONSONANTS = {
  B: "\u170A",
  K: "\u1703",
  D: "\u1707",
  G: "\u1704",
  H: "\u1711",
  L: "\u170E",
  M: "\u170B",
  N: "\u1708",
  NG: "\u1705",
  P: "\u1709",
  R: "\u170D",
  S: "\u1710",
  T: "\u1706",
  W: "\u170F",
  Y: "\u170C",
};
var consonants_no_ra = { ...BAYBAYIN_CONSONANTS };
consonants_no_ra["R"] = consonants_no_ra["D"];
export const BAYBAYIN_VOWELS = {
  A: "\u1700",
  E: "\u1701",
  I: "\u1701",
  O: "\u1702",
  U: "\u1702",
};
export const BAYBAYIN_KUDLITS = {
  A: null,
  E: "\u1712",
  I: "\u1712",
  O: "\u1713",
  U: "\u1713",
};
export const BAYBAYIN_KUDLITS_HOLLOW = {
  A: null,
  E: "\u1712\ufe00",
  I: "\u1712",
  O: "\u1713\ufe00",
  U: "\u1713",
};
var virama = "\u1714";
var pamudpod = "\u1734";

export const BAYBAYIN_DATA: BaybayinData[] = [
  {
    symbol: BAYBAYIN_VOWELS.A,
    letter: "A",
    sound: "/a/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_VOWELS.E,
    letter: "E / I",
    sound: "/e/ /i/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_VOWELS.O,
    letter: "O / U",
    sound: "/o/ /u/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.K,
    letter: "Ca / Ka",
    sound: "/ca/ /ka/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.B,
    letter: "Ba / Va",
    sound: "/ba/ /va/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.D,
    letter: "Da",
    sound: "/da/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.P,
    letter: "Fa / Pa / Pha",
    sound: "/fa/ /pa/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.H,
    letter: "Ha",
    sound: "/ha/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.G,
    letter: "Ga",
    sound: "/ga/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.L,
    letter: "La",
    sound: "/la/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.M,
    letter: "Ma",
    sound: "/ma/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.N,
    letter: "Na",
    sound: "/na/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.NG,
    letter: "Nga",
    sound: "/ŋa/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.S,
    letter: "Sa / Za",
    sound: "/sa/ /za/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.T,
    letter: "Ta",
    sound: "/ta/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.W,
    letter: "Wa",
    sound: "/wa/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_CONSONANTS.Y,
    letter: "Ya",
    sound: "/ja/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_KUDLITS.I,
    letter: "E / I",
    sound: "/e/ /i/",
    type: "letter",
  },
  {
    symbol: BAYBAYIN_KUDLITS.O,
    letter: "O / U",
    sound: "/o/ /u/",
    type: "letter",
  },
  {
    symbol: "+",
    letter: "Consonant marker",
    sound: "",
    type: "punctuation",
  },
  {
    symbol: ",",
    letter: ",",
    sound: "",
    type: "punctuation",
  },
  {
    symbol: ".",
    letter: ".",
    sound: "",
    type: "punctuation",
  },
];
