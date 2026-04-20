import Link from "next/link";
import { MessageChatCircle, Phone } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companyName, contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <div className="bg-[#071f30] text-white">
        <div className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-[11px] text-white/80 sm:px-6 sm:text-xs lg:px-10 2xl:px-14">
          <Badge className="hidden bg-white/10 text-[#d8edf2] ring-0 sm:inline-flex">Proudly made in Tanzania</Badge>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href={phoneHref} className="inline-flex items-center gap-2 break-all hover:text-white">
              <Phone className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="hidden items-center gap-2 hover:text-white sm:inline-flex">
              <MessageChatCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10 2xl:px-14">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b3954] text-white shadow-sm">
              <span className="font-heading text-xs font-bold tracking-[0.12em]">BN</span>
            </div>
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#0b3954]">BANCO</p>
              <p className="truncate text-xs text-slate-600">{companyName}</p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden flex-wrap items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm font-medium text-slate-600 shadow-sm lg:flex"
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

          <div className="hidden lg:block">
            <Button href="/contact" variant="accent">Request a Quote</Button>
          </div>

          <details className="group relative lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-teal-300 hover:text-teal-700">
              Menu
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
              <nav aria-label="Mobile primary" className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 border-t border-slate-200 pt-3">
                <Button href="/contact" variant="accent" className="w-full">
                  Request a Quote
                </Button>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
