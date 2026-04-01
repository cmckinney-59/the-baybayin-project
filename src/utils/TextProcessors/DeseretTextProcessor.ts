import { registerDeseret } from "@ingglish/deseret";
import { translate } from "ingglish";

registerDeseret();

export default async function processDeseretText(
  text: string,
): Promise<string> {
  let transliteratedText = await translate(text, { format: "deseret" });
  transliteratedText = transliteratedText.replace(/𐑄/g, "Ê");
  return transliteratedText;
}
