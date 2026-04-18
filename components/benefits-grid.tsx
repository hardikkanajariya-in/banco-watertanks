type Benefit = {
  title: string;
  description: string;
};

type BenefitsGridProps = {
  items: Benefit[];
};

export function BenefitsGrid({ items }: BenefitsGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article key={item.title} className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-semibold text-[var(--brand)]">
            0{index + 1}
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
