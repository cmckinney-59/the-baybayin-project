export default function processAurebeshText(text: string): string {
  let transliteratedText = text;
  transliteratedText = transliteratedText.replace(/ch/g, "ç");
  transliteratedText = transliteratedText.replace(/ae/g, "æ");
  transliteratedText = transliteratedText.replace(/eo/g, "ë");
  transliteratedText = transliteratedText.replace(/kh/g, "þ");
  transliteratedText = transliteratedText.replace(/ng/g, "ñ");
  transliteratedText = transliteratedText.replace(/oo/g, "ø");
  transliteratedText = transliteratedText.replace(/sh/g, "ß");
  transliteratedText = transliteratedText.replace(/th/g, "ð");
  return transliteratedText;
}
