import Image from "next/image";
import { LayersThree01 } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";

const designCallouts = [
  "1000 x 1000 mm modular panel system",
  "Bolted assembly with sealing gaskets",
  "Interior bracing in galvanized steel or SS304/316",
  "Integrated ladder, overflow, and drain accessories"
];

export function DesignVisual() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div>
        <Image
          src="/images/product-storage-tank.jpg"
          alt="Storage tank reference photograph"
          width={920}
          height={620}
          className="aspect-[4/3] h-auto w-full rounded-[1rem] object-cover sm:rounded-[1.25rem]"
        />
      </div>
      <div className="space-y-4">
        <Badge>Standard Panel Design</Badge>
        <h3 className="text-xl font-semibold text-[#0c2d52] sm:text-2xl">
          Modular FRP panels support clean water storage, easy assembly, and flexible configuration.
        </h3>
        <div className="space-y-4 border-l-2 border-[#d7e4f2] pl-5">
          {designCallouts.map((item) => (
            <div key={item} className="text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-3">
                <LayersThree01 className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
