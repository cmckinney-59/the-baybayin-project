import {
  BAYBAYIN_CONSONANTS as _consonants,
  BAYBAYIN_VOWELS as _vowels,
  BAYBAYIN_KUDLITS as _kudlits,
  BAYBAYIN_KUDLITS_HOLLOW as _kudlitsHollow,
  BAYBAYIN_VOWEL_KILLERS as _vowelKillers,
} from "../../data/BaybayinData/BAYBAYIN_DATA";
import type { BaybayinFontId } from "../../data/BaybayinData/BAYBAYIN_FONTS_DATA";

export default function processBaybayinText(
  text: string,
  useXVowelKiller = false,
  fontId: BaybayinFontId,
  useHollowKudlits = true,
  useUnicode = false,
): string {
  let transliteratedText = text.toLowerCase();

  if (fontId === "noto-sans" || useUnicode) {
    return replaceLettersWithUnicode(transliteratedText, useHollowKudlits);
  } else {
    return replaceLettersWithLatinAlphabet(transliteratedText);
  }

  function replaceLettersWithLatinAlphabet(transliteratedText: string): string {
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
    transliteratedText = addPlusIfConsonant(
      transliteratedText,
      useXVowelKiller,
    );

    transliteratedText = removeAAfterConsonant(transliteratedText);
    transliteratedText = capitalizeVowelAfterHyphen(transliteratedText);
    transliteratedText = capitalizeVowel(transliteratedText);
    transliteratedText = removeHyphensAndApostrophes(transliteratedText);
    return transliteratedText;
  }
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

function removeHyphensAndApostrophes(text: string): string {
  text = text.replace(/-/g, "");
  text = text.replace(/'/g, "");
  return text;
}

function replaceLettersWithUnicode(
  text: string,
  useHollowKudlits: boolean,
): string {
  text = replaceNgAndMgaUnicode(text);
  text = removeAAfterConsonantUnicode(text);
  if (useHollowKudlits) {
    text = replaceEWithHollowKudlitUnicode(text);
    text = replaceOWithHollowKudlitUnicode(text);
  } else {
    text = replaceEWithFilledKudlitUnicode(text);
    text = replaceOWithFilledKudlitUnicode(text);
  }
  text = replaceIWithKudlitUnicode(text);
  text = replaceUWithKudlitUnicode(text);
  text = replaceStandaloneVowelsUnicode(text);
  text = replaceStandaloneConsonantsUnicode(text);
  text = removeHyphensAndApostrophes(text);
  return text;
}

function replaceNgAndMgaUnicode(text: string): string {
  text = text.replace(
    /\bng\b/g,
    _consonants.N + _consonants.NG + _vowelKillers.VIRAMA,
  );
  text = text.replace(/\bmga\b/g, _consonants.M + _consonants.NG);
  return text;
}

function removeAAfterConsonantUnicode(text: string): string {
  text = text.replace(/nga/g, _consonants.NG);
  text = text.replace(/sha/g, _consonants.S + _kudlits.I + _consonants.Y);
  text = text.replace(/pha/g, _consonants.P);
  text = text.replace(/tha/g, _consonants.T);
  text = text.replace(/ba/g, _consonants.B);
  text = text.replace(/ka/g, _consonants.K);
  text = text.replace(/da/g, _consonants.D);
  text = text.replace(/fa/g, _consonants.P);
  text = text.replace(/ga/g, _consonants.G);
  text = text.replace(/ha/g, _consonants.H);
  text = text.replace(/la/g, _consonants.L);
  text = text.replace(/ma/g, _consonants.M);
  text = text.replace(/na/g, _consonants.N);
  text = text.replace(/pa/g, _consonants.P);
  text = text.replace(/ra/g, _consonants.R);
  text = text.replace(/sa/g, _consonants.S);
  text = text.replace(/ta/g, _consonants.T);
  text = text.replace(/va/g, _consonants.B);
  text = text.replace(/wa/g, _consonants.W);
  text = text.replace(
    /xa/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S,
  );
  text = text.replace(/ya/g, _consonants.Y);
  text = text.replace(/za/g, _consonants.S);
  return text;
}

function replaceEWithFilledKudlitUnicode(text: string): string {
  text = text.replace(/nge/g, _consonants.NG + _kudlits.E);
  text = text.replace(
    /she/g,
    _consonants.S + _kudlits.I + _consonants.Y + _kudlits.E,
  );
  text = text.replace(/phe/g, _consonants.P + _kudlits.E);
  text = text.replace(/the/g, _consonants.T + _kudlits.E);
  text = text.replace(/be/g, _consonants.B + _kudlits.E);
  text = text.replace(/ke/g, _consonants.K + _kudlits.E);
  text = text.replace(/de/g, _consonants.D + _kudlits.E);
  text = text.replace(/fe/g, _consonants.P + _kudlits.E);
  text = text.replace(/he/g, _consonants.H + _kudlits.E);
  text = text.replace(/ge/g, _consonants.G + _kudlits.E);
  text = text.replace(/le/g, _consonants.L + _kudlits.E);
  text = text.replace(/me/g, _consonants.M + _kudlits.E);
  text = text.replace(/ne/g, _consonants.N + _kudlits.E);
  text = text.replace(/pe/g, _consonants.P + _kudlits.E);
  text = text.replace(/re/g, _consonants.R + _kudlits.E);
  text = text.replace(/se/g, _consonants.S + _kudlits.E);
  text = text.replace(/te/g, _consonants.T + _kudlits.E);
  text = text.replace(/ve/g, _consonants.B + _kudlits.E);
  text = text.replace(/we/g, _consonants.W + _kudlits.E);
  text = text.replace(
    /xe/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _kudlits.E,
  );
  text = text.replace(/ye/g, _consonants.Y + _kudlits.E);
  text = text.replace(/ze/g, _consonants.S + _kudlits.E);
  return text;
}

function replaceEWithHollowKudlitUnicode(text: string): string {
  text = text.replace(/nge/g, _consonants.NG + _kudlitsHollow.E);
  text = text.replace(
    /she/g,
    _consonants.S + _kudlits.I + _consonants.Y + _kudlitsHollow.E,
  );
  text = text.replace(/phe/g, _consonants.P + _kudlitsHollow.E);
  text = text.replace(/the/g, _consonants.T + _kudlitsHollow.E);
  text = text.replace(/be/g, _consonants.B + _kudlitsHollow.E);
  text = text.replace(/ke/g, _consonants.K + _kudlitsHollow.E);
  text = text.replace(/de/g, _consonants.D + _kudlitsHollow.E);
  text = text.replace(/fe/g, _consonants.P + _kudlitsHollow.E);
  text = text.replace(/he/g, _consonants.H + _kudlitsHollow.E);
  text = text.replace(/ge/g, _consonants.G + _kudlitsHollow.E);
  text = text.replace(/le/g, _consonants.L + _kudlitsHollow.E);
  text = text.replace(/me/g, _consonants.M + _kudlitsHollow.E);
  text = text.replace(/ne/g, _consonants.N + _kudlitsHollow.E);
  text = text.replace(/pe/g, _consonants.P + _kudlitsHollow.E);
  text = text.replace(/re/g, _consonants.R + _kudlitsHollow.E);
  text = text.replace(/se/g, _consonants.S + _kudlitsHollow.E);
  text = text.replace(/ve/g, _consonants.B + _kudlitsHollow.E);
  text = text.replace(/te/g, _consonants.T + _kudlitsHollow.E);
  text = text.replace(/we/g, _consonants.W + _kudlitsHollow.E);
  text = text.replace(
    /xe/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _kudlitsHollow.E,
  );
  text = text.replace(/ye/g, _consonants.Y + _kudlitsHollow.E);
  text = text.replace(/ze/g, _consonants.S + _kudlitsHollow.E);
  return text;
}

function replaceIWithKudlitUnicode(text: string): string {
  text = text.replace(/ngi/g, _consonants.NG + _kudlits.I);
  text = text.replace(
    /shi/g,
    _consonants.S + _kudlits.I + _consonants.Y + _kudlits.I,
  );
  text = text.replace(/phi/g, _consonants.P + _kudlits.I);
  text = text.replace(/thi/g, _consonants.T + _kudlits.I);
  text = text.replace(/bi/g, _consonants.B + _kudlits.I);
  text = text.replace(/ki/g, _consonants.K + _kudlits.I);
  text = text.replace(/di/g, _consonants.D + _kudlits.I);
  text = text.replace(/fi/g, _consonants.P + _kudlits.I);
  text = text.replace(/hi/g, _consonants.H + _kudlits.I);
  text = text.replace(/gi/g, _consonants.G + _kudlits.I);
  text = text.replace(/li/g, _consonants.L + _kudlits.I);
  text = text.replace(/mi/g, _consonants.M + _kudlits.I);
  text = text.replace(/ni/g, _consonants.N + _kudlits.I);
  text = text.replace(/pi/g, _consonants.P + _kudlits.I);
  text = text.replace(/ri/g, _consonants.R + _kudlits.I);
  text = text.replace(/si/g, _consonants.S + _kudlits.I);
  text = text.replace(/ti/g, _consonants.T + _kudlits.I);
  text = text.replace(/vi/g, _consonants.B + _kudlits.I);
  text = text.replace(/wi/g, _consonants.W + _kudlits.I);
  text = text.replace(
    /xi/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _kudlits.I,
  );
  text = text.replace(/yi/g, _consonants.Y + _kudlits.I);
  text = text.replace(/zi/g, _consonants.S + _kudlits.I);
  return text;
}

function replaceOWithFilledKudlitUnicode(text: string): string {
  text = text.replace(/ngo/g, _consonants.NG + _kudlits.O);
  text = text.replace(
    /sho/g,
    _consonants.S + _kudlits.I + _consonants.Y + _kudlits.O,
  );
  text = text.replace(/pho/g, _consonants.P + _kudlits.O);
  text = text.replace(/tho/g, _consonants.T + _kudlits.O);
  text = text.replace(/bo/g, _consonants.B + _kudlits.O);
  text = text.replace(/ko/g, _consonants.K + _kudlits.O);
  text = text.replace(/do/g, _consonants.D + _kudlits.O);
  text = text.replace(/fo/g, _consonants.P + _kudlits.O);
  text = text.replace(/ho/g, _consonants.H + _kudlits.O);
  text = text.replace(/go/g, _consonants.G + _kudlits.O);
  text = text.replace(/lo/g, _consonants.L + _kudlits.O);
  text = text.replace(/mo/g, _consonants.M + _kudlits.O);
  text = text.replace(/no/g, _consonants.N + _kudlits.O);
  text = text.replace(/po/g, _consonants.P + _kudlits.O);
  text = text.replace(/ro/g, _consonants.R + _kudlits.O);
  text = text.replace(/so/g, _consonants.S + _kudlits.O);
  text = text.replace(/to/g, _consonants.T + _kudlits.O);
  text = text.replace(/vo/g, _consonants.B + _kudlits.O);
  text = text.replace(/wo/g, _consonants.W + _kudlits.O);
  text = text.replace(
    /xo/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _kudlits.O,
  );
  text = text.replace(/yo/g, _consonants.Y + _kudlits.O);
  text = text.replace(/zo/g, _consonants.S + _kudlits.O);
  return text;
}

function replaceOWithHollowKudlitUnicode(text: string): string {
  text = text.replace(/ngo/g, _consonants.NG + _kudlitsHollow.O);
  text = text.replace(
    /sho/g,
    _consonants.S + _kudlits.I + _consonants.Y + _kudlitsHollow.O,
  );
  text = text.replace(/pho/g, _consonants.P + _kudlitsHollow.O);
  text = text.replace(/tho/g, _consonants.T + _kudlitsHollow.O);
  text = text.replace(/bo/g, _consonants.B + _kudlitsHollow.O);
  text = text.replace(/ko/g, _consonants.K + _kudlitsHollow.O);
  text = text.replace(/do/g, _consonants.D + _kudlitsHollow.O);
  text = text.replace(/fo/g, _consonants.P + _kudlitsHollow.O);
  text = text.replace(/ho/g, _consonants.H + _kudlitsHollow.O);
  text = text.replace(/go/g, _consonants.G + _kudlitsHollow.O);
  text = text.replace(/lo/g, _consonants.L + _kudlitsHollow.O);
  text = text.replace(/mo/g, _consonants.M + _kudlitsHollow.O);
  text = text.replace(/no/g, _consonants.N + _kudlitsHollow.O);
  text = text.replace(/po/g, _consonants.P + _kudlitsHollow.O);
  text = text.replace(/ro/g, _consonants.R + _kudlitsHollow.O);
  text = text.replace(/so/g, _consonants.S + _kudlitsHollow.O);
  text = text.replace(/to/g, _consonants.T + _kudlitsHollow.O);
  text = text.replace(/vo/g, _consonants.B + _kudlitsHollow.O);
  text = text.replace(/wo/g, _consonants.W + _kudlitsHollow.O);
  text = text.replace(
    /xo/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _kudlitsHollow.O,
  );
  text = text.replace(/yo/g, _consonants.Y + _kudlitsHollow.O);
  text = text.replace(/zo/g, _consonants.S + _kudlitsHollow.O);
  return text;
}

function replaceUWithKudlitUnicode(text: string): string {
  text = text.replace(/ngu/g, _consonants.NG + _kudlits.U);
  text = text.replace(
    /shu/g,
    _consonants.S + _kudlits.I + _consonants.Y + _kudlits.U,
  );
  text = text.replace(/phu/g, _consonants.P + _kudlits.U);
  text = text.replace(/thu/g, _consonants.T + _kudlits.U);
  text = text.replace(/bu/g, _consonants.B + _kudlits.U);
  text = text.replace(/ku/g, _consonants.K + _kudlits.U);
  text = text.replace(/du/g, _consonants.D + _kudlits.U);
  text = text.replace(/fu/g, _consonants.P + _kudlits.U);
  text = text.replace(/hu/g, _consonants.H + _kudlits.U);
  text = text.replace(/gu/g, _consonants.G + _kudlits.U);
  text = text.replace(/lu/g, _consonants.L + _kudlits.U);
  text = text.replace(/mu/g, _consonants.M + _kudlits.U);
  text = text.replace(/nu/g, _consonants.N + _kudlits.U);
  text = text.replace(/pu/g, _consonants.P + _kudlits.U);
  text = text.replace(/ru/g, _consonants.R + _kudlits.U);
  text = text.replace(/su/g, _consonants.S + _kudlits.U);
  text = text.replace(/tu/g, _consonants.T + _kudlits.U);
  text = text.replace(/vu/g, _consonants.B + _kudlits.U);
  text = text.replace(/wu/g, _consonants.W + _kudlits.U);
  text = text.replace(
    /xu/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _kudlits.U,
  );
  text = text.replace(/yu/g, _consonants.Y + _kudlits.U);
  text = text.replace(/zu/g, _consonants.S + _kudlits.U);
  return text;
}

function replaceStandaloneVowelsUnicode(text: string): string {
  text = text.replace(/a/g, _vowels.A);
  text = text.replace(/e/g, _vowels.E);
  text = text.replace(/i/g, _vowels.I);
  text = text.replace(/o/g, _vowels.O);
  text = text.replace(/u/g, _vowels.U);
  return text;
}

function replaceStandaloneConsonantsUnicode(text: string): string {
  text = text.replace(/ng/g, _consonants.NG + _vowelKillers.VIRAMA);
  text = text.replace(
    /sh/g,
    _consonants.S + _kudlits.I + _consonants.Y + _vowelKillers.VIRAMA,
  );
  text = text.replace(/ph/g, _consonants.P + _vowelKillers.VIRAMA);
  text = text.replace(/th/g, _consonants.T + _vowelKillers.VIRAMA);
  text = text.replace(/b/g, _consonants.B + _vowelKillers.VIRAMA);
  text = text.replace(/k/g, _consonants.K + _vowelKillers.VIRAMA);
  text = text.replace(/d/g, _consonants.D + _vowelKillers.VIRAMA);
  text = text.replace(/f/g, _consonants.P + _vowelKillers.VIRAMA);
  text = text.replace(/g/g, _consonants.G + _vowelKillers.VIRAMA);
  text = text.replace(/h/g, _consonants.H + _vowelKillers.VIRAMA);
  text = text.replace(/l/g, _consonants.L + _vowelKillers.VIRAMA);
  text = text.replace(/m/g, _consonants.M + _vowelKillers.VIRAMA);
  text = text.replace(/n/g, _consonants.N + _vowelKillers.VIRAMA);
  text = text.replace(/p/g, _consonants.P + _vowelKillers.VIRAMA);
  text = text.replace(/r/g, _consonants.R + _vowelKillers.VIRAMA);
  text = text.replace(/s/g, _consonants.S + _vowelKillers.VIRAMA);
  text = text.replace(/t/g, _consonants.T + _vowelKillers.VIRAMA);
  text = text.replace(/v/g, _consonants.B + _vowelKillers.VIRAMA);
  text = text.replace(/w/g, _consonants.W + _vowelKillers.VIRAMA);
  text = text.replace(
    /x/g,
    _consonants.K + _vowelKillers.VIRAMA + _consonants.S + _vowelKillers.VIRAMA,
  );
  text = text.replace(/y/g, _consonants.Y + _vowelKillers.VIRAMA);
  text = text.replace(/z/g, _consonants.S + _vowelKillers.VIRAMA);
  return text;
}
