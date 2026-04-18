import Image from "next/image";
import Link from "next/link";

import { companyName, contactDetails, footerLinks } from "@/data/site";

export function SiteFooter() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <footer className="border-t border-[var(--border)] bg-[#102129] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Image src="/brand/banco-mark.svg" alt={`${companyName} logo`} width={44} height={44} className="h-11 w-11 rounded-full bg-white/10 p-1" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fc4d0]">BANCO</p>
              <p className="text-sm text-white/70">FRP panel type water tank website</p>
            </div>
          </div>
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
                <Link href={item.href} className="transition hover:text-white">
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
              <Link href={phoneHref} className="transition hover:text-white">
                {contactDetails.phone}
              </Link>
            </p>
            <p>
              <Link href={emailHref} className="transition hover:text-white">
                {contactDetails.email}
              </Link>
            </p>
            <p>{contactDetails.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
