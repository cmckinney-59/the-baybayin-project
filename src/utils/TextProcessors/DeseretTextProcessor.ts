export default function processDeseretText(text: string): string {
  let transliteratedText = text;

  // OO
  transliteratedText = transliteratedText.replace(/OO/g, "J");
  transliteratedText = transliteratedText.replace(/Oo/g, "J");
  transliteratedText = transliteratedText.replace(/oo/gi, "j");

  // TH
  transliteratedText = transliteratedText.replace(/TH/g, "Ê");
  transliteratedText = transliteratedText.replace(/Th/g, "Ê");
  transliteratedText = transliteratedText.replace(/th/gi, "†");

  return transliteratedText;
}
