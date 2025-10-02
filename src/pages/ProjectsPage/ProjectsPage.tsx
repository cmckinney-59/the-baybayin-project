import "./ProjectsPage.css";
import baybayinGuide from "../../assets/projects/BaybayinHowToReadV1.pdf";

export default function ProjectsPage() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");

    // Use the imported asset URL for assets, or public URL for public files
    if (fileName === "BaybayinHowToReadV1.pdf") {
      link.href = baybayinGuide;
    } else {
      link.href = `/${fileName}`;
    }

    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="projectsPage">
      <h1>Projects</h1>
      <div className="projectsContent">
        <p>Here are some of our projects available for download:</p>
        <div className="projectDownloads">
          <div className="downloadItem">
            <h3>How to Read Baybayin</h3>
            <button
              onClick={() => handleDownload("BaybayinHowToReadV1.pdf")}
              className="downloadButton"
            >
              Download PDF
            </button>
          </div>
        </div>
        <h2>More to come...</h2>
      </div>
    </div>
  );
}
