import howToReadBaybayinPdf from "../assets/projects/HowToReadBaybayin.pdf";
import mateo1Pdf from "../assets/projects/Mateo-1.pdf";

export type DownloadableProject = {
  name: string;
  status: "Downloadable";
  fileUrl: string;
  fileName: string;
};

export type StatusOnlyProject = {
  name: string;
  status: string;
};

export type ProjectRow = DownloadableProject | StatusOnlyProject;

export const PROJECTS_DATA: ProjectRow[] = [
  {
    name: "How to Read Baybayin",
    status: "Downloadable",
    fileUrl: howToReadBaybayinPdf,
    fileName: "HowToReadBaybayin.pdf",
  },
  {
    name: "Mateo 1 (Tagalog: Baybayin)",
    status: "Downloadable",
    fileUrl: mateo1Pdf,
    fileName: "Mateo-1.pdf",
  },
  {
    name: "Ang Bagong Tipan",
    status: "First Draft In Review",
  },
  {
    name: "Ang Aklat ni Mormon",
    status: "Pending Approval",
  },
  {
    name: "Ang Pagpapahayag sa Mag-anak",
    status: "Pending Approval",
  },
  {
    name: "Ang Pagpapanumbalik",
    status: "Pending Approval",
  },
  {
    name: "Ang Buhay na Cristo",
    status: "Pending Approval",
  },
  {
    name: "Ang Mga Saligan ng Pananampalataya",
    status: "Pending Approval",
  },
];
