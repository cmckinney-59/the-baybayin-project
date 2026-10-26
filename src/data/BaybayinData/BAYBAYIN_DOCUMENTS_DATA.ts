import doctrinaChristianaPdf from "../../assets/documents/Baybayin/DoctrinaChristiana_1593.pdf";
import villamorPdf from "../../assets/documents/Baybayin/LaAntiguaEscrituraFilipina_Villamor1922.pdf";
import pardoDeTaveraPdf from "../../assets/documents/Baybayin/AntiguosAlfabetosFilipinos_PardoDeTavera1884.pdf";
import faulmannBaybayinImg from "../../assets/documents/Baybayin/Faulmann_BuchDerSchrift_Baybayin.jpg";
import pardoAlphabetChartImg from "../../assets/documents/Baybayin/PardoDeTavera_AntiguosAlfabetosFilipinos.jpg";
import traditionalFormImg from "../../assets/documents/Baybayin/BaybayinTraditionalForm.jpg";
import unicodeCharactersSvg from "../../assets/documents/Baybayin/BaybayinUnicodeCharacters.svg";

export type BaybayinDocumentKind = "pdf" | "image";

export type BaybayinDocumentCategory = "Books & Literature" | "Charts & Tables";

export type BaybayinDocument = {
  name: string;
  fileName: string;
  fileUrl: string;
  kind: BaybayinDocumentKind;
  category: BaybayinDocumentCategory;
  attribution?: string;
};

function doc(
  name: string,
  fileName: string,
  fileUrl: string,
  kind: BaybayinDocumentKind,
  category: BaybayinDocumentCategory,
  attribution?: string,
): BaybayinDocument {
  return { name, fileName, fileUrl, kind, category, attribution };
}

export const BAYBAYIN_DOCUMENTS: BaybayinDocument[] = [
  doc(
    "Doctrina Christiana (1593)",
    "DoctrinaChristiana_1593.pdf",
    doctrinaChristianaPdf,
    "pdf",
    "Books & Literature",
    "First book printed in the Philippines. Spanish and Tagalog catechism with Baybayin text. Public domain facsimile from the Library of Congress Rosenwald copy via Project Gutenberg / Internet Archive.",
  ),
  doc(
    "La antigua escritura Filipina",
    "LaAntiguaEscrituraFilipina_Villamor1922.pdf",
    villamorPdf,
    "pdf",
    "Books & Literature",
    "Ignacio Villamor, 1922. Study of ancient Filipino writing drawn from Belarmino and other early documents, with facsimiles and transcriptions. Public domain. Internet Archive scan (University of Michigan).",
  ),
  doc(
    "Contribución para el estudio de los antiguos alfabetos Filipinos",
    "AntiguosAlfabetosFilipinos_PardoDeTavera1884.pdf",
    pardoDeTaveraPdf,
    "pdf",
    "Books & Literature",
    "T. H. Pardo de Tavera, 1884. Foundational comparative study of Philippine scripts. Public domain. Internet Archive / University of Michigan scan. Also available via Project Gutenberg (EBook #15421).",
  ),

  doc(
    "Pardo de Tavera — Antiguos Alfabetos Filipinos (chart)",
    "PardoDeTavera_AntiguosAlfabetosFilipinos.jpg",
    pardoAlphabetChartImg,
    "image",
    "Charts & Tables",
    "Alphabet comparison chart from Pardo de Tavera’s 1884 study. Public domain. Wikimedia Commons.",
  ),
  doc(
    "Baybayin traditional form",
    "BaybayinTraditionalForm.jpg",
    traditionalFormImg,
    "image",
    "Charts & Tables",
    "Traditional Baybayin character chart. Public domain. Wikimedia Commons (Nhatbon).",
  ),
  doc(
    "Baybayin script characters (Unicode)",
    "BaybayinUnicodeCharacters.svg",
    unicodeCharactersSvg,
    "image",
    "Charts & Tables",
    "Unicode Tagalog / Baybayin character chart. Wikimedia Commons.",
  ),
  doc(
    "Faulmann — Schriften auf den Philippinen",
    "Faulmann_BuchDerSchrift_Baybayin.jpg",
    faulmannBaybayinImg,
    "image",
    "Charts & Tables",
    "Carl Faulmann, Das Buch der Schrift (1880), Philippine scripts table (Tagala / Bisaya). Public domain. Wikimedia Commons.",
  ),
];

export const BAYBAYIN_DOCUMENT_CATEGORIES: BaybayinDocumentCategory[] = [
  "Books & Literature",
  "Charts & Tables",
];
