import Link from "next/link";
import { Building05, Mail01, Phone } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { companyName, contactDetails, footerLinks } from "@/data/site";

export function SiteFooter() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <footer className="border-t border-slate-200 bg-[#0f1d26] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/8 px-4 text-sm font-semibold tracking-[0.24em] text-[#8fc4d0]">
              BANCO
            </span>
            <p className="text-sm text-white/70">FRP panel type water tank website</p>
          </div>
          <Badge className="bg-white/8 text-[#d8edf2] ring-0">Static Next.js marketing site</Badge>
          <p className="max-w-xl text-sm leading-7 text-white/70">
            BANCO Water Tank is presented as a clean, trust-focused product website for modular FRP panel type
            water tank solutions with a clear path from discovery to inquiry.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc4d0]">Pages</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-1 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fc4d0]">Contact</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/80">
            <p>
              <a href={phoneHref} className="inline-flex min-h-11 items-start gap-2 break-all py-1 transition hover:text-white sm:items-center">
                <Phone className="size-4" strokeWidth={1.8} aria-hidden="true" />
                {contactDetails.phone}
              </a>
            </p>
            <p>
              <a href={emailHref} className="inline-flex min-h-11 items-start gap-2 break-all py-1 transition hover:text-white sm:items-center">
                <Mail01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
                {contactDetails.email}
              </a>
            </p>
            <p className="inline-flex items-start gap-2 break-words">
              <Building05 className="mt-1 size-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
              <span>{contactDetails.address}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
