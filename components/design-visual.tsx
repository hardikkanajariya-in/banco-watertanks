import Image from "next/image";
import { LayersThree01 } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { designCallouts } from "@/data/site";

export function DesignVisual() {
  return (
    <div className="surface-panel grid gap-8 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <div className="soft-grid overflow-hidden rounded-[1.5rem] border border-[var(--surface-alt)] bg-[var(--surface-alt)] p-4">
        <Image
          src="/illustrations/panel-diagram.svg"
          alt="Standard panel design illustration"
          width={920}
          height={620}
          className="h-auto w-full rounded-[1.25rem]"
        />
      </div>
      <div className="space-y-4">
        <Badge>Standard Panel Design</Badge>
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">A clean visual block to support technical credibility.</h3>
        <div className="space-y-3">
          {designCallouts.map((item) => (
            <div key={item} className="rounded-[1.25rem] border border-[var(--surface-alt)] px-4 py-3 text-sm leading-7 text-[var(--muted)]">
              <div className="flex items-start gap-3">
                <LayersThree01 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
