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
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Card key={item.value} className="rounded-[1.35rem] border-slate-200 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-teal-700">{item.value}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.label}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
