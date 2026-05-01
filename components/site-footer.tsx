import Link from "next/link";
import { Building05, Mail01, Phone } from "@untitledui/icons";

import { SiteLogo } from "@/components/site-logo";
import { contactDetails, footerLinks } from "@/data/site";
import { cn, siteContainer } from "@/lib/utils";

const groups: { title: string; key: keyof typeof footerLinks }[] = [
  { title: "Company", key: "company" },
  { title: "Product", key: "product" },
  { title: "Solutions", key: "solutions" }
];

export function SiteFooter() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <footer className="relative overflow-hidden border-t border-[#1c76ad]/60 bg-[#061f3a] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-4 h-64 w-64 rounded-full bg-[#0c5aa6]/28 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#29b9ec]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(41,185,236,0.05)_0%,transparent_42%,rgba(12,90,166,0.14)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#29b9ec]/80 to-transparent" />
      </div>

      {/* Main footer */}
      <div
        className={cn(
          "relative grid gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.9fr_0.8fr_1.25fr] lg:gap-10 lg:px-10 lg:py-10 2xl:px-14",
          siteContainer
        )}
      >
        {/* Logo only */}
        <div className="flex flex-col items-start">
          <div className="rounded-sm bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
            <SiteLogo theme="dark" />
          </div>

          <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#29b9ec] to-transparent" />
        </div>

        {/* Link groups */}
        {groups.map((group) => (
          <nav key={group.key} aria-label={group.title}>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-[#9fd3ff]">
              {group.title}
            </h2>

            <ul className="mt-5 space-y-2.5 text-sm text-white/76">
              {footerLinks[group.key].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 py-0.5 transition duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#29b9ec] transition-all duration-300 group-hover:w-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact card */}
        <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.16)] backdrop-blur-sm">
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-[#9fd3ff]">
            Contact
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-6 text-white/76">
            <a
              href={phoneHref}
              className="group flex items-start gap-3 transition hover:text-white"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#29b9ec]/35 bg-[#29b9ec]/10 text-[#8ddfff] transition group-hover:border-[#29b9ec]/75 group-hover:bg-[#29b9ec]/18">
                <Phone className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="pt-1">{contactDetails.phone}</span>
            </a>

            <a
              href={emailHref}
              className="group flex items-start gap-3 transition hover:text-white"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#29b9ec]/35 bg-[#29b9ec]/10 text-[#8ddfff] transition group-hover:border-[#29b9ec]/75 group-hover:bg-[#29b9ec]/18">
                <Mail01 className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="break-all pt-1">{contactDetails.email}</span>
            </a>

            <div className="flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#29b9ec]/35 bg-[#29b9ec]/10 text-[#8ddfff]">
                <Building05 className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="pt-1">{contactDetails.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-[#04182d]/70">
        <div
          className={cn(
            "flex flex-col items-start justify-between gap-3 px-4 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-10 2xl:px-14",
            siteContainer
          )}
        >
          <p>© {new Date().getFullYear()} Neomech (T) Ltd. All rights reserved.</p>

          <p>
            Designed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#29b9ec] transition hover:text-white hover:underline"
            >
              Nifty Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}