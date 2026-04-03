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
          <tr>
            <td className="aurebesh-letter">0</td>
            <td className="aurebesh-letter-tech">0</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">1</td>
            <td className="aurebesh-letter-tech">1</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">2</td>
            <td className="aurebesh-letter-tech">2</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">3</td>
            <td className="aurebesh-letter-tech">3</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">4</td>
            <td className="aurebesh-letter-tech">4</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">5</td>
            <td className="aurebesh-letter-tech">5</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">6</td>
            <td className="aurebesh-letter-tech">6</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">7</td>
            <td className="aurebesh-letter-tech">7</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">8</td>
            <td className="aurebesh-letter-tech">8</td>
          </tr>
          <tr>
            <td className="aurebesh-letter">9</td>
            <td className="aurebesh-letter-tech">9</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
