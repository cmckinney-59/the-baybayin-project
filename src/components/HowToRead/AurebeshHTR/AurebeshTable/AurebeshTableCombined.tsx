export default function AurebeshTableCombined() {
  return (
    <>
      <h2>Combination Symbols</h2>
      <p>Some sounds are expressed with a single symbol. See examples below:</p>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Aurebesh Symbol</th>
            <th>Latin Letter</th>
            <th>Aurebesh Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="aurebesh-letter">ç</td>
            <td>CH</td>
            <td>Cherek</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">æ</td>
            <td>AE</td>
            <td>Enth</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">ë</td>
            <td>EO</td>
            <td>Onith</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">þ</td>
            <td>KH</td>
            <td>Krenth</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">ñ</td>
            <td>NG</td>
            <td>Nen</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">ø</td>
            <td>OO</td>
            <td>Orenth</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">ß</td>
            <td>SH</td>
            <td>Shen</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">ð</td>
            <td>TH</td>
            <td>Thesh</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
