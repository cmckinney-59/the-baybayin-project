import { useState, type ReactNode } from "react";
import type { Project } from "../../models/models";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import PreviewDialog from "../../components/Dialog/PreviewDialog";
import ProjectStatusCell from "./ProjectStatusCell";

type ProjectTilesProps = {
  projects: Project[];
};

function pdfPreviewSrc(fileUrl: string): string {
  return `${fileUrl}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;
}

function ProjectTilePreview({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const canOpen = Boolean(project.fileUrl && project.fileType === "pdf");

  let body: ReactNode;
  if (project.fileUrl && project.fileType === "pdf") {
    body = (
      <iframe
        className="projectTilePreviewFrame"
        src={pdfPreviewSrc(project.fileUrl)}
        title={`${project.name} preview`}
        tabIndex={-1}
      />
    );
  } else if (project.fileType === "zip") {
    body = (
      <div className="projectTilePreviewFallback">
        <span className="projectTilePreviewKind">ZIP</span>
        <span className="projectTilePreviewFile">{project.fileName}</span>
      </div>
    );
  } else {
    body = (
      <div className="projectTilePreviewFallback">
        <span className="projectTilePreviewKind">
          {project.draft ?? "In progress"}
        </span>
        {project.description ? (
          <span className="projectTilePreviewFile">{project.description}</span>
        ) : null}
      </div>
    );
  }

  return (
    <>
      <div className="projectTilePreview">
        {body}
        {canOpen && (
          <button
            type="button"
            className="projectTilePreviewOpen"
            onClick={() => setIsOpen(true)}
            aria-label={`Open preview of ${project.name}`}
          />
        )}
      </div>
      {isOpen && project.fileUrl && (
        <PreviewDialog
          fileUrl={project.fileUrl}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default function ProjectTiles({ projects }: ProjectTilesProps) {
  const { showExperimentalFeatures } = useExperimentalFeatures();

  if (projects.length === 0) {
    return <p className="projectProgressEmpty">No projects yet.</p>;
  }

  return (
    <ul className="projectTileGrid">
      {projects.map((project) => (
        <li key={project.name} className="projectTile">
          <ProjectTilePreview project={project} />
          <h3 className="projectTileName">{project.name}</h3>
          {showExperimentalFeatures && project.description ? (
            <p className="projectTileDescription">{project.description}</p>
          ) : null}
          <div className="projectTileStatus">
            <ProjectStatusCell
              draft={project.draft}
              fileUrl={project.fileUrl}
              fileName={project.fileName}
              fileType={project.fileType}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
