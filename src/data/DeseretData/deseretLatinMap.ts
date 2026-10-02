/**
 * Bee-layout mapping: Unicode Deseret → Latin (and related) code points used by
 * Joshua Erickson's Latin-mapped Deseret fonts.
 *
 * Unicode Bee fonts already include U+10400–U+1044F, so they do not need this.
 */
export const DESERET_UNICODE_TO_LATIN: Record<string, string> = {
  "𐐀": "I",
  "𐐁": "E",
  "𐐂": "A",
  "𐐃": "%",
  "𐐄": "O",
  "𐐅": "U",
  "𐐆": "#",
  "𐐇": "~",
  "𐐈": "&",
  "𐐉": "*",
  "𐐊": "_",
  "𐐌": "{",
  "𐐍": "}",
  "𐐎": "W",
  "𐐏": "Y",
  "𐐐": "H",
  "𐐑": "P",
  "𐐒": "B",
  "𐐓": "T",
  "𐐔": "D",
  "𐐕": "C",
  "𐐖": "J",
  "𐐗": "K",
  "𐐘": "G",
  "𐐙": "F",
  "𐐚": "V",
  "𐐛": ":",
  "𐐜": "|",
  "𐐝": "S",
  "𐐞": "Z",
  "𐐟": "Q",
  "𐐠": "X",
  "𐐡": "R",
  "𐐢": "L",
  "𐐣": "M",
  "𐐤": "N",
  "𐐥": ">",
  "𐐨": "i",
  "𐐩": "e",
  "𐐪": "a",
  "𐐫": "$",
  "𐐬": "o",
  "𐐭": "u",
  "𐐮": "@",
  "𐐯": "`",
  "𐐰": "^",
  "𐐱": "/",
  "𐐲": "-",
  "𐐳": "=",
  "𐐴": "[",
  "𐐵": "]",
  "𐐶": "w",
  "𐐷": "y",
  "𐐸": "h",
  "𐐹": "p",
  "𐐺": "b",
  "𐐻": "t",
  "𐐼": "d",
  "𐐽": "c",
  "𐐾": "j",
  "𐐿": "k",
  "𐑀": "g",
  "𐑁": "f",
  "𐑂": "v",
  "𐑃": ";",
  "𐑄": "\\",
  "𐑅": "s",
  "𐑆": "z",
  "𐑇": "q",
  "𐑈": "x",
  "𐑉": "r",
  "𐑊": "l",
  "𐑋": "m",
  "𐑌": "n",
  "𐑍": "<",
};

const DESERET_LATIN_TO_UNICODE: Record<string, string> = Object.fromEntries(
  Object.entries(DESERET_UNICODE_TO_LATIN).map(([unicode, latin]) => [
    latin,
    unicode,
  ]),
);

/** Remap Unicode Deseret text onto Bee Latin code points for Latin-mapped fonts. */
export function deseretUnicodeToLatin(text: string): string {
  return [...text].map((ch) => DESERET_UNICODE_TO_LATIN[ch] ?? ch).join("");
}

/** Reverse Bee Latin code points back to Unicode Deseret. */
export function deseretLatinToUnicode(text: string): string {
  return [...text].map((ch) => DESERET_LATIN_TO_UNICODE[ch] ?? ch).join("");
}
