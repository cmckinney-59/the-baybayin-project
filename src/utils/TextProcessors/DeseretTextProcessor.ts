import { registerDeseret } from "@ingglish/deseret";
import { translate } from "ingglish";

registerDeseret();

export default async function processDeseretText(
  text: string,
): Promise<string> {
  let transliteratedText = await translate(text, { format: "deseret" });
  // th
  transliteratedText = transliteratedText.replace(/𐐜/g, "Ê");
  transliteratedText = transliteratedText.replace(/𐑄/g, "†");

  // ee
  transliteratedText = transliteratedText.replace(/𐐀/g, "‰");
  transliteratedText = transliteratedText.replace(/𐐨/g, "é");

  // ey
  transliteratedText = transliteratedText.replace(/𐐁/g, "Å");
  transliteratedText = transliteratedText.replace(/𐐩/g, "å");

  // a
  transliteratedText = transliteratedText.replace(/𐐂/g, "Æ");
  transliteratedText = transliteratedText.replace(/𐐪/g, "æ");

  // aw
  transliteratedText = transliteratedText.replace(/𐐃/g, "Œ");
  transliteratedText = transliteratedText.replace(/𐐫/g, "œ");

  // oh
  transliteratedText = transliteratedText.replace(/𐐄/g, "Ø");
  transliteratedText = transliteratedText.replace(/𐐬/g, "ø");

  return transliteratedText;
}
