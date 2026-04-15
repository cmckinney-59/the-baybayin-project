/**
 * Maps Latin letters to Unicode Ogham (U+1680–U+169C). Noto Sans Ogham only
 * covers that range, so Latin must be converted — unlike PUA “Latin-slot” fonts.
 */
const LETTER: Record<string, string> = {
  b: "\u1681",
  l: "\u1682",
  f: "\u1683",
  v: "\u1683",
  s: "\u1684",
  n: "\u1685",
  h: "\u1686",
  d: "\u1687",
  t: "\u1688",
  c: "\u1689",
  q: "\u168a",
  m: "\u168b",
  g: "\u168c",
  r: "\u168f",
  a: "\u1690",
  o: "\u1691",
  u: "\u1692",
  e: "\u1693",
  i: "\u1694",
  p: "\u1698",
  x: "\u1699",
  z: "\u168e",
  k: "\u1689",
  j: "\u1687",
  w: "\u1692",
  y: "\u1694",
};

export default function processOghamText(word: string): string {
  let out = "";
  const lower = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (lower[i] === "n" && lower[i + 1] === "g") {
      out += "\u168d";
      i++;
      continue;
    }
    const ch = word[i];
    if (/[a-z]/i.test(ch)) {
      const glyph = LETTER[ch.toLowerCase()];
      out += glyph ?? ch;
    } else {
      out += ch;
    }
  }
  return out;
}
