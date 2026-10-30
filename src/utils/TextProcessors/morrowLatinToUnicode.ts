import {
  BAYBAYIN_CONSONANTS,
  BAYBAYIN_VOWELS,
  BAYBAYIN_KUDLITS,
  BAYBAYIN_KUDLITS_HOLLOW,
  BAYBAYIN_VOWEL_KILLERS,
  BAYBAYIN_PUNCTUATION,
} from "../../data/BaybayinData/BAYBAYIN_DATA";

export type MorrowLatinToUnicodeOptions = {
  /** Hollow kudlits for e/o when supported by the output font. */
  useHollowKudlits?: boolean;
};

/**
 * Paul Morrow Latin-mapped Baybayin (Tagalog Doctrina 1593, Lopez, etc.)
 * → Unicode Tagalog (U+1700).
 *
 * Encoding rules (as used in Maganak / Paul Morrow fonts):
 * - Consonant letter → inherent /a/ syllable (e.g. `b` → ᜊ)
 * - `N` → nga (ᜅ); `n` → na (ᜈ) — case-sensitive
 * - After a consonant, lowercase `e`/`i`/`o`/`u` → kudlit on that consonant
 * - After a consonant, uppercase `E`/`I`/`O`/`U` → inherent-a consonant, then
 *   independent vowel (e.g. `kU` → ᜃᜂ)
 * - After a consonant, `+` / `=` / `/` → virama (vowel killer)
 * - Standalone `a`/`e`/`i`/`o`/`u` (any case) → independent vowels
 * - `,` / `.` → Philippine punctuation ᜵ / ᜶
 */
export function morrowLatinToUnicode(
  text: string,
  options: MorrowLatinToUnicodeOptions = {},
): string {
  const useHollow = options.useHollowKudlits ?? false;
  const kudlitE = useHollow
    ? (BAYBAYIN_KUDLITS_HOLLOW.E ?? BAYBAYIN_KUDLITS.E ?? "")
    : (BAYBAYIN_KUDLITS.E ?? "");
  const kudlitI = BAYBAYIN_KUDLITS.I ?? "";
  const kudlitO = useHollow
    ? (BAYBAYIN_KUDLITS_HOLLOW.O ?? BAYBAYIN_KUDLITS.O ?? "")
    : (BAYBAYIN_KUDLITS.O ?? "");
  const kudlitU = BAYBAYIN_KUDLITS.U ?? "";
  const virama = BAYBAYIN_VOWEL_KILLERS.VIRAMA;

  const consonantOf = (ch: string): string | null => {
    switch (ch) {
      case "b":
      case "B":
      case "v":
      case "V":
        return BAYBAYIN_CONSONANTS.B;
      case "k":
      case "K":
      case "q":
      case "Q":
      case "c":
      case "C":
        return BAYBAYIN_CONSONANTS.K;
      case "d":
      case "D":
        return BAYBAYIN_CONSONANTS.D;
      case "g":
      case "G":
        return BAYBAYIN_CONSONANTS.G;
      case "h":
      case "H":
      case "j":
      case "J":
        return BAYBAYIN_CONSONANTS.H;
      case "l":
      case "L":
        return BAYBAYIN_CONSONANTS.L;
      case "m":
      case "M":
        return BAYBAYIN_CONSONANTS.M;
      case "n":
        return BAYBAYIN_CONSONANTS.N;
      case "N":
        return BAYBAYIN_CONSONANTS.NG;
      case "p":
      case "P":
      case "f":
      case "F":
        return BAYBAYIN_CONSONANTS.P;
      case "r":
      case "R":
        return BAYBAYIN_CONSONANTS.R;
      case "s":
      case "S":
      case "z":
      case "Z":
      case "x":
      case "X":
        return BAYBAYIN_CONSONANTS.S;
      case "t":
      case "T":
        return BAYBAYIN_CONSONANTS.T;
      case "w":
      case "W":
        return BAYBAYIN_CONSONANTS.W;
      case "y":
      case "Y":
        return BAYBAYIN_CONSONANTS.Y;
      default:
        return null;
    }
  };

  /** Kudlits are lowercase only in Paul Morrow Latin encoding. */
  const kudlitOf = (ch: string): string | null => {
    switch (ch) {
      case "e":
        return kudlitE;
      case "i":
        return kudlitI;
      case "o":
        return kudlitO;
      case "u":
        return kudlitU;
      default:
        return null;
    }
  };

  const independentOf = (ch: string): string | null => {
    switch (ch) {
      case "a":
      case "A":
        return BAYBAYIN_VOWELS.A;
      case "e":
      case "E":
        return BAYBAYIN_VOWELS.E;
      case "i":
      case "I":
        return BAYBAYIN_VOWELS.I;
      case "o":
      case "O":
        return BAYBAYIN_VOWELS.O;
      case "u":
      case "U":
        return BAYBAYIN_VOWELS.U;
      default:
        return null;
    }
  };

  const isViramaMark = (ch: string) => ch === "+" || ch === "=" || ch === "/";

  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const consonant = consonantOf(ch);
    if (consonant) {
      const next = text[i + 1];
      if (next) {
        const kudlit = kudlitOf(next);
        if (kudlit !== null) {
          out += consonant + kudlit;
          i++;
          continue;
        }
        if (isViramaMark(next)) {
          out += consonant + virama;
          i++;
          continue;
        }
      }
      // Inherent /a/ syllable. A following uppercase vowel is handled as its
      // own independent letter on the next iteration (e.g. kU → ᜃᜂ).
      out += consonant;
      continue;
    }

    if (isViramaMark(ch)) {
      // Orphan virama (should normally follow a consonant).
      out += virama;
      continue;
    }

    const independent = independentOf(ch);
    if (independent) {
      out += independent;
      continue;
    }

    if (ch === ",") {
      out += BAYBAYIN_PUNCTUATION.SINGLE;
      continue;
    }
    if (ch === ".") {
      out += BAYBAYIN_PUNCTUATION.DOUBLE;
      continue;
    }

    out += ch;
  }

  return out;
}
