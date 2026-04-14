export type DeseretData = {
  letter: string;
  IPA: string;
  sound: string;
  name: string;
  example: string;
};

export const DESERET_DATA: DeseretData[] = [
  {
    letter: "𐐀",
    IPA: "/i/",
    sound: "ee",
    name: "Long I",
    example: "<i>e</i>at",
  },
  {
    letter: "𐐁",
    IPA: "/ei/",
    sound: "ey",
    name: "Long E",
    example: "<i>a</i>te",
  },
  {
    letter: "𐐂",
    IPA: "/a/",
    sound: "ah",
    name: "Long A",
    example: "<i>a</i>rt",
  },
];
