import type { ProjectEntry } from "../../data/projectsData";
import { getProjectProgress } from "../../data/projectsData";

type ProjectProgressListProps = {
  projects: ProjectEntry[];
};

type CircularProgressProps = {
  progress: number;
  label: string;
};

function CircularProgress({ progress, label }: CircularProgressProps) {
  const size = 96;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      className="projectProgressCircle"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${label} progress`}
    >
      <circle
        className="projectProgressCircleTrack"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        className="projectProgressCircleFill"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        className="projectProgressCircleText"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {progress}%
      </text>
    </svg>
  );
}

function groupProjectsByAlphabet(
  projects: ProjectEntry[],
): { alphabet: string; projects: ProjectEntry[] }[] {
  const groups = new Map<string, ProjectEntry[]>();

  for (const project of projects) {
    const existing = groups.get(project.alphabet);
    if (existing) {
      existing.push(project);
    } else {
      groups.set(project.alphabet, [project]);
    }
  }

  return Array.from(groups.entries()).map(([alphabet, alphabetProjects]) => ({
    alphabet,
    projects: alphabetProjects,
  }));
}

type ProjectProgressTileProps = {
  project: ProjectEntry;
};

function ProjectProgressTile({ project }: ProjectProgressTileProps) {
  const progress = getProjectProgress(project);

  return (
    <li className="projectProgressTile">
      <CircularProgress progress={progress} label={project.name} />
      <div className="projectProgressTileHeader">
        <p className="projectProgressName">{project.name}</p>
        <p className="projectProgressDraft">{project.draft}</p>
      </div>
    </li>
  );
}

export default function ProjectProgressList({
  projects,
}: ProjectProgressListProps) {
  if (projects.length === 0) {
    return <p className="projectProgressEmpty">No projects in progress.</p>;
  }

  const sections = groupProjectsByAlphabet(projects);

  return (
    <div className="projectProgressSections">
      {sections.map(({ alphabet, projects: alphabetProjects }) => (
        <section key={alphabet} className="projectProgressSection">
          <h3 className="projectProgressSectionTitle">{alphabet}</h3>
          <ul className="projectProgressList">
            {alphabetProjects.map((project) => (
              <ProjectProgressTile
                key={`${project.alphabet}-${project.name}`}
                project={project}
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
