import "./ProjectsPage.css";
import baybayinGuide from "../../assets/projects/BaybayinHowToReadV2.pdf";

export default function ProjectsPage() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");

    // Use the imported asset URL for assets, or public URL for public files
    if (fileName === "BaybayinHowToReadV2.pdf") {
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
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>How to Read Baybayin</td>
            <td>
              <button
                onClick={() => handleDownload("BaybayinHowToReadV2.pdf")}
                className="downloadButton"
              >
                Download PDF
              </button>
            </td>
          </tr>
          <tr>
            <td>Ang Bagong Tipan</td>
            <td>First Draft In Review</td>
          </tr>
          <tr>
            <td>Ang Aklat ni Mormon</td>
            <td>Pending Approval</td>
          </tr>
          <tr>
            <td>Ang Pagpapahayag sa Mag-anak</td>
            <td>Pending Approval</td>
          </tr>
          <tr>
            <td>Ang Pagpapanumbalik</td>
            <td>Pending Approval</td>
          </tr>
          <tr>
            <td>Ang Buhay na Cristo</td>
            <td>Pending Approval</td>
          </tr>
          <tr>
            <td>Ang Mga Saligan ng Pananampalataya</td>
            <td>Pending Approval</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
