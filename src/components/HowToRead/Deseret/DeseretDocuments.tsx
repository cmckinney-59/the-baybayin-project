import { useState } from "react";
import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import PreviewDialog from "../../Dialog/PreviewDialog";
import {
  DESERET_DOCUMENT_CATEGORIES,
  DESERET_DOCUMENTS,
  type DeseretDocument,
} from "../../../data/DeseretData/DESERET_DOCUMENTS_DATA";
import "./DeseretDocuments.css";

const PDF_THUMBNAILS = import.meta.glob(
  "../../../assets/documents/Deseret/thumbnails/*.jpg",
  { eager: true, import: "default", query: "?url" },
) as Record<string, string>;

function pdfThumbnailUrl(fileName: string): string | undefined {
  const stem = fileName.replace(/\.pdf$/i, "");
  const match = Object.entries(PDF_THUMBNAILS).find(([path]) =>
    path.endsWith(`/${stem}.jpg`),
  );
  return match?.[1];
}

function PdfThumbnail({ fileName }: { fileName: string }) {
  const src = pdfThumbnailUrl(fileName);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className="deseretDocumentPdfBadge">PDF</span>;
  }

  return (
    <img
      src={src}
      alt=""
      className="deseretDocumentPdfThumb"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function downloadFile(fileUrl: string, fileName: string) {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function DocumentCard({ document }: { document: DeseretDocument }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const isExternal = document.kind === "link";
  const linkLabel = document.linkLabel ?? "Source";
  const linkBadge = document.linkBadge ?? linkLabel;

  const preview = isExternal ? (
    <a
      className="deseretDocumentPreview deseretDocumentPreview--external"
      href={document.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${document.name} at ${linkLabel}`}
    >
      <span className="deseretDocumentPdfBadge">{linkBadge}</span>
    </a>
  ) : (
    <button
      type="button"
      className="deseretDocumentPreview"
      onClick={() => setPreviewOpen(true)}
      aria-label={`Preview ${document.name}`}
    >
      {document.kind === "image" ? (
        <img
          src={document.fileUrl}
          alt=""
          className="deseretDocumentImage"
          loading="lazy"
        />
      ) : (
        <PdfThumbnail fileName={document.fileName} />
      )}
    </button>
  );

  return (
    <li className="deseretDocumentCard">
      {preview}
      <div className="deseretDocumentBody">
        <h4 className="deseretDocumentName">{document.name}</h4>
        {document.attribution ? (
          <p className="deseretDocumentAttribution">{document.attribution}</p>
        ) : null}
        <div className="deseretDocumentActions">
          {isExternal ? (
            <a
              className="deseretDocumentButton"
              href={document.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkLabel}
            </a>
          ) : (
            <>
              <button
                type="button"
                className="deseretDocumentButton"
                onClick={() => setPreviewOpen(true)}
              >
                Preview
              </button>
              <button
                type="button"
                className="deseretDocumentButton"
                onClick={() => downloadFile(document.fileUrl, document.fileName)}
              >
                Download
              </button>
            </>
          )}
        </div>
      </div>
      {previewOpen && !isExternal && (
        <PreviewDialog
          fileUrl={document.fileUrl}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </li>
  );
}

export default function DeseretDocuments() {
  return (
    <CollapsibleSection title="Documents" defaultExpanded={false}>
      <p>
        Historical Deseret Alphabet books, charts, tables, and images from the
        documents collection.
      </p>
      {DESERET_DOCUMENT_CATEGORIES.map((category) => {
        const documents = DESERET_DOCUMENTS.filter(
          (document) => document.category === category,
        );
        if (documents.length === 0) return null;
        return (
          <div key={category} className="deseretDocumentCategory">
            <h3 className="deseretDocumentCategoryTitle">{category}</h3>
            <ul className="deseretDocumentGrid">
              {documents.map((document) => (
                <DocumentCard key={document.fileName} document={document} />
              ))}
            </ul>
          </div>
        );
      })}
    </CollapsibleSection>
  );
}
