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
    name: "How to Read Baybayin",
    fileUrl: howToReadBaybayinPdf,
    fileName: "HowToReadBaybayin.pdf",
    fileType: "pdf",
    description: "A quick guide to reading the Baybayin alphabet.",
  },
  {
    name: "Mateo 1 (Tagalog: Baybayin)",
    fileUrl: mateo1Pdf,
    fileName: "Mateo-1.pdf",
    fileType: "pdf",
    description: "Mateo Kabanata 1 from the Tagalog Bible.",
  },
  {
    name: "Ang Buhay Na Cristo",
    fileUrl: angBuhayNaCristoPdf,
    fileName: "AngBuhayNaCristo.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Buhay Na Cristo: Parallel",
    fileUrl: angBuhayNaCristoParallelPdf,
    fileName: "AngBuhayNaCristo_Parallel.pdf",
    fileType: "pdf",
    description: "Ang Buhay Na Cristo: Tagalog - Baybayin Parallel",
  },
  {
    name: "Lupang Hinirang",
    fileUrl: lupangHinirangZip,
    fileName: "LupangHinirang.zip",
    fileType: "zip",
    description: "Various Baybayinversions of the Philippine National Anthem.",
  },
  {
    name: "Ang Bagong Tipan",
    status: "First Draft In Review",
    description: "Tagalog New Testament",
  },
  {
    name: "Ang Aklat ni Mormon",
    status: "Second Draft In Review",
    description: "Tagalog Book of Mormon",
  },
  {
    name: "Ang Pagpapahayag sa Mag-anak",
    status: "Final Draft In Review",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Pagpapanumbalik",
    status: "Final Draft In Review",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Mga Saligan ng Pananampalataya",
    status: "Final Draft In Review",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
];
