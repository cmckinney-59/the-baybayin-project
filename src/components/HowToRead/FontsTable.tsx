import { useAlphabet } from "../../contexts/AlphabetContext";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import { getFontTableRows } from "../../data/FONTS_TABLE_DATA";

export default function FontsTable() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);

  if (!showExperimentalFeatures || rows.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Fonts</h3>
      <div className="table-scroll-wrapper">
        <table className="alphabet-table fonts-table">
          <thead>
            <tr>
              <th>Font</th>
              <th>Sample</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td className={`fonts-table-sample ${row.fontClass}`}>
                  {row.sample}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
