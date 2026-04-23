import Link from "next/link";
import { Building05, Mail01, Phone } from "@untitledui/icons";

import { SiteLogo } from "@/components/site-logo";
import { contactDetails, footerLinks } from "@/data/site";

const groups: { title: string; key: keyof typeof footerLinks }[] = [
  { title: "Company", key: "company" },
  { title: "Product", key: "product" },
  { title: "Solutions", key: "solutions" }
];

export function SiteFooter() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <footer className="border-t border-[#d7e4f2] bg-[#08213c] text-white">
      <div className="grid w-full gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr_1fr] lg:px-10 2xl:px-14">
        <div className="space-y-5">
          <SiteLogo theme="dark" />
          <p className="max-w-xl text-sm leading-7 text-white/72">
            BANCO Water Tank by Neomech (T) Ltd. supplies modular FRP panel type water tanks for hygienic, durable,
            and flexible water storage across residential, commercial, industrial, and public-use projects.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.key}>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#a9c9ed]">
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
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[#a9c9ed]">Contact</h2>
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
          <p>BANCO Water Tank | FRP panel type water storage systems</p>
        </div>
      </div>
    </footer>
  );
}
