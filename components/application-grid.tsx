import {
  Bell01,
  Building05,
  Home01,
  LayersThree01,
  Tool01,
  User01
} from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {visibleItems.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <Card key={item.title} className="rounded-[1.75rem] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-50)] text-[var(--brand)]">
              <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <Badge tone="gray" className="mt-5">
              Application
            </Badge>
            <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
          </Card>
        );
      })}
    </div>
  );
}
