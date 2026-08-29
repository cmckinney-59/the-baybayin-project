import {
  BAYBAYIN_ABUGIDA_CONFIG,
} from "../../data/BaybayinData/BAYBAYIN_DATA";
import {
  baybayinUsesUnicodeOutput,
  type BaybayinFontId,
} from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";
import { baybayinFromPhoneticToken } from "../../data/BaybayinData/baybayinPhoneticMap";
import { replaceLettersWithUnicode } from "./philippineAbugidaUnicode";

export default function processBaybayinText(
  text: string,
  useXVowelKiller = false,
  fontId: BaybayinFontId,
  useHollowKudlits = true,
  useUnicode = false,
): string {
  const phoneticOptions = {
    fontId,
    useUnicode,
    useHollowKudlits,
    useXVowelKiller,
  };

  // Convert keyboard slash tokens (`/b/`, `/a/`, …) first so the Latin/Unicode
  // pipelines don't mangle them (same pattern as Deseret).
  let result = "";
  const slashToken = /\/([^/\n]+)\//gu;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = slashToken.exec(text)) !== null) {
    const plain = text.slice(lastIndex, match.index);
    if (plain) {
      result += processPlainBaybayin(
        plain,
        useXVowelKiller,
        fontId,
        useHollowKudlits,
        useUnicode,
      );
    }
    result += baybayinFromPhoneticToken(match[1], phoneticOptions) ?? match[0];
    lastIndex = slashToken.lastIndex;
  }
  const trailing = text.slice(lastIndex);
  if (trailing) {
    result += processPlainBaybayin(
      trailing,
      useXVowelKiller,
      fontId,
      useHollowKudlits,
      useUnicode,
    );
  }
  return result;
}

function processPlainBaybayin(
  text: string,
  useXVowelKiller: boolean,
  fontId: BaybayinFontId,
  useHollowKudlits: boolean,
  useUnicode: boolean,
): string {
  let transliteratedText = text.toLowerCase();

  if (baybayinUsesUnicodeOutput(fontId, useUnicode)) {
    return replaceLettersWithUnicode(transliteratedText, BAYBAYIN_ABUGIDA_CONFIG, {
      useHollowKudlits,
    });
  }
  return replaceLettersWithLatinAlphabet(transliteratedText, useXVowelKiller);
}

function replaceLettersWithLatinAlphabet(
  transliteratedText: string,
  useXVowelKiller: boolean,
): string {
  transliteratedText = transliteratedText.replace(/sh/g, "siy");
  transliteratedText = transliteratedText.replace(/ph/g, "f");
  transliteratedText = transliteratedText.replace(/th/g, "t");
  transliteratedText = transliteratedText.replace(/x/g, "k+s");
  transliteratedText = capitalizeSubsequentVowels(transliteratedText);
  transliteratedText = removeDuplicateConsonants(transliteratedText);
  transliteratedText = transliteratedText
    .replace(/\bng\b/g, "naN")
    .replace(/\bmga\b/g, "maNa");
  transliteratedText = transliteratedText.replace(/ng/g, "N");
  transliteratedText = addPlusIfConsonant(transliteratedText, useXVowelKiller);

  transliteratedText = removeAAfterConsonant(transliteratedText);
  transliteratedText = capitalizeVowelAfterHyphen(transliteratedText);
  transliteratedText = capitalizeVowel(transliteratedText);
  transliteratedText = removeHyphensAndApostrophes(transliteratedText);
  return transliteratedText;
}

function capitalizeSubsequentVowels(text: string): string {
  const vowelRegex = /([aeiou])([aeiou]+)/gi;
  return text.replace(
    vowelRegex,
    (_match: string, firstVowel: string, subsequentVowels: string) =>
      firstVowel + subsequentVowels.toUpperCase(),
  );
}

// This removed duplicate consonats EXCEPT when 'ngg'
function removeDuplicateConsonants(text: string): string {
  const consonantRegex = /(?<!n)g{2,}|([bcdfhjklmnpqrstvwxyz])\1+/gi;
  return text.replace(consonantRegex, (match, group1) => {
    if (match.toLowerCase() === "gg") {
      return "g";
    }
    return group1 ?? match[0];
  });
}

function addPlusIfConsonant(text: string, useXVowelKiller: boolean): string {
  const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
  const punctuationRegex = /[().,!?;:-]/;

  if (!text.trim()) {
    return "";
  }

  return text
    .split(" ")
    .map((word: string) => {
      if (!word.trim()) {
        return word;
      }

      let transformedWord = "";

      for (let i = 0; i < word.length; i++) {
        transformedWord += word[i];

        if (word[i] === " " || word[i + 1] === " ") {
          continue;
        }

        if (
          i < word.length - 1 &&
          consonantRegex.test(word[i]) &&
          (consonantRegex.test(word[i + 1]) ||
            punctuationRegex.test(word[i + 1]))
        ) {
          if (useXVowelKiller) {
            transformedWord += "x";
          } else {
            transformedWord += "+";
          }
        }
      }

      if (consonantRegex.test(word[word.length - 1])) {
        if (useXVowelKiller) {
          transformedWord += "x";
        } else {
          transformedWord += "+";
        }
      }

      return transformedWord;
    })
    .join(" ");
}

function removeAAfterConsonant(text: string): string {
  return text.replace(/([bcdfghjklmnpqrstvwxyz])a/gi, "$1");
}

function capitalizeVowelAfterHyphen(text: string): string {
  return text.replace(
    /-([aeiou])/gi,
    (_match: string, vowel: string) => "-" + vowel.toUpperCase(),
  );
}

function capitalizeVowel(text: string): string {
  return text.replace(
    /([.!?])\s*([aeiou])|(^|\s)([aeiou])/gi,
    (_match: string, p1: string, p2: string, p3: string, p4: string) =>
      (p1 ? p1 : p3) + (p2 ? p2.toUpperCase() : p4 ? p4.toUpperCase() : ""),
  );
}

function removeHyphensAndApostrophes(text: string): string {
  text = text.replace(/-/g, "");
  text = text.replace(/'/g, "");
  return text;
}
