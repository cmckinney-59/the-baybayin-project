export default function processAurebeshText(text: string): string {
  let transliteratedText = text;
  transliteratedText = transliteratedText.replace(/ch/gi, "ç");
  transliteratedText = transliteratedText.replace(/ae/gi, "æ");
  transliteratedText = transliteratedText.replace(/eo/gi, "ë");
  transliteratedText = transliteratedText.replace(/kh/gi, "þ");
  transliteratedText = transliteratedText.replace(/ng/gi, "ñ");
  transliteratedText = transliteratedText.replace(/oo/gi, "ø");
  transliteratedText = transliteratedText.replace(/sh/gi, "ß");
  transliteratedText = transliteratedText.replace(/th/gi, "ð");
  return transliteratedText;
}
