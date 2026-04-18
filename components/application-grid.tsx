type Application = {
  title: string;
  description: string;
};

type ApplicationGridProps = {
  items: Application[];
  compact?: boolean;
};

export function ApplicationGrid({ items, compact = false }: ApplicationGridProps) {
  const visibleItems = compact ? items.slice(0, 6) : items;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {visibleItems.map((item) => (
        <article key={item.title} className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-soft)] text-lg font-semibold text-[var(--brand)]">
            {item.title.charAt(0)}
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
