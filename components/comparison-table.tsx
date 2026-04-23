import { CheckCircleBroken, XClose } from "@untitledui/icons";

type ComparisonRow = {
  parameter: string;
  banco: string;
  concrete: string;
  plastic: string;
  steel: string;
};

type ComparisonTableProps = {
  rows: ComparisonRow[];
};

const columns = [
  { key: "banco", label: "BANCO Water Tank", positive: true },
  { key: "concrete", label: "Concrete Tank", positive: false },
  { key: "plastic", label: "Plastic Tank", positive: false },
  { key: "steel", label: "Steel Tank", positive: false }
] as const;

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <>
      <div className="overflow-hidden rounded-[1.2rem] border border-[#3b79b5] bg-[#cfe8f8] shadow-[0_20px_60px_-45px_rgba(12,61,134,0.55)]">
        <div className="hidden overflow-x-auto lg:block">
          <table className="min-w-full border-collapse text-center">
            <thead className="text-white">
              <tr>
                <th className="bg-[#0c3d86] px-4 py-4 text-sm font-semibold uppercase tracking-[0.1em]">Parameters</th>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={column.key === "banco" ? "bg-[#18a8e4] px-4 py-4 text-sm font-semibold uppercase tracking-[0.08em]" : "bg-[#0f60b2] px-4 py-4 text-sm font-semibold uppercase tracking-[0.08em]"}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.parameter} className="border-t border-[#3b79b5] align-top">
                  <th className="w-44 bg-[#0f60b2] px-4 py-4 text-sm font-semibold text-white">{row.parameter}</th>
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={column.key === "banco" ? "bg-[#a9d6f2] px-4 py-4 text-sm font-medium leading-6 text-[#18334b]" : "bg-[#b8dcf3] px-4 py-4 text-sm font-medium leading-6 text-[#18334b]"}
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-5 p-4 lg:hidden">
          {rows.map((row) => (
            <article key={row.parameter} className="overflow-hidden rounded-[1.25rem] border border-[#3b79b5] bg-white">
              <h3 className="bg-[#0f60b2] px-4 py-3 text-lg font-semibold text-white">{row.parameter}</h3>
              <div className="mt-4 space-y-4">
                {columns.map((column) => (
                  <div
                    key={column.key}
                    className={column.key === "banco" ? "mx-4 mb-4 rounded-[1rem] bg-[#a9d6f2] p-4" : "mx-4 mb-4 rounded-[1rem] bg-[#d9edf9] p-4"}
                  >
                    <div className="flex items-center gap-2">
                      {column.positive ? (
                        <CheckCircleBroken className="size-5 shrink-0 text-[#0c3d86]" strokeWidth={1.8} aria-hidden="true" />
                      ) : (
                        <XClose className="size-5 shrink-0 text-[#0f60b2]" strokeWidth={1.8} aria-hidden="true" />
                      )}
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0c3d86]">{column.label}</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#18334b]">{row[column.key]}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
