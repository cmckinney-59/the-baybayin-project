/**
 * Downloads a font file from the public directory
 * @param fileName - The name of the file to download
 * @param basePath - Optional base path for the font file. Defaults to "/the-baybayin-project/" for backward compatibility
 */
export default function downloadFont(
  fileName: string,
  basePath: string = "/the-baybayin-project/"
) {
  const link = document.createElement("a");
  link.href = `${basePath}${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
