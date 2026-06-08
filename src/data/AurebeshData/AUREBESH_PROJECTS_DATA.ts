import howToReadBaybayinPdf from "../assets/projects/HowToReadBaybayin.pdf";
import mateo1Pdf from "../assets/projects/Mateo-1.pdf";
import angBuhayNaCristoPdf from "../assets/projects/AngBuhayNaCristo/AngBuhayNaCristo.pdf";
import angBuhayNaCristoParallelPdf from "../assets/projects/AngBuhayNaCristo/AngBuhayNaCristo_Parallel.pdf";
import lupangHinirangZip from "../assets/projects/LupangHinirang/LupangHinirang.zip";

export type DownloadableProject = {
  name: string;
  fileUrl: string;
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
    fileUrl: howToReadBaybayinPdf,
    fileName: "HowToReadBaybayin.pdf",
    fileType: "pdf",
    description: "A quick guide to reading the Baybayin alphabet.",
  },
];
