export default function StatusRow({
  name,
  status,
}: {
  name: string;
  status: string;
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
    </tr>
  );
}
