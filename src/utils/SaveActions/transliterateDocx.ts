import JSZip from "jszip";
import { saveAs } from "file-saver";

const W_NS =
  "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
const XML_NS = "http://www.w3.org/XML/1998/namespace";

const DOCX_XML_PART =
  /^word\/(document|header\d*|footer\d*|footnotes|endnotes)\.xml$/i;

const ODT_TRANSLIT_STYLE = "TranslitAlphabetFont";

export type OfficeDocumentKind = "docx" | "odt";

export type TransliterateDocxOptions = {
  /** Replace Latin (or other) text; whitespace should be preserved by the caller. */
  processText: (text: string) => Promise<string>;
  /** Office font family applied to text runs (e.g. "Noto Sans Deseret"). */
  fontName?: string;
  /** Download name; defaults to original name with `-transliterated` inserted. */
  outputFileName?: string;
};

function localName(node: Element): string {
  return node.localName || node.nodeName.replace(/^.*:/, "");
}

function elementsByLocalName(
  root: Element | Document,
  name: string,
  namespace?: string,
): Element[] {
  if (namespace && "getElementsByTagNameNS" in root) {
    const fromNs = Array.from(root.getElementsByTagNameNS(namespace, name));
    if (fromNs.length > 0) return fromNs;
  }
  return Array.from(root.getElementsByTagName("*")).filter(
    (el) => localName(el) === name,
  );
}

function detectKind(fileName: string, zip: JSZip): OfficeDocumentKind {
  if (/\.odt$/i.test(fileName) || zip.file("content.xml")) return "odt";
  if (/\.docx$/i.test(fileName) || zip.folder("word")) return "docx";
  throw new Error("Unsupported file. Please choose a .docx or .odt document.");
}

function defaultOutputName(inputName: string, kind: OfficeDocumentKind): string {
  if (kind === "odt") {
    if (/\.odt$/i.test(inputName)) {
      return inputName.replace(/\.odt$/i, "-transliterated.odt");
    }
    return `${inputName}-transliterated.odt`;
  }
  if (/\.docx$/i.test(inputName)) {
    return inputName.replace(/\.docx$/i, "-transliterated.docx");
  }
  return `${inputName}-transliterated.docx`;
}

function mimeForKind(kind: OfficeDocumentKind): string {
  return kind === "odt"
    ? "application/vnd.oasis.opendocument.text"
    : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
}

/* ---------- DOCX ---------- */

function ensureDocxRunFont(
  run: Element,
  fontName: string,
  xmlDoc: Document,
): void {
  let rPr = Array.from(run.children).find((child) => localName(child) === "rPr");
  if (!rPr) {
    rPr = xmlDoc.createElementNS(W_NS, "w:rPr");
    run.insertBefore(rPr, run.firstChild);
  }

  for (const child of Array.from(rPr.childNodes)) {
    if (
      child.nodeType === Node.ELEMENT_NODE &&
      localName(child as Element) === "rFonts"
    ) {
      rPr.removeChild(child);
    }
  }

  const rFonts = xmlDoc.createElementNS(W_NS, "w:rFonts");
  rFonts.setAttribute("w:ascii", fontName);
  rFonts.setAttribute("w:hAnsi", fontName);
  rFonts.setAttribute("w:cs", fontName);
  rFonts.setAttribute("w:eastAsia", fontName);
  rPr.insertBefore(rFonts, rPr.firstChild);
}

async function transliterateDocxParagraph(
  paragraph: Element,
  xmlDoc: Document,
  processText: (text: string) => Promise<string>,
  fontName?: string,
): Promise<void> {
  const textNodes = elementsByLocalName(paragraph, "t", W_NS);
  if (textNodes.length === 0) return;

  const original = textNodes.map((node) => node.textContent ?? "").join("");
  if (!original.trim()) return;

  const converted = await processText(original);

  textNodes[0].textContent = converted;
  textNodes[0].setAttributeNS(XML_NS, "xml:space", "preserve");
  for (let i = 1; i < textNodes.length; i++) {
    textNodes[i].textContent = "";
  }

  if (!fontName) return;

  const runs = new Set<Element>();
  for (const textNode of textNodes) {
    const run = textNode.parentElement;
    if (run && localName(run) === "r") {
      runs.add(run);
    }
  }
  for (const run of runs) {
    ensureDocxRunFont(run, fontName, xmlDoc);
  }
}

async function transliterateDocxXmlPart(
  xml: string,
  processText: (text: string) => Promise<string>,
  fontName?: string,
): Promise<string> {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "application/xml");
  if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
    return xml;
  }

  const paragraphs = elementsByLocalName(xmlDoc, "p", W_NS);
  for (const paragraph of paragraphs) {
    await transliterateDocxParagraph(paragraph, xmlDoc, processText, fontName);
  }

  return new XMLSerializer().serializeToString(xmlDoc);
}

async function transliterateDocxZip(
  zip: JSZip,
  processText: (text: string) => Promise<string>,
  fontName?: string,
): Promise<void> {
  const writes: Promise<void>[] = [];
  zip.forEach((path, entry) => {
    if (entry.dir || !DOCX_XML_PART.test(path)) return;
    writes.push(
      (async () => {
        const xml = await entry.async("string");
        const next = await transliterateDocxXmlPart(xml, processText, fontName);
        zip.file(path, next);
      })(),
    );
  });
  await Promise.all(writes);
}

/* ---------- ODT (string edits — DOMSerializer mangles ODF namespaces) ---------- */

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function unescapeXml(text: string): string {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Convert ODT paragraph/heading inner XML to plain text. */
function odtInnerXmlToText(inner: string): string {
  return unescapeXml(
    inner
      .replace(/<text:s\b[^>]*\btext:c="(\d+)"[^>]*\/?>/gi, (_, count: string) =>
        " ".repeat(Number(count) || 1),
      )
      .replace(/<text:s\b[^>]*\/?>/gi, " ")
      .replace(/<text:tab\b[^>]*\/?>/gi, "\t")
      .replace(/<text:line-break\b[^>]*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, ""),
  );
}

function ensureOdtStylesInXmlString(xml: string, fontName: string): string {
  const font = escapeXml(fontName);
  let result = xml;

  const fontFaceRe = new RegExp(
    `<style:font-face\\b[^>]*style:name="${escapeRegExp(font)}"`,
  );
  if (!fontFaceRe.test(result)) {
    const fontFace = `<style:font-face style:name="${font}" svg:font-family="${font}"/>`;
    if (result.includes("</office:font-face-decls>")) {
      result = result.replace(
        "</office:font-face-decls>",
        `${fontFace}</office:font-face-decls>`,
      );
    } else if (result.includes("<office:font-face-decls/>")) {
      result = result.replace(
        "<office:font-face-decls/>",
        `<office:font-face-decls>${fontFace}</office:font-face-decls>`,
      );
    } else if (result.includes("<office:automatic-styles")) {
      result = result.replace(
        "<office:automatic-styles",
        `<office:font-face-decls>${fontFace}</office:font-face-decls><office:automatic-styles`,
      );
    }
  }

  if (!result.includes(`style:name="${ODT_TRANSLIT_STYLE}"`)) {
    const style = `<style:style style:name="${ODT_TRANSLIT_STYLE}" style:family="text"><style:text-properties style:font-name="${font}" fo:font-family="${font}"/></style:style>`;
    if (result.includes("</office:automatic-styles>")) {
      result = result.replace(
        "</office:automatic-styles>",
        `${style}</office:automatic-styles>`,
      );
    } else if (result.includes("<office:automatic-styles/>")) {
      result = result.replace(
        "<office:automatic-styles/>",
        `<office:automatic-styles>${style}</office:automatic-styles>`,
      );
    } else if (result.includes("<office:body")) {
      result = result.replace(
        "<office:body",
        `<office:automatic-styles>${style}</office:automatic-styles><office:body`,
      );
    }
  }

  return result;
}

async function transliterateOdtContentXml(
  xml: string,
  processText: (text: string) => Promise<string>,
  fontName?: string,
): Promise<string> {
  let result = fontName ? ensureOdtStylesInXmlString(xml, fontName) : xml;

  // text:p / text:h do not nest in ODF, so non-greedy matching is safe.
  const blockRe = /<(text:p|text:h)\b([^>]*)>([\s\S]*?)<\/\1>/g;
  const matches = Array.from(result.matchAll(blockRe));

  type Replacement = {
    start: number;
    end: number;
    tag: string;
    attrs: string;
    inner: string;
  };
  const replacements: Replacement[] = [];

  for (const match of matches) {
    const plain = odtInnerXmlToText(match[3]);
    if (!plain.trim()) continue;
    const converted = await processText(plain);
    const inner = fontName
      ? `<text:span text:style-name="${ODT_TRANSLIT_STYLE}">${escapeXml(converted)}</text:span>`
      : escapeXml(converted);
    replacements.push({
      start: match.index ?? 0,
      end: (match.index ?? 0) + match[0].length,
      tag: match[1],
      attrs: match[2],
      inner,
    });
  }

  for (let i = replacements.length - 1; i >= 0; i--) {
    const { start, end, tag, attrs, inner } = replacements[i];
    result =
      result.slice(0, start) +
      `<${tag}${attrs}>${inner}</${tag}>` +
      result.slice(end);
  }

  return result;
}

async function transliterateOdtZip(
  zip: JSZip,
  processText: (text: string) => Promise<string>,
  fontName?: string,
): Promise<void> {
  const contentEntry = zip.file("content.xml");
  if (!contentEntry) {
    throw new Error("Invalid ODT file: missing content.xml.");
  }
  const xml = await contentEntry.async("string");
  const next = await transliterateOdtContentXml(xml, processText, fontName);
  zip.file("content.xml", next);

  // ODF requires the mimetype entry to be stored uncompressed.
  const mime = zip.file("mimetype");
  if (mime) {
    mime.options.compression = "STORE";
  }
}

/* ---------- Public API ---------- */

/**
 * Transliterate text inside a .docx or .odt while keeping paragraph formatting.
 * Inline mixed formatting inside a paragraph may collapse into a single run/span.
 */
export async function transliterateDocx(
  file: File | ArrayBuffer,
  options: TransliterateDocxOptions,
  fileNameHint = "",
): Promise<Blob> {
  const buffer = file instanceof File ? await file.arrayBuffer() : file;
  const name = file instanceof File ? file.name : fileNameHint;
  const zip = await JSZip.loadAsync(buffer);
  const kind = detectKind(name, zip);
  const { processText, fontName } = options;

  if (kind === "odt") {
    await transliterateOdtZip(zip, processText, fontName);
  } else {
    await transliterateDocxZip(zip, processText, fontName);
  }

  return zip.generateAsync({
    type: "blob",
    mimeType: mimeForKind(kind),
  });
}

export async function downloadTransliteratedDocx(
  file: File,
  options: TransliterateDocxOptions,
): Promise<void> {
  const kind: OfficeDocumentKind = /\.odt$/i.test(file.name) ? "odt" : "docx";
  const blob = await transliterateDocx(file, options);
  saveAs(blob, options.outputFileName ?? defaultOutputName(file.name, kind));
}
