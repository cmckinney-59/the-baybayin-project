import type { Project } from "../../models/models";
import theFamilyCanonPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Canon.pdf";
import theFamilyCanonParallelPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Canon_Parallel.pdf";
import theFamilyLegendsPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Legends.pdf";
import theFamilyLegendsParallelPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Legends_Parallel.pdf";

export const PROJECTS_DATA: Project[] = [
  {
    name: "The Family (Canon)",
    fileUrl: theFamilyCanonPdf,
    fileName: "TheFamily_Aurebesh_Canon.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Canon Aurebesh.",
  },
  {
    name: "The Family Parallel (Canon)",
    fileUrl: theFamilyCanonParallelPdf,
    fileName: "TheFamily_Aurebesh_Canon_Parallel.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Canon Aurebesh.",
  },
  {
    name: "The Family (Legends)",
    fileUrl: theFamilyLegendsPdf,
    fileName: "TheFamily_Aurebesh_Legends.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Legends Aurebesh.",
  },
  {
    name: "The Family Parallel (Legends)",
    fileUrl: theFamilyLegendsParallelPdf,
    fileName: "TheFamily_Aurebesh_Legends_Parallel.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Legends Aurebesh.",
  },
  {
    name: "The Book of Mormon",
    draft: "Second Draft",
    progress: 60,
    description: "English Book of Mormon in Aurebesh.",
  },
];
