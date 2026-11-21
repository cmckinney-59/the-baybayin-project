import { ALPHABETS_DATA, alphabetNameToRouteSegment } from "../../data/ALPHABETS_DATA";
import {
  BAYBAYIN_CONSONANTS,
  BAYBAYIN_KUDLITS,
  BAYBAYIN_VOWELS,
} from "../../data/BaybayinData/BAYBAYIN_DATA";
import {
  BUHID_CONSONANTS,
  BUHID_KUDLITS,
  BUHID_VOWELS,
} from "../../data/BuhidData/BUHID_DATA";
import {
  HANUNOO_CONSONANTS,
  HANUNOO_KUDLITS,
  HANUNOO_VOWELS,
} from "../../data/HanunooData/HANUNOO_DATA";
import { OGHAM_LETTER } from "../../data/OghamData/oghamKeyboardLayout";
import {
  TAGBANWA_CONSONANTS,
  TAGBANWA_KUDLITS,
  TAGBANWA_VOWELS,
} from "../../data/TagbanwaData/TAGBANWA_DATA";

/** Pages without a selected script drift through these three. */
export const SIGNATURE_SCRIPTS = ["Baybayin", "Aurebesh", "Deseret"] as const;

const LATIN_GLYPHS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "H",
  "K",
  "L",
  "M",
  "N",
  "O",
  "R",
  "S",
  "T",
  "W",
  "Y",
];

/** Aurebesh's catalog class is not a real face; Canon is the default. */
const FONT_CLASS_OVERRIDE: Record<string, string> = {
  Aurebesh: "aurebesh-font-canon",
};

const PARTICLE_COUNT = 12;

export type GlyphParticle = {
  id: string;
  glyph: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  drift: string;
  ink: string;
  top: string;
};

export type ScriptField = {
  key: string;
  fontClass: string;
  glyphs: string[];
};

function unique(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))];
}

function withVowelMarks(
  consonants: Record<string, string>,
  vowels: Record<string, string>,
  markI?: string | null,
  markU?: string | null,
): string[] {
  const bases = unique(Object.values(consonants));
  const marks = [markI, markU].filter((mark): mark is string => Boolean(mark));
  const marked = bases.slice(0, 5).flatMap((glyph) =>
    marks.map((mark) => glyph + mark),
  );
  return unique([...Object.values(vowels), ...bases, ...marked]);
}

function codePoints(start: number, end: number, step: number): string[] {
  const glyphs: string[] = [];
  for (let code = start; code <= end; code += step) {
    glyphs.push(String.fromCodePoint(code));
  }
  return glyphs;
}

const GLYPHS_BY_ALPHABET: Record<string, string[]> = {
  Baybayin: withVowelMarks(
    BAYBAYIN_CONSONANTS,
    BAYBAYIN_VOWELS,
    BAYBAYIN_KUDLITS.I,
    BAYBAYIN_KUDLITS.U,
  ),
  Buhid: withVowelMarks(
    BUHID_CONSONANTS,
    BUHID_VOWELS,
    BUHID_KUDLITS.I,
    BUHID_KUDLITS.U,
  ),
  Hanunoo: withVowelMarks(
    HANUNOO_CONSONANTS,
    HANUNOO_VOWELS,
    HANUNOO_KUDLITS.I,
    HANUNOO_KUDLITS.U,
  ),
  Tagbanwa: withVowelMarks(
    TAGBANWA_CONSONANTS,
    TAGBANWA_VOWELS,
    TAGBANWA_KUDLITS.I,
    TAGBANWA_KUDLITS.U,
  ),
  Deseret: codePoints(0x10428, 0x1044f, 2),
  Ogham: unique(Object.values(OGHAM_LETTER)),
};

function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let next = Math.imul(state ^ (state >>> 15), 1 | state);
    next = (next + Math.imul(next ^ (next >>> 7), 61 | next)) ^ next;
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

export function alphabetFromPathname(pathname: string): string | null {
  const match = pathname.match(/^\/transliterator\/([^/]+)\/?$/);
  if (!match) return null;
  const segment = decodeURIComponent(match[1]).toLowerCase();
  const entry = ALPHABETS_DATA.find(
    (alphabet) => alphabetNameToRouteSegment(alphabet.name) === segment,
  );
  return entry?.name ?? null;
}

export function fieldForAlphabet(name: string): ScriptField {
  const entry =
    ALPHABETS_DATA.find((alphabet) => alphabet.name === name) ??
    ALPHABETS_DATA.find((alphabet) => alphabet.name === "Baybayin");
  const key = entry?.name ?? "Baybayin";
  return {
    key,
    fontClass: FONT_CLASS_OVERRIDE[key] ?? entry?.outputFontClass ?? "baybayin-font",
    glyphs: GLYPHS_BY_ALPHABET[key] ?? LATIN_GLYPHS,
  };
}

export function particlesFor(name: string, glyphs: string[]): GlyphParticle[] {
  const rand = mulberry32(hashString(name));
  const pool = glyphs.length > 0 ? glyphs : LATIN_GLYPHS;

  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const depth = rand();
    const duration = 58 + rand() * 36;
    const glyph = pool[Math.floor(rand() * pool.length)] ?? pool[0];
    return {
      id: `${name}-${index}`,
      glyph,
      left: `${3 + rand() * 88}%`,
      size: `${(3.2 + depth * 4.4).toFixed(2)}rem`,
      duration: `${duration.toFixed(1)}s`,
      delay: `${(-rand() * duration).toFixed(1)}s`,
      drift: `${(-42 + rand() * 84).toFixed(1)}px`,
      ink: (0.17 - depth * 0.07).toFixed(3),
      top: `${rand() * 86}%`,
    };
  });
}
