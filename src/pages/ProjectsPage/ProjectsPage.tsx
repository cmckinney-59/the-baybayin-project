import React from "react";
import "./ProjectsPage.css";

// Example imports for files in assets/projects
// Uncomment and modify these when you add actual files:
import angBuhayNaCristo from "../../assets/projects/17409_tgl.pdf";
// import projectFile2 from '../assets/projects/your-file-2.zip';
// import projectFile3 from '../assets/projects/your-file-3.docx';

export default function ProjectsPage() {
  // Function to handle file downloads
  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
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
            <h3>Project Documentation</h3>
            <p>Complete documentation for the project.</p>
            <button
              onClick={() =>
                handleDownload(angBuhayNaCristo, "AngBuhayNaCristo.docx")
              }
              className="downloadButton"
            >
              Download PDF
            </button>
            <button
              onClick={() =>
                alert(
                  "Add your file to assets/projects and uncomment the download code"
                )
              }
              className="downloadButton"
            >
              Download PDF (Example)
            </button>
          </div>
          <div className="downloadItem">
            <h3>Project Source Code</h3>
            <p>Complete source code package.</p>
            Uncomment when you have the actual file:
            <button
              onClick={() => handleDownload(projectFile2, "project-source.zip")}
              className="downloadButton"
            >
              Download ZIP
            </button>
            <button
              onClick={() =>
                alert(
                  "Add your file to assets/projects and uncomment the download code"
                )
              }
              className="downloadButton"
            >
              Download ZIP (Example)
            </button>
          </div>
          <div className="downloadItem">
            <h3>Alternative Download Method</h3>
            <p>Using direct anchor tag approach:</p>
            <a
              href="/your-file-in-public-folder.pdf"
              download
              className="downloadLink"
            >
              Download via Direct Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
