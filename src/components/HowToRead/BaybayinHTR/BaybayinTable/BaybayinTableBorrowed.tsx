import "./BaybayinTable.css";

export default function BaybayinTableBorrowed() {
  return (
    <>
      <table className="baybayin-table">
        <thead>
          <tr>
            <th>Baybayin Symbol</th>
            <th>Original Tagalog</th>
            <th>Borrowed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="baybayin-letter">I</td>
            <td>I</td>
            <td>E</td>
          </tr>
          <tr>
            <td className="baybayin-letter">O</td>
            <td>O</td>
            <td>U</td>
          </tr>
          <tr>
            <td className="baybayin-letter">k+</td>
            <td>K</td>
            <td>C</td>
          </tr>
          <tr>
            <td className="baybayin-letter">b+</td>
            <td>B</td>
            <td>V</td>
          </tr>
          <tr>
            <td className="baybayin-letter">p+</td>
            <td>F</td>
            <td>P / Ph</td>
          </tr>
          <tr>
            <td className="baybayin-letter">s+</td>
            <td>S</td>
            <td>Z</td>
          </tr>
          <tr>
            <td className="baybayin-letter">siy+ / s+y+</td>
            <td>Siy / Sy</td>
            <td>Sh</td>
          </tr>
          <tr>
            <td className="baybayin-letter">diy+ / d+y+</td>
            <td>Diy / Dy</td>
            <td>J (Eng)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">h+</td>
            <td>H</td>
            <td>J (Spa)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">kuw+</td>
            <td>Kuw</td>
            <td>Qu (Spa / Eng)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">k+</td>
            <td>K</td>
            <td>Qu (Spa)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
