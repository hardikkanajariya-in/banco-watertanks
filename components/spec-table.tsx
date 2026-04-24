import { Card } from "@/components/ui/card";

type SpecTableProps = {
  title: string;
  rows: string[][];
};

export function SpecTable({ title, rows }: SpecTableProps) {
  return (
    <Card className="h-full overflow-hidden border border-[#d3e0ea] bg-white shadow-[0_18px_42px_-34px_rgba(12,61,134,0.25)]">
      <div className="border-b border-[#d3e0ea] bg-[#f3f7fa] px-6 py-5 sm:px-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Technical Data
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0c3d86] sm:text-2xl">{title}</h3>
      </div>

      <div className="divide-y divide-[#e6edf3] md:hidden">
        {rows.map(([label, value]) => (
          <div key={label} className="space-y-1.5 px-6 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
            <p className="text-[15px] font-medium leading-relaxed text-slate-700">{value}</p>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full border-collapse text-left">
          <tbody>
            {rows.map(([label, value], index) => (
              <tr key={label} className="border-b border-[#e6edf3] last:border-b-0">
                <th className="w-[46%] px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:px-7">
                  {label}
                </th>
                <td
                  className={[
                    "px-6 py-4 text-[15px] font-medium leading-relaxed text-slate-700 sm:px-7",
                    index % 2 === 0 ? "bg-[#f9fbfc]" : "bg-white"
                  ].join(" ")}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
