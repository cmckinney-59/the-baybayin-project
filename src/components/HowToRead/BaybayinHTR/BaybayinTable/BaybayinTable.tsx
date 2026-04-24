import { BAYBAYIN_DATA } from "../../../../data/BAYBAYIN_DATA";

export default function BaybayinTable() {
  return (
    <>
      <h3>Baybayin Alphabet Reference</h3>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Baybayin Symbol</th>
            <th>Latin Letter</th>
            <th>Sound</th>
          </tr>
        </thead>
        <tbody>
          {BAYBAYIN_DATA.map((letter) => (
            <tr key={letter.symbol}>
              <td className="baybayin-letter">{letter.symbol}</td>
              <td>{letter.letter}</td>
              <td>{letter.sound}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
