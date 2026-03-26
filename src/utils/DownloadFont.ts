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
