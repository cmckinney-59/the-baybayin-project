import { DESERET_DATA } from "../../../data/DeseretData/DESERET_DATA";

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
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Sound</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {DESERET_DATA.map((letter) => (
            <tr key={letter.upper}>
              <td className="deseret-letter deseret-font">{letter.upper}</td>
              <td>{letter.sound}</td>
              <td>{letter.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Use of the characters "𐐉", "𐐃", and "𐐂"</h3>
      <p>
        The character "𐐉" is used in Brittish and early American English.
        "𐐉" and "𐐃" were subsequently merged into just "𐐃" and is used in Modern Eastern American English. This is often known as the "cot caught merger".
        In Modern Western American and Canadian English, the character "𐐂" is used instead of "𐐉" and "𐐃".
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="deseret-letter deseret-font">𐐉 𐐃 𐐂</td>
            <td>Brittish and early American English</td>
          </tr>
          <tr>
            <td className="deseret-letter deseret-font">𐐃 𐐂</td>
            <td>Modern Eastern American English</td>
          </tr>
          <tr>
            <td className="deseret-letter deseret-font">𐐂</td>
            <td>Modern Western American and Canadian English</td>
          </tr>
        </tbody>
      </table>
      <h3>Introduction of the characters "𐐧" and "𐐦"</h3>
      <p>
        The characters "𐐧" and "𐐦" were introduced in 1859 to The Deseret Alphabet to represent the sounds "you" and "oi" respectively.
        These characters were a combination of 𐐏𐐅 and 𐐉𐐆.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Characters Combined</th>
            <th>Sound</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="deseret-letter deseret-font">𐐧</td>
            <td>𐐏𐐅</td>
            <td>You</td>
          </tr>
          <tr>
            <td className="deseret-letter deseret-font">𐐦</td>
            <td>𐐉𐐆</td>
            <td>Oi</td>
          </tr>
        </tbody>
      </table>
      <h3>Characters "𐐜", "𐐘", and "𐐒" as words</h3>
      <p>
        There are a few characters in the Deseret Alphabet that can be used as words when written by themselves.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Word</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="deseret-letter deseret-font">𐐜</td>
            <td>The/Thee</td>
          </tr>
          <tr>
            <td className="deseret-letter deseret-font">𐐘</td>
            <td>Gay</td>
          </tr>
          <tr>
            <td className="deseret-letter deseret-font">𐐒</td>
            <td>Bee</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
