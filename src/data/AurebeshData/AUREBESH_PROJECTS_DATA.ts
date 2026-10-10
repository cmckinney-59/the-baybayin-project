import type { Project } from "../../models/models";
import theFamilyCanonPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Canon.pdf";
import theFamilyCanonParallelPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Canon_Parallel.pdf";
import theFamilyLegendsPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Legends.pdf";
import theFamilyLegendsParallelPdf from "../../assets/projects/Aurebesh/TheFamily/TheFamily_Aurebesh_Legends_Parallel.pdf";
import theLivingChristCanonPdf from "../../assets/projects/Aurebesh/TheLivingChrist/TheLivingChrist_Aurebesh_Canon.pdf";
import theLivingChristCanonParallelPdf from "../../assets/projects/Aurebesh/TheLivingChrist/TheLivingChrist_Aurebesh_Canon_Parallel.pdf";
import theLivingChristLegendsPdf from "../../assets/projects/Aurebesh/TheLivingChrist/TheLivingChrist_Aurebesh_Legends.pdf";
import theLivingChristLegendsParallelPdf from "../../assets/projects/Aurebesh/TheLivingChrist/TheLivingChrist_Aurebesh_Legends_Parallel.pdf";
import theRestorationCanonPdf from "../../assets/projects/Aurebesh/TheRestoration/TheRestoration_Aurebesh_Canon.pdf";
import theRestorationCanonParallelPdf from "../../assets/projects/Aurebesh/TheRestoration/TheRestoration_Aurebesh_Canon_Parallel.pdf";
import theRestorationLegendsPdf from "../../assets/projects/Aurebesh/TheRestoration/TheRestoration_Aurebesh_Legends.pdf";
import theRestorationLegendsParallelPdf from "../../assets/projects/Aurebesh/TheRestoration/TheRestoration_Aurebesh_Legends_Parallel.pdf";
import theArticlesOfFaithCanonPdf from "../../assets/projects/Aurebesh/TheArticlesOfFaith/TheArticlesOfFaith_Aurebesh_Canon.pdf";
import theArticlesOfFaithCanonParallelPdf from "../../assets/projects/Aurebesh/TheArticlesOfFaith/TheArticlesOfFaith_Aurebesh_Canon_Parallel.pdf";
import theArticlesOfFaithLegendsPdf from "../../assets/projects/Aurebesh/TheArticlesOfFaith/TheArticlesOfFaith_Aurebesh_Legends.pdf";
import theArticlesOfFaithLegendsParallelPdf from "../../assets/projects/Aurebesh/TheArticlesOfFaith/TheArticlesOfFaith_Aurebesh_Legends_Parallel.pdf";

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
    name: "The Living Christ (Canon)",
    fileUrl: theLivingChristCanonPdf,
    fileName: "TheLivingChrist_Aurebesh_Canon.pdf",
    fileType: "pdf",
    description: "The Living Christ in Canon Aurebesh.",
  },
  {
    name: "The Living Christ Parallel (Canon)",
    fileUrl: theLivingChristCanonParallelPdf,
    fileName: "TheLivingChrist_Aurebesh_Canon_Parallel.pdf",
    fileType: "pdf",
    description: "The Living Christ in Canon Aurebesh (parallel text).",
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
    name: "The Restoration (Canon)",
    fileUrl: theRestorationCanonPdf,
    fileName: "TheRestoration_Aurebesh_Canon.pdf",
    fileType: "pdf",
    description:
      "The Restoration of the Fulness of the Gospel of Jesus Christ in Canon Aurebesh.",
  },
  {
    name: "The Restoration Parallel (Canon)",
    fileUrl: theRestorationCanonParallelPdf,
    fileName: "TheRestoration_Aurebesh_Canon_Parallel.pdf",
    fileType: "pdf",
    description:
      "The Restoration of the Fulness of the Gospel of Jesus Christ in Canon Aurebesh (parallel text).",
  },
  {
    name: "The Restoration (Legends)",
    fileUrl: theRestorationLegendsPdf,
    fileName: "TheRestoration_Aurebesh_Legends.pdf",
    fileType: "pdf",
    description:
      "The Restoration of the Fulness of the Gospel of Jesus Christ in Legends Aurebesh.",
  },
  {
    name: "The Restoration Parallel (Legends)",
    fileUrl: theRestorationLegendsParallelPdf,
    fileName: "TheRestoration_Aurebesh_Legends_Parallel.pdf",
    fileType: "pdf",
    description:
      "The Restoration of the Fulness of the Gospel of Jesus Christ in Legends Aurebesh (parallel text).",
  },
  {
    name: "The Articles of Faith (Canon)",
    fileUrl: theArticlesOfFaithCanonPdf,
    fileName: "TheArticlesOfFaith_Aurebesh_Canon.pdf",
    fileType: "pdf",
    description: "The Articles of Faith in Canon Aurebesh.",
  },
  {
    name: "The Articles of Faith Parallel (Canon)",
    fileUrl: theArticlesOfFaithCanonParallelPdf,
    fileName: "TheArticlesOfFaith_Aurebesh_Canon_Parallel.pdf",
    fileType: "pdf",
    description: "The Articles of Faith in Canon Aurebesh (parallel text).",
  },
  {
    name: "The Articles of Faith (Legends)",
    fileUrl: theArticlesOfFaithLegendsPdf,
    fileName: "TheArticlesOfFaith_Aurebesh_Legends.pdf",
    fileType: "pdf",
    description: "The Articles of Faith in Legends Aurebesh.",
  },
  {
    name: "The Articles of Faith Parallel (Legends)",
    fileUrl: theArticlesOfFaithLegendsParallelPdf,
    fileName: "TheArticlesOfFaith_Aurebesh_Legends_Parallel.pdf",
    fileType: "pdf",
    description: "The Articles of Faith in Legends Aurebesh (parallel text).",
  },
  {
    name: "The Book of Mormon",
    draft: "Second Draft",
    progress: 68,
    description: "English Book of Mormon in Aurebesh.",
  },
];
