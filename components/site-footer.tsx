import Link from "next/link";
import { Building05, Mail01, Phone } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { contactDetails, footerLinks } from "@/data/site";

const groups: { title: string; key: keyof typeof footerLinks }[] = [
  { title: "Company", key: "company" },
  { title: "Product", key: "product" },
  { title: "Resources", key: "resources" }
];

export function SiteFooter() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <footer className="border-t border-slate-200 bg-[#071f30] text-white">
      <div className="grid w-full gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr_1.1fr] lg:px-10 2xl:px-14">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="font-heading inline-flex h-11 items-center rounded-full border border-white/15 bg-white/8 px-4 text-sm font-semibold tracking-[0.24em] text-[#7fd7cf]">
              BANCO
            </span>
            <p className="text-sm text-white/70">Designed for safety. Built to last.</p>
          </div>
          <Badge className="bg-white/8 text-[#d8edf2] ring-0">Proudly made in Tanzania</Badge>
          <p className="max-w-xl text-sm leading-7 text-white/70">
            BANCO Water Tank by Neomech (T) Ltd. supplies modular FRP panel type water tanks for safe, clean, and
            durable water storage across residential, commercial, industrial, and public-use projects.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.key}>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#7fd7cf]">
              {group.title}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {footerLinks[group.key].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-1 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#7fd7cf]">Contact</h2>
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
      <div className="border-t border-white/10">
        <div className="flex w-full flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-10 2xl:px-14">
          <p>© {new Date().getFullYear()} Neomech (T) Ltd. All rights reserved.</p>
          <p>A Quality Product by Neomech (T) Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
