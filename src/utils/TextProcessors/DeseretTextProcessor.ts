import { registerDeseret } from "@ingglish/deseret";
import { translate } from "ingglish";

registerDeseret();

const DESERET_SMALL_START = 0x10428;
const DESERET_SMALL_END = 0x1044f;
const DESERET_CASE_OFFSET = 0x28;

export default async function processDeseretText(
  text: string,
): Promise<string> {
  const translated = await translate(text, { format: "deseret" });
  return applyDeseretCasing(text, translated);
}

/** ingglish always returns Deseret small letters; restore casing from the English input. */
function applyDeseretCasing(english: string, deseret: string): string {
  const englishWords = english.match(/\S+/g) ?? [];
  const deseretWords = deseret.match(/\S+/g) ?? [];

  if (englishWords.length > 0 && englishWords.length === deseretWords.length) {
    let wordIndex = 0;
    return deseret.replace(/\S+/g, (deseretWord) =>
      applyWordCasing(englishWords[wordIndex++], deseretWord),
    );
  }

  return applyWordCasing(english, deseret);
}

function applyWordCasing(englishWord: string, deseretWord: string): string {
  const letters = [...englishWord].filter((char) => /\p{L}/u.test(char));
  if (letters.length === 0) {
    return deseretWord;
  }

  const chars = [...deseretWord];
  const allUpper = letters.every(isUppercaseLetter);

  if (allUpper) {
    return chars.map(toDeseretUpper).join("");
  }

  if (isUppercaseLetter(letters[0])) {
    const firstDeseretIndex = chars.findIndex(isDeseretSmallLetter);
    if (firstDeseretIndex >= 0) {
      chars[firstDeseretIndex] = toDeseretUpper(chars[firstDeseretIndex]);
    }
    return chars.join("");
  }

  return deseretWord;
}

function isUppercaseLetter(char: string): boolean {
  return char !== char.toLowerCase() && char === char.toUpperCase();
}

function isDeseretSmallLetter(char: string): boolean {
  const codePoint = char.codePointAt(0);
  return (
    codePoint !== undefined &&
    codePoint >= DESERET_SMALL_START &&
    codePoint <= DESERET_SMALL_END
  );
}

function toDeseretUpper(char: string): string {
  if (!isDeseretSmallLetter(char)) {
    return char;
  }
  return String.fromCodePoint(char.codePointAt(0)! - DESERET_CASE_OFFSET);
}
