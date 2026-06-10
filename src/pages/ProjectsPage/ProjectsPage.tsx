import "./ProjectsPage.css";
import ProjectsRow from "./ProjectsRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import Table from "../../components/Table/Table";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import { PROJECTS_DATA as BAYBAYIN_PROJECTS_DATA } from "../../data/BaybayinData/BAYBAYIN_PROJECTS_DATA";
import { PROJECTS_DATA as AUREBESH_PROJECTS_DATA } from "../../data/AurebeshData/AUREBESH_PROJECTS_DATA";

export default function ProjectsPage() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  return (
    <div className="projectsPage">
      <PageTitle title="Projects" />

      <CollapsibleSection title="Baybayin" defaultExpanded={false}>
        <Table
          data={BAYBAYIN_PROJECTS_DATA}
          headers={["Name", "Description", "Status"]}
          rows={BAYBAYIN_PROJECTS_DATA.map((project) => [
            project.name,
            project.description,
            "status" in project ? project.status : "",
          ])}
        />
      </CollapsibleSection>
      <CollapsibleSection title="Aurebesh" defaultExpanded={false}>
        <Table
          data={AUREBESH_PROJECTS_DATA}
          headers={["Name", "Description", "Status"]}
          rows={AUREBESH_PROJECTS_DATA.map((project) => [
            project.name,
            project.description,
            "status" in project ? project.status : "",
          ])}
        />
      </CollapsibleSection>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Name</th>
            {showExperimentalFeatures && <th>Description</th>}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {BAYBAYIN_PROJECTS_DATA.map((project) => (
            <ProjectsRow key={project.name} {...project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
