import DownloadRow from "./DownloadRow";
import "./ProjectsPage.css";

export default function ProjectsPage() {
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
          <DownloadRow
            name="How to Read Baybayin"
            fileName="BaybayinHowToReadV2.pdf"
          />

          <DownloadRow
            name="Mateo 1 (Tagalog: Baybayin)"
            fileName="Mateo-1.pdf"
          />

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
