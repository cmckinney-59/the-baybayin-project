import { DESERET_DATA } from "../../../../data/DESERET_DATA";

export default function DeseretTable() {
  return (
    <>
      <h3>Deseret Alphabet Letters</h3>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Letter</th>
            <th>IPA</th>
            <th>Name</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {DESERET_DATA.map((letter) => (
            <tr key={letter.letter}>
              <td className="deseret-letter">{letter.letter}</td>
              <td>{letter.sound}</td>
              <td>{letter.name}</td>
              <td>{letter.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
