import { TAGBANWA_DATA } from "../../../../data/TagbanwaData/TAGBANWA_DATA";

export default function TagbanwaTable() {
  return (
    <>
      <h3>Tagbanwa Alphabet Reference</h3>
      <p>
        Tagbanwa uses three standalone vowels and fourteen consonants. Kudlit
        marks below a consonant change its vowel; virama removes the vowel
        entirely.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Tagbanwa Symbol</th>
            <th>Latin Letter</th>
            <th>Sound</th>
          </tr>
        </thead>
        <tbody>
          {TAGBANWA_DATA.map((letter) => (
            <tr key={letter.symbol + letter.letter}>
              <td className="tagbanwa-letter">{letter.symbol}</td>
              <td>{letter.letter}</td>
              <td>{letter.sound}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
