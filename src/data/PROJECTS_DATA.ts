import howToReadBaybayinPdf from "../assets/projects/HowToReadBaybayin.pdf";
import mateo1Pdf from "../assets/projects/Mateo-1.pdf";
import philippinesNationalAnthemPdf from "../assets/projects/NationalAnthem_TagalogDoctrina.pdf";
import philippinesNationalAnthemBagwisPdf from "../assets/projects/NationalAnthem_Bagwis.pdf";
import philippinesNationalAnthemBagwisXPdf from "../assets/projects/NationalAnthem_Bagwis_X.pdf";

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
    name: "Philippines National Anthem",
    status: "Downloadable",
    fileUrl: philippinesNationalAnthemPdf,
    fileName: "NationalAnthem_TagalogDoctrina.pdf",
  },
  {
    name: "Philippines National Anthem: Bagwis Font",
    status: "Downloadable",
    fileUrl: philippinesNationalAnthemBagwisPdf,
    fileName: "NationalAnthem_Bagwis.pdf",
  },
  {
    name: "Philippines National Anthem: Bagwis Font With X",
    status: "Downloadable",
    fileUrl: philippinesNationalAnthemBagwisXPdf,
    fileName: "NationalAnthem_Bagwis_X.pdf",
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
