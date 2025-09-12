import "./BaybayinTable.css";

export default function BaybayinTable() {
  return (
    <>
      <h3>Baybayin Alphabet Reference</h3>
      <table className="baybayin-table">
        <thead>
          <tr>
            <th>Baybayin Symbol</th>
            <th>Latin Letter</th>
            <th>Sound</th>
            <th>Example Word</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="baybayin-letter">A</td>
            <td>A</td>
            <td>/a/</td>
            <td>ama (father)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">I</td>
            <td>E / I</td>
            <td>/e/ /i/</td>
            <td>eto (this) isa (one)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">O</td>
            <td>O / U</td>
            <td>/o/ /u/</td>
            <td>ulo (head)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">k</td>
            <td>Ca / Ka</td>
            <td>/ka/ /ca/</td>
            <td>kabayo (horse) PUT EXAMPLE HERE</td>
          </tr>
          <tr>
            <td className="baybayin-letter">b</td>
            <td>Ba / Va</td>
            <td>/ba/ /va/</td>
            <td>bahay (house)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">d</td>
            <td>Da</td>
            <td>/da/</td>
            <td>dahon (leaf)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">p</td>
            <td>Fa / Pa / Pha</td>
            <td>/fa/ /pa/</td>
            <td>pamilya (family)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">h</td>
            <td>Ha</td>
            <td>/ha/</td>
            <td>halik (kiss)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">g</td>
            <td>Ga</td>
            <td>/ga/</td>
            <td>gabi (night)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">l</td>
            <td>La</td>
            <td>/la/</td>
            <td>lalaki (man)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">m</td>
            <td>Ma</td>
            <td>/ma/</td>
            <td>mabuti (good)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">n</td>
            <td>Na</td>
            <td>/na/</td>
            <td>nanay (mother)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">N</td>
            <td>Nga</td>
            <td>/ŋa/</td>
            <td>ngiti (smile)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">s</td>
            <td>Sa / Za</td>
            <td>/sa/ /za/</td>
            <td>salamat (thank you)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">t</td>
            <td>Ta</td>
            <td>/ta/</td>
            <td>tahanan (home)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">w</td>
            <td>Wa</td>
            <td>/wa/</td>
            <td>walis (broom)</td>
          </tr>
          <tr>
            <td className="baybayin-letter">y</td>
            <td>Ya</td>
            <td>/ja/</td>
            <td>yaman (wealth)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
