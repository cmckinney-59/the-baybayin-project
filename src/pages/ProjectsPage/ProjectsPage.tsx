import "./ProjectsPage.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "../../components/Table/Table";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import { PROJECTS_DATA as BAYBAYIN_PROJECTS_DATA } from "../../data/BaybayinData/BAYBAYIN_PROJECTS_DATA";
import { PROJECTS_DATA as AUREBESH_PROJECTS_DATA } from "../../data/AurebeshData/AUREBESH_PROJECTS_DATA";
import { PROJECTS_DATA as DESERET_PROJECTS_DATA } from "../../data/DeseretData/DESERET_PROJECTS_DATA";
import { getCurrentProjects } from "../../data/projectsData";
import ProjectStatusCell from "./ProjectStatusCell";
import ProjectProgressList from "./ProjectProgressList";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";

export default function ProjectsPage() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  const currentProjects = getCurrentProjects();
  const headers = showExperimentalFeatures
    ? ["Name", "Description", "Status"]
    : ["Name", "Status"];

  return (
    <div className="projectsPage">
      <PageTitle title="Projects" />

      <CollapsibleSection title="Current Projects" defaultExpanded={true}>
        <ProjectProgressList projects={currentProjects} />
      </CollapsibleSection>

      <CollapsibleSection title="Baybayin" defaultExpanded={false}>
        <Table
          data={BAYBAYIN_PROJECTS_DATA}
          headers={headers}
          rows={BAYBAYIN_PROJECTS_DATA.map((project) => [
            project.name,
            ...(showExperimentalFeatures ? [project.description ?? ""] : []),
            <ProjectStatusCell
              key={project.name}
              status={project.status}
              fileUrl={project.fileUrl}
              fileName={project.fileName}
              fileType={project.fileType}
            />,
          ])}
        />
      </CollapsibleSection>
      <CollapsibleSection title="Aurebesh" defaultExpanded={false}>
        <Table
          data={AUREBESH_PROJECTS_DATA}
          headers={headers}
          rows={AUREBESH_PROJECTS_DATA.map((project) => [
            project.name,
            ...(showExperimentalFeatures ? [project.description ?? ""] : []),
            <ProjectStatusCell
              key={project.name}
              status={project.status}
              fileUrl={project.fileUrl}
              fileName={project.fileName}
              fileType={project.fileType}
            />,
          ])}
        />
      </CollapsibleSection>
      <CollapsibleSection title="Deseret" defaultExpanded={false}>
        <Table
          data={DESERET_PROJECTS_DATA}
          headers={headers}
          rows={DESERET_PROJECTS_DATA.map((project) => [
            project.name,
            ...(showExperimentalFeatures ? [project.description ?? ""] : []),
            <ProjectStatusCell
              key={project.name}
              status={project.status}
              fileUrl={project.fileUrl}
              fileName={project.fileName}
              fileType={project.fileType}
            />,
          ])}
        />
      </CollapsibleSection>
    </div>
  );
}
