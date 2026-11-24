import { saveAs } from "file-saver";
import JSZip from "jszip";

/**
 * Triggers a browser download for a given URL.
 * Use Vite asset URLs (e.g. `new URL("./file.zip", import.meta.url).href`) to
 * ensure binary files (ZIP/TTF/OTF) download correctly in dev + production.
 */
export default function downloadFont(url: string, downloadName?: string) {
  const link = document.createElement("a");
  link.href = url;
  if (downloadName) link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/** Save a font together with the license or copyright notice the license requires. */
export async function downloadFontWithLicense(
  fontUrl: string,
  fontFileName: string,
  noticeUrl: string,
  noticeFileName: string,
  saveName: string,
): Promise<void> {
  const [fontResponse, noticeResponse] = await Promise.all([
    fetch(fontUrl),
    fetch(noticeUrl),
  ]);
  if (!fontResponse.ok || !noticeResponse.ok) {
    throw new Error("Could not prepare the font download.");
  }

  const fontBytes = await fontResponse.arrayBuffer();
  const noticeBytes = await noticeResponse.arrayBuffer();
  const zip = new JSZip();

  if (fontFileName.toLowerCase().endsWith(".zip")) {
    const inner = await JSZip.loadAsync(fontBytes);
    await Promise.all(
      Object.values(inner.files).map(async (entry) => {
        if (entry.dir) return;
        zip.file(entry.name, await entry.async("uint8array"));
      }),
    );
  } else {
    zip.file(fontFileName, fontBytes);
  }

  zip.file(noticeFileName, noticeBytes);
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, saveName);
}
