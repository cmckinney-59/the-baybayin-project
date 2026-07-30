import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import {
  DESERET_CONSONANTS_LOWER,
  DESERET_CONSONANTS_UPPER,
  DESERET_VOWELS_LOWER,
  DESERET_VOWELS_UPPER,
} from "./DESERET_DATA";
import {
  DESERET_KEYBOARD_PHONETIC_TOKEN,
  toPhoneticInput,
} from "./deseretPhoneticMap";

/**
 * Show Deseret glyphs on the key; insert slash-delimited phonetic sound
 * into the Latin input (e.g. 𐐭 → "/oo/"). Shift/caps capitalizes the token.
 */
function letterKey(
  id: string,
  lowerGlyph: string,
  upperGlyph: string,
): KeyboardLayout[number][number] {
  const token = DESERET_KEYBOARD_PHONETIC_TOKEN[id] ?? id;
  return {
    id,
    label: lowerGlyph,
    value: toPhoneticInput(token, false),
    shiftLabel: upperGlyph,
    shiftValue: toPhoneticInput(token, true),
  };
}

/** On-screen Deseret alphabet layout (shift/caps for capitals). */
export const DESERET_KEYBOARD_LAYOUT: KeyboardLayout = [
  [
    letterKey("le", DESERET_VOWELS_LOWER.le, DESERET_VOWELS_UPPER.LE),
    letterKey("la", DESERET_VOWELS_LOWER.la, DESERET_VOWELS_UPPER.LA),
    letterKey("lah", DESERET_VOWELS_LOWER.lah, DESERET_VOWELS_UPPER.LAH),
    letterKey("law", DESERET_VOWELS_LOWER.law, DESERET_VOWELS_UPPER.LAW),
    letterKey("lo", DESERET_VOWELS_LOWER.lo, DESERET_VOWELS_UPPER.LO),
    letterKey("loo", DESERET_VOWELS_LOWER.loo, DESERET_VOWELS_UPPER.LOO),
    letterKey("si", DESERET_VOWELS_LOWER.si, DESERET_VOWELS_UPPER.SI),
    letterKey("se", DESERET_VOWELS_LOWER.se, DESERET_VOWELS_UPPER.SE),
    letterKey("sa", DESERET_VOWELS_LOWER.sa, DESERET_VOWELS_UPPER.SA),
    letterKey("so", DESERET_VOWELS_LOWER.so, DESERET_VOWELS_UPPER.SO),
  ],
  [
    letterKey("su", DESERET_VOWELS_LOWER.su, DESERET_VOWELS_UPPER.SU),
    letterKey("soo", DESERET_VOWELS_LOWER.soo, DESERET_VOWELS_UPPER.SOO),
    letterKey("eye", DESERET_VOWELS_LOWER.eye, DESERET_VOWELS_UPPER.EYE),
    letterKey("ow", DESERET_VOWELS_LOWER.ow, DESERET_VOWELS_UPPER.OW),
    letterKey("oi", DESERET_VOWELS_LOWER.oi, DESERET_VOWELS_UPPER.OI),
    letterKey("ew", DESERET_VOWELS_LOWER.ew, DESERET_VOWELS_UPPER.EW),
    letterKey("w", DESERET_CONSONANTS_LOWER.w, DESERET_CONSONANTS_UPPER.W),
    letterKey("y", DESERET_CONSONANTS_LOWER.y, DESERET_CONSONANTS_UPPER.Y),
    letterKey("h", DESERET_CONSONANTS_LOWER.h, DESERET_CONSONANTS_UPPER.H),
    letterKey("p", DESERET_CONSONANTS_LOWER.p, DESERET_CONSONANTS_UPPER.P),
  ],
  [
    letterKey("b", DESERET_CONSONANTS_LOWER.b, DESERET_CONSONANTS_UPPER.B),
    letterKey("th", DESERET_CONSONANTS_LOWER.th, DESERET_CONSONANTS_UPPER.TH),
    letterKey("dh", DESERET_CONSONANTS_LOWER.dh, DESERET_CONSONANTS_UPPER.DH),
    letterKey("s", DESERET_CONSONANTS_LOWER.s, DESERET_CONSONANTS_UPPER.S),
    letterKey("z", DESERET_CONSONANTS_LOWER.z, DESERET_CONSONANTS_UPPER.Z),
    letterKey("sh", DESERET_CONSONANTS_LOWER.sh, DESERET_CONSONANTS_UPPER.SH),
    letterKey("zh", DESERET_CONSONANTS_LOWER.zh, DESERET_CONSONANTS_UPPER.ZH),
    letterKey("t", DESERET_CONSONANTS_LOWER.t, DESERET_CONSONANTS_UPPER.T),
    letterKey("d", DESERET_CONSONANTS_LOWER.d, DESERET_CONSONANTS_UPPER.D),
    letterKey("ch", DESERET_CONSONANTS_LOWER.ch, DESERET_CONSONANTS_UPPER.CH),
  ],
  [
    letterKey("j", DESERET_CONSONANTS_LOWER.j, DESERET_CONSONANTS_UPPER.J),
    letterKey("k", DESERET_CONSONANTS_LOWER.k, DESERET_CONSONANTS_UPPER.K),
    letterKey("g", DESERET_CONSONANTS_LOWER.g, DESERET_CONSONANTS_UPPER.G),
    letterKey("f", DESERET_CONSONANTS_LOWER.f, DESERET_CONSONANTS_UPPER.F),
    letterKey("v", DESERET_CONSONANTS_LOWER.v, DESERET_CONSONANTS_UPPER.V),
    letterKey("r", DESERET_CONSONANTS_LOWER.r, DESERET_CONSONANTS_UPPER.R),
    letterKey("l", DESERET_CONSONANTS_LOWER.l, DESERET_CONSONANTS_UPPER.L),
    letterKey("m", DESERET_CONSONANTS_LOWER.m, DESERET_CONSONANTS_UPPER.M),
    letterKey("n", DESERET_CONSONANTS_LOWER.n, DESERET_CONSONANTS_UPPER.N),
    letterKey("ng", DESERET_CONSONANTS_LOWER.ng, DESERET_CONSONANTS_UPPER.NG),
  ],
  [
    {
      id: "caps",
      label: "Caps",
      action: "caps",
      width: 1.2,
    },
    {
      id: "shift",
      label: "Shift",
      action: "shift",
      width: 1.2,
    },
    {
      id: "space",
      label: "Space",
      action: "space",
      width: 5,
    },
    {
      id: "enter",
      label: "Enter",
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
