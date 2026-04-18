import Image from "next/image";

import { designCallouts } from "@/data/site";

export function DesignVisual() {
  return (
    <div className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-white p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <div className="overflow-hidden rounded-[1.5rem] border border-[var(--surface-alt)] bg-[var(--surface-alt)] p-4">
        <Image
          src="/illustrations/panel-diagram.svg"
          alt="Standard panel design illustration"
          width={920}
          height={620}
          className="h-auto w-full rounded-[1.25rem]"
        />
      </div>
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Standard Panel Design</p>
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">A clean visual block to support technical credibility.</h3>
        <div className="space-y-3">
          {designCallouts.map((item) => (
            <div key={item} className="rounded-[1.25rem] border border-[var(--surface-alt)] px-4 py-3 text-sm leading-7 text-[var(--muted)]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
