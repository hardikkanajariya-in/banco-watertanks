type SpecTableProps = {
  title: string;
  rows: string[][];
};

export function SpecTable({ title, rows }: SpecTableProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white">
      <div className="border-b border-[var(--border)] bg-[var(--brand-soft)] px-6 py-4">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-[var(--surface-alt)] last:border-b-0">
                <th className="w-1/3 px-6 py-4 font-semibold text-[var(--foreground)]">{label}</th>
                <td className="px-6 py-4 leading-7 text-[var(--muted)]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
