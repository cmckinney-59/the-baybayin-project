import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";

/**
 * Latin → Unicode Ogham (U+1680–U+169C). Shared with the text processor.
 * Keys that share a glyph keep one primary Latin label for the keyboard.
 */
export const OGHAM_LETTER: Record<string, string> = {
  b: "\u1681",
  l: "\u1682",
  f: "\u1683",
  s: "\u1684",
  n: "\u1685",
  h: "\u1686",
  d: "\u1687",
  t: "\u1688",
  c: "\u1689",
  q: "\u168a",
  m: "\u168b",
  g: "\u168c",
  ng: "\u168d",
  z: "\u168e",
  r: "\u168f",
  a: "\u1690",
  o: "\u1691",
  u: "\u1692",
  e: "\u1693",
  i: "\u1694",
  p: "\u1698",
  x: "\u1699",
};

const OGHAM_GLYPH_TO_LATIN: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [latin, glyph] of Object.entries(OGHAM_LETTER)) {
    if (!map[glyph]) map[glyph] = latin;
  }
  return map;
})();

function letterKey(id: string): KeyboardLayout[number][number] {
  const glyph = OGHAM_LETTER[id] ?? id;
  return {
    id,
    label: glyph,
    value: id,
  };
}

/** On-screen Ogham layout: Unicode on keys, Latin phonetic insert. */
export const OGHAM_KEYBOARD_LAYOUT: KeyboardLayout = [
  [
    letterKey("b"),
    letterKey("l"),
    letterKey("f"),
    letterKey("s"),
    letterKey("n"),
    letterKey("h"),
    letterKey("d"),
  ],
  [
    letterKey("t"),
    letterKey("c"),
    letterKey("q"),
    letterKey("m"),
    letterKey("g"),
    letterKey("ng"),
    letterKey("z"),
    letterKey("r"),
  ],
  [
    letterKey("a"),
    letterKey("o"),
    letterKey("u"),
    letterKey("e"),
    letterKey("i"),
    letterKey("p"),
    letterKey("x"),
  ],
  [
    {
      id: "space",
      label: "⎵",
      action: "space",
      width: 5,
    },
    {
      id: "enter",
      label: "↵",
      action: "enter",
      width: 1.2,
    },
    {
      id: "backspace",
      label: "⌫",
      action: "backspace",
      width: 1.2,
    },
  ],
];

/** Map Ogham Unicode output back to Latin input. */
export function phoneticFromOghamText(text: string): string {
  return [...text]
    .map((char) => OGHAM_GLYPH_TO_LATIN[char] ?? char)
    .join("");
}
