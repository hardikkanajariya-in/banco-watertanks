import Image from "next/image";
import { LayersThree01 } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { designCallouts } from "@/data/site";

export function DesignVisual() {
  return (
    <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-8">
      <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-100 p-3 sm:rounded-[1.5rem] sm:p-4">
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
        <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">A cleaner product visual block using real photography instead of a synthetic diagram.</h3>
        <div className="space-y-3">
          {designCallouts.map((item) => (
            <div key={item} className="rounded-[1.25rem] border border-slate-200 px-4 py-3 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-3">
                <LayersThree01 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
