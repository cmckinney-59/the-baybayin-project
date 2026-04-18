import { AUREBESH_DATA } from "../../../../data/AUREBESH_DATA";

export default function AurebeshTable() {
  return (
    <>
      <h2>Basic Letters</h2>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Aurebesh Symbol</th>
            <th>Latin Letter</th>
            <th>Aurebesh Name</th>
          </tr>
        </thead>
        <tbody>
          {AUREBESH_DATA.map((letter) => (
            <tr key={letter.letter}>
              <td className="aurebesh-letter">{letter.letter}</td>
              <td>{letter.letter}</td>
              <td>{letter.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
