import { useState } from "react";
import type { ProjectRow } from "../../data/PROJECTS_DATA";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import PreviewDialog from "../../components/Dialog/PreviewDialog";

export default function ProjectsRow(project: ProjectRow) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { showExperimentalFeatures } = useExperimentalFeatures();
  let row: React.ReactNode = null;

  const normalizedFileType =
    "fileType" in project ? project.fileType.toUpperCase() : "";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "fileUrl" in project ? project.fileUrl : "";
    link.download = "fileName" in project ? project.fileName : "";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  if ("fileUrl" in project) {
    row = (
      <>
        <tr>
          <td>{project.name}</td>
          {showExperimentalFeatures && <td>{project.description}</td>}
          <td>
            {(normalizedFileType === "PDF" || normalizedFileType === "ZIP") &&
              showExperimentalFeatures && (
                <button
                  type="button"
                  onClick={handlePreview}
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
              Download {normalizedFileType}
            </button>
          </td>
        </tr>
        {isPreviewOpen && (
          <PreviewDialog
            fileUrl={project.fileUrl}
            onClose={() => setIsPreviewOpen(false)}
          />
        )}
      </>
    );
  } else {
    row = (
      <tr>
        <td>{project.name}</td>
        {showExperimentalFeatures && <td>{project.description}</td>}
        <td>{project.status}</td>
      </tr>
    );
  }

  return row;
}
