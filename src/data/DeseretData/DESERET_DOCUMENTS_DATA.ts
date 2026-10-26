import bomPdf from "../../assets/documents/Deseret/BoM.pdf";
import bookOfMormonDeseretPdf from "../../assets/documents/Deseret/bookofmormdeseretalpha00.pdf";
import newTestamentPdf from "../../assets/documents/Deseret/NewTestament.pdf";
import oldTestamentPdf from "../../assets/documents/Deseret/OldTestament.pdf";
import apocryphaPdf from "../../assets/documents/Deseret/Apocrypha.pdf";
import doubleCombinationPdf from "../../assets/documents/Deseret/DoubleCombination.pdf";
import triplePdf from "../../assets/documents/Deseret/Triple.pdf";
import deseretFirstBookPdf from "../../assets/documents/Deseret/thedeseretfirstbook.pdf";
import deseretSecondBookPdf from "../../assets/documents/Deseret/thedeseretsecondbook.pdf";
import annualReportPdf from "../../assets/documents/Deseret/annualreportofte00utah.pdf";
import mormonPassageGeorgeDWattPdf from "../../assets/documents/Deseret/MormonPassageofGeorgeDWatt.pdf";
import englishHopiVocabularyPdf from "../../assets/documents/Deseret/English-HopiVocabulary1860.pdf";
import unicodeChapter20AmericasPdf from "../../assets/documents/Deseret/UnicodeChapter20_Americas.pdf";
import unicodeDeseretDocumentationPdf from "../../assets/documents/Deseret/UnicodeDeseretDocumentation.pdf";
import alphabetChart0Pdf from "../../assets/documents/Deseret/deseretalphabetchart0.pdf";
import alphabetChartPdf from "../../assets/documents/Deseret/deseretalphabetchart.pdf";
import alphabetChart2Pdf from "../../assets/documents/Deseret/deseretalphabetchart2.pdf";
import earlyAlphabetPdf from "../../assets/documents/Deseret/An Early Version of the Alphabet.pdf";
import earlyAlphabet2Pdf from "../../assets/documents/Deseret/Early ersionAlphabet2.pdf";
import tableAll3ReadersPdf from "../../assets/documents/Deseret/TableFromAll3Readers.pdf";
import table1868ShapePdf from "../../assets/documents/Deseret/TableFrom1868ShapeOrdered.pdf";
import tableCityOfTheSaintsPdf from "../../assets/documents/Deseret/TableFromCityOfTheSaints.pdf";
import tableDeseretNewsPdf from "../../assets/documents/Deseret/TableFromDeseretNews.pdf";
import tableGermanBookPdf from "../../assets/documents/Deseret/TableFromGermanBook.pdf";
import tableJourneyPdf from "../../assets/documents/Deseret/TableFromJourneyToGSLC.pdf";
import tableLifeInUtahPdf from "../../assets/documents/Deseret/TableFromLifeInUtah.pdf";
import tableNewShapePdf from "../../assets/documents/Deseret/TableFromNewShapeOrdered.pdf";
import tableNewSoundPdf from "../../assets/documents/Deseret/TableFromNewSoundOrdered.pdf";
import tableNewYorkTimesPdf from "../../assets/documents/Deseret/TableFromNewYorkTimes.pdf";
import albertKeringtonImg from "../../assets/documents/Deseret/AlbertKerington.png";
import brighamYoungImg from "../../assets/documents/Deseret/BrighamYoung.png";
import erastusSnowImg from "../../assets/documents/Deseret/ErastusSnow.jpeg";
import isaacBullockImg from "../../assets/documents/Deseret/IsaacBullock.png";
import orsonPrattImg from "../../assets/documents/Deseret/OrsonPratt.png";
import wilfordWoodruffImg from "../../assets/documents/Deseret/WilfordWoodruff.png";
import williamFelpsImg from "../../assets/documents/Deseret/WilliamFelps.png";
import deseretGoldCoinImg from "../../assets/documents/Deseret/DeseretGoldCoin.jpg";
import generalElectionTicketImg from "../../assets/documents/Deseret/GeneralElectionPeoplesTicket.jpg";
import improvementEraPageImg from "../../assets/documents/Deseret/ImprovementEraPage.jpg";
import carnWithAFarkArticleImg from "../../assets/documents/Deseret/CarnWithAFarkArticle.jpg";
import plan10FloppyDiskImg from "../../assets/documents/Deseret/Plan10FloppyDisk.jpg";
import deseretAlphabet1854Pdf from "../../assets/documents/Deseret/DeseretAlphabet1854.pdf";
import deseretAlphabetBroadsidePdf from "../../assets/documents/Deseret/DeseretAlphabetBroadside.pdf";
import deseretAlphabetCard1859Pdf from "../../assets/documents/Deseret/DeseretAlphabetCard1859.pdf";
import cityOfTheSaintsPdf from "../../assets/documents/Deseret/CityOfTheSaints_Burton1862.pdf";
import journeyToGreatSaltLakePdf from "../../assets/documents/Deseret/JourneyToGreatSaltLakeCity_Remy.pdf";
import lifeInUtahBookPdf from "../../assets/documents/Deseret/LifeInUtah_Beadle.pdf";
import dasBuchDerSchriftPdf from "../../assets/documents/Deseret/DasBuchDerSchrift_Faulmann.pdf";
import sermonOnTheMountImg from "../../assets/documents/Deseret/SermonOnTheMount_DeseretNews_1859.jpg";
import earlyCursiveLineupImg from "../../assets/documents/Deseret/EarlyDeseretCursiveLineup.svg";
import earlySheltonLineupImg from "../../assets/documents/Deseret/EarlyDeseretSheltonLineup.svg";
import deseretCursiveExamplesImg from "../../assets/documents/Deseret/DeseretCursiveExamples.svg";

export type DeseretDocumentKind = "pdf" | "image";

export type DeseretDocumentCategory =
  | "Books & Scriptures"
  | "Charts & Tables"
  | "Images";

export type DeseretDocument = {
  name: string;
  fileName: string;
  fileUrl: string;
  kind: DeseretDocumentKind;
  category: DeseretDocumentCategory;
  attribution?: string;
};

function doc(
  name: string,
  fileName: string,
  fileUrl: string,
  kind: DeseretDocumentKind,
  category: DeseretDocumentCategory,
  attribution?: string,
): DeseretDocument {
  return { name, fileName, fileUrl, kind, category, attribution };
}

export const DESERET_DOCUMENTS: DeseretDocument[] = [
  doc("Book of Mormon", "BoM.pdf", bomPdf, "pdf", "Books & Scriptures"),
  doc(
    "Book of Mormon (Deseret Alphabet)",
    "bookofmormdeseretalpha00.pdf",
    bookOfMormonDeseretPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "New Testament",
    "NewTestament.pdf",
    newTestamentPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "Old Testament",
    "OldTestament.pdf",
    oldTestamentPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc("Apocrypha", "Apocrypha.pdf", apocryphaPdf, "pdf", "Books & Scriptures"),
  doc(
    "Double Combination",
    "DoubleCombination.pdf",
    doubleCombinationPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc("Triple Combination", "Triple.pdf", triplePdf, "pdf", "Books & Scriptures"),
  doc(
    "The Deseret First Book",
    "thedeseretfirstbook.pdf",
    deseretFirstBookPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "The Deseret Second Book",
    "thedeseretsecondbook.pdf",
    deseretSecondBookPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "Annual Report of the Territorial Superintendent",
    "annualreportofte00utah.pdf",
    annualReportPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "Mormon Passage of George D. Watt",
    "MormonPassageofGeorgeDWatt.pdf",
    mormonPassageGeorgeDWattPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "English–Hopi Vocabulary (1860)",
    "English-HopiVocabulary1860.pdf",
    englishHopiVocabularyPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "Unicode Chapter 20: Americas",
    "UnicodeChapter20_Americas.pdf",
    unicodeChapter20AmericasPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "Unicode Deseret Documentation",
    "UnicodeDeseretDocumentation.pdf",
    unicodeDeseretDocumentationPdf,
    "pdf",
    "Books & Scriptures",
  ),
  doc(
    "The City of the Saints",
    "CityOfTheSaints_Burton1862.pdf",
    cityOfTheSaintsPdf,
    "pdf",
    "Books & Scriptures",
    "Richard F. Burton. New York: Harper & Brothers, 1862. Public domain. Internet Archive scan of the University of Virginia copy.",
  ),
  doc(
    "A Journey to Great Salt Lake City",
    "JourneyToGreatSaltLakeCity_Remy.pdf",
    journeyToGreatSaltLakePdf,
    "pdf",
    "Books & Scriptures",
    "Jules Remy and Julius Brenchley. English edition, 1861. Public domain. Internet Archive scan.",
  ),
  doc(
    "Life in Utah",
    "LifeInUtah_Beadle.pdf",
    lifeInUtahBookPdf,
    "pdf",
    "Books & Scriptures",
    "J. H. Beadle, Life in Utah; or, The Mysteries and Crimes of Mormonism, 1870. Public domain. Internet Archive scan.",
  ),
  doc(
    "Das Buch der Schrift",
    "DasBuchDerSchrift_Faulmann.pdf",
    dasBuchDerSchriftPdf,
    "pdf",
    "Books & Scriptures",
    "Carl Faulmann, Das Buch der Schrift. Vienna, 1878. Public domain. Internet Archive scan.",
  ),

  doc(
    "Deseret Alphabet Chart",
    "deseretalphabetchart.pdf",
    alphabetChartPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Deseret Alphabet Chart 0",
    "deseretalphabetchart0.pdf",
    alphabetChart0Pdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Deseret Alphabet Chart 2",
    "deseretalphabetchart2.pdf",
    alphabetChart2Pdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "An Early Version of the Alphabet",
    "An Early Version of the Alphabet.pdf",
    earlyAlphabetPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Early Version of the Alphabet 2",
    "Early ersionAlphabet2.pdf",
    earlyAlphabet2Pdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from All 3 Readers",
    "TableFromAll3Readers.pdf",
    tableAll3ReadersPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from 1868 (Shape Ordered)",
    "TableFrom1868ShapeOrdered.pdf",
    table1868ShapePdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from City of the Saints",
    "TableFromCityOfTheSaints.pdf",
    tableCityOfTheSaintsPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from Deseret News",
    "TableFromDeseretNews.pdf",
    tableDeseretNewsPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from German Book",
    "TableFromGermanBook.pdf",
    tableGermanBookPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from Journey to Great Salt Lake City",
    "TableFromJourneyToGSLC.pdf",
    tableJourneyPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from Life in Utah",
    "TableFromLifeInUtah.pdf",
    tableLifeInUtahPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from New (Shape Ordered)",
    "TableFromNewShapeOrdered.pdf",
    tableNewShapePdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from New (Sound Ordered)",
    "TableFromNewSoundOrdered.pdf",
    tableNewSoundPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "Table from New York Times",
    "TableFromNewYorkTimes.pdf",
    tableNewYorkTimesPdf,
    "pdf",
    "Charts & Tables",
  ),
  doc(
    "The Deseret Alphabet (1854)",
    "DeseretAlphabet1854.pdf",
    deseretAlphabet1854Pdf,
    "pdf",
    "Charts & Tables",
    "Anonymous 1854 imprint, 4 pages. Public domain. Scan from the Church History Library via Internet Archive.",
  ),
  doc(
    "The Deseret Alphabet (broadside)",
    "DeseretAlphabetBroadside.pdf",
    deseretAlphabetBroadsidePdf,
    "pdf",
    "Charts & Tables",
    "Broadside, about the 1860s. Public domain. Scan from the Church History Library via Internet Archive.",
  ),
  doc(
    "Deseret Alphabet Card (1859)",
    "DeseretAlphabetCard1859.pdf",
    deseretAlphabetCard1859Pdf,
    "pdf",
    "Charts & Tables",
    "1859 card. Public domain. Internet Archive scan.",
  ),

  doc(
    "Albert Kerington",
    "AlbertKerington.png",
    albertKeringtonImg,
    "image",
    "Images",
  ),
  doc("Brigham Young", "BrighamYoung.png", brighamYoungImg, "image", "Images"),
  doc("Erastus Snow", "ErastusSnow.jpeg", erastusSnowImg, "image", "Images"),
  doc("Isaac Bullock", "IsaacBullock.png", isaacBullockImg, "image", "Images"),
  doc("Orson Pratt", "OrsonPratt.png", orsonPrattImg, "image", "Images"),
  doc(
    "Wilford Woodruff",
    "WilfordWoodruff.png",
    wilfordWoodruffImg,
    "image",
    "Images",
  ),
  doc("William Felps", "WilliamFelps.png", williamFelpsImg, "image", "Images"),
  doc(
    "Deseret Gold Coin",
    "DeseretGoldCoin.jpg",
    deseretGoldCoinImg,
    "image",
    "Images",
  ),
  doc(
    "General Election People's Ticket",
    "GeneralElectionPeoplesTicket.jpg",
    generalElectionTicketImg,
    "image",
    "Images",
  ),
  doc(
    "Improvement Era Page",
    "ImprovementEraPage.jpg",
    improvementEraPageImg,
    "image",
    "Images",
  ),
  doc(
    "Carn With A Fark Article",
    "CarnWithAFarkArticle.jpg",
    carnWithAFarkArticleImg,
    "image",
    "Images",
  ),
  doc(
    "Plan 10 Floppy Disk",
    "Plan10FloppyDisk.jpg",
    plan10FloppyDiskImg,
    "image",
    "Images",
  ),
  doc(
    "Sermon on the Mount, Deseret News",
    "SermonOnTheMount_DeseretNews_1859.jpg",
    sermonOnTheMountImg,
    "image",
    "Images",
    "Deseret News, 16 February 1859. Public domain. Wikimedia Commons.",
  ),
  doc(
    "Early Deseret Cursive Lineup",
    "EarlyDeseretCursiveLineup.svg",
    earlyCursiveLineupImg,
    "image",
    "Images",
    "Psiĥedelisto, 2017. CC0. A new drawing based on Church History Library manuscripts MS 4223 and CR 1234 1, not a scan.",
  ),
  doc(
    "Marion J. Shelton Handwritten Lineup",
    "EarlyDeseretSheltonLineup.svg",
    earlySheltonLineupImg,
    "image",
    "Images",
    "Psiĥedelisto. CC0. A new drawing based on Marion J. Shelton’s handwriting, not a scan.",
  ),
  doc(
    "Deseret Cursive Examples",
    "DeseretCursiveExamples.svg",
    deseretCursiveExamplesImg,
    "image",
    "Images",
    "Psiĥedelisto. CC0. A new drawing based on bishop’s meeting minutes recorded by George D. Watt, not a scan.",
  ),
];

export const DESERET_DOCUMENT_CATEGORIES: DeseretDocumentCategory[] = [
  "Books & Scriptures",
  "Charts & Tables",
  "Images",
];
