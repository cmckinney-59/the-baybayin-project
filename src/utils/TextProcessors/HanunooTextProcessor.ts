import { HANUNOO_ABUGIDA_CONFIG } from "../../data/HanunooData/HANUNOO_DATA";
import { replaceLettersWithUnicode } from "./philippineAbugidaUnicode";

export default function processHanunooText(word: string): string {
  return replaceLettersWithUnicode(
    word.toLowerCase(),
    HANUNOO_ABUGIDA_CONFIG,
  );
}
