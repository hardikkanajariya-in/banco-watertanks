import Link from "next/link";
import { Mail01, Menu01, Phone } from "@untitledui/icons";

import { SiteLogo } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { contactDetails, navigation } from "@/data/site";

export function SiteHeader() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#d7e4f2] bg-white/92 backdrop-blur-xl">
      <div className="w-full border-b border-slate-200/70 bg-[#f7fbff] px-4 py-3 text-xs text-slate-600 sm:px-6 lg:px-10 2xl:px-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium tracking-[0.08em] text-[#0c2d52]">
            FRP panel type water storage solutions by Neomech (T) Ltd.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={phoneHref} className="inline-flex items-center gap-2 transition hover:text-[#104a84]">
              <Phone className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center gap-2 transition hover:text-[#104a84]">
              <Mail01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10 2xl:px-14">
        <SiteLogo />

        <nav
          aria-label="Primary"
          className="hidden flex-wrap items-center justify-center gap-1 rounded-full border border-[#d7e4f2] bg-[#f8fbff] px-2 py-1.5 text-sm font-medium text-slate-600 shadow-sm lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-[#e8f1fb] hover:text-[#104a84]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="accent">
            Contact Us
          </Button>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#c3d7ef] bg-white px-4 text-sm font-semibold text-[#0c2d52] shadow-sm transition hover:border-[#1f5f9d] hover:text-[#104a84]">
            <Menu01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
            <span className="ml-2">Menu</span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 w-[min(22rem,calc(100vw-2rem))] rounded-3xl border border-[#d7e4f2] bg-white p-3 shadow-xl">
            <nav aria-label="Mobile primary" className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#eef5ff] hover:text-[#104a84]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 border-t border-slate-200 pt-3">
              <Button href="/contact" variant="accent" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
