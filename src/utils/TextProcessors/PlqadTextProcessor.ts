export default function processPlqadText(text: string): string {
  let transliteratedText = text;
  transliteratedText = transliteratedText.replace(/ch/g, "c");
  transliteratedText = transliteratedText.replace(/gh/g, "g");
  transliteratedText = transliteratedText.replace(/ng/g, "f");
  transliteratedText = transliteratedText.replace(/tlh/g, "z");
  transliteratedText = transliteratedText.replace(/Q/g, "k");
  transliteratedText = transliteratedText.replace(/c/gi, "");
  transliteratedText = transliteratedText.replace(/g/gi, "");
  transliteratedText = transliteratedText.replace(/k/gi, "");
  transliteratedText = transliteratedText.replace(/x/gi, "");
  transliteratedText = transliteratedText.replace(/z/gi, "");
  return transliteratedText;
}

export function processPlqadTextKlinzhai(text: string): string {
  let transliteratedText = text.toLowerCase();
  return transliteratedText;
}
