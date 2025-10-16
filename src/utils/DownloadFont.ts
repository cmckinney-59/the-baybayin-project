/**
 * Downloads a font file from the public directory
 * @param fileName - The name of the file to download
 */
export default function downloadFont(fileName: string) {
  const link = document.createElement("a");
  link.href = `/the-baybayin-project/${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
