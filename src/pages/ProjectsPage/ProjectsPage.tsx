import "./ProjectsPage.css";

export default function ProjectsPage() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
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
              onClick={() => handleDownload("HowToReadBaybayin.pdf")}
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
