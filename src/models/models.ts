export type ProjectDraft =
  | "First Draft"
  | "Second Draft"
  | "Third Draft"
  | "Final";

export type Project = {
  name: string;
  /** Set for in-progress projects; downloadable projects omit this. */
  draft?: ProjectDraft;
  /** Completion percentage (0–100) for in-progress projects. */
  progress?: number;
  fileUrl?: string;
  fileName?: string;
  fileType?: "pdf" | "zip";
  description?: string;
};
