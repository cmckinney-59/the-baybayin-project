export type DownloadableProject = {
  name: string;
  fileUrl?: string;
  fileName: string;
  fileType: "pdf" | "zip";
  description?: string;
};

export type StatusOnlyProject = {
  name: string;
  status: string;
  description?: string;
};

export type ProjectRow = DownloadableProject | StatusOnlyProject;

export const PROJECTS_DATA: ProjectRow[] = [
  {
    name: "The Family",
    fileName: "HowToReadBaybayin.pdf",
    fileType: "pdf",
    description: "A quick guide to reading the Baybayin alphabet.",
  },
];
