import { useState } from "react";
import CollapsibleSection from "../../CollapsibleSection/CollapsibleSection";
import PreviewDialog from "../../Dialog/PreviewDialog";
import {
  DESERET_DOCUMENT_CATEGORIES,
  DESERET_DOCUMENTS,
  type DeseretDocument,
} from "../../../data/DeseretData/DESERET_DOCUMENTS_DATA";
import "./DeseretDocuments.css";

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

  return (
    <li className="deseretDocumentCard">
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
          <span className="deseretDocumentPdfBadge">PDF</span>
        )}
      </button>
      <div className="deseretDocumentBody">
        <h4 className="deseretDocumentName">{document.name}</h4>
        <div className="deseretDocumentActions">
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
