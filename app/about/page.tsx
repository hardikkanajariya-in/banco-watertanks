import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { StatsStrip } from "@/components/stats-strip";
import { Badge } from "@/components/ui/badge";
import {
  certificationsPlaceholder,
  ctaContent,
  leadershipPlaceholder,
  milestones,
  pageMetadata,
  plants,
  portfolio,
  trustItems
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BANCO"
        title="60 years of trusted Tanzanian manufacturing."
        description="Established in 1965, BANCO pioneered the foam mattress industry in Tanzania, expanded into plastics manufacturing, and now offers FRP panel type water tanks — the latest BANCO innovation by Neomech (T) Ltd."
        primaryCta={{ label: "Talk to our team", href: "/contact" }}
      />

      {/* Our Story */}
      <section id="heritage" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/company-aerial.jpg"
            alt="BANCO manufacturing heritage"
            width={920}
            height={700}
            className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
          />
          <div className="space-y-5">
            <Badge>Our Story</Badge>
            <h2 className="font-heading text-2xl font-semibold leading-tight text-[#0b3954] sm:text-3xl md:text-4xl">
              From foam mattresses in 1965 to FRP water tanks today.
            </h2>
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              BANCO pioneered the foam mattress industry in Tanzania, quickly becoming a trusted name in comfortable
              sleep solutions. With three state-of-the-art manufacturing plants in Dar es Salaam, Mwanza, and Mbeya,
              and a network of 10 branches across the country, the company has expanded its portfolio into plastics
              and now FRP water tanks — the latest innovation from Neomech (T) Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones / Our Journey */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Our Journey"
          title="Six decades of Tanzanian manufacturing."
          description="A high-level timeline. Detailed year-wise milestones pending client confirmation."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {milestones.map((m) => (
            <li key={m.year} className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-heading text-3xl font-semibold text-brand-aqua">{m.year}</p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-[#0b3954]">{m.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{m.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <StatsStrip items={trustItems} />

      {/* Manufacturing Footprint */}
      <section id="plants" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Manufacturing Footprint"
          title="Three plants. Ten branches. Nationwide reach."
          description="BANCO manufactures in Dar es Salaam, Mwanza, and Mbeya, with customer-facing branches across Tanzania."
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

      {/* Product Portfolio */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Product Portfolio"
          title="Three product families, one trusted brand."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {portfolio.map((p) => (
            <article key={p.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-[#0b3954]">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{p.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values (PLACEHOLDER) */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm sm:p-10">
          <Badge tone="accent">Pending client content</Badge>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-[#0b3954] sm:text-3xl">
            Mission, vision, and values
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Final mission, vision, and values statements pending client confirmation. This section will highlight
            BANCO's commitment to safety, quality, reliability, and Tanzanian manufacturing excellence.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Certifications & Standards"
          title="Quality backed by recognized standards."
          description="Placeholder block — client to confirm applicable certifications and test reports."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {certificationsPlaceholder.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-[1.25rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500"
            >
              <div>
                <p className="font-semibold text-slate-700">{c.name}</p>
                <p className="mt-1">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Leadership"
          title="The team behind BANCO."
          description="Leadership bios and photos — pending client confirmation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {leadershipPlaceholder.map((l, i) => (
            <article
              key={i}
              className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm"
            >
              <div className="h-24 w-24 rounded-full bg-slate-100" aria-hidden="true" />
              <p className="mt-4 font-heading text-lg font-semibold text-[#0b3954]">{l.name}</p>
              <p className="mt-1 text-sm text-slate-600">{l.role}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
