import Link from "next/link";
import { MessageChatCircle, Phone } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { companyName, contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <div className="border-b border-slate-200 bg-teal-50/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-[11px] text-slate-600 sm:px-6 sm:text-xs lg:px-8">
          <Badge className="hidden sm:inline-flex">Proudly made in Tanzania</Badge>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href={phoneHref} className="inline-flex items-center gap-2 break-all hover:text-teal-700">
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
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">BANCO</p>
              <p className="truncate text-sm text-slate-600">{companyName}</p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm lg:flex"
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
            <Button href="/contact">Contact Us</Button>
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
                <Button href="/contact" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
