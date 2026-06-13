import type { ReactNode } from "react";

interface TableProps {
  data: { name: string }[];
  headers: string[];
  rows: ReactNode[][];
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
        {rows.map((cells, index) => (
          <tr key={data[index]?.name ?? index}>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
