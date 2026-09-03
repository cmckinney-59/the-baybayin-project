import howToReadBaybayinPdf from "../../assets/projects/Baybayin/HowToReadBaybayin.pdf";
import lupangHinirangZip from "../../assets/projects/Baybayin/LupangHinirang/LupangHinirang.zip";
import mateo1Pdf from "../../assets/projects/Baybayin/Mateo-1.pdf";
import angBuhayNaCristoPdf from "../../assets/projects/Baybayin/AngBuhayNaCristo/AngBuhayNaCristo.pdf";
import angBuhayNaCristoParallelPdf from "../../assets/projects/Baybayin/AngBuhayNaCristo/AngBuhayNaCristo_Parallel.pdf";
import angPagpapanumbalikPdf from "../../assets/projects/Baybayin/AngPagpapanumbalik/AngPagpapanumbalik.pdf";
import angPagpapanumbalikParallelPdf from "../../assets/projects/Baybayin/AngPagpapanumbalik/AngPagpapanumbalik_Parallel.pdf";
import angMgaSaliganPdf from "../../assets/projects/Baybayin/AngMgaSaliganNgPananampalataya/AngMgaSaliganNgPananampalataya.pdf";
import angMgaSaliganParallelPdf from "../../assets/projects/Baybayin/AngMgaSaliganNgPananampalataya/AngMgaSaliganNgPananampalataya_Parallel.pdf";
import type { Project } from "../../models/models";

export const PROJECTS_DATA: Project[] = [
  {
    name: "How to Read Baybayin",
    fileUrl: howToReadBaybayinPdf,
    fileName: "HowToReadBaybayin.pdf",
    fileType: "pdf",
    description: "A quick guide to reading the Baybayin alphabet.",
  },
  {
    name: "Lupang Hinirang",
    fileUrl: lupangHinirangZip,
    fileName: "LupangHinirang.zip",
    fileType: "zip",
    description: "Various Baybayinversions of the Philippine National Anthem.",
  },
  {
    name: "Mateo 1",
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
    name: "Ang Pagpapanumbalik",
    fileUrl: angPagpapanumbalikPdf,
    fileName: "AngPagpapanumbalik.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Pagpapanumbalik: Parallel",
    fileUrl: angPagpapanumbalikParallelPdf,
    fileName: "AngPagpapanumbalik_Parallel.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Mga Saligan ng Pananampalataya",
    fileUrl: angMgaSaliganPdf,
    fileName: "AngMgaSaliganNgPananampalataya.pdf",
    fileType: "pdf",
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  },
  {
    name: "Ang Mga Saligan ng Pananampalataya: Parallel",
    fileUrl: angMgaSaliganParallelPdf,
    fileName: "AngMgaSaliganNgPananampalataya_Parallel.pdf",
    fileType: "pdf",
    description: "Ang Mga Saligan ng Pananampalataya: Tagalog - Baybayin Parallel",
  },
  {
    name: "Ang Bagong Tipan",
    draft: "Second Draft",
    progress: 40,
    description: "Tagalog New Testament",
  },
  {
    name: "Ang Aklat ni Mormon",
    draft: "Third Draft",
    progress: 30,
    description: "Tagalog Book of Mormon",
  },
  {
    name: "Ang Mag-anak",
    draft: "Final",
    progress: 99,
    description:
      "A proclaimation originally published by The Church of Jesus Christ of Latter-day Saints.",
  }
];
