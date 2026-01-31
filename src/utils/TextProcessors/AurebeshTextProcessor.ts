export default function processAurebeshText(text: string): string {
  let transliteratedText = text;
  // CH
  transliteratedText = transliteratedText.replace(/CH/g, "Ç");
  transliteratedText = transliteratedText.replace(/Ch/g, "Ç");
  transliteratedText = transliteratedText.replace(/ch/gi, "ç");

  // AE
  transliteratedText = transliteratedText.replace(/AE/g, "Æ");
  transliteratedText = transliteratedText.replace(/Ae/g, "Æ");
  transliteratedText = transliteratedText.replace(/ae/gi, "æ");

  // EO
  transliteratedText = transliteratedText.replace(/EO/g, "Ë");
  transliteratedText = transliteratedText.replace(/Eo/g, "Ë");
  transliteratedText = transliteratedText.replace(/eo/gi, "ë");

  // KH
  transliteratedText = transliteratedText.replace(/KH/g, "Þ");
  transliteratedText = transliteratedText.replace(/Kh/g, "Þ");
  transliteratedText = transliteratedText.replace(/kh/gi, "þ");

  // NG
  transliteratedText = transliteratedText.replace(/NG/g, "Ñ");
  transliteratedText = transliteratedText.replace(/Ng/g, "Ñ");
  transliteratedText = transliteratedText.replace(/ng/gi, "ñ");

  // OO
  transliteratedText = transliteratedText.replace(/OO/g, "Ø");
  transliteratedText = transliteratedText.replace(/Oo/g, "Ø");
  transliteratedText = transliteratedText.replace(/oo/gi, "ø");

  // SH
  transliteratedText = transliteratedText.replace(/SH/g, "ẞ");
  transliteratedText = transliteratedText.replace(/Sh/g, "ẞ");
  transliteratedText = transliteratedText.replace(/sh/gi, "ß");
  2;

  // TH
  transliteratedText = transliteratedText.replace(/TH/g, "Ð");
  transliteratedText = transliteratedText.replace(/Th/g, "Ð");
  transliteratedText = transliteratedText.replace(/th/gi, "ð");

  return transliteratedText;
}
