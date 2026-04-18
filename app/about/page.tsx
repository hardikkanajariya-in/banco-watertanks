import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { StatsStrip } from "@/components/stats-strip";
import {
  companyPrinciples,
  ctaContent,
  industries,
  pageMetadata,
  qualityItems,
  trustItems,
  whyChooseItems
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
        title="A focused company page that answers why this supplier and why this product category."
        description="This page is structured to build business-level trust through company positioning, practical principles, industry fit, and technical-sales credibility."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Product Page", href: "/frp-panel-type-water-tank" }}
      />

      <StatsStrip items={trustItems} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SplitSection
          imageSrc="/images/company-aerial.jpg"
          imageAlt="BANCO company overview"
          eyebrow="Company Overview"
          title="BANCO is framed as a dependable partner for product-led water storage inquiries."
          text="The About page avoids generic corporate filler and instead emphasizes product clarity, buyer confidence, and the ability to expand later with verified company details such as history, milestones, certifications, or project references."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Operating Principles"
          title="Short, credible messages work better here than oversized corporate claims."
          description="These cards can be kept as-is for launch or replaced later with verified brand language from the client."
        />
        <div className="mt-8 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          {companyPrinciples.map((item) => (
            <div key={item} className="border-t border-slate-200 pt-5 text-sm leading-7 text-slate-900">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-t border-slate-200 pt-6">
            <SectionIntro
              eyebrow="Why Choose BANCO"
              title="The page should make supplier selection feel organized, not vague."
            />
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {whyChooseItems.map((item) => (
                <div key={item} className="py-4 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6">
            <SectionIntro
              eyebrow="Industries Served"
              title="Sector breadth helps support trust, even before project references are added."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {industries.map((item) => (
                <span key={item} className="border-b border-slate-200 pb-3 text-sm text-slate-900">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Quality and Support"
          title="Reserved space for verified technical credibility, supply detail, and support statements."
          description="This section is intentionally practical so brochure-derived or client-approved details can be swapped in later without redesigning the page."
        />
        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {qualityItems.map((item) => (
            <div key={item} className="border-b border-slate-200 pb-5 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
