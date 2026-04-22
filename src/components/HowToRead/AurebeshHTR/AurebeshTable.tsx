import { AUREBESH_DATA } from "../../../data/AUREBESH_DATA";

interface AurebeshTableProps {
  type: "basic" | "combined" | "punctuation" | "number";
  data: typeof AUREBESH_DATA;
  title: string;
  description?: string;
  headers?: string[];
}

export default function AurebeshTable({
  type,
  data,
  title,
  description,
  headers,
}: AurebeshTableProps) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <table className="alphabet-table">
        <thead>
          <tr>
            {headers && headers.map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((letter) => letter.type === type)
            .map((letter) => (
              <tr key={letter.letter}>
                <td className="aurebesh-letter">{letter.letter}</td>
                <td>{letter.letter}</td>
                {type !== "number" && type !== "punctuation" ? (
                  <td>{letter.name}</td>
                ) : null}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
