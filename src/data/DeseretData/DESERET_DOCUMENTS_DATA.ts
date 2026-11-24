import bomPdf from "../../assets/documents/Deseret/BoM.pdf";
import newTestamentPdf from "../../assets/documents/Deseret/NewTestament.pdf";
import oldTestamentPdf from "../../assets/documents/Deseret/OldTestament.pdf";
import apocryphaPdf from "../../assets/documents/Deseret/Apocrypha.pdf";
import doubleCombinationPdf from "../../assets/documents/Deseret/DoubleCombination.pdf";
import triplePdf from "../../assets/documents/Deseret/Triple.pdf";
import deseretFirstBookPdf from "../../assets/documents/Deseret/thedeseretfirstbook.pdf";
import deseretSecondBookPdf from "../../assets/documents/Deseret/thedeseretsecondbook.pdf";
import annualReportPdf from "../../assets/documents/Deseret/annualreportofte00utah.pdf";
import mormonPassageGeorgeDWattPdf from "../../assets/documents/Deseret/MormonPassageofGeorgeDWatt.pdf";
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

export type DeseretDocumentKind = "pdf" | "image" | "link";

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
  linkLabel?: string;
  linkBadge?: string;
};

function doc(
  name: string,
  fileName: string,
  fileUrl: string,
  kind: DeseretDocumentKind,
  category: DeseretDocumentCategory,
  attribution?: string,
  linkLabel?: string,
  linkBadge?: string,
): DeseretDocument {
  return {
    name,
    fileName,
    fileUrl,
    kind,
    category,
    attribution,
    linkLabel,
    linkBadge,
  };
}

export const DESERET_DOCUMENTS: DeseretDocument[] = [
  doc(
    "Book of Mormon",
    "BoM.pdf",
    bomPdf,
    "pdf",
    "Books & Scriptures",
    "LuaLaTeX edition from deseretalphabet.info, set in Gentium Plus (SIL International) with Deseret additions. Follows the 1920 Book of Mormon published by The Church of Jesus Christ of Latter-day Saints. The edition states that text is in the public domain.",
  ),
  doc(
    "Book of Mormon (Deseret Alphabet)",
    "bookofmormdeseretalpha00",
    "https://archive.org/details/bookofmormdeseretalpha00",
    "link",
    "Books & Scriptures",
    "The 1869 Deseret alphabet Book of Mormon is in the public domain. The scan of it is a 1990 facsimile reprint, so this site links to the Internet Archive copy.",
    "Internet Archive",
    "Archive",
  ),
  doc(
    "New Testament",
    "NewTestament.pdf",
    newTestamentPdf,
    "pdf",
    "Books & Scriptures",
    "LuaLaTeX edition from deseretalphabet.info, set in Gentium Plus (SIL International) with Deseret additions. King James Version. The edition states the text is in the public domain.",
  ),
  doc(
    "Old Testament",
    "OldTestament.pdf",
    oldTestamentPdf,
    "pdf",
    "Books & Scriptures",
    "LuaLaTeX edition from deseretalphabet.info, set in Gentium Plus (SIL International) with Deseret additions. King James Version. The edition states the text is in the public domain.",
  ),
  doc(
    "Apocrypha",
    "Apocrypha.pdf",
    apocryphaPdf,
    "pdf",
    "Books & Scriptures",
    "LuaLaTeX edition from deseretalphabet.info, set in Gentium Plus (SIL International) with Deseret additions. King James Apocrypha and “The Translators to the Reader.” The edition states the text is in the public domain.",
  ),
  doc(
    "Double Combination",
    "DoubleCombination.pdf",
    doubleCombinationPdf,
    "pdf",
    "Books & Scriptures",
    "LuaLaTeX edition from deseretalphabet.info, set in Gentium Plus (SIL International) with Deseret additions. Follows the 1921 Doctrine and Covenants and Pearl of Great Price. Official Declaration 2 is omitted because that text remains under copyright.",
  ),
  doc(
    "Triple Combination",
    "Triple.pdf",
    triplePdf,
    "pdf",
    "Books & Scriptures",
    "John Jenkins, 1997.",
  ),
  doc(
    "The Deseret First Book",
    "thedeseretfirstbook.pdf",
    deseretFirstBookPdf,
    "pdf",
    "Books & Scriptures",
    "Regents of the Deseret University. Public domain. Internet Archive scan (archive.org/details/thedeseretfirstb00unse).",
  ),
  doc(
    "The Deseret Second Book",
    "thedeseretsecondbook.pdf",
    deseretSecondBookPdf,
    "pdf",
    "Books & Scriptures",
    "Regents of the Deseret University. Public domain. Internet Archive scan (archive.org/details/thedeseretsecond00unse).",
  ),
  doc(
    "Annual Report of the Territorial Superintendent",
    "annualreportofte00utah.pdf",
    annualReportPdf,
    "pdf",
    "Books & Scriptures",
    "Utah Territory Office of the Commissioner of Schools, 1868. Public domain. Internet Archive scan (archive.org/details/annualreportofte00utah).",
  ),
  doc(
    "Mormon Passage of George D. Watt",
    "MormonPassageofGeorgeDWatt.pdf",
    mormonPassageGeorgeDWattPdf,
    "pdf",
    "Books & Scriptures",
    "Ronald G. Watt, Mormon Passage of George D. Watt: First British Convert, Scribe for Zion. Utah State University Press, 2009. Creative Commons Attribution 4.0 (creativecommons.org/licenses/by/4.0/). Project MUSE: muse.jhu.edu/book/9408.",
  ),
  doc(
    "English–Hopi Vocabulary (1860)",
    "english-hopi-vocabulary",
    "https://uofupress.com/books/an-1860-english-hopi-vocabulary-written-in-the-deseret-alphabet/",
    "link",
    "Books & Scriptures",
    "Kenneth R. Beesley and Dirk Elzinga, An 1860 English-Hopi Vocabulary Written in the Deseret Alphabet. University of Utah Press, 2015. This site links to the publisher instead of hosting the book.",
    "University of Utah Press",
    "Press",
  ),
  doc(
    "Unicode Chapter 20: Americas",
    "unicode-chapter-20",
    "https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-20/",
    "link",
    "Books & Scriptures",
    "The Unicode Consortium, The Unicode Standard, Version 18.0, Chapter 20: Americas. This site links to Unicode instead of hosting the chapter.",
    "Unicode",
  ),
  doc(
    "Unicode Deseret Chart",
    "unicode-deseret-chart",
    "https://www.unicode.org/charts/PDF/U10400.pdf",
    "link",
    "Books & Scriptures",
    "The Unicode Consortium, Deseret code chart from The Unicode Standard, Version 18.0. © 1991–2026 Unicode, Inc. This site links to Unicode instead of hosting the chart.",
    "Unicode",
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
    "Broadside, about the 1860s. Public domain. Scan from the Church History Library via Internet Archive (archive.org/details/deseretalphabet02unse).",
  ),
  doc(
    "Deseret Alphabet Chart 0",
    "deseretalphabetchart0.pdf",
    alphabetChart0Pdf,
    "pdf",
    "Charts & Tables",
    "Internet Archive scan (archive.org/details/deseretalphabet00unse).",
  ),
  doc(
    "Deseret Alphabet Chart 2",
    "deseretalphabetchart2.pdf",
    alphabetChart2Pdf,
    "pdf",
    "Charts & Tables",
    "Anonymous 1854 imprint. Public domain. Scan from the Church History Library via Internet Archive (archive.org/details/deseretalphabet03unse).",
  ),
  doc(
    "An Early Version of the Alphabet",
    "An Early Version of the Alphabet.pdf",
    earlyAlphabetPdf,
    "pdf",
    "Charts & Tables",
    "Interlibrary-loan scan dated 19 March 2007 (ILL 1564027). The holding institution is not named in the file.",
  ),
  doc(
    "Early Version of the Alphabet 2",
    "Early ersionAlphabet2.pdf",
    earlyAlphabet2Pdf,
    "pdf",
    "Charts & Tables",
    "Microtek scan. The source institution is not recorded in the file.",
  ),
  doc(
    "Table from All 3 Readers",
    "TableFromAll3Readers.pdf",
    tableAll3ReadersPdf,
    "pdf",
    "Charts & Tables",
    "Compiled by John Erickson (jericks) from the Deseret First Book, Second Book, and 1868 reader.",
  ),
  doc(
    "Table from 1868 (Shape Ordered)",
    "TableFrom1868ShapeOrdered.pdf",
    table1868ShapePdf,
    "pdf",
    "Charts & Tables",
    "Shape-ordered table of the 1868 Deseret reader alphabet. Prepared in OpenOffice. The compiler is not named in the file.",
  ),
  doc(
    "Table from City of the Saints",
    "TableFromCityOfTheSaints.pdf",
    tableCityOfTheSaintsPdf,
    "pdf",
    "Charts & Tables",
    "Excerpt from Richard F. Burton, The City of the Saints (Harper & Brothers, 1862). See the full book in this collection.",
  ),
  doc(
    "Table from Deseret News",
    "TableFromDeseretNews.pdf",
    tableDeseretNewsPdf,
    "pdf",
    "Charts & Tables",
    "Scan of a Deseret News notice introducing the alphabet. The date is not recorded in the file.",
  ),
  doc(
    "Table from German Book",
    "TableFromGermanBook.pdf",
    tableGermanBookPdf,
    "pdf",
    "Charts & Tables",
    "Excerpt from Karl Faulmann, Das Buch der Schrift. Google Books PDF. See the full book in this collection.",
  ),
  doc(
    "Table from Journey to Great Salt Lake City",
    "TableFromJourneyToGSLC.pdf",
    tableJourneyPdf,
    "pdf",
    "Charts & Tables",
    "Excerpt from Jules Remy and Julius Brenchley, A Journey to Great Salt Lake City (1861). See the full book in this collection.",
  ),
  doc(
    "Table from Life in Utah",
    "TableFromLifeInUtah.pdf",
    tableLifeInUtahPdf,
    "pdf",
    "Charts & Tables",
    "Compiled by John Erickson (jericks) from J. H. Beadle, Life in Utah (1870). See the full book in this collection.",
  ),
  doc(
    "Table from New (Shape Ordered)",
    "TableFromNewShapeOrdered.pdf",
    tableNewShapePdf,
    "pdf",
    "Charts & Tables",
    "Compiled by Charlotte Erickson.",
  ),
  doc(
    "Table from New (Sound Ordered)",
    "TableFromNewSoundOrdered.pdf",
    tableNewSoundPdf,
    "pdf",
    "Charts & Tables",
    "Compiled by Charlotte Erickson.",
  ),
  doc(
    "Table from New York Times",
    "TableFromNewYorkTimes.pdf",
    tableNewYorkTimesPdf,
    "pdf",
    "Charts & Tables",
    "The New York Times, 2 October 1857. The PDF carries a New York Times copyright notice.",
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
    "Portrait card, 1813–1889. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "Brigham Young",
    "BrighamYoung.png",
    brighamYoungImg,
    "image",
    "Images",
    "Portrait card of Brigham Young, 1801–1877. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "Erastus Snow",
    "ErastusSnow.jpeg",
    erastusSnowImg,
    "image",
    "Images",
    "Portrait card. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "Isaac Bullock",
    "IsaacBullock.png",
    isaacBullockImg,
    "image",
    "Images",
    "Portrait card. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "Orson Pratt",
    "OrsonPratt.png",
    orsonPrattImg,
    "image",
    "Images",
    "Portrait card. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "Wilford Woodruff",
    "WilfordWoodruff.png",
    wilfordWoodruffImg,
    "image",
    "Images",
    "Portrait card. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "William Felps",
    "WilliamFelps.png",
    williamFelpsImg,
    "image",
    "Images",
    "Portrait card. The photographer and the card’s publisher are not recorded with this file.",
  ),
  doc(
    "Deseret Gold Coin",
    "DeseretGoldCoin.jpg",
    deseretGoldCoinImg,
    "image",
    "Images",
    "1860 Deseret Assay Office five-dollar gold piece, marked 5 D. The photographer is not recorded with this file.",
  ),
  doc(
    "General Election People's Ticket",
    "GeneralElectionPeoplesTicket.jpg",
    generalElectionTicketImg,
    "image",
    "Images",
    "People’s Ticket for the general election of Monday, 2 August 1875. The scan source is not recorded with this file.",
  ),
  doc(
    "Improvement Era Page",
    "ImprovementEraPage.jpg",
    improvementEraPageImg,
    "image",
    "Images",
    "Albert L. Zobell Jr., “Deseret Alphabet Manuscript Found,” Improvement Era, May 1967, pp. 10–11. The photo caption names Albert L. Zobell Jr. and Earl E. Olson with a Church Historian’s Office manuscript.",
  ),
  doc(
    "Carn With A Fark Article",
    "CarnWithAFarkArticle.jpg",
    carnWithAFarkArticleImg,
    "image",
    "Images",
    "Ken Connaughton, United Press International, “Is Deseret Alphabet to Blame for Eating ‘Carn’ With a ‘Fark’?,” The Herald (Provo, Utah), 4 April 1976, p. 23.",
  ),
  doc(
    "Plan 10 Floppy Disk",
    "Plan10FloppyDisk.jpg",
    plan10FloppyDiskImg,
    "image",
    "Images",
    "Plan 10 from Outer Space Deseret alphabet font, shown as a Windows TrueType package and a Macintosh PostScript floppy. The photographer is not recorded with this file.",
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
