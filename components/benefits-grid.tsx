import {
  Building05,
  Certificate01,
  CheckCircleBroken,
  LayersThree01,
  Settings01,
  Tool01
} from "@untitledui/icons";

import { Card } from "@/components/ui/card";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsGridProps = {
  items: Benefit[];
};

export function BenefitsGrid({ items }: BenefitsGridProps) {
  const icons = [CheckCircleBroken, LayersThree01, Certificate01, Settings01, Tool01, Building05];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <Card key={item.title} className="rounded-[1.75rem] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </Card>
        );
      })}
    </div>
  );
}
