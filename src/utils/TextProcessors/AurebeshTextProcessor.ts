const COMBINED_SMALL: ReadonlyArray<[RegExp, string]> = [
  [/ch/gi, "ç"],
  [/ae/gi, "æ"],
  [/eo/gi, "ë"],
  [/kh/gi, "þ"],
  [/ng/gi, "ñ"],
  [/oo/gi, "ø"],
  [/sh/gi, "ß"],
  [/th/gi, "ð"],
];

const COMBINED_CAPITAL: ReadonlyArray<{
  allCaps: RegExp;
  titleCase: RegExp;
  out: string;
}> = [
  { allCaps: /CH/g, titleCase: /Ch/g, out: "Ç" },
  { allCaps: /AE/g, titleCase: /Ae/g, out: "Æ" },
  { allCaps: /EO/g, titleCase: /Eo/g, out: "Ë" },
  { allCaps: /KH/g, titleCase: /Kh/g, out: "Þ" },
  { allCaps: /NG/g, titleCase: /Ng/g, out: "Ñ" },
  { allCaps: /OO/g, titleCase: /Oo/g, out: "Ø" },
  { allCaps: /SH/g, titleCase: /Sh/g, out: "ẞ" },
  { allCaps: /TH/g, titleCase: /Th/g, out: "Ð" },
];

function applyCombinedSmall(s: string): string {
  return COMBINED_SMALL.reduce((acc, [re, rep]) => acc.replace(re, rep), s);
}

function applyCombinedCapital(s: string): string {
  return COMBINED_CAPITAL.reduce(
    (acc, { allCaps, titleCase, out }) =>
      acc.replace(allCaps, out).replace(titleCase, out),
    s,
  );
}

export default function processAurebeshText(
  text: string,
  reverseCapitalLetters: boolean,
  includeCombinedCharacters: boolean,
): string {
  if (!includeCombinedCharacters) {
    return reverseCapitalLetters ? text : text.toLowerCase();
  }
  if (reverseCapitalLetters) {
    return applyCombinedSmall(applyCombinedCapital(text));
  }
  return applyCombinedSmall(text);
}
