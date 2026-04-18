import {
  Building05,
  Certificate01,
  CheckCircleBroken,
  LayersThree01
} from "@untitledui/icons";

import { Card } from "@/components/ui/card";

type StatItem = {
  value: string;
  label: string;
};

type StatsStripProps = {
  items: StatItem[];
};

export function StatsStrip({ items }: StatsStripProps) {
  const icons = [LayersThree01, CheckCircleBroken, Certificate01, Building05];

  return (
    <section className="container-shell py-8">
      <div className="surface-panel grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Card key={item.value} className="rounded-[1.35rem] border-[var(--color-border-secondary)] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--brand)]">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-[var(--brand)]">{item.value}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.label}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
