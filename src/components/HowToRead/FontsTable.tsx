import { useAlphabet } from "../../contexts/AlphabetContext";
import {
  getFontDownloadUrl,
  getFontTableRows,
  type FontTableRow,
} from "../../data/FONTS_TABLE_DATA";
import downloadFont from "../../utils/DownloadFont";
import { AiOutlineDownload } from "react-icons/ai";

function FontCreatorCell({ row }: { row: FontTableRow }) {
  if (!row.creator) {
    return <span>—</span>;
  }
  if (!row.sourceUrl) {
    return <span>{row.creator}</span>;
  }
  return (
    <a
      href={row.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="link fonts-table-creator-link"
    >
      {row.creator}
    </a>
  );
}

export default function FontsTable() {
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);
  const showCreator = rows.some((row) => row.creator);

  if (rows.length === 0) {
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
      <div className="table-scroll-wrapper fonts-table-desktop">
        <table className="alphabet-table fonts-table">
          <thead>
            <tr>
              <th>Font</th>
              <th>Sample</th>
              <th>Unicode</th>
              {showCreator && <th>Creator</th>}
              <th>License</th>
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
                  <td>{row.supportsUnicode}</td>
                  {showCreator && (
                    <td>
                      <FontCreatorCell row={row} />
                    </td>
                  )}
                  <td>{row.license}</td>
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
                      aria-label={
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
      <ul className="fonts-mobile-list">
        {rows.map((row) => {
          const url = getFontDownloadUrl(row.downloadPath);
          return (
            <li key={row.id} className="fonts-mobile-card">
              <div className="fonts-mobile-copy">
                <p className="fonts-mobile-name">{row.name}</p>
                <p className={`fonts-mobile-sample ${row.fontClass}`}>
                  {row.sample}
                </p>
                <p className="fonts-mobile-meta">
                  Unicode: {row.supportsUnicode} · {row.license}
                  {row.creator ? (
                    <>
                      {" · "}
                      {row.sourceUrl ? (
                        <a
                          href={row.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link fonts-table-creator-link"
                        >
                          {row.creator}
                        </a>
                      ) : (
                        row.creator
                      )}
                    </>
                  ) : null}
                </p>
              </div>
              <button
                type="button"
                className="downloadButton fonts-mobile-download"
                disabled={!url}
                aria-label={
                  url
                    ? `Download ${row.downloadName}`
                    : "No downloadable file available"
                }
                onClick={() =>
                  handleDownload(row.downloadPath, row.downloadName)
                }
              >
                <AiOutlineDownload aria-hidden />
                Download
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
