import Link from "next/link";
import { ChevronRight } from "@untitledui/icons";

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

export function PageHero({ eyebrow }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-teal-700">
            Home
          </Link>
          <ChevronRight className="size-4 shrink-0 text-slate-400" strokeWidth={1.8} aria-hidden="true" />
          <span className="font-medium text-slate-900">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}
