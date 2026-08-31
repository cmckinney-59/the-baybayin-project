import { TAGBANWA_ABUGIDA_CONFIG } from "../../data/TagbanwaData/TAGBANWA_DATA";
import { replaceLettersWithUnicode } from "./philippineAbugidaUnicode";

export default function processTagbanwaText(word: string): string {
  return replaceLettersWithUnicode(
    word.toLowerCase(),
    TAGBANWA_ABUGIDA_CONFIG,
  );
}
