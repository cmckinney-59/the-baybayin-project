import type { Project } from "../../models/models";
import theFamilyCanonPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Canon.pdf";
import theFamilyCanonParallelPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Canon_Parallel.pdf";
import theFamilyLegendsPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Legends.pdf";
import theFamilyLegendsParallelPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Legends_Parallel.pdf";
import theLivingChristLegendsPdf from "../../assets/projects/Aurebesh/TheLivingChrist/TheLivingChrist_Aurebesh_Legends.pdf";
import theLivingChristLegendsParallelPdf from "../../assets/projects/Aurebesh/TheLivingChrist/TheLivingChrist_Aurebesh_Legends_Parallel.pdf";
import theRestorationPdf from "../../assets/projects/Aurebesh/TheRestoration/TheRestoration_Aurebesh.pdf";
import theRestorationParallelPdf from "../../assets/projects/Aurebesh/TheRestoration/TheRestoration_Aurebesh_Parallel.pdf";

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
    name: "The Living Christ (Legends)",
    fileUrl: theLivingChristLegendsPdf,
    fileName: "TheLivingChrist_Aurebesh_Legends.pdf",
    fileType: "pdf",
    description: "The Living Christ in Legends Aurebesh.",
  },
  {
    name: "The Living Christ Parallel (Legends)",
    fileUrl: theLivingChristLegendsParallelPdf,
    fileName: "TheLivingChrist_Aurebesh_Legends_Parallel.pdf",
    fileType: "pdf",
    description: "The Living Christ in Legends Aurebesh (parallel text).",
  },
  {
    name: "The Restoration",
    fileUrl: theRestorationPdf,
    fileName: "TheRestoration_Aurebesh.pdf",
    fileType: "pdf",
    description: "The Restoration of the Fulness of the Gospel of Jesus Christ in Aurebesh.",
  },
  {
    name: "The Restoration Parallel",
    fileUrl: theRestorationParallelPdf,
    fileName: "TheRestoration_Aurebesh_Parallel.pdf",
    fileType: "pdf",
    description:
      "The Restoration of the Fulness of the Gospel of Jesus Christ in Aurebesh (parallel text).",
  },
  {
    name: "The Book of Mormon",
    draft: "Second Draft",
    progress: 65,
    description: "English Book of Mormon in Aurebesh.",
  },
];
