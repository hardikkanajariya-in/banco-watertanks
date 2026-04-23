import {
  Bell01,
  Building05,
  Home01,
  LayersThree01,
  Tool01,
  User01,
  Globe01,
  LifeBuoy01
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
  // Expanded icons array to cover all potential applications
  const icons = [Building05, Tool01, Home01, User01, Bell01, LayersThree01, Globe01, LifeBuoy01, Building05];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {visibleItems.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article
            key={item.title}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[#eaf2f8] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d0e3f2] hover:shadow-[0_20px_40px_-15px_rgba(12,61,134,0.12)]"
          >
            {/* Top accent line that expands on hover */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0c3d86] to-[#29b9ec] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-[#f4f9fd] text-[#0c3d86] ring-1 ring-[#eaf2f8] transition-colors duration-300 group-hover:bg-[#0c3d86] group-hover:text-white group-hover:ring-[#0c3d86]/20">
                <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="text-[14px] font-bold text-[#bad9ee] transition-colors duration-300 group-hover:text-[#29b9ec]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-bold leading-tight text-[#0c3d86] transition-colors duration-300 group-hover:text-[#0f60b2]">
              {item.title}
            </h3>

            <p className="mt-auto text-[15px] leading-relaxed text-slate-600">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
