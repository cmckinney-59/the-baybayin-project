import type { ProjectRow } from "./PROJECTS_DATA";

export default function ProjectsRow(project: ProjectRow) {
  let row: React.ReactNode = null;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "fileUrl" in project ? project.fileUrl : "";
    link.download = "fileName" in project ? project.fileName : "";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if ("fileUrl" in project) {
    row = (
      <tr>
        <td>{project.name}</td>
        <td>
          <button
            type="button"
            onClick={handleDownload}
            className="downloadButton"
          >
            Download PDF
          </button>
        </td>
      </tr>
    );
  } else {
    row = (
      <tr>
        <td>{project.name}</td>
        <td>{project.status}</td>
      </tr>
    );
  }

  return row;
}
