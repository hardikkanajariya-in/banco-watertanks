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
    <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50/80 to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl space-y-6">
          <Badge>{eyebrow}</Badge>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-6xl">{title}</h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              {primaryCta ? <Button href={primaryCta.href} className="w-full sm:w-auto">{primaryCta.label}</Button> : null}
              {secondaryCta ? <Button href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">{secondaryCta.label}</Button> : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
