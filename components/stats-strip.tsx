import {
  Building05,
  Certificate01,
  CheckCircleBroken,
  LayersThree01
} from "@untitledui/icons";

import { cn } from "@/lib/utils";

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
    <section className="w-full px-4 py-8 sm:px-6 lg:px-10 2xl:px-14">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const dividerClass = cn(
            index > 0 && "border-t border-slate-200",
            index === 1 && "md:border-l md:border-t-0",
            index === 2 && "md:border-t",
            index === 3 && "md:border-l md:border-t",
            index > 0 && "xl:border-l xl:border-t-0"
          );

          return (
            <article
              key={item.value}
              className={cn(
                "grid gap-4 px-5 py-6 sm:px-6 md:grid-cols-[auto_1fr] md:items-start md:gap-5 xl:grid-cols-1",
                dividerClass
              )}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef5ff] text-[#104a84]">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-[#104a84]">{item.value}</p>
              </div>
              <p className="text-sm leading-7 text-slate-600">{item.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
