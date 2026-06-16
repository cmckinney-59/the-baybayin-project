import type { Project } from "../../models/models";
import theFamilyCanonPdf from "../../assets/projects/Aurebesh_TheFamily/TheFamily_Aurebesh_Canon.pdf";
import theFamilyCanonParallelPdf from "../../assets/projects/Aurebesh_TheFamily/TheFamily_Aurebesh_Canon_Parallel.pdf";
import theFamilyLegendsPdf from "../../assets/projects/Aurebesh_TheFamily/TheFamily_Aurebesh_Legends.pdf";
import theFamilyLegendsParallelPdf from "../../assets/projects/Aurebesh_TheFamily/TheFamily_Aurebesh_Legends_Parallel.pdf";

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
    name: "The Family Parallel (Canon)",
    status: "Downloadable",
    fileUrl: theFamilyCanonParallelPdf,
    fileName: "TheFamily_Aurebesh_Canon_Parallel.pdf",
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
  {
    name: "The Family Parallel (Legends)",
    status: "Downloadable",
    fileUrl: theFamilyLegendsParallelPdf,
    fileName: "TheFamily_Aurebesh_Legends_Parallel.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Legends Aurebesh.",
  },
  {
    name: "The Book of Mormon",
    status: "Second Draft Being Formatted",
    description: "English Book of Mormon in Aurebesh.",
  },
];
