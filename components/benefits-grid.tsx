import {
  Building05,
  Certificate01,
  CheckCircleBroken,
  LayersThree01,
  Settings01,
  Tool01,
} from "@untitledui/icons";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsGridProps = {
  items: Benefit[];
};

export function BenefitsGrid({ items }: BenefitsGridProps) {
  const icons = [
    CheckCircleBroken,
    LayersThree01,
    Certificate01,
    Settings01,
    Tool01,
    Building05,
  ];

  return (
    <div className="grid gap-x-8 gap-y-0 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article
            key={item.title}
            className="border-t border-[#d9e5f1] py-6 first:border-t md:py-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf3fb] text-[#104a84]">
              <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 className="mt-5 max-w-[16ch] text-xl font-semibold tracking-tight text-[#0c2d52]">
              {item.title}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-slate-600">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}