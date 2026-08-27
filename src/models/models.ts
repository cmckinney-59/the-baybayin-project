export type Project = {
  name: string;
  status: string;
  /** Completion percentage (0–100) for in-progress projects. */
  progress?: number;
  fileUrl?: string;
  fileName?: string;
  fileType?: "pdf" | "zip";
  description?: string;
};
