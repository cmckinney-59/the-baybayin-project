export default function AurebeshTablePunctuation() {
  return (
    <>
      <h2>Punctuation</h2>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Aurebesh Symbol</th>
            <th>Latin Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="aurebesh-letter">,</td>
            <td>,</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">.</td>
            <td>.</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">!</td>
            <td>!</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">?</td>
            <td>?</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">:</td>
            <td>:</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">;</td>
            <td>;</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">-</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">
              {"\u201C"} {"\u201D"}
            </td>
            <td>
              {"\u201C"} {"\u201D"}
            </td>
          </tr>
          <tr>
            <td className="aurebesh-letter">
              {"\u2018"} {"\u2019"}
            </td>
            <td>
              {"\u2018"} {"\u2019"}
            </td>
          </tr>
          <tr>
            <td className="aurebesh-letter">( )</td>
            <td>( )</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">/</td>
            <td>/</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">$</td>
            <td>$</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
