import DownloadRow from "./DownloadRow";
import "./ProjectsPage.css";
import StatusRow from "./StatusRow";

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
          <StatusRow name="Ang Bagong Tipan" status="First Draft In Review" />
          <StatusRow name="Ang Aklat ni Mormon" status="Pending Approval" />
          <StatusRow
            name="Ang Pagpapahayag sa Mag-anak"
            status="Pending Approval"
          />
          <StatusRow name="Ang Pagpapanumbalik" status="Pending Approval" />
          <StatusRow name="Ang Pagpapanumbalik" status="Pending Approval" />
          <StatusRow name="Ang Buhay na Cristo" status="Pending Approval" />
          <StatusRow
            name="Ang Mga Saligan ng Pananampalataya"
            status="Pending Approval"
          />
        </tbody>
      </table>
    </div>
  );
}
