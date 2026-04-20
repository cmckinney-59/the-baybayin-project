import { AUREBESH_DATA } from "../../../../data/AUREBESH_DATA";

export default function AurebeshTableNumbers() {
  return (
    <>
      <h2>Numbers</h2>
      <p>
        There are two types of numbers in used in Aurebesh. The first is styled
        similar to arabic numbers, the second are numerals that somewhat
        resemble braille.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Arabic Styled</th>
            <th>Tech Numeral</th>
          </tr>
        </thead>
        <tbody>
          {AUREBESH_DATA.filter((letter) => letter.type === "number").map(
            (letter) => (
              <tr key={letter.letter}>
                <td className="aurebesh-letter">{letter.letter}</td>
                <td className="aurebesh-letter-tech">{letter.letter}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
