import { registerDeseret } from "@ingglish/deseret";
import { translate } from "ingglish";

registerDeseret();

export default async function processDeseretText(
  text: string,
): Promise<string> {
  return await translate(text, { format: "deseret" });
}
