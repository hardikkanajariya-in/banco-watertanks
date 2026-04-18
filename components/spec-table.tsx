import { Card } from "@/components/ui/card";

type SpecTableProps = {
  title: string;
  rows: string[][];
};

export function SpecTable({ title, rows }: SpecTableProps) {
  return (
    <Card className="overflow-hidden rounded-[1.75rem]">
      <div className="border-b border-slate-200 bg-teal-50 px-6 py-4">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="divide-y divide-slate-100 md:hidden">
        {rows.map(([label, value]) => (
          <div key={label} className="space-y-2 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
            <p className="text-sm leading-7 text-slate-700">{value}</p>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full border-collapse text-left text-sm">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-slate-100 last:border-b-0">
                <th className="w-1/3 px-6 py-4 font-semibold text-slate-900">{label}</th>
                <td className="px-6 py-4 leading-7 text-slate-600">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
