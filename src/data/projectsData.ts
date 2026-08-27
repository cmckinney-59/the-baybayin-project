import type { Project } from "../models/models";
import { PROJECTS_DATA as BAYBAYIN_PROJECTS_DATA } from "./BaybayinData/BAYBAYIN_PROJECTS_DATA";
import { PROJECTS_DATA as AUREBESH_PROJECTS_DATA } from "./AurebeshData/AUREBESH_PROJECTS_DATA";
import { PROJECTS_DATA as DESERET_PROJECTS_DATA } from "./DeseretData/DESERET_PROJECTS_DATA";

export type ProjectEntry = Project & {
  alphabet: string;
};

const STATUS_PROGRESS: Record<string, number> = {
  "First Draft In Review": 30,
  "Second Draft In Review": 55,
  "Second Draft Being Formatted": 65,
  "Final Draft In Review": 85,
};

export const ALL_PROJECTS: ProjectEntry[] = [
  ...BAYBAYIN_PROJECTS_DATA.map((project) => ({
    ...project,
    alphabet: "Baybayin",
  })),
  ...AUREBESH_PROJECTS_DATA.map((project) => ({
    ...project,
    alphabet: "Aurebesh",
  })),
  ...DESERET_PROJECTS_DATA.map((project) => ({
    ...project,
    alphabet: "Deseret",
  })),
];

export function isDownloadableProject(project: Project): boolean {
  return project.status === "Downloadable";
}

export function getProjectProgress(project: Project): number {
  if (project.progress != null) {
    return Math.min(100, Math.max(0, project.progress));
  }
  return STATUS_PROGRESS[project.status] ?? 0;
}

export function getCurrentProjects(): ProjectEntry[] {
  return ALL_PROJECTS.filter((project) => !isDownloadableProject(project));
}
