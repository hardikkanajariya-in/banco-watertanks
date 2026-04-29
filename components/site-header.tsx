"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail01, Menu01, Phone } from "@untitledui/icons";

import { SiteLogo } from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { contactDetails, navigation } from "@/data/site";
import { cn, siteContainer } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const primaryNavigation = navigation.filter(
    (item) => item.label !== "Contact Us",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#cfe0ef]/80 bg-white/90 shadow-[0_10px_35px_rgba(8,40,91,0.06)] backdrop-blur-2xl">
      {/* Top contact strip */}
      <div className="hidden border-b border-[#d9e8f5] bg-[linear-gradient(90deg,#f6fbff_0%,#eef7ff_50%,#f8fcff_100%)] text-xs text-slate-600 sm:block py-2.5">
        <div className={cn("flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 2xl:px-14", siteContainer)}>
          <p className="max-w-[54rem] truncate font-semibold uppercase tracking-[0.16em] text-[#0b386e]">
            FRP panel type water storage solutions by Neomech (T) Ltd.
          </p>

          <div className="flex shrink-0 items-center gap-5">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-2 py-1 font-medium text-slate-700 transition hover:bg-white hover:text-[#0f60b2]"
            >
              <Phone
                className="size-3.5"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              {contactDetails.phone}
            </a>

            <span className="h-4 w-px bg-[#c6d9ec]" aria-hidden="true" />

            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-flex items-center gap-2 rounded-full px-2 py-1 font-medium text-slate-700 transition hover:bg-white hover:text-[#0f60b2]"
            >
              <Mail01
                className="size-3.5"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={cn("flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-10 lg:py-4 2xl:px-14", siteContainer)}>
        <div className="flex min-w-0 items-center">
          <SiteLogo />
        </div>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center rounded-full border border-[#cfe0ef]/90 bg-white/80 p-1.5 text-sm font-semibold text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_34px_rgba(8,40,91,0.08)] backdrop-blur-xl lg:flex"
        >
          {primaryNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative isolate overflow-hidden rounded-full px-4 py-2.5 transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29b9ec]/40",
                  isActive
                    ? "bg-[#0c5aa6] text-white shadow-[0_10px_24px_rgba(12,90,166,0.24)]"
                    : "text-slate-600 hover:bg-[#eaf5fc] hover:text-[#0c3d86] hover:shadow-[inset_0_0_0_1px_rgba(41,185,236,0.25)]",
                ].join(" ")}
              >
                {!isActive && (
                  <span className="pointer-events-none absolute inset-x-4 bottom-1.5 h-px origin-center scale-x-0 bg-[#29b9ec] transition-transform duration-300 group-hover:scale-x-100" />
                )}

                {isActive && (
                  <>
                    <span className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0c5aa6,#083f82)]" />
                    <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(41,185,236,0.42),transparent_45%)]" />
                    <span className="pointer-events-none absolute inset-x-4 bottom-1 h-1 rounded-full bg-[#29b9ec] shadow-[0_0_14px_rgba(41,185,236,0.75)]" />
                  </>
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="/contact"
            variant="accent"
            className="shadow-[0_12px_24px_rgba(10,86,164,0.22)]"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile menu */}
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#bfd6ec] bg-white px-4 text-sm font-bold text-[#0c2d52] shadow-[0_8px_22px_rgba(8,40,91,0.08)] transition hover:border-[#0f60b2] hover:bg-[#f6fbff] hover:text-[#0f60b2] marker:hidden">
            <Menu01 className="size-4" strokeWidth={2} aria-hidden="true" />
            <span className="ml-2">Menu</span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(23rem,calc(100vw-2rem))] overflow-hidden rounded-[1.75rem] border border-[#cfe0ef] bg-white shadow-[0_24px_70px_rgba(8,40,91,0.18)]">
            <div className="border-b border-[#e1edf7] bg-[linear-gradient(135deg,#f6fbff,#eaf5fc)] px-5 py-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f60b2]">
                Banco Water Tank
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0c2d52]">
                FRP panel water storage solutions
              </p>
            </div>

            <nav aria-label="Mobile primary" className="grid gap-1 p-3">
              {primaryNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      isActive
                        ? "bg-[#0c5aa6] text-white shadow-[0_10px_24px_rgba(12,90,166,0.2)]"
                        : "text-slate-700 hover:bg-[#eef7ff] hover:text-[#0c3d86]",
                    ].join(" ")}
                  >
                    {isActive && (
                      <span className="pointer-events-none absolute inset-y-3 left-2 w-1 rounded-full bg-[#29b9ec]" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="grid gap-2 border-t border-[#e1edf7] bg-[#f8fbff] p-3">
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