import { HANUNOO_DATA } from "../../../../data/HanunooData/HANUNOO_DATA";

export default function HanunooTable() {
  return (
    <>
      <h3>Hanunoo Alphabet Reference</h3>
      <p>
        Hanunoo uses three standalone vowels and fifteen consonants. Kudlit marks
        below a consonant change its vowel; pamudpod removes the vowel entirely.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Hanunoo Symbol</th>
            <th>Latin Letter</th>
            <th>Sound</th>
          </tr>
        </thead>
        <tbody>
          {HANUNOO_DATA.map((letter) => (
            <tr key={letter.symbol}>
              <td className="hanunoo-letter">{letter.symbol}</td>
              <td>{letter.letter}</td>
              <td>{letter.sound}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
