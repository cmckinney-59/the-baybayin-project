/**
 * Downloads a font file from the public directory
 * @param fileName - The name of the file to download
 */
export default function downloadFont(fileName: string) {
  // Create a temporary link element
  const link = document.createElement("a");

  // Set the href to the file in the public directory
  link.href = `/${fileName}`;

  // Set the download attribute with the desired filename
  link.download = fileName;

  // Add the link to the DOM temporarily
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}
