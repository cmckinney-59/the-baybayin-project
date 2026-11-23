import Table from "../../Table/Table";
import { DESERET_DATA } from "../../../data/DeseretData/DESERET_DATA";

function DeseretGlyph({ children }: { children: string }) {
  return <span className="deseret-font">{children}</span>;
}

const VOWEL_USE = [
  {
    name: "british-early-american",
    letters: "𐐉 𐐃 𐐂",
    use: "Brittish and early American English",
  },
  {
    name: "modern-eastern",
    letters: "𐐃 𐐂",
    use: "Modern Eastern American English",
  },
  {
    name: "modern-western",
    letters: "𐐂",
    use: "Modern Western American and Canadian English",
  },
];

const INTRODUCED_CHARACTERS = [
  {
    name: "you",
    letter: "𐐧",
    combined: "𐐏𐐅",
    sound: "You",
  },
  {
    name: "oi",
    letter: "𐐦",
    combined: "𐐉𐐆",
    sound: "Oi",
  },
];

const WORD_CHARACTERS = [
  { name: "the", letter: "𐐜", word: "The/Thee" },
  { name: "gay", letter: "𐐘", word: "Gay" },
  { name: "bee", letter: "𐐒", word: "Bee" },
];

export default function DeseretTable() {
  return (
    <>
      <h3>Deseret Alphabet Letters</h3>
      <p>
        Deseret is phonetic, meaning each letter has a unique sound and words
        are written as they sound.
      </p>
      <p>
        For a deeper dive, read{" "}
        <a
          href="https://www.chem.ucla.edu/~jericks/Historical%20or%20Technical/Linguistics/Deseret_Guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          A Complete Guide to Reading and Writing in the Deseret Alphabet
        </a>{" "}
        by Neil Alexander Walker.
      </p>
      <Table
        data={DESERET_DATA}
        headers={["Letter", "Sound", "Example"]}
        rows={DESERET_DATA.map((letter) => [
          <DeseretGlyph key={letter.upper}>{letter.upper}</DeseretGlyph>,
          letter.sound,
          letter.example,
        ])}
      />
      <h3>Use of the characters "𐐉", "𐐃", and "𐐂"</h3>
      <p>
        The character "𐐉" is used in Brittish and early American English.
        "𐐉" and "𐐃" were subsequently merged into just "𐐃" and is used in Modern Eastern American English. This is often known as the "cot caught merger".
        In Modern Western American and Canadian English, the character "𐐂" is used instead of "𐐉" and "𐐃".
      </p>
      <Table
        data={VOWEL_USE}
        headers={["Letter", "Use"]}
        rows={VOWEL_USE.map((row) => [
          <DeseretGlyph key={row.name}>{row.letters}</DeseretGlyph>,
          row.use,
        ])}
      />
      <h3>Introduction of the characters "𐐧" and "𐐦"</h3>
      <p>
        The characters "𐐧" and "𐐦" were introduced in 1859 to The Deseret Alphabet to represent the sounds "you" and "oi" respectively.
        These characters were a combination of 𐐏𐐅 and 𐐉𐐆.
      </p>
      <Table
        data={INTRODUCED_CHARACTERS}
        headers={["Letter", "Characters Combined", "Sound"]}
        rows={INTRODUCED_CHARACTERS.map((row) => [
          <DeseretGlyph key={row.name}>{row.letter}</DeseretGlyph>,
          row.combined,
          row.sound,
        ])}
      />
      <h3>Characters "𐐜", "𐐘", and "𐐒" as words</h3>
      <p>
        There are a few characters in the Deseret Alphabet that can be used as words when written by themselves.
      </p>
      <Table
        data={WORD_CHARACTERS}
        headers={["Letter", "Word"]}
        rows={WORD_CHARACTERS.map((row) => [
          <DeseretGlyph key={row.name}>{row.letter}</DeseretGlyph>,
          row.word,
        ])}
      />
    </>
  );
}
