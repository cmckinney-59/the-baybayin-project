export type BaybayinData = {
  symbol: string;
  letter: string;
  sound: string;
  type: "letter" | "punctuation";
};

export const BAYBAYIN_DATA: BaybayinData[] = [
  {
    symbol: "A",
    letter: "A",
    sound: "/a/",
    type: "letter",
  },
];
