import Link from "next/link";

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
    <section className="border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(15,76,92,0.08),rgba(191,107,44,0.08))]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 pt-2">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
