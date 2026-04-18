import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50/70 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white/80 px-5 py-6 shadow-sm backdrop-blur sm:px-7 sm:py-8">
          <div className="max-w-4xl space-y-4">
            <Badge>{eyebrow}</Badge>
            <h1 className="max-w-4xl text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">{description}</p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
                {primaryCta ? <Button href={primaryCta.href} className="w-full sm:w-auto">{primaryCta.label}</Button> : null}
                {secondaryCta ? <Button href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">{secondaryCta.label}</Button> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
