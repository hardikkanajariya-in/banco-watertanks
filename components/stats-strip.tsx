import {
  Building05,
  Certificate01,
  MarkerPin01,
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
  const icons = [Certificate01, Building05, MarkerPin01, LayersThree01];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#08285b] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(41,185,236,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 bg-[radial-gradient(circle_at_top_left,#15324d_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:px-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 sm:divide-x divide-white/10">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={item.value}
                className={cn(
                  "flex flex-col items-center text-center px-4 relative",
                  index > 0 && "pt-10 sm:pt-0 border-t border-white/10 sm:border-t-0"
                )}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-[#29b9ec] ring-1 ring-white/20 shadow-[0_0_30px_rgba(41,185,236,0.15)]">
                  <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h4 className="text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white mb-4">
                  {item.value}
                </h4>
                <p className="text-[15px] leading-relaxed text-[#bad9ee] max-w-[260px]">
                  {item.label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
