import { useState } from "react";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import PreviewDialog from "../../components/Dialog/PreviewDialog";

type ProjectStatusCellProps = {
  status: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: "pdf" | "zip";
};

export default function ProjectStatusCell({
  status,
  fileUrl,
  fileName,
  fileType,
}: ProjectStatusCellProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { showExperimentalFeatures } = useExperimentalFeatures();

  const handleDownload = () => {
    if (!fileUrl || !fileName) return;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (status === "Downloadable" && fileUrl && fileName) {
    const fileTypeLabel = fileType?.toUpperCase() ?? "";
    const canPreview =
      fileTypeLabel === "PDF" || fileTypeLabel === "ZIP";

    return (
      <>
        {canPreview && showExperimentalFeatures && (
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="previewButton"
          >
            Preview
          </button>
        )}
        <button
          type="button"
          onClick={handleDownload}
          className="downloadButton"
        >
          Download {fileTypeLabel}
        </button>
        {isPreviewOpen && (
          <PreviewDialog
            fileUrl={fileUrl}
            onClose={() => setIsPreviewOpen(false)}
          />
        )}
      </>
    );
  }

  return status;
}
