type TechnicalHighlightsProps = {
  items: string[];
};

export function TechnicalHighlights({ items }: TechnicalHighlightsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="rounded-[1.5rem] border border-[var(--border)] bg-white px-5 py-4">
          <p className="text-sm leading-7 text-[var(--foreground)]">{item}</p>
        </div>
      ))}
    </div>
  );
}
