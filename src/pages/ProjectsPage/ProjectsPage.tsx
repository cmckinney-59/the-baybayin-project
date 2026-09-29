import { useState } from "react";
import "./ProjectsPage.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "../../components/Table/Table";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import { PROJECTS_DATA as BAYBAYIN_PROJECTS_DATA } from "../../data/BaybayinData/BAYBAYIN_PROJECTS_DATA";
import { PROJECTS_DATA as AUREBESH_PROJECTS_DATA } from "../../data/AurebeshData/AUREBESH_PROJECTS_DATA";
import { PROJECTS_DATA as DESERET_PROJECTS_DATA } from "../../data/DeseretData/DESERET_PROJECTS_DATA";
import { getCurrentProjects } from "../../data/projectsData";
import type { Project } from "../../models/models";
import ProjectStatusCell from "./ProjectStatusCell";
import ProjectProgressList from "./ProjectProgressList";
import ProjectTiles from "./ProjectTiles";
import ProjectBrowse from "./ProjectBrowse";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import {
  AiOutlineAppstore,
  AiOutlineBook,
  AiOutlineUnorderedList,
} from "react-icons/ai";

type ProjectsView = "tile" | "list" | "browse";

type AlphabetSection = {
  title: string;
  projects: Project[];
};

export default function ProjectsPage() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const [view, setView] = useState<ProjectsView>("browse");
  const currentProjects = getCurrentProjects();
  const headers = showExperimentalFeatures
    ? ["Name", "Description", "Draft"]
    : ["Name", "Draft"];

  const sections: AlphabetSection[] = [
    { title: "Baybayin", projects: BAYBAYIN_PROJECTS_DATA },
    { title: "Aurebesh", projects: AUREBESH_PROJECTS_DATA },
    { title: "Deseret", projects: DESERET_PROJECTS_DATA },
  ];

  return (
    <div
      className={`projectsPage${view === "tile" ? " projectsPage--tiles" : ""}`}
    >
      <div className="projectsPageHeader">
        <PageTitle title="Projects" />
        <div className="projectsViewToggle" role="group" aria-label="Projects view">
          <button
            type="button"
            className={view === "browse" ? "active" : ""}
            aria-label="Browse view"
            aria-pressed={view === "browse"}
            title="Browse"
            onClick={() => setView("browse")}
          >
            <AiOutlineBook />
          </button>
          <button
            type="button"
            className={view === "tile" ? "active" : ""}
            aria-label="Tile view"
            aria-pressed={view === "tile"}
            title="Tiles"
            onClick={() => setView("tile")}
          >
            <AiOutlineAppstore />
          </button>
          <button
            type="button"
            className={view === "list" ? "active" : ""}
            aria-label="List view"
            aria-pressed={view === "list"}
            title="List"
            onClick={() => setView("list")}
          >
            <AiOutlineUnorderedList />
          </button>
        </div>
      </div>

      {view === "browse" ? (
        <ProjectBrowse />
      ) : view === "tile" ? (
        <div className="projectsTileSections">
          <section className="projectsTileSection">
            <h2 className="projectsTileSectionTitle">Current Projects</h2>
            <ProjectProgressList projects={currentProjects} />
          </section>
          {sections.map(({ title, projects }) => (
            <section key={title} className="projectsTileSection">
              <h2 className="projectsTileSectionTitle">{title}</h2>
              <ProjectTiles projects={projects} />
            </section>
          ))}
        </div>
      ) : (
        <>
          <CollapsibleSection title="Current Projects" defaultExpanded={true}>
            <ProjectProgressList projects={currentProjects} />
          </CollapsibleSection>

          {sections.map(({ title, projects }) => (
            <CollapsibleSection key={title} title={title} defaultExpanded={false}>
              <Table
                data={projects}
                headers={headers}
                rows={projects.map((project) => [
                  project.name,
                  ...(showExperimentalFeatures
                    ? [project.description ?? ""]
                    : []),
                  <ProjectStatusCell
                    key={project.name}
                    draft={project.draft}
                    fileUrl={project.fileUrl}
                    fileName={project.fileName}
                    fileType={project.fileType}
                  />,
                ])}
              />
            </CollapsibleSection>
          ))}
        </>
      )}
    </div>
  );
}
