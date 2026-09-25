const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type LatinCipherTableProps = {
  symbolHeader: string;
  fontFamily: string;
  description: string;
};

export default function LatinCipherTable({
  symbolHeader,
  fontFamily,
  description,
}: LatinCipherTableProps) {
  return (
    <>
      <p>{description}</p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>{symbolHeader}</th>
            <th>Latin Letter</th>
          </tr>
        </thead>
        <tbody>
          {LETTERS.map((letter) => (
            <tr key={letter}>
              <td style={{ fontFamily: `"${fontFamily}", sans-serif` }}>
                {letter}
              </td>
              <td>{letter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
