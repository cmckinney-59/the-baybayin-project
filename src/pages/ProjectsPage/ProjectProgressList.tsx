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
            className="projectProgressTile"
          >
            <CircularProgress progress={progress} label={project.name} />
            <p className="projectProgressName">{project.name}</p>
            <p className="projectProgressAlphabet">{project.alphabet}</p>
            <p className="projectProgressDraft">{project.draft}</p>
          </li>
        );
      })}
    </ul>
  );
}
