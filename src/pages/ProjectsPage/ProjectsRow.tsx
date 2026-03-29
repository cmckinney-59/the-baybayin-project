import type { ProjectRow } from "./PROJECTS_DATA";

export default function ProjectsRow(project: ProjectRow) {
  if ("fileUrl" in project) {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = project.fileUrl;
      link.download = project.fileName;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
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
  }

  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.status}</td>
    </tr>
  );
}
