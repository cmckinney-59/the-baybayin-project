import { useState } from "react";
import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import PreviewDialog from "../../Dialog/PreviewDialog";
import {
  BAYBAYIN_DOCUMENT_CATEGORIES,
  BAYBAYIN_DOCUMENTS,
  type BaybayinDocument,
} from "../../../data/BaybayinData/BAYBAYIN_DOCUMENTS_DATA";
import "./BaybayinDocuments.css";

function downloadFile(fileUrl: string, fileName: string) {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function DocumentCard({ document }: { document: BaybayinDocument }) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <li className="baybayinDocumentCard">
      <button
        type="button"
        className="baybayinDocumentPreview"
        onClick={() => setPreviewOpen(true)}
        aria-label={`Preview ${document.name}`}
      >
        {document.kind === "image" ? (
          <img
            src={document.fileUrl}
            alt=""
            className="baybayinDocumentImage"
            loading="lazy"
          />
        ) : (
          <span className="baybayinDocumentPdfBadge">PDF</span>
        )}
      </button>
      <div className="baybayinDocumentBody">
        <h4 className="baybayinDocumentName">{document.name}</h4>
        {document.attribution ? (
          <p className="baybayinDocumentAttribution">{document.attribution}</p>
        ) : null}
        <div className="baybayinDocumentActions">
          <button
            type="button"
            className="baybayinDocumentButton"
            onClick={() => setPreviewOpen(true)}
          >
            Preview
          </button>
          <button
            type="button"
            className="baybayinDocumentButton"
            onClick={() => downloadFile(document.fileUrl, document.fileName)}
          >
            Download
          </button>
        </div>
      </div>
      {previewOpen && (
        <PreviewDialog
          fileUrl={document.fileUrl}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </li>
  );
}

export default function BaybayinDocuments() {
  return (
    <CollapsibleSection title="Documents" defaultExpanded={false}>
      <p>
        Public-domain and openly available Baybayin books, paleography studies,
        and character charts. Preview or download each item.
      </p>
      {BAYBAYIN_DOCUMENT_CATEGORIES.map((category) => {
        const documents = BAYBAYIN_DOCUMENTS.filter(
          (document) => document.category === category,
        );
        if (documents.length === 0) return null;
        return (
          <div key={category} className="baybayinDocumentCategory">
            <h3 className="baybayinDocumentCategoryTitle">{category}</h3>
            <ul className="baybayinDocumentGrid">
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
