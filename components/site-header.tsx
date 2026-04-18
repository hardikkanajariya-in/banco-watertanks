import Image from "next/image";
import Link from "next/link";

import { companyName, contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/banco-mark.svg"
            alt={`${companyName} logo`}
            width={42}
            height={42}
            className="h-10 w-10"
            priority
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">BANCO</p>
            <p className="text-sm text-[var(--muted)]">Water Tank Solutions</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[var(--muted)]">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={phoneHref}
          className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
        >
          Call {contactDetails.phone}
        </Link>
      </div>
    </header>
  );
}
