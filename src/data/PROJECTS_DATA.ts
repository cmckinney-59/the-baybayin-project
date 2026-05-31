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
    name: "Ang Buhay Na Cristo",
    fileUrl: angBuhayNaCristoPdf,
    fileName: "AngBuhayNaCristo.pdf",
    fileType: "pdf",
  },
  {
    name: "Ang Buhay Na Cristo: Parallel",
    fileUrl: angBuhayNaCristoParallelPdf,
    fileName: "AngBuhayNaCristo_Parallel.pdf",
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
