import Link from "next/link";
import { ChevronRight } from "@untitledui/icons";
import { cn, siteContainer } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
};

export function PageHero({ eyebrow }: PageHeroProps) {
  return (
    <section className="w-full border-b border-[#dcecf7] bg-[#f7fbff] px-4 py-5 sm:px-6 lg:px-10 2xl:px-14">
      <div className={cn("w-full", siteContainer)}>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            href="/"
            className="font-medium text-[#4a5c72] transition hover:text-[#0c5aa6]"
          >
            Home
          </Link>

          <ChevronRight
            className="size-4 shrink-0 text-[#8aa3bd]"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="font-bold text-[#0c5aa6]">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}