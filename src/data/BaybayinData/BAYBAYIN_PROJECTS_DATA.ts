import howToReadBaybayinPdf from "../../assets/projects/Baybayin/HowToReadBaybayin.pdf";
import lupangHinirangZip from "../../assets/projects/Baybayin/LupangHinirang/LupangHinirang.zip";
import mateo1Pdf from "../../assets/projects/Baybayin/Mateo-1.pdf";
import angBuhayNaCristoPdf from "../../assets/projects/Baybayin/AngBuhayNaCristo/AngBuhayNaCristo.pdf";
import angBuhayNaCristoParallelPdf from "../../assets/projects/Baybayin/AngBuhayNaCristo/AngBuhayNaCristo_Parallel.pdf";
import angPagpapanumbalikPdf from "../../assets/projects/Baybayin/AngPagpapanumbalik/AngPagpapanumbalik.pdf";
import angPagpapanumbalikParallelPdf from "../../assets/projects/Baybayin/AngPagpapanumbalik/AngPagpapanumbalik_Parallel.pdf";
import type { Project } from "../../models/models";

export const PROJECTS_DATA: Project[] = [
  {
    name: "How to Read Baybayin",
    status: "Downloadable",
    fileUrl: howToReadBaybayinPdf,
    fileName: "HowToReadBaybayin.pdf",
    fileType: "pdf",
    description: "A quick guide to reading the Baybayin alphabet.",
  },
  {
    name: "Lupang Hinirang",
    status: "Downloadable",
    fileUrl: lupangHinirangZip,
    fileName: "LupangHinirang.zip",
    fileType: "zip",
    description: "Various Baybayinversions of the Philippine National Anthem.",
  },
  {
    name: "Mateo 1",
    status: "Downloadable",
    fileUrl: mateo1Pdf,
    fileName: "Mateo-1.pdf",
    fileType: "pdf",
    description: "Mateo Kabanata 1 from the Tagalog Bible.",
  },
  {
    name: "Ang Buhay Na Cristo",
    status: "Downloadable",
    fileUrl: angBuhayNaCristoPdf,
    fileName: "AngBuhayNaCristo.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Buhay Na Cristo: Parallel",
    status: "Downloadable",
    fileUrl: angBuhayNaCristoParallelPdf,
    fileName: "AngBuhayNaCristo_Parallel.pdf",
    fileType: "pdf",
    description: "Ang Buhay Na Cristo: Tagalog - Baybayin Parallel",
  },
  {
    name: "Ang Pagpapanumbalik",
    status: "Downloadable",
    fileUrl: angPagpapanumbalikPdf,
    fileName: "AngPagpapanumbalik.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Pagpapanumbalik: Parallel",
    status: "Downloadable",
    fileUrl: angPagpapanumbalikParallelPdf,
    fileName: "AngPagpapanumbalik_Parallel.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
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
    name: "Ang Mag-anak",
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
