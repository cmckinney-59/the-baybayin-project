export type PhilippineAbugidaConsonants = {
  B: string;
  K: string;
  D: string;
  G: string;
  H: string;
  L: string;
  M: string;
  N: string;
  NG: string;
  P: string;
  R: string;
  S: string;
  T: string;
  W: string;
  Y: string;
};

export type PhilippineAbugidaVowels = {
  A: string;
  E: string;
  I: string;
  O: string;
  U: string;
};

export type PhilippineAbugidaKudlits = {
  E: string | null;
  I: string | null;
  O: string | null;
  U: string | null;
};

export type PhilippineAbugidaConfig = {
  consonants: PhilippineAbugidaConsonants;
  vowels: PhilippineAbugidaVowels;
  kudlits: PhilippineAbugidaKudlits;
  /** When set, e/o syllables can use hollow kudlit forms (Baybayin). */
  kudlitsHollow?: PhilippineAbugidaKudlits;
  virama: string;
  punctuation?: {
    comma?: string;
    period?: string;
  };
};

export type PhilippineAbugidaUnicodeOptions = {
  useHollowKudlits?: boolean;
};

function removeHyphensAndApostrophes(text: string): string {
  return text.replace(/-/g, "").replace(/'/g, "");
}

function activeKudlits(
  config: PhilippineAbugidaConfig,
  useHollowKudlits: boolean,
  vowel: "E" | "O",
): PhilippineAbugidaKudlits {
  if (
    useHollowKudlits &&
    config.kudlitsHollow &&
    config.kudlitsHollow[vowel]
  ) {
    return config.kudlitsHollow;
  }
  return config.kudlits;
}

function replaceExplicitPlusViramaUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
): string {
  const { consonants, virama } = config;
  text = text.replace(/ng\+/gi, consonants.NG + virama);
  const byLetter: Record<string, string> = {
    b: consonants.B,
    k: consonants.K,
    d: consonants.D,
    g: consonants.G,
    h: consonants.H,
    l: consonants.L,
    m: consonants.M,
    n: consonants.N,
    p: consonants.P,
    r: consonants.R,
    s: consonants.S,
    t: consonants.T,
    w: consonants.W,
    y: consonants.Y,
  };
  return text.replace(/([bcdfghlkmnprstwyz])\+/gi, (_match, letter: string) => {
    const glyph = byLetter[letter.toLowerCase()];
    return glyph ? glyph + virama : _match;
  });
}

function replaceNgAndMgaUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
): string {
  const { consonants, virama } = config;
  text = text.replace(
    /\bng\b/g,
    consonants.N + consonants.NG + virama,
  );
  text = text.replace(/\bmga\b/g, consonants.M + consonants.NG);
  return text;
}

function removeAAfterConsonantUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
): string {
  const { consonants, kudlits, virama } = config;
  text = text.replace(/nga/g, consonants.NG);
  text = text.replace(/sha/g, consonants.S + (kudlits.I ?? "") + consonants.Y);
  text = text.replace(/pha/g, consonants.P);
  text = text.replace(/tha/g, consonants.T);
  text = text.replace(/ba/g, consonants.B);
  text = text.replace(/ka/g, consonants.K);
  text = text.replace(/da/g, consonants.D);
  text = text.replace(/fa/g, consonants.P);
  text = text.replace(/ga/g, consonants.G);
  text = text.replace(/ha/g, consonants.H);
  text = text.replace(/la/g, consonants.L);
  text = text.replace(/ma/g, consonants.M);
  text = text.replace(/na/g, consonants.N);
  text = text.replace(/pa/g, consonants.P);
  text = text.replace(/ra/g, consonants.R);
  text = text.replace(/sa/g, consonants.S);
  text = text.replace(/ta/g, consonants.T);
  text = text.replace(/va/g, consonants.B);
  text = text.replace(/wa/g, consonants.W);
  text = text.replace(/xa/g, consonants.K + virama + consonants.S);
  text = text.replace(/ya/g, consonants.Y);
  text = text.replace(/za/g, consonants.S);
  return text;
}

function replaceEWithKudlitUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
  kudlits: PhilippineAbugidaKudlits,
): string {
  const { consonants, virama } = config;
  const e = kudlits.E ?? "";
  const i = kudlits.I ?? "";
  text = text.replace(/nge/g, consonants.NG + e);
  text = text.replace(/she/g, consonants.S + i + consonants.Y + e);
  text = text.replace(/phe/g, consonants.P + e);
  text = text.replace(/the/g, consonants.T + e);
  text = text.replace(/be/g, consonants.B + e);
  text = text.replace(/ke/g, consonants.K + e);
  text = text.replace(/de/g, consonants.D + e);
  text = text.replace(/fe/g, consonants.P + e);
  text = text.replace(/he/g, consonants.H + e);
  text = text.replace(/ge/g, consonants.G + e);
  text = text.replace(/le/g, consonants.L + e);
  text = text.replace(/me/g, consonants.M + e);
  text = text.replace(/ne/g, consonants.N + e);
  text = text.replace(/pe/g, consonants.P + e);
  text = text.replace(/re/g, consonants.R + e);
  text = text.replace(/se/g, consonants.S + e);
  text = text.replace(/te/g, consonants.T + e);
  text = text.replace(/ve/g, consonants.B + e);
  text = text.replace(/we/g, consonants.W + e);
  text = text.replace(/xe/g, consonants.K + virama + consonants.S + e);
  text = text.replace(/ye/g, consonants.Y + e);
  text = text.replace(/ze/g, consonants.S + e);
  return text;
}

function replaceIWithKudlitUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
  kudlits: PhilippineAbugidaKudlits,
): string {
  const { consonants, virama } = config;
  const i = kudlits.I ?? "";
  text = text.replace(/ngi/g, consonants.NG + i);
  text = text.replace(/shi/g, consonants.S + i + consonants.Y + i);
  text = text.replace(/phi/g, consonants.P + i);
  text = text.replace(/thi/g, consonants.T + i);
  text = text.replace(/bi/g, consonants.B + i);
  text = text.replace(/ki/g, consonants.K + i);
  text = text.replace(/di/g, consonants.D + i);
  text = text.replace(/fi/g, consonants.P + i);
  text = text.replace(/hi/g, consonants.H + i);
  text = text.replace(/gi/g, consonants.G + i);
  text = text.replace(/li/g, consonants.L + i);
  text = text.replace(/mi/g, consonants.M + i);
  text = text.replace(/ni/g, consonants.N + i);
  text = text.replace(/pi/g, consonants.P + i);
  text = text.replace(/ri/g, consonants.R + i);
  text = text.replace(/si/g, consonants.S + i);
  text = text.replace(/ti/g, consonants.T + i);
  text = text.replace(/vi/g, consonants.B + i);
  text = text.replace(/wi/g, consonants.W + i);
  text = text.replace(/xi/g, consonants.K + virama + consonants.S + i);
  text = text.replace(/yi/g, consonants.Y + i);
  text = text.replace(/zi/g, consonants.S + i);
  return text;
}

function replaceOWithKudlitUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
  kudlits: PhilippineAbugidaKudlits,
): string {
  const { consonants, virama } = config;
  const o = kudlits.O ?? "";
  const i = kudlits.I ?? "";
  text = text.replace(/ngo/g, consonants.NG + o);
  text = text.replace(/sho/g, consonants.S + i + consonants.Y + o);
  text = text.replace(/pho/g, consonants.P + o);
  text = text.replace(/tho/g, consonants.T + o);
  text = text.replace(/bo/g, consonants.B + o);
  text = text.replace(/ko/g, consonants.K + o);
  text = text.replace(/do/g, consonants.D + o);
  text = text.replace(/fo/g, consonants.P + o);
  text = text.replace(/ho/g, consonants.H + o);
  text = text.replace(/go/g, consonants.G + o);
  text = text.replace(/lo/g, consonants.L + o);
  text = text.replace(/mo/g, consonants.M + o);
  text = text.replace(/no/g, consonants.N + o);
  text = text.replace(/po/g, consonants.P + o);
  text = text.replace(/ro/g, consonants.R + o);
  text = text.replace(/so/g, consonants.S + o);
  text = text.replace(/to/g, consonants.T + o);
  text = text.replace(/vo/g, consonants.B + o);
  text = text.replace(/wo/g, consonants.W + o);
  text = text.replace(/xo/g, consonants.K + virama + consonants.S + o);
  text = text.replace(/yo/g, consonants.Y + o);
  text = text.replace(/zo/g, consonants.S + o);
  return text;
}

function replaceUWithKudlitUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
  kudlits: PhilippineAbugidaKudlits,
): string {
  const { consonants, virama } = config;
  const u = kudlits.U ?? "";
  const i = kudlits.I ?? "";
  text = text.replace(/ngu/g, consonants.NG + u);
  text = text.replace(/shu/g, consonants.S + i + consonants.Y + u);
  text = text.replace(/phu/g, consonants.P + u);
  text = text.replace(/thu/g, consonants.T + u);
  text = text.replace(/bu/g, consonants.B + u);
  text = text.replace(/ku/g, consonants.K + u);
  text = text.replace(/du/g, consonants.D + u);
  text = text.replace(/fu/g, consonants.P + u);
  text = text.replace(/hu/g, consonants.H + u);
  text = text.replace(/gu/g, consonants.G + u);
  text = text.replace(/lu/g, consonants.L + u);
  text = text.replace(/mu/g, consonants.M + u);
  text = text.replace(/nu/g, consonants.N + u);
  text = text.replace(/pu/g, consonants.P + u);
  text = text.replace(/ru/g, consonants.R + u);
  text = text.replace(/su/g, consonants.S + u);
  text = text.replace(/tu/g, consonants.T + u);
  text = text.replace(/vu/g, consonants.B + u);
  text = text.replace(/wu/g, consonants.W + u);
  text = text.replace(/xu/g, consonants.K + virama + consonants.S + u);
  text = text.replace(/yu/g, consonants.Y + u);
  text = text.replace(/zu/g, consonants.S + u);
  return text;
}

function replaceStandaloneVowelsUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
): string {
  const { vowels } = config;
  text = text.replace(/a/g, vowels.A);
  text = text.replace(/e/g, vowels.E);
  text = text.replace(/i/g, vowels.I);
  text = text.replace(/o/g, vowels.O);
  text = text.replace(/u/g, vowels.U);
  return text;
}

function replaceStandaloneConsonantsUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
): string {
  const { consonants, kudlits, virama } = config;
  text = text.replace(/ng/g, consonants.NG + virama);
  text = text.replace(
    /sh/g,
    consonants.S + (kudlits.I ?? "") + consonants.Y + virama,
  );
  text = text.replace(/ph/g, consonants.P + virama);
  text = text.replace(/th/g, consonants.T + virama);
  text = text.replace(/b/g, consonants.B + virama);
  text = text.replace(/k/g, consonants.K + virama);
  text = text.replace(/d/g, consonants.D + virama);
  text = text.replace(/f/g, consonants.P + virama);
  text = text.replace(/g/g, consonants.G + virama);
  text = text.replace(/h/g, consonants.H + virama);
  text = text.replace(/l/g, consonants.L + virama);
  text = text.replace(/m/g, consonants.M + virama);
  text = text.replace(/n/g, consonants.N + virama);
  text = text.replace(/p/g, consonants.P + virama);
  text = text.replace(/r/g, consonants.R + virama);
  text = text.replace(/s/g, consonants.S + virama);
  text = text.replace(/t/g, consonants.T + virama);
  text = text.replace(/v/g, consonants.B + virama);
  text = text.replace(/w/g, consonants.W + virama);
  text = text.replace(/x/g, consonants.K + virama + consonants.S + virama);
  text = text.replace(/y/g, consonants.Y + virama);
  text = text.replace(/z/g, consonants.S + virama);
  return text;
}

/** Map Latin Philippine-abugida input to Unicode syllables for a given script. */
export function replaceLettersWithUnicode(
  text: string,
  config: PhilippineAbugidaConfig,
  options: PhilippineAbugidaUnicodeOptions = {},
): string {
  const useHollowKudlits = options.useHollowKudlits ?? false;
  const eKudlits = activeKudlits(config, useHollowKudlits, "E");
  const oKudlits = activeKudlits(config, useHollowKudlits, "O");

  text = replaceNgAndMgaUnicode(text, config);
  text = removeAAfterConsonantUnicode(text, config);
  text = replaceEWithKudlitUnicode(text, config, eKudlits);
  text = replaceOWithKudlitUnicode(text, config, oKudlits);
  text = replaceIWithKudlitUnicode(text, config, config.kudlits);
  text = replaceUWithKudlitUnicode(text, config, config.kudlits);
  text = replaceStandaloneVowelsUnicode(text, config);
  text = replaceExplicitPlusViramaUnicode(text, config);
  text = replaceStandaloneConsonantsUnicode(text, config);
  text = text.replace(/\+/g, config.virama);

  if (config.punctuation?.comma) {
    text = text.replace(/,/g, config.punctuation.comma);
  }
  if (config.punctuation?.period) {
    text = text.replace(/\./g, config.punctuation.period);
  }

  return removeHyphensAndApostrophes(text);
}
