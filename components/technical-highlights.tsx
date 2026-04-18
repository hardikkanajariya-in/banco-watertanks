import { CheckCircleBroken } from "@untitledui/icons";

type TechnicalHighlightsProps = {
  items: string[];
};

export function TechnicalHighlights({ items }: TechnicalHighlightsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="border-b border-slate-200 pb-4">
          <div className="flex items-start gap-3">
            <CheckCircleBroken className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
            <p className="text-sm leading-7 text-slate-900">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
