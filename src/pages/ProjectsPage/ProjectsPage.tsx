import { PROJECTS_DATA } from "../../data/PROJECTS_DATA";
import "./ProjectsPage.css";
import ProjectsRow from "./ProjectsRow";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function ProjectsPage() {
  return (
    <div className="projectsPage">
      <PageTitle title="Projects" />
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Name</th>
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
