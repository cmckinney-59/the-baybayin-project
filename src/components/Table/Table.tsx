import ProjectsRow from "../../pages/ProjectsPage/ProjectsRow";

interface TableProps {
  data: any[];
  headers: string[];
  rows: any[];
}

export default function Table({ data, headers, rows }: TableProps) {
  return (
    <table className="alphabet-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
