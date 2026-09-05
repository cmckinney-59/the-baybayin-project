import { OGHAM_LETTER } from "../../data/OghamData/oghamKeyboardLayout";

/**
 * Maps Latin letters to Unicode Ogham (U+1680–U+169C). Noto Sans Ogham only
 * covers that range, so Latin must be converted — unlike PUA “Latin-slot” fonts.
 */
const LETTER: Record<string, string> = {
  ...OGHAM_LETTER,
  // Aliases that share a glyph with a primary letter.
  v: OGHAM_LETTER.f,
  k: OGHAM_LETTER.c,
  j: OGHAM_LETTER.d,
  w: OGHAM_LETTER.u,
  y: OGHAM_LETTER.i,
};

export default function processOghamText(word: string): string {
  let out = "";
  const lower = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (lower[i] === "n" && lower[i + 1] === "g") {
      out += OGHAM_LETTER.ng;
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
