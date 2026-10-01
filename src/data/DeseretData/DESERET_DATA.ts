export type DeseretData = {
  letter: string;
  name: string;
  sound: string;
  example: string;
};

/** Uppercase glyph, then lowercase glyph. */
export const DESERET_CONSONANTS = {
  B: ["𐐒", "𐐺"],
  D: ["𐐔", "𐐼"],
  F: ["𐐙", "𐑁"],
  G: ["𐐘", "𐑀"],
  H: ["𐐐", "𐐸"],
  J: ["𐐖", "𐐾"],
  K: ["𐐗", "𐐿"],
  L: ["𐐢", "𐑊"],
  M: ["𐐣", "𐑋"],
  N: ["𐐤", "𐑌"],
  P: ["𐐑", "𐐹"],
  R: ["𐐡", "𐑉"],
  S: ["𐐝", "𐑅"],
  T: ["𐐓", "𐐻"],
  V: ["𐐚", "𐑂"],
  W: ["𐐎", "𐐶"],
  Y: ["𐐏", "𐐷"],
  Z: ["𐐞", "𐑆"],
  CH: ["𐐕", "𐐽"],
  TH: ["𐐛", "𐑃"],
  DH: ["𐐜", "𐑄"],
  SH: ["𐐟", "𐑇"],
  ZH: ["𐐠", "𐑈"],
  NG: ["𐐥", "𐑍"],
} as const;

type DeseretConsonant = keyof typeof DESERET_CONSONANTS;

export const DESERET_CONSONANTS_UPPER = Object.fromEntries(
  Object.entries(DESERET_CONSONANTS).map(([key, [upper]]) => [key, upper]),
) as { [K in DeseretConsonant]: (typeof DESERET_CONSONANTS)[K][0] };

export const DESERET_CONSONANTS_LOWER = Object.fromEntries(
  Object.entries(DESERET_CONSONANTS).map(([key, [, lower]]) => [
    key.toLowerCase(),
    lower,
  ]),
) as {
  [K in DeseretConsonant as Lowercase<K>]: (typeof DESERET_CONSONANTS)[K][1];
};

export const DESERET_VOWELS = {
  LE: ["𐐀", "𐐨"],
  LA: ["𐐁", "𐐩"],
  LAH: ["𐐂", "𐐪"],
  LAW: ["𐐃", "𐐫"],
  LO: ["𐐄", "𐐬"],
  LOO: ["𐐅", "𐐭"],
  SI: ["𐐆", "𐐮"],
  SE: ["𐐇", "𐐯"],
  SA: ["𐐈", "𐐰"],
  SO: ["𐐉", "𐐱"],
  SU: ["𐐊", "𐐲"],
  SOO: ["𐐋", "𐐳"],
  EYE: ["𐐌", "𐐴"],
  OW: ["𐐍", "𐐵"],
  OI: ["𐐦", "𐑎"],
  EW: ["𐐧", "𐑏"],
} as const;

type DeseretVowel = keyof typeof DESERET_VOWELS;

export const DESERET_VOWELS_UPPER = Object.fromEntries(
  Object.entries(DESERET_VOWELS).map(([key, [upper]]) => [key, upper]),
) as { [K in DeseretVowel]: (typeof DESERET_VOWELS)[K][0] };

export const DESERET_VOWELS_LOWER = Object.fromEntries(
  Object.entries(DESERET_VOWELS).map(([key, [, lower]]) => [
    key.toLowerCase(),
    lower,
  ]),
) as {
  [K in DeseretVowel as Lowercase<K>]: (typeof DESERET_VOWELS)[K][1];
};

export const DESERET_MODERN = {
  P: ["𐐋", "𐐳"],
  S: ["𐐀", "𐐨"],
  Y: ["𐐆", "𐐮"],
  LE: ["𐐆", "𐐮"],
  LAH: ["𐐉", "𐐱"],
  LAW: ["𐐂", "𐐪"],
  SI: ["I", "ı"],
  SOO: ["𐐃", "𐐫"],
  SH: ["𐐝", "𐑅"],
  TH: ["Ⲑ", "ⲑ"],
} as const;

type DeseretModern = keyof typeof DESERET_MODERN;

export const DESERET_MODERN_UPPER = Object.fromEntries(
  Object.entries(DESERET_MODERN).map(([key, [upper]]) => [key, upper]),
) as { [K in DeseretModern]: (typeof DESERET_MODERN)[K][0] };

export const DESERET_MODERN_LOWER = Object.fromEntries(
  Object.entries(DESERET_MODERN).map(([key, [, lower]]) => [
    key.toLowerCase(),
    lower,
  ]),
) as {
  [K in DeseretModern as Lowercase<K>]: (typeof DESERET_MODERN)[K][1];
};

export const DESERET_DATA: DeseretData[] = [
  {
    letter: DESERET_VOWELS_UPPER.LE,
    name: "Long E",
    sound: "ee",
    example: "eat",
  },
  {
    letter: DESERET_VOWELS_UPPER.LA,
    name: "Long A",
    sound: "ey",
    example: "ate",
  },
  {
    letter: DESERET_VOWELS_UPPER.LAH,
    name: "Long Ah",
    sound: "ah",
    example: "art",
  },
  {
    letter: DESERET_VOWELS_UPPER.LAW,
    name: "Long Aw",
    sound: "aw",
    example: "awe",
  },
  {
    letter: DESERET_VOWELS_UPPER.LO,
    name: "Long O",
    sound: "oh",
    example: "oat",
  },
  {
    letter: DESERET_VOWELS_UPPER.LOO,
    name: "Long OO",
    sound: "oo",
    example: "too",
  },
  {
    letter: DESERET_VOWELS_UPPER.SI,
    name: "Short I",
    sound: "ih",
    example: "it",
  },
  {
    letter: DESERET_VOWELS_UPPER.SE,
    name: "Short E",
    sound: "eh",
    example: "get",
  },
  {
    letter: DESERET_VOWELS_UPPER.SA,
    name: "Short A",
    sound: "a",
    example: "at",
  },
  {
    letter: DESERET_VOWELS_UPPER.SO,
    name: "Short O",
    sound: "ah",
    example: "hot",
  },
  {
    letter: DESERET_VOWELS_UPPER.SU,
    name: "Short U",
    sound: "uh",
    example: "but",
  },
  {
    letter: DESERET_VOWELS_UPPER.SOO,
    name: "Short OO",
    sound: "oo",
    example: "book",
  },
  {
    letter: DESERET_VOWELS_UPPER.EYE,
    name: "I",
    sound: "eye",
    example: "hide",
  },
  {
    letter: DESERET_VOWELS_UPPER.OW,
    name: "Ou",
    sound: "ou/ow",
    example: "out",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.W,
    name: "Woo",
    sound: "w/woo",
    example: "with",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.Y,
    name: "Yee",
    sound: "y/yee",
    example: "yes",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.H,
    name: "H",
    sound: "h",
    example: "hat",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.P,
    name: "Pee",
    sound: "p",
    example: "put",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.B,
    name: "Bee",
    sound: "b/bee",
    example: "book",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.TH,
    name: "Ehth",
    sound: "th (soft)",
    example: "think",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.DH,
    name: "Thee",
    sound: "th (hard)",
    example: "this",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.S,
    name: "Ess",
    sound: "s",
    example: "sit",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.Z,
    name: "Zee",
    sound: "z",
    example: "zoo",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.SH,
    name: "Sh",
    sound: "sh",
    example: "she",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.ZH,
    name: "Zh",
    sound: "zh",
    example: "vision",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.R,
    name: "r",
    sound: "r",
    example: "red",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.L,
    name: "L",
    sound: "l",
    example: "life",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.M,
    name: "M",
    sound: "m",
    example: "man",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.N,
    name: "N",
    sound: "n",
    example: "not",
  },
  {
    letter: DESERET_CONSONANTS_UPPER.NG,
    name: "Ng",
    sound: "ng",
    example: "being",
  },
  {
    letter: DESERET_VOWELS_UPPER.OI,
    name: "Oi",
    sound: "oi",
    example: "oil",
  },
  {
    letter: DESERET_VOWELS_UPPER.EW,
    name: "You",
    sound: "you",
    example: "youth",
  },
];
