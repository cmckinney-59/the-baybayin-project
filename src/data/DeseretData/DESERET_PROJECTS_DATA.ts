import theFamilyPdf from "../../assets/projects/Deseret/TheFamily/The Family_Deseret.pdf";
import theFamilyParallelPdf from "../../assets/projects/Deseret/TheFamily/The Family_Deseret_Parallel.pdf";
import theRestorationPdf from "../../assets/projects/Deseret/The Restoration/TheRestoration_Deseret.pdf";
import type { Project } from "../../models/models";

export const PROJECTS_DATA: Project[] = [
  {
    name: "The Family",
    fileUrl: theFamilyPdf,
    fileName: "The Family_Deseret.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Deseret.",
  },
  {
    name: "The Family Parallel",
    fileUrl: theFamilyParallelPdf,
    fileName: "The Family_Deseret_Parallel.pdf",
    fileType: "pdf",
    description: "The Family Proclamation in Deseret (parallel text).",
  },
  {
    name: "The Restoration",
    fileUrl: theRestorationPdf,
    fileName: "TheRestoration_Deseret.pdf",
    fileType: "pdf",
    description:
      "The Restoration of the Fulness of the Gospel of Jesus Christ in Deseret.",
  },
];
