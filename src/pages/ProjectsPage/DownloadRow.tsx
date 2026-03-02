import baybayinGuide from "../../assets/projects/BaybayinHowToReadV2.pdf";
import mateo1 from "../../assets/projects/Mateo-1.pdf";

export default function DownloadRow({
  name,
  fileName,
}: {
  name: string;
  fileName: string;
}) {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");

    // Use the imported asset URL for assets, or public URL for public files
    if (fileName === "BaybayinHowToReadV2.pdf") {
      link.href = baybayinGuide;
    } else if (fileName === "Mateo-1.pdf") {
      link.href = mateo1;
    } else {
      link.href = `/${fileName}`;
    }

    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <button
          onClick={() => handleDownload(fileName)}
          className="downloadButton"
        >
          Download PDF
        </button>
      </td>
    </tr>
  );
}
