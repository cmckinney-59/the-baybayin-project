import {
  BAYBAYIN_CONSONANTS as _consonants,
  BAYBAYIN_VOWELS as _vowels,
  BAYBAYIN_KUDLITS as _kudlits,
  BAYBAYIN_KUDLITS_HOLLOW as _kudlitsHollow,
} from "../../data/BaybayinData/BAYBAYIN_DATA";
import type { BaybayinFontId } from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

export default function processBaybayinText(
  text: string,
  useXVowelKiller = false,
  fontId: BaybayinFontId,
  hollowKudlits = false,
): string {
  let transliteratedText = text.toLowerCase();
  if (fontId === "noto-sans") {
    return replaceLettersWithSymbols(transliteratedText);
  }
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
  transliteratedText = transliteratedText.replace(/-/g, "");
  transliteratedText = transliteratedText.replace(
    /([a-zA-Z])'([a-zA-Z])/g,
    "$1$2",
  );
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
    .join(" ")
    .trim();
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

function replaceLettersWithSymbols(text: string): string {
  // Handle consonants followed by 'a'
  text = text.replace(/ba/g, _consonants.B);
  text = text.replace(/ka/g, _consonants.K);
  text = text.replace(/da/g, _consonants.D);
  text = text.replace(/fa/g, _consonants.P);
  text = text.replace(/ha/g, _consonants.H);
  text = text.replace(/ga/g, _consonants.G);
  text = text.replace(/la/g, _consonants.L);
  text = text.replace(/ma/g, _consonants.M);
  text = text.replace(/na/g, _consonants.N);
  text = text.replace(/nga/g, _consonants.NG);
  text = text.replace(/sa/g, _consonants.S);
  text = text.replace(/ta/g, _consonants.T);
  text = text.replace(/wa/g, _consonants.W);
  text = text.replace(/ya/g, _consonants.Y);

  // Handle consonants followed by 'e'
  text = text.replace(/be/g, _consonants.B + _kudlitsHollow.E);
  text = text.replace(/ke/g, _consonants.K + _kudlitsHollow.E);
  text = text.replace(/de/g, _consonants.D + _kudlitsHollow.E);
  text = text.replace(/fe/g, _consonants.P + _kudlitsHollow.E);
  text = text.replace(/he/g, _consonants.H + _kudlitsHollow.E);
  text = text.replace(/ge/g, _consonants.G + _kudlitsHollow.E);
  text = text.replace(/le/g, _consonants.L + _kudlitsHollow.E);
  text = text.replace(/me/g, _consonants.M + _kudlitsHollow.E);
  text = text.replace(/ne/g, _consonants.N + _kudlitsHollow.E);
  text = text.replace(/ng/g, _consonants.NG + _kudlitsHollow.E);
  text = text.replace(/se/g, _consonants.S + _kudlitsHollow.E);
  text = text.replace(/te/g, _consonants.T + _kudlitsHollow.E);
  text = text.replace(/we/g, _consonants.W + _kudlitsHollow.E);
  text = text.replace(/ye/g, _consonants.Y + _kudlitsHollow.E);

  // Handle consonants followed by 'o'

  text = text.replace(/bo/g, _consonants.B + _kudlitsHollow.O);
  text = text.replace(/ko/g, _consonants.K + _kudlitsHollow.O);
  text = text.replace(/d/g, _consonants.D + _kudlitsHollow.O);
  text = text.replace(/po/g, _consonants.P + _kudlitsHollow.O);
  text = text.replace(/ho/g, _consonants.H + _kudlitsHollow.O);
  text = text.replace(/go/g, _consonants.G + _kudlitsHollow.O);
  text = text.replace(/lo/g, _consonants.L + _kudlitsHollow.O);
  text = text.replace(/mo/g, _consonants.M + _kudlitsHollow.O);
  text = text.replace(/no/g, _consonants.N + _kudlitsHollow.O);
  text = text.replace(/ngo/g, _consonants.NG + _kudlitsHollow.O);
  text = text.replace(/so/g, _consonants.S + _kudlitsHollow.O);
  text = text.replace(/to/g, _consonants.T + _kudlitsHollow.O);
  text = text.replace(/wo/g, _consonants.W + _kudlitsHollow.O);
  text = text.replace(/yo/g, _consonants.Y + _kudlitsHollow.O);

  // text = text.replace(/be/g, _consonants.B + _kudlits.E);
  // text = text.replace(/ke/g, _consonants.K + _kudlits.I);
  // text = text.replace(/de/g, _consonants.D + _kudlits.E);
  // text = text.replace(/fe/g, _consonants.P + _kudlits.E);
  // text = text.replace(/he/g, _consonants.H + _kudlits.E);
  // text = text.replace(/ge/g, _consonants.G + _kudlits.E);
  // text = text.replace(/le/g, _consonants.L + _kudlits.E);
  // text = text.replace(/me/g, _consonants.M + _kudlits.E);
  // text = text.replace(/ne/g, _consonants.N + _kudlits.E);
  // text = text.replace(/ng/g, _consonants.NG + _kudlits.E);
  // text = text.replace(/se/g, _consonants.S + _kudlits.E);
  // text = text.replace(/te/g, _consonants.T + _kudlits.E);
  // text = text.replace(/we/g, _consonants.W + _kudlits.E);
  // text = text.replace(/ye/g, _consonants.Y + _kudlits.E);

  // Handle consonants followed by 'i'
  text = text.replace(/bi/g, _consonants.B);

  // Handle consonants followed by 'o'
  text = text.replace(/bo/g, _consonants.B);

  // Handle consonants followed by 'u'
  text = text.replace(/bu/g, _consonants.B);

  // Handle vowels
  text = text.replace(/a/g, _vowels.A);

  // Handle consonants
  text = text.replace(/b/g, _consonants.B);
  return text;
}
