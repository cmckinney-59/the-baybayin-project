export type Project = {
  name: string;
  status: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: "pdf" | "zip";
  description?: string;
};
