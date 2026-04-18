import Link from "next/link";
import { MessageChatCircle, Phone } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companyName, contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="border-b border-slate-200 bg-teal-50/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs text-slate-600 lg:px-8">
          <Badge className="hidden sm:inline-flex">Industrial water storage solutions</Badge>
          <div className="flex items-center gap-5">
            <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-teal-700">
              <Phone className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="hidden items-center gap-2 hover:text-teal-700 sm:inline-flex">
              <MessageChatCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 items-center rounded-full border border-teal-200 bg-teal-50 px-4 text-sm font-semibold tracking-[0.2em] text-teal-700">
            BANCO
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">BANCO</p>
            <p className="text-sm text-slate-600">{companyName}</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-teal-50 hover:text-teal-700"
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
