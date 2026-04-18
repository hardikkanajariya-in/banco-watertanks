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
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl space-y-6">
          <Badge>{eyebrow}</Badge>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 pt-2">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button> : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
