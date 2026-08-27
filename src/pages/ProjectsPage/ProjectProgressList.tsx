import type { ProjectEntry } from "../../data/projectsData";
import { getProjectProgress } from "../../data/projectsData";

type ProjectProgressListProps = {
  projects: ProjectEntry[];
};

export default function ProjectProgressList({
  projects,
}: ProjectProgressListProps) {
  if (projects.length === 0) {
    return <p className="projectProgressEmpty">No projects in progress.</p>;
  }

  return (
    <ul className="projectProgressList">
      {projects.map((project) => {
        const progress = getProjectProgress(project);

        return (
          <li
            key={`${project.alphabet}-${project.name}`}
            className="projectProgressItem"
          >
            <div className="projectProgressHeader">
              <span className="projectProgressName">{project.name}</span>
              <span className="projectProgressAlphabet">{project.alphabet}</span>
            </div>
            <p className="projectProgressStatus">{project.status}</p>
            <div
              className="projectProgressBarTrack"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${project.name} progress`}
            >
              <div
                className="projectProgressBarFill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="projectProgressPercent">{progress}%</span>
          </li>
        );
      })}
    </ul>
  );
}
