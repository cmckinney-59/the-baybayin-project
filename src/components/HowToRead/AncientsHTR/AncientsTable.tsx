const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AncientsTable() {
  return (
    <>
      <h3>Ancients Alphabet Letters</h3>
      <p>
        The Ancients alphabet is a font cipher. Each Latin letter maps to one
        glyph. Type as you normally would and the font draws the matching
        symbol. Text is read from left to right.
      </p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Ancients Symbol</th>
            <th>Latin Letter</th>
          </tr>
        </thead>
        <tbody>
          {LETTERS.map((letter) => (
            <tr key={letter}>
              <td className="ancients-letter">{letter}</td>
              <td>{letter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
