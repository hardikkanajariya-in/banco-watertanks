import {
  Bell01,
  Building05,
  Home01,
  LayersThree01,
  Tool01,
  User01
} from "@untitledui/icons";

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
          <article key={item.title} className="border-t border-[#bad9ee] pt-5">
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf5fc] text-[#0f60b2]">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f60b2]">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[#0c3d86]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
