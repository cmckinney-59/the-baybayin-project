import { translateEnglishToDeseret } from "../../services/DeseretService.ts";

export default async function processDeseretText(
  text: string,
): Promise<string> {
  let transliteratedText = text;
  const deseretText = await translateEnglishToDeseret(text);

  // // OO
  // transliteratedText = transliteratedText.replace(/OO/g, "J");
  // transliteratedText = transliteratedText.replace(/Oo/g, "J");
  // transliteratedText = transliteratedText.replace(/oo/gi, "j");

  // // TH
  // transliteratedText = transliteratedText.replace(/TH/g, "Ê");
  // transliteratedText = transliteratedText.replace(/Th/g, "Ê");
  // transliteratedText = transliteratedText.replace(/th/gi, "†");

  return deseretText.deseret;
}
