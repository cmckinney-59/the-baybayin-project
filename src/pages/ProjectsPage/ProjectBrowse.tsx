import { useMemo, useState, type ReactNode } from "react";
import type { ProjectEntry } from "../../data/projectsData";
import { ALL_PROJECTS, getProjectProgress } from "../../data/projectsData";
import PreviewDialog from "../../components/Dialog/PreviewDialog";
import ProjectStatusCell from "./ProjectStatusCell";

type Filter = "all" | "progress" | "Baybayin" | "Aurebesh" | "Deseret";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "progress", label: "In progress" },
  { id: "Baybayin", label: "Baybayin" },
  { id: "Aurebesh", label: "Aurebesh" },
  { id: "Deseret", label: "Deseret" },
];

function pdfPreviewSrc(fileUrl: string): string {
  return `${fileUrl}#page=1&view=Fit&toolbar=0&navpanes=0&scrollbar=0`;
}

function BrowseThumb({ project }: { project: ProjectEntry }) {
  const [isOpen, setIsOpen] = useState(false);
  const canOpen = Boolean(project.fileUrl && project.fileType === "pdf");

  let body: ReactNode;
  if (project.fileUrl && project.fileType === "pdf") {
    body = (
      <iframe
        className="projectsBrowseThumbFrame"
        src={pdfPreviewSrc(project.fileUrl)}
        title=""
        tabIndex={-1}
      />
    );
  } else if (project.fileType === "zip") {
    body = <span className="projectsBrowseThumbLabel">ZIP</span>;
  } else {
    body = (
      <span className="projectsBrowseThumbLabel">
        {getProjectProgress(project)}%
      </span>
    );
  }

  return (
    <>
      <div className="projectsBrowseThumb">
        {body}
        {canOpen && (
          <button
            type="button"
            className="projectTilePreviewOpen"
            aria-label={`Open preview of ${project.name}`}
            onClick={() => setIsOpen(true)}
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

export default function ProjectBrowse() {
  const [filter, setFilter] = useState<Filter>("all");

  const projects = useMemo(() => {
    if (filter === "all") return ALL_PROJECTS;
    if (filter === "progress") {
      return ALL_PROJECTS.filter((project) => project.draft != null);
    }
    return ALL_PROJECTS.filter((project) => project.alphabet === filter);
  }, [filter]);

  return (
    <div className="projectsBrowse">
      <div className="projectsBrowseFilters" role="tablist" aria-label="Filter projects">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={
              filter === item.id
                ? "projectsBrowseFilter is-selected"
                : "projectsBrowseFilter"
            }
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {projects.length === 0 ? (
        <p className="projectProgressEmpty">No projects in this group.</p>
      ) : (
        <ul className="projectsBrowseList">
          {projects.map((project) => {
            const progress = getProjectProgress(project);
            const inProgress = project.draft != null;
            return (
              <li
                key={`${project.alphabet}-${project.name}`}
                className="projectsBrowseItem"
              >
                <BrowseThumb project={project} />
                <div className="projectsBrowseBody">
                  <p className="projectsBrowseKicker">{project.alphabet}</p>
                  <h2 className="projectsBrowseName">{project.name}</h2>
                  {project.description ? (
                    <p className="projectsBrowseDescription">
                      {project.description}
                    </p>
                  ) : null}
                  {inProgress ? (
                    <div className="projectsBrowseProgress">
                      <div className="projectsBrowseProgressMeta">
                        <span>{project.draft}</span>
                        <span>{progress}%</span>
                      </div>
                      <div
                        className="projectsBrowseTrack"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${project.name} progress`}
                      >
                        <div
                          className="projectsBrowseFill"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="projectsBrowseActions">
                      <ProjectStatusCell
                        fileUrl={project.fileUrl}
                        fileName={project.fileName}
                        fileType={project.fileType}
                      />
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
