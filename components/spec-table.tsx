import { Card } from "@/components/ui/card";

type SpecTableProps = {
  title: string;
  rows: string[][];
};

export function SpecTable({ title, rows }: SpecTableProps) {
  return (
    <Card className="overflow-hidden rounded-[2rem] border border-[#eaf2f8] shadow-[0_12px_40px_-15px_rgba(12,61,134,0.08)] bg-white h-full group transition-all duration-300 hover:border-[#d0e3f2] hover:shadow-[0_24px_50px_-15px_rgba(12,61,134,0.12)]">
      <div className="border-b border-[#d2e5f5] bg-[#e6f0f9] px-8 py-5 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0f60b2]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#cbe1f3] to-transparent opacity-60"></div>
        <h3 className="text-2xl font-bold tracking-tight text-[#0c3d86] relative z-10">{title}</h3>
      </div>

      <div className="divide-y divide-[#f0f6fa] md:hidden">
        {rows.map(([label, value]) => (
          <div key={label} className="space-y-1.5 px-6 py-5 transition-colors hover:bg-slate-50/50">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f60b2]">{label}</p>
            <p className="text-[15px] font-medium leading-relaxed text-slate-700">{value}</p>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full border-collapse text-left">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-[#f0f6fa] last:border-b-0 transition-colors hover:bg-slate-50/50">
                <th className="w-1/3 px-8 py-5 text-[14px] font-bold text-[#0c3d86] uppercase tracking-wide bg-white">{label}</th>
                <td className="px-8 py-5 text-[15px] font-medium leading-relaxed text-slate-700">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
