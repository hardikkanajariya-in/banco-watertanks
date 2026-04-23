import Link from "next/link";
import { ChevronRight } from "@untitledui/icons";

import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 banco-gradient-hero">
      <div className="w-full px-4 py-4 sm:px-6 lg:px-10 2xl:px-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-[#104a84]">
            Home
          </Link>
          <ChevronRight className="size-4 shrink-0 text-slate-400" strokeWidth={1.8} aria-hidden="true" />
          <span className="font-medium text-slate-900">{eyebrow}</span>
        </nav>
      </div>
      {title ? (
        <div className="w-full px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14 2xl:px-14">
          <div className="max-w-3xl space-y-4">
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0f60b2] sm:text-xs">
              {eyebrow}
            </p>
            <h1 className="text-[clamp(1.8rem,4.6vw,3.15rem)] font-semibold leading-[1.02] text-[#0c3d86]">
              {title}
            </h1>
            {description ? (
              <p className="max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                {primaryCta ? (
                  <Button href={primaryCta.href} variant="accent" className="w-full sm:w-auto">
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
