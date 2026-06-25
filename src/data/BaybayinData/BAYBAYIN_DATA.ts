export type BaybayinData = {
  symbol: string;
  letter: string;
  sound: string;
  type: "letter" | "punctuation";
};

var consonants = {
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
var consonants_no_ra = { ...consonants };
consonants_no_ra["R"] = consonants_no_ra["D"];
var vowels = {
  A: "\u1700",
  E: "\u1701",
  I: "\u1701",
  O: "\u1702",
  U: "\u1702",
};
var kudlit = { A: null, E: "\u1712", I: "\u1712", O: "\u1713", U: "\u1713" };
var kudlit_hollow = {
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
    symbol: vowels.A,
    letter: "A",
    sound: "/a/",
    type: "letter",
  },
  {
    symbol: vowels.E,
    letter: "E / I",
    sound: "/e/ /i/",
    type: "letter",
  },
  {
    symbol: vowels.O,
    letter: "O / U",
    sound: "/o/ /u/",
    type: "letter",
  },
  {
    symbol: consonants.K,
    letter: "Ca / Ka",
    sound: "/ca/ /ka/",
    type: "letter",
  },
  {
    symbol: consonants.B,
    letter: "Ba / Va",
    sound: "/ba/ /va/",
    type: "letter",
  },
  {
    symbol: consonants.D,
    letter: "Da",
    sound: "/da/",
    type: "letter",
  },
  {
    symbol: consonants.P,
    letter: "Fa / Pa / Pha",
    sound: "/fa/ /pa/",
    type: "letter",
  },
  {
    symbol: consonants.H,
    letter: "Ha",
    sound: "/ha/",
    type: "letter",
  },
  {
    symbol: consonants.G,
    letter: "Ga",
    sound: "/ga/",
    type: "letter",
  },
  {
    symbol: consonants.L,
    letter: "La",
    sound: "/la/",
    type: "letter",
  },
  {
    symbol: consonants.M,
    letter: "Ma",
    sound: "/ma/",
    type: "letter",
  },
  {
    symbol: consonants.N,
    letter: "Na",
    sound: "/na/",
    type: "letter",
  },
  {
    symbol: consonants.NG,
    letter: "Nga",
    sound: "/ŋa/",
    type: "letter",
  },
  {
    symbol: consonants.S,
    letter: "Sa / Za",
    sound: "/sa/ /za/",
    type: "letter",
  },
  {
    symbol: consonants.T,
    letter: "Ta",
    sound: "/ta/",
    type: "letter",
  },
  {
    symbol: consonants.W,
    letter: "Wa",
    sound: "/wa/",
    type: "letter",
  },
  {
    symbol: consonants.Y,
    letter: "Ya",
    sound: "/ja/",
    type: "letter",
  },
  {
    symbol: kudlit.I,
    letter: "E / I",
    sound: "/e/ /i/",
    type: "letter",
  },
  {
    symbol: kudlit.O,
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
