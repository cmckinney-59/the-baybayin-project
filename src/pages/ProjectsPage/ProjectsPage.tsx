import { PROJECTS_DATA } from "../../data/PROJECTS_DATA";
import "./ProjectsPage.css";
import ProjectsRow from "./ProjectsRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useExperimentalFeatures } from "../../contexts/ExperimentalFeaturesContext";

export default function ProjectsPage() {
  const { showExperimentalFeatures } = useExperimentalFeatures();
  return (
    <div className="projectsPage">
      <PageTitle title="Projects" />
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
