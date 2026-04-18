import {
  Bell01,
  Building05,
  Home01,
  LayersThree01,
  Tool01,
  User01
} from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";

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
  const icons = [Home01, Building05, Tool01, User01, Bell01, LayersThree01, Building05, Tool01];

  return (
    <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
      {visibleItems.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article key={item.title} className="border-b border-slate-200 pb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <Badge tone="gray">Application</Badge>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
