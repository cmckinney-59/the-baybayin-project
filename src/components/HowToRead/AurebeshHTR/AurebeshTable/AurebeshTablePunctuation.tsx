import { AUREBESH_DATA } from "../../../../data/AUREBESH_DATA";

export default function AurebeshTablePunctuation() {
  return (
    <>
      <h2>Punctuation</h2>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Aurebesh Symbol</th>
            <th>Punctuation</th>
          </tr>
        </thead>
        <tbody>
          {AUREBESH_DATA.filter((letter) => letter.type === "punctuation").map(
            (letter) => (
              <tr key={letter.letter}>
                <td className="aurebesh-letter">{letter.letter}</td>
                <td>{letter.letter}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
