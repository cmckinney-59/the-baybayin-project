import { BUHID_ABUGIDA_CONFIG } from "../../data/BuhidData/BUHID_DATA";
import { replaceLettersWithUnicode } from "./philippineAbugidaUnicode";

export default function processBuhidText(word: string): string {
  return replaceLettersWithUnicode(word.toLowerCase(), BUHID_ABUGIDA_CONFIG);
}
