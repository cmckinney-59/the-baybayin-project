import howToReadBaybayinPdf from "../assets/projects/HowToReadBaybayin.pdf";
import mateo1Pdf from "../assets/projects/Mateo-1.pdf";
import angBuhayNaKristoPdf from "../assets/projects/AngBuhayNaKristo-Alpha4.pdf";
import lupangHinirangZip from "../assets/projects/LupangHinirang/LupangHinirang.zip";

export type DownloadableProject = {
  name: string;
  fileUrl: string;
  fileName: string;
  fileType: "pdf" | "zip";
};

export type StatusOnlyProject = {
  name: string;
  status: string;
};

export type ProjectRow = DownloadableProject | StatusOnlyProject;

export const PROJECTS_DATA: ProjectRow[] = [
  {
    name: "How to Read Baybayin",
    fileUrl: howToReadBaybayinPdf,
    fileName: "HowToReadBaybayin.pdf",
    fileType: "pdf",
  },
  {
    name: "Mateo 1 (Tagalog: Baybayin)",
    fileUrl: mateo1Pdf,
    fileName: "Mateo-1.pdf",
    fileType: "pdf",
  },
  {
    name: "Ang Buhay na Kristo",
    fileUrl: angBuhayNaKristoPdf,
    fileName: "AngBuhayNaKristo-Alpha4.pdf",
    fileType: "pdf",
  },
  {
    name: "Lupang Hinirang",
    fileUrl: lupangHinirangZip,
    fileName: "LupangHinirang.zip",
    fileType: "zip",
  },
  {
    name: "Ang Bagong Tipan",
    status: "First Draft In Review",
  },
  {
    name: "Ang Aklat ni Mormon",
    status: "Second Draft In Review",
  },
  {
    name: "Ang Pagpapahayag sa Mag-anak",
    status: "Final Draft In Review",
  },
  {
    name: "Ang Pagpapanumbalik",
    status: "Final Draft In Review",
  },
  {
    name: "Ang Mga Saligan ng Pananampalataya",
    status: "Final Draft In Review",
  },
];
