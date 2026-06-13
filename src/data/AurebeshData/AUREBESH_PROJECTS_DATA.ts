import type { Project } from "../../models/models";
import theFamilyCanonPdf from "../../assets/projects/Aurebesh_TheFamily/TheFamily_Aurebesh_Canon.pdf";
import theFamilyLegendsPdf from "../../assets/projects/Aurebesh_TheFamily/TheFamily_Aurebesh_Legends.pdf";

export const PROJECTS_DATA: Project[] = [
  {
    name: "The Family (Canon)",
    status: "Downloadable",
    fileUrl: theFamilyCanonPdf,
    fileName: "TheFamily_Aurebesh_Canon.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Canon Aurebesh.",
  },
  {
    name: "The Family (Legends)",
    status: "Downloadable",
    fileUrl: theFamilyLegendsPdf,
    fileName: "TheFamily_Aurebesh_Legends.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Legends Aurebesh.",
  },
];
