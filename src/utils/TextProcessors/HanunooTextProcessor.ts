import processBaybayinText from "./BaybayinTextProcessor";

/** Map Baybayin Unicode output to Hanunoo Unicode (U+1720–U+1734). */
const BAYBAYIN_TO_HANUNOO: Record<string, string> = {
  "\u1700": "\u1720",
  "\u1701": "\u1721",
  "\u1702": "\u1722",
  "\u1703": "\u1723",
  "\u1704": "\u1724",
  "\u1705": "\u1725",
  "\u1706": "\u1726",
  "\u1707": "\u1727",
  "\u1708": "\u1728",
  "\u1709": "\u172B",
  "\u170A": "\u172C",
  "\u170B": "\u172D",
  "\u170C": "\u172E",
  "\u170D": "\u172F",
  "\u170E": "\u1730",
  "\u170F": "\u1731",
  "\u1710": "\u1729",
  "\u1711": "\u172A",
  "\u1712": "\u1732",
  "\u1713": "\u1733",
  "\u1714": "\u1734",
};

export default function processHanunooText(word: string): string {
  const baybayinUnicode = processBaybayinText(
    word,
    false,
    "noto-sans",
    true,
    true,
  );

  return [...baybayinUnicode]
    .map((char) => BAYBAYIN_TO_HANUNOO[char] ?? char)
    .join("");
}
