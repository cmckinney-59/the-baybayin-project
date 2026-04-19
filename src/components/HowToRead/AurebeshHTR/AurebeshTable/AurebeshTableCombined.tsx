import { AUREBESH_DATA } from "../../../../data/AUREBESH_DATA";

export default function AurebeshTableCombined() {
  return (
    <>
      <h2>Combination Symbols (Ligatures)</h2>
      <p>
        There are some canon Aurebesh tables that contain the following symbols.
        These are almost never used in official canon material. They are less
        rare in legends material and some users prefer to use them often for
        artistic purposes.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Aurebesh Symbol</th>
            <th>Latin Letter</th>
            <th>Aurebesh Name</th>
          </tr>
        </thead>
        <tbody>
          {AUREBESH_DATA.filter((letter) => letter.type === "combined").map(
            (letter) => (
              <tr key={letter.letter}>
                <td className="aurebesh-letter">{letter.letter}</td>
                <td>{letter.letter}</td>
                <td>{letter.name}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
