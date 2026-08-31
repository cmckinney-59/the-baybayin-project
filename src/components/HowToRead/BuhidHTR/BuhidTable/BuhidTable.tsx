import { BUHID_DATA } from "../../../../data/BuhidData/BUHID_DATA";

export default function BuhidTable() {
  return (
    <>
      <h3>Buhid Alphabet Reference</h3>
      <p>
        Buhid uses three standalone vowels and fifteen consonants. Kudlit marks
        below a consonant change its vowel; pamudpod removes the vowel entirely.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Buhid Symbol</th>
            <th>Latin Letter</th>
            <th>Sound</th>
          </tr>
        </thead>
        <tbody>
          {BUHID_DATA.map((letter) => (
            <tr key={letter.symbol}>
              <td className="buhid-letter">{letter.symbol}</td>
              <td>{letter.letter}</td>
              <td>{letter.sound}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
