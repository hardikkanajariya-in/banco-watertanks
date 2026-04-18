import { CheckCircleBroken } from "@untitledui/icons";

import { Card } from "@/components/ui/card";

type TechnicalHighlightsProps = {
  items: string[];
};

export function TechnicalHighlights({ items }: TechnicalHighlightsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item} className="rounded-[1.5rem] px-5 py-4">
          <div className="flex items-start gap-3">
            <CheckCircleBroken className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
            <p className="text-sm leading-7 text-slate-900">{item}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
