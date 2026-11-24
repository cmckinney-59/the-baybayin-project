import { useState } from "react";
import { useAlphabet } from "../../contexts/AlphabetContext";
import {
  getFontDownloadUrl,
  getFontTableRows,
  getLicenseNoticeUrl,
  type FontTableRow,
} from "../../data/FONTS_TABLE_DATA";
import downloadFont, {
  downloadFontWithLicense,
} from "../../utils/DownloadFont";
import CloseDialogButton from "../Buttons/DialogButtons/CloseDialogButton";
import {
  AiOutlineDownload,
  AiOutlineInfoCircle,
  AiOutlineLink,
} from "react-icons/ai";

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
  if (row.externalUrl) return "—";
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

function FontFileAction({
  row,
  onDownload,
  className,
}: {
  row: FontTableRow;
  onDownload: (row: FontTableRow) => void;
  className: string;
}) {
  if (!row.externalUrl && !row.downloadPath) {
    return null;
  }

  if (row.externalUrl) {
    const label = row.externalLabel ?? "Source";
    return (
      <a
        className="fonts-table-icon-button"
        href={row.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${row.name} at ${label}`}
        aria-label={`${row.name} at ${label}`}
      >
        <AiOutlineLink aria-hidden />
      </a>
    );
  }

  const url = getFontDownloadUrl(row.downloadPath);
  return (
    <button
      type="button"
      className={className}
      disabled={!url}
      title={
        url ? `Download ${row.downloadName}` : "No downloadable file available"
      }
      aria-label={
        url ? `Download ${row.downloadName}` : "No downloadable file available"
      }
      onClick={() => onDownload(row)}
    >
      <AiOutlineDownload aria-hidden />
    </button>
  );
}

function FontTableBody({
  rows,
  onInfo,
  onDownload,
}: {
  rows: FontTableRow[];
  onInfo: (row: FontTableRow) => void;
  onDownload: (row: FontTableRow) => void;
}) {
  return (
    <tbody>
      {rows.map((row) => (
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
                  onClick={() => onInfo(row)}
                >
                  <AiOutlineInfoCircle aria-hidden />
                </button>
                <FontFileAction
                  row={row}
                  onDownload={onDownload}
                  className="downloadButton fonts-table-download"
                />
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
}

function FontsDesktopTable({
  rows,
  onInfo,
  onDownload,
}: {
  rows: FontTableRow[];
  onInfo: (row: FontTableRow) => void;
  onDownload: (row: FontTableRow) => void;
}) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <div className="table-scroll-wrapper fonts-table-desktop">
      <table className="alphabet-table fonts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sample</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <FontTableBody rows={rows} onInfo={onInfo} onDownload={onDownload} />
      </table>
    </div>
  );
}

function FontsMobileList({
  rows,
  onInfo,
  onDownload,
}: {
  rows: FontTableRow[];
  onInfo: (row: FontTableRow) => void;
  onDownload: (row: FontTableRow) => void;
}) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <ul className="fonts-mobile-list">
      {rows.map((row) => (
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
                onClick={() => onInfo(row)}
              >
                <AiOutlineInfoCircle aria-hidden />
              </button>
              <FontFileAction
                row={row}
                onDownload={onDownload}
                className="downloadButton fonts-mobile-download"
              />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default function FontsTable() {
  const { currentAlphabet } = useAlphabet();
  const rows = getFontTableRows(currentAlphabet);
  const [infoRow, setInfoRow] = useState<FontTableRow | null>(null);

  if (rows.length === 0) {
    return null;
  }

  const standardRows = rows.filter((row) => row.section !== "unicode-remapped");
  const unicodeRemappedRows = rows.filter(
    (row) => row.section === "unicode-remapped",
  );

  const handleDownload = (row: FontTableRow) => {
    const url = getFontDownloadUrl(row.downloadPath);
    if (!url) {
      window.alert(`No downloadable file is available for "${row.downloadName}".`);
      return;
    }
    if (!row.licenseNoticePath) {
      downloadFont(url, row.downloadName);
      return;
    }
    const noticeUrl = getLicenseNoticeUrl(row.licenseNoticePath);
    const fontFileName = row.downloadPath.split("/").pop() ?? row.downloadName;
    const noticeFileName =
      row.licenseNoticePath.split("/").pop() ?? "LICENSE.txt";
    if (!noticeUrl) {
      window.alert(`No license notice is available for "${row.downloadName}".`);
      return;
    }
    void downloadFontWithLicense(
      url,
      fontFileName,
      noticeUrl,
      noticeFileName,
      row.downloadName,
    ).catch(() => {
      window.alert(`Could not prepare the download for "${row.downloadName}".`);
    });
  };

  return (
    <>
      <FontsDesktopTable
        rows={standardRows}
        onInfo={setInfoRow}
        onDownload={handleDownload}
      />
      <FontsMobileList
        rows={standardRows}
        onInfo={setInfoRow}
        onDownload={handleDownload}
      />

      {unicodeRemappedRows.length > 0 && (
        <section className="fonts-table-section fonts-table-section--unicode-remapped">
          <p className="fonts-table-section-note">
            These are remapped versions of fonts listed above. They place the
            same letterforms on Unicode Deseret code points so the glyphs work
            with standard Deseret text.
          </p>
          <FontsDesktopTable
            rows={unicodeRemappedRows}
            onInfo={setInfoRow}
            onDownload={handleDownload}
          />
          <FontsMobileList
            rows={unicodeRemappedRows}
            onInfo={setInfoRow}
            onDownload={handleDownload}
          />
        </section>
      )}

      {infoRow && (
        <FontInfoDialog row={infoRow} onClose={() => setInfoRow(null)} />
      )}
    </>
  );
}
