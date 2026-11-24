import type { KeyboardLayout } from "../../components/Keyboard/Keyboard";
import { SHORT_CARRIER, TEHTA, type VowelName } from "./tengwarEncoding";

const NUMERALS = "\u00f0\u00f1\u00f2\u00f3\u00f4\u00f5\u00f6\u00f7\u00f8\u00f9";

function key(
  id: string,
  label: string,
  value = id,
): KeyboardLayout[number][number] {
  return { id, label, value };
}

function vowelKey(vowel: VowelName): KeyboardLayout[number][number] {
  return key(vowel, SHORT_CARRIER + TEHTA.carrier[vowel]);
}

/**
 * On-screen Tengwar keyboard. The label is a Tengwar Quenya glyph.
 * The inserted value is the Latin letter the transliterator expects.
 */
export const TENGWAR_KEYBOARD_LAYOUT: KeyboardLayout = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((digit) =>
    key(digit, NUMERALS[digit === "0" ? 0 : Number(digit)], digit),
  ),
  [
    key("q", "z"),
    key("w", "y"),
    vowelKey("e"),
    key("r", "7"),
    key("t", "1"),
    key("y", "h"),
    vowelKey("u"),
    vowelKey("i"),
    vowelKey("o"),
    key("p", "q"),
  ],
  [
    vowelKey("a"),
    key("s", "8"),
    key("d", "2"),
    key("f", "e"),
    key("g", "x"),
    key("h", "9"),
    key("j", "s"),
    key("k", "z"),
    key("l", "j"),
  ],
  [
    key("z", "k"),
    key("x", "z8"),
    key("c", "z"),
    key("v", "r"),
    key("b", "w"),
    key("n", "5"),
    key("m", "t"),
  ],
  [
    key("th", "3", "th"),
    key("sh", "d", "sh"),
    key("ch", "a", "ch"),
    key("ng", "b", "ng"),
    key("ph", "e", "ph"),
    key("wh", "o", "wh"),
  ],
  [
    { id: "space", label: "Space", action: "space", width: 5 },
    { id: "enter", label: "Enter", action: "enter", width: 1.2 },
    { id: "backspace", label: "⌫", action: "backspace", width: 1.2 },
  ],
];
