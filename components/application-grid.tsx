import {
  Bell01,
  Building05,
  Home01,
  LayersThree01,
  Tool01,
  User01,
  Globe01,
  LifeBuoy01,
} from "@untitledui/icons";

type Application = {
  title: string;
  description: string;
};

type ApplicationGridProps = {
  items: Application[];
  compact?: boolean;
};

const icons = [
  Building05,
  Tool01,
  Home01,
  User01,
  Bell01,
  LayersThree01,
  Globe01,
  LifeBuoy01,
  Building05,
];

export function ApplicationGrid({
  items,
  compact = false,
}: ApplicationGridProps) {
  const visibleItems = compact ? items.slice(0, 6) : items;

  return (
    <div className="grid gap-x-14 gap-y-7 sm:grid-cols-2">
      {visibleItems.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article
            key={item.title}
            className="grid grid-cols-[58px_1fr] gap-5 border-b border-[#d8e8f4] pb-7"
          >
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#1aa7de] bg-[#1aa7de] shadow-[inset_0_0_0_4px_white,0_8px_18px_rgba(12,90,166,0.18)]">
              <Icon
                className="size-7 text-white"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <div>
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-[15px] font-extrabold uppercase italic tracking-wide text-[#0c5aa6]">
                  {item.title}
                </h3>

                <span className="shrink-0 text-[12px] font-extrabold tracking-[0.16em] text-[#b7d8ef]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-[15px] font-extrabold leading-6 text-[#10a8e8]">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}