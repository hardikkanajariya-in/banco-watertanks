type StatItem = {
  value: string;
  label: string;
};

type StatsStripProps = {
  items: StatItem[];
};

export function StatsStrip({ items }: StatsStripProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-4 rounded-[1.75rem] border border-[var(--border)] bg-white p-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.value} className="rounded-[1.35rem] border border-[var(--surface-alt)] bg-[var(--surface)] p-5">
            <p className="text-2xl font-semibold text-[var(--brand)]">{item.value}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
