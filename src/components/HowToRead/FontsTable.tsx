import { useState } from "react";
import { useAlphabet } from "../../contexts/AlphabetContext";
import {
  getFontDownloadUrl,
  getFontTableRows,
  type FontTableRow,
} from "../../data/FONTS_TABLE_DATA";
import downloadFont from "../../utils/DownloadFont";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import { AiOutlineDownload, AiOutlineInfoCircle } from "react-icons/ai";

function FontCreatorValue({ row }: { row: FontTableRow }) {
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

function getFontFileType(row: FontTableRow): string {
  const name = row.downloadName || row.downloadPath;
  const match = /\.([a-z0-9]+)$/i.exec(name);
  return match ? match[1].toUpperCase() : "—";
}

function FontInfoDialog({
  row,
  onClose,
}: {
  row: FontTableRow;
  onClose: () => void;
}) {
  return (
    <dialog
      className="dialog-overlay"
      open
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-box fonts-info-dialog" role="document">
        <CloseDialogButton onClose={onClose} />
        <div className="dialog-header">
          <div className="dialog-header-top-row">
            <h3>{row.name}</h3>
          </div>
        </div>
        <div className="dialog-content">
          <dl className="fonts-info-list">
            <div className="fonts-info-row">
              <dt>File type</dt>
              <dd>{getFontFileType(row)}</dd>
            </div>
            <div className="fonts-info-row">
              <dt>Unicode</dt>
              <dd>{row.supportsUnicode}</dd>
            </div>
            <div className="fonts-info-row">
              <dt>Creator</dt>
              <dd>
                <FontCreatorValue row={row} />
              </dd>
            </div>
            <div className="fonts-info-row">
              <dt>License</dt>
              <dd>{row.license}</dd>
            </div>
          </dl>
        </div>
      </div>
    </dialog>
  );
}

export default function FontsTable() {
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);
  const [infoRow, setInfoRow] = useState<FontTableRow | null>(null);

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
              <th aria-label="Actions" />
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
                    <div className="fonts-table-actions">
                      <button
                        type="button"
                        className="fonts-table-icon-button"
                        title={`Info for ${row.name}`}
                        aria-label={`Info for ${row.name}`}
                        onClick={() => setInfoRow(row)}
                      >
                        <AiOutlineInfoCircle aria-hidden />
                      </button>
                      <button
                        type="button"
                        className="downloadButton fonts-table-download"
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
                        <AiOutlineDownload aria-hidden />
                      </button>
                    </div>
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
              </div>
              <div className="fonts-mobile-actions">
                <button
                  type="button"
                  className="fonts-table-icon-button fonts-mobile-info"
                  title={`Info for ${row.name}`}
                  aria-label={`Info for ${row.name}`}
                  onClick={() => setInfoRow(row)}
                >
                  <AiOutlineInfoCircle aria-hidden />
                </button>
                <button
                  type="button"
                  className="downloadButton fonts-mobile-download"
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
                  <AiOutlineDownload aria-hidden />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {infoRow && (
        <FontInfoDialog row={infoRow} onClose={() => setInfoRow(null)} />
      )}
    </>
  );
}
