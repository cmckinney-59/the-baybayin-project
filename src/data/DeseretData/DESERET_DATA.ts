export type DeseretLetter = {
  upper: string;
  lower: string;
  name: string;
  sound: string;
  example: string;
};

/** Classic Deseret letters. Modern mode overrides a few of these glyphs. */
export const DESERET_LETTERS = {
  LE: { upper: "𐐀", lower: "𐐨", name: "Long E", sound: "ee", example: "eat" },
  LA: { upper: "𐐁", lower: "𐐩", name: "Long A", sound: "ey", example: "ate" },
  LAH: { upper: "𐐂", lower: "𐐪", name: "Long Ah", sound: "ah", example: "art" },
  LAW: { upper: "𐐃", lower: "𐐫", name: "Long Aw", sound: "aw", example: "awe" },
  LO: { upper: "𐐄", lower: "𐐬", name: "Long O", sound: "oh", example: "oat" },
  LOO: { upper: "𐐅", lower: "𐐭", name: "Long OO", sound: "oo", example: "too" },
  SI: { upper: "𐐆", lower: "𐐮", name: "Short I", sound: "ih", example: "it" },
  SE: { upper: "𐐇", lower: "𐐯", name: "Short E", sound: "eh", example: "get" },
  SA: { upper: "𐐈", lower: "𐐰", name: "Short A", sound: "a", example: "at" },
  SO: { upper: "𐐉", lower: "𐐱", name: "Short O", sound: "ah", example: "hot" },
  SU: { upper: "𐐊", lower: "𐐲", name: "Short U", sound: "uh", example: "but" },
  SOO: { upper: "𐐋", lower: "𐐳", name: "Short OO", sound: "oo", example: "book" },
  EYE: { upper: "𐐌", lower: "𐐴", name: "I", sound: "eye", example: "hide" },
  OW: { upper: "𐐍", lower: "𐐵", name: "Ou", sound: "ou/ow", example: "out" },
  W: { upper: "𐐎", lower: "𐐶", name: "Woo", sound: "w/woo", example: "with" },
  Y: { upper: "𐐏", lower: "𐐷", name: "Yee", sound: "y/yee", example: "yes" },
  H: { upper: "𐐐", lower: "𐐸", name: "H", sound: "h", example: "hat" },
  P: { upper: "𐐑", lower: "𐐹", name: "Pee", sound: "p", example: "put" },
  B: { upper: "𐐒", lower: "𐐺", name: "Bee", sound: "b/bee", example: "book" },
  T: { upper: "𐐓", lower: "𐐻", name: "Tee", sound: "t", example: "time" },
  D: { upper: "𐐔", lower: "𐐼", name: "Dee", sound: "d", example: "day" },
  CH: { upper: "𐐕", lower: "𐐽", name: "Chee", sound: "ch", example: "chat" },
  J: { upper: "𐐖", lower: "𐐾", name: "Jee", sound: "j", example: "joy" },
  K: { upper: "𐐗", lower: "𐐿", name: "Kay", sound: "k", example: "kite" },
  G: { upper: "𐐘", lower: "𐑀", name: "Gay", sound: "g", example: "go" },
  F: { upper: "𐐙", lower: "𐑁", name: "Ef", sound: "f", example: "fun" },
  V: { upper: "𐐚", lower: "𐑂", name: "Vee", sound: "v", example: "van" },
  TH: { upper: "𐐛", lower: "𐑃", name: "Ehth", sound: "th (soft)", example: "think" },
  DH: { upper: "𐐜", lower: "𐑄", name: "Thee", sound: "th (hard)", example: "this" },
  S: { upper: "𐐝", lower: "𐑅", name: "Ess", sound: "s", example: "sit" },
  Z: { upper: "𐐞", lower: "𐑆", name: "Zee", sound: "z", example: "zoo" },
  SH: { upper: "𐐟", lower: "𐑇", name: "Sh", sound: "sh", example: "she" },
  ZH: { upper: "𐐠", lower: "𐑈", name: "Zh", sound: "zh", example: "vision" },
  R: { upper: "𐐡", lower: "𐑉", name: "r", sound: "r", example: "red" },
  L: { upper: "𐐢", lower: "𐑊", name: "L", sound: "l", example: "life" },
  M: { upper: "𐐣", lower: "𐑋", name: "M", sound: "m", example: "man" },
  N: { upper: "𐐤", lower: "𐑌", name: "N", sound: "n", example: "not" },
  NG: { upper: "𐐥", lower: "𐑍", name: "Eng", sound: "ng", example: "being" },
  OI: { upper: "𐐦", lower: "𐑎", name: "Oi", sound: "oi", example: "oil" },
  EW: { upper: "𐐧", lower: "𐑏", name: "You", sound: "you", example: "youth" },
} as const satisfies Record<string, DeseretLetter>;

/** Glyphs that replace the classic letter when Modern mode is on. */
export const DESERET_MODERN = {
  P: { upper: "𐐋", lower: "𐐳" },
  S: { upper: "𐐀", lower: "𐐨" },
  Y: { upper: "𐐆", lower: "𐐮" },
  LE: { upper: "𐐆", lower: "𐐮" },
  LAH: { upper: "𐐉", lower: "𐐱" },
  LAW: { upper: "𐐂", lower: "𐐪" },
  SI: { upper: "I", lower: "ı" },
  SOO: { upper: "𐐃", lower: "𐐫" },
  SH: { upper: "𐐝", lower: "𐑅" },
  TH: { upper: "Ⲑ", lower: "ⲑ" },
} as const;

/** How To Read order. Letters not listed here still exist on the keyboard. */
const DESERET_GUIDE_ORDER = [
  "LE",
  "LA",
  "LAH",
  "LAW",
  "LO",
  "LOO",
  "SI",
  "SE",
  "SA",
  "SO",
  "SU",
  "SOO",
  "EYE",
  "OW",
  "W",
  "Y",
  "H",
  "P",
  "B",
  "TH",
  "DH",
  "S",
  "Z",
  "SH",
  "ZH",
  "R",
  "L",
  "M",
  "N",
  "NG",
  "OI",
  "EW",
] as const satisfies readonly (keyof typeof DESERET_LETTERS)[];

export const DESERET_DATA = DESERET_GUIDE_ORDER.map(
  (key) => DESERET_LETTERS[key],
);
