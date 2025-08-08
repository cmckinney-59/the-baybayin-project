import React from "react";
import "./ProjectsPage.css";

// Example imports for files in assets/projects
// Uncomment and modify these when you add actual files:
import angBuhayNaCristo from "../assets/projects/17409_tgl.pdf";
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
    <div style={styles.projectsPage}>
      <h1>Projects</h1>

      <div style={styles.projectsContent}>
        <p>Here are some of my projects available for download:</p>

        {/* Example project download links */}
        <div style={styles.projectDownloads}>
          <h2>Available Downloads</h2>

          {/* Example 1: PDF file */}
          <div style={styles.downloadItem}>
            <h3>Project Documentation</h3>
            <p>Complete documentation for the project.</p>
            Uncomment when you have the actual file:
            <button
              onClick={() =>
                handleDownload(angBuhayNaCristo, "AngBuhayNaCristo.docx")
              }
              style={styles.downloadButton}
            >
              Download PDF
            </button>
            <button
              onClick={() =>
                alert(
                  "Add your file to assets/projects and uncomment the download code"
                )
              }
              style={styles.downloadButton}
            >
              Download PDF (Example)
            </button>
          </div>

          {/* Example 2: ZIP file */}
          <div style={styles.downloadItem}>
            <h3>Project Source Code</h3>
            <p>Complete source code package.</p>
            {/* Uncomment when you have the actual file:
            <button 
              onClick={() => handleDownload(projectFile2, 'project-source.zip')}
              style={styles.downloadButton}
            >
              Download ZIP
            </button>
            */}
            <button
              onClick={() =>
                alert(
                  "Add your file to assets/projects and uncomment the download code"
                )
              }
              style={styles.downloadButton}
            >
              Download ZIP (Example)
            </button>
          </div>

          {/* Example 3: Direct link approach */}
          <div style={styles.downloadItem}>
            <h3>Alternative Download Method</h3>
            <p>Using direct anchor tag approach:</p>
            {/* This approach works for files in the public folder */}
            <a
              href="/your-file-in-public-folder.pdf"
              download
              style={styles.downloadLink}
            >
              Download via Direct Link
            </a>
          </div>
        </div>

        <div style={styles.setupInstructions}>
          <h2>How to Add Your Files</h2>
          <ol>
            <li>
              Place your files in the{" "}
              <code style={styles.code}>src/assets/projects/</code> directory
            </li>
            <li>Import them at the top of this component</li>
            <li>Uncomment the download buttons above</li>
            <li>Update the file names and descriptions</li>
          </ol>

          <h3>Supported File Types</h3>
          <ul>
            <li>PDF files (.pdf)</li>
            <li>ZIP archives (.zip)</li>
            <li>Word documents (.docx)</li>
            <li>Text files (.txt)</li>
            <li>Images (.jpg, .png, .gif)</li>
            <li>And more!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
