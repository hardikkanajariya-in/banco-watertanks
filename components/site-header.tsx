import Image from "next/image";
import Link from "next/link";
import { MessageChatCircle, Phone } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companyName, contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
      <div className="border-b border-[var(--color-border-secondary)] bg-[var(--color-brand-25)]">
        <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-3 text-xs text-[var(--muted)]">
          <Badge className="hidden sm:inline-flex">Industrial water storage solutions</Badge>
          <div className="flex items-center gap-5">
            <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-[var(--brand)]">
              <Phone className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="hidden items-center gap-2 hover:text-[var(--brand)] sm:inline-flex">
              <MessageChatCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>
      <div className="container-shell flex flex-wrap items-center justify-between gap-6 py-4">
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
            <p className="text-sm text-[var(--muted)]">{companyName}</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--color-border-secondary)] bg-white px-3 py-2 text-sm font-medium text-[var(--muted)] shadow-[var(--shadow-xs)]"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-[var(--color-brand-50)] hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact">Request a Quote</Button>
      </div>
    </header>
  );
}
