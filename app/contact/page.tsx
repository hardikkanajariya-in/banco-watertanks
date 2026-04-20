import type { Metadata } from "next";

import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import {
  branches,
  businessHoursPlaceholder,
  ctaContent,
  pageMetadata,
  plants,
  socialLinksPlaceholder
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your water storage project."
        description="Speak with the BANCO team at Neomech (T) Ltd. for quotes, custom specifications, and project support across Tanzania."
        primaryCta={{ label: "Request a Quote", href: "#contact-form" }}
      />

      <section id="contact-form" className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <ContactBlock />
      </section>

      {/* Plants */}
      <section id="plants" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Manufacturing Plants"
          title="Three state-of-the-art plants."
          description="Core manufacturing operations are located in Dar es Salaam, Mwanza, and Mbeya."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {plants.map((p) => (
            <article
              key={p.city}
              className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm"
            >
              <Badge tone="gray">Plant</Badge>
              <h3 className="mt-4 font-heading text-xl font-semibold text-[#0b3954]">{p.city}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Branch Network"
          title="10 branches across Tanzania."
          description="Customer-facing branch locations — detailed addresses pending client confirmation."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {branches.map((b) => (
            <article
              key={b.city}
              className="rounded-[1rem] border border-dashed border-slate-300 bg-white p-4 shadow-sm"
            >
              <p className="font-heading text-sm font-semibold text-[#0b3954]">{b.city}</p>
              <p className="mt-1 text-xs text-slate-500">{b.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Hours + Social */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm sm:p-8">
            <Badge tone="accent">Pending client content</Badge>
            <h3 className="mt-3 font-heading text-xl font-semibold text-[#0b3954]">Business Hours</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {businessHoursPlaceholder.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-medium text-[#0b3954]">{h.day}</span>
                  <span className="text-slate-600">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm sm:p-8">
            <Badge tone="accent">Pending client content</Badge>
            <h3 className="mt-3 font-heading text-xl font-semibold text-[#0b3954]">Follow BANCO</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Social media handles — pending client confirmation.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socialLinksPlaceholder.map((s) => (
                <li
                  key={s.name}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section id="map" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Find Us"
          title="Plant and branch map."
          description="Interactive map — pending client confirmation of addresses and embedded provider."
        />
        <div className="mt-8 flex aspect-[16/7] w-full items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
          Map placeholder — pending client addresses
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
