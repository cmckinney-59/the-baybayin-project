import { registerDeseret } from "@ingglish/deseret";
import { translate } from "ingglish";

registerDeseret();

export default async function processDeseretText(
  text: string,
): Promise<string> {
  let transliteratedText = await translate(text, { format: "deseret" });
  // th

  transliteratedText = transliteratedText.replace(/𐑄/g, "†");

  // ee
  transliteratedText = transliteratedText.replace(/𐐨/g, "‰");
  transliteratedText = transliteratedText.replace(/𐐀/g, "é");

  return transliteratedText;
}
