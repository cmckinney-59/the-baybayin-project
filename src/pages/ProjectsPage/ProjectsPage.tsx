import { PROJECTS_DATA } from "../../data/PROJECTS_DATA";
import "./ProjectsPage.css";
import ProjectsRow from "./ProjectsRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";
import Table from "../../components/Table/Table";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";

export default function ProjectsPage() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  return (
    <div className="projectsPage">
      <PageTitle title="Projects" />

      <CollapsibleSection title="Baybayin" defaultExpanded={false}>
        <Table
          data={PROJECTS_DATA}
          headers={["Name", "Description", "Status"]}
          rows={PROJECTS_DATA.map((project) => [
            project.name,
            project.description,
            "status" in project ? project.status : "",
          ])}
        />
      </CollapsibleSection>
      <CollapsibleSection title="Aurebesh" defaultExpanded={false}>
        <Table
          data={PROJECTS_DATA}
          headers={["Name", "Description", "Status"]}
          rows={PROJECTS_DATA.map((project) => [
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
          {PROJECTS_DATA.map((project) => (
            <ProjectsRow key={project.name} {...project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
