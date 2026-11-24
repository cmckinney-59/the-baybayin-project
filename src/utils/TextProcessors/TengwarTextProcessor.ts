import {
  LONG_CARRIER,
  SHORT_CARRIER,
  TEHTA,
  TENGWAR_WORD,
  UNDER_E,
  type TehtaClass,
  type VowelName,
} from "../../data/TengwarData/tengwarEncoding";

/**
 * English spelled in the tengwar mode of the Lord of the Rings title page,
 * typed in Dan Smith's Tengwar Quenya encoding.
 *
 * Consonants are tengwar. A vowel mark sits on the following consonant and is
 * read before that consonant. A vowel with no consonant after it sits on a
 * carrier. ee and oo use the long carrier. A final e after a consonant is a
 * dot under that consonant. "the", "of", and "and" are the single-letter
 * shortcuts from that inscription.
 */

type Vowel = VowelName;

type Cons = {
  kind: "c";
  base: string;
  cls: TehtaClass;
  nuquerna?: string;
  tehta?: Vowel;
  underE?: boolean;
};

type VowelPiece = {
  kind: "v";
  vowel: Vowel;
  long: boolean;
  hosted: boolean;
};

type Silent = { kind: "se" };

type Piece = Cons | VowelPiece | Silent;

const VOICED_TH = new Set([
  "this",
  "that",
  "these",
  "those",
  "them",
  "they",
  "their",
  "there",
  "then",
  "than",
  "thou",
  "thee",
  "thy",
  "thine",
  "thus",
  "though",
  "although",
  "other",
  "another",
  "mother",
  "father",
  "brother",
  "whether",
]);

const PUNCT: Record<string, string> = {
  ".": "-",
  ",": "=",
  "!": "\u00c1",
  "?": "\u00c0",
  ";": "\u00c3",
  "'": "",
  "\u2019": "",
  "-": " ",
  "\u2013": " ",
  "\u2014": " ",
};

const NUMERALS = "\u00f0\u00f1\u00f2\u00f3\u00f4\u00f5\u00f6\u00f7\u00f8\u00f9";

function cons(
  base: string,
  cls: TehtaClass,
  nuquerna?: string,
): Cons {
  return nuquerna
    ? { kind: "c", base, cls, nuquerna }
    : { kind: "c", base, cls };
}

function isVowelLetter(ch: string | undefined): boolean {
  return !!ch && "aeiou".includes(ch);
}

function yIsConsonant(word: string, index: number): boolean {
  const prev = word[index - 1];
  const next = word[index + 1];
  const nextIsVowel = isVowelLetter(next);
  if (!nextIsVowel) return false;
  if (!prev) return true;
  if (isVowelLetter(prev)) return false;
  // "yellow", "yes": y starts a syllable before a vowel.
  return true;
}

function hasEarlierVowel(word: string, index: number): boolean {
  for (let i = 0; i < index; i++) {
    const ch = word[i];
    if (isVowelLetter(ch)) return true;
    if (ch === "y" && !yIsConsonant(word, i)) return true;
  }
  return false;
}

function scan(word: string): Piece[] {
  const pieces: Piece[] = [];
  const voicedTh = VOICED_TH.has(word);
  let i = 0;

  while (i < word.length) {
    const two = word.slice(i, i + 2);
    const three = word.slice(i, i + 3);

    if (three === "tch") {
      pieces.push(cons("a", "left"));
      i += 3;
      continue;
    }
    if (three === "dge") {
      pieces.push(cons("s", "left"));
      i += 3;
      continue;
    }
    if (two === "ch") {
      pieces.push(cons("a", "left"));
      i += 2;
      continue;
    }
    if (two === "sh") {
      pieces.push(cons("d", "left"));
      i += 2;
      continue;
    }
    if (two === "th") {
      pieces.push(voicedTh ? cons("4", "left") : cons("3", "left"));
      i += 2;
      continue;
    }
    if (two === "ph") {
      pieces.push(cons("e", "right"));
      i += 2;
      continue;
    }
    if (two === "wh") {
      pieces.push(cons("o", "right"));
      i += 2;
      continue;
    }
    if (two === "gh") {
      pieces.push(cons("v", "right"));
      i += 2;
      continue;
    }
    if (two === "ng") {
      const after = word[i + 2];
      if (after && (isVowelLetter(after) || (after === "y" && yIsConsonant(word, i + 2)))) {
        pieces.push(cons("5", "left"));
        pieces.push(cons("x", "right"));
      } else {
        pieces.push(cons("b", "right"));
      }
      i += 2;
      continue;
    }
    if (two === "qu") {
      pieces.push(cons("z", "right"));
      i += 2;
      continue;
    }
    if (two === "ck") {
      pieces.push(cons("z", "right"));
      i += 2;
      continue;
    }

    const ch = word[i];

    if (ch === "e" || ch === "o") {
      if (word[i + 1] === ch) {
        pieces.push({ kind: "v", vowel: ch, long: true, hosted: false });
        i += 2;
        continue;
      }
    }

    if (ch === "e" && i === word.length - 1 && word[i - 1] && !isVowelLetter(word[i - 1]) && hasEarlierVowel(word, i)) {
      pieces.push({ kind: "se" });
      i += 1;
      continue;
    }

    if (isVowelLetter(ch)) {
      pieces.push({ kind: "v", vowel: ch as Vowel, long: false, hosted: false });
      i += 1;
      continue;
    }

    if (ch === "y") {
      if (yIsConsonant(word, i)) {
        pieces.push(cons("h", "open"));
      } else if (isVowelLetter(word[i - 1])) {
        // Glide in day, they, boy: the vowel sits on yanta.
        pieces.push(cons("l", "carrier"));
      } else {
        pieces.push({ kind: "v", vowel: "y", long: false, hosted: false });
      }
      i += 1;
      continue;
    }

    if (ch === "w") {
      if (isVowelLetter(word[i - 1])) {
        pieces.push(cons(".", "carrier"));
      } else {
        pieces.push(cons("y", "right"));
      }
      i += 1;
      continue;
    }

    if (ch === "r") {
      const rest = word.slice(i + 1);
      const loneSilentE = rest === "e" && hasEarlierVowel(word, i);
      const yVowel = rest.startsWith("y") && !yIsConsonant(word, i + 1);
      const vowelFollows = /^[aeiou]/.test(rest) || yVowel;
      if (vowelFollows && !loneSilentE) {
        pieces.push(cons("7", "open"));
      } else {
        pieces.push(cons("6", "left"));
      }
      i += 1;
      continue;
    }

    if (ch === "c") {
      const next = word[i + 1];
      const soft =
        next === "e" ||
        next === "i" ||
        (next === "y" && !yIsConsonant(word, i + 1));
      pieces.push(soft ? cons("8", "open", "i") : cons("z", "right"));
      i += 1;
      continue;
    }

    if (ch === "x") {
      pieces.push(cons("z", "right"));
      pieces.push(cons("8", "open", "i"));
      i += 1;
      continue;
    }

    const single: Record<string, Cons> = {
      t: cons("1", "left"),
      p: cons("q", "right"),
      k: cons("z", "right"),
      d: cons("2", "left"),
      b: cons("w", "right"),
      j: cons("s", "left"),
      g: cons("x", "right"),
      f: cons("e", "right"),
      v: cons("r", "right"),
      n: cons("5", "left"),
      m: cons("t", "right"),
      l: cons("j", "left"),
      s: cons("8", "open", "i"),
      z: cons("k", "open", ","),
      h: cons("9", "open"),
      q: cons("z", "right"),
    };
    const mapped = single[ch];
    if (mapped) {
      pieces.push(mapped);
    }
    i += 1;
  }

  return pieces;
}

function hostVowels(pieces: Piece[]) {
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    if (piece.kind !== "v" || piece.long) continue;
    let host: Cons | undefined;
    let blocked = false;
    for (let j = i + 1; j < pieces.length; j++) {
      const next = pieces[j];
      if (next.kind === "v") {
        blocked = true;
        break;
      }
      if (next.kind === "c") {
        host = next;
        break;
      }
    }
    if (!blocked && host && !host.tehta) {
      host.tehta = piece.vowel;
      piece.hosted = true;
    }
  }
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].kind !== "se") continue;
    for (let j = i - 1; j >= 0; j--) {
      const prev = pieces[j];
      if (prev.kind === "c") {
        prev.underE = true;
        break;
      }
    }
  }
}

function renderGlyph(piece: Cons): string {
  let base = piece.base;
  let cls = piece.cls;
  if (piece.tehta && piece.nuquerna) {
    base = piece.nuquerna;
    cls = "open";
  }
  let out = base;
  if (piece.tehta) out += TEHTA[cls][piece.tehta];
  if (piece.underE) out += UNDER_E[cls];
  return out;
}

function renderCarrier(vowel: Vowel, long: boolean): string {
  return (long ? LONG_CARRIER : SHORT_CARRIER) + TEHTA.carrier[vowel];
}

function transliterateWord(raw: string): string {
  const word = raw.toLowerCase();
  const shortcut = TENGWAR_WORD[word];
  if (shortcut) return shortcut;

  const pieces = scan(word);
  hostVowels(pieces);

  let out = "";
  for (const piece of pieces) {
    if (piece.kind === "c") out += renderGlyph(piece);
    else if (piece.kind === "v" && !piece.hosted) {
      out += renderCarrier(piece.vowel, piece.long);
    }
  }
  return out;
}

function mapOther(run: string): string {
  let out = "";
  for (const ch of run) {
    if (PUNCT[ch] !== undefined) {
      out += PUNCT[ch];
      continue;
    }
    if (ch >= "0" && ch <= "9") {
      out += NUMERALS[ch.charCodeAt(0) - 48];
      continue;
    }
    out += ch;
  }
  return out;
}

export default function processTengwarText(text: string): string {
  return text.replace(/[A-Za-z]+|[^A-Za-z]+/g, (part) =>
    /[A-Za-z]/.test(part) ? transliterateWord(part) : mapOther(part),
  );
}
