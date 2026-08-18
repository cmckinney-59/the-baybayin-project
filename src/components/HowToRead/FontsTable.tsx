import { useAlphabet } from "../../contexts/AlphabetContext";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import {
  getFontDownloadUrl,
  getFontTableRows,
} from "../../data/FONTS_TABLE_DATA";
import downloadFont from "../../utils/DownloadFont";

export default function FontsTable() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);

  if (!showExperimentalFeatures || rows.length === 0) {
    return null;
  }

  const handleDownload = (downloadPath: string, downloadName: string) => {
    const url = getFontDownloadUrl(downloadPath);
    if (!url) {
      window.alert(`No downloadable file is available for "${downloadName}".`);
      return;
    }
    downloadFont(url, downloadName);
  };

  return (
    <>
      <div className="table-scroll-wrapper">
        <table className="alphabet-table fonts-table">
          <thead>
            <tr>
              <th>Font</th>
              <th>Sample</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const url = getFontDownloadUrl(row.downloadPath);
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td className={`fonts-table-sample ${row.fontClass}`}>
                    {row.sample}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="downloadButton"
                      disabled={!url}
                      title={
                        url
                          ? `Download ${row.downloadName}`
                          : "No downloadable file available"
                      }
                      onClick={() =>
                        handleDownload(row.downloadPath, row.downloadName)
                      }
                    >
                      Download
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
