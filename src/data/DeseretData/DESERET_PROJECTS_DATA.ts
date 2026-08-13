import theFamilyPdf from "../../assets/projects/Deseret/TheFamily/The Family_Deseret.pdf";
import theFamilyParallelPdf from "../../assets/projects/Deseret/TheFamily/The Family_Deseret_Parallel.pdf";
import type { Project } from "../../models/models";

export const PROJECTS_DATA: Project[] = [
  {
    name: "The Family",
    status: "Downloadable",
    fileUrl: theFamilyPdf,
    fileName: "The Family_Deseret.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Deseret.",
  },
  {
    name: "The Family Parallel",
    status: "Downloadable",
    fileUrl: theFamilyParallelPdf,
    fileName: "The Family_Deseret_Parallel.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Deseret (parallel text).",
  },
];
