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
      <PageHero eyebrow="About BANCO" />

      <StatsStrip items={trustItems} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SplitSection
          imageSrc="/images/company-aerial.jpg"
          imageAlt="BANCO company overview"
          eyebrow="Company Overview"
          title="BANCO Water Tank is committed to dependable water storage solutions and professional project support."
          text="We focus on providing FRP panel type water tank solutions with clear communication, practical guidance, and dependable support for commercial, industrial, institutional, and residential requirements."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Operating Principles"
          title="Our approach is built around quality, reliability, and responsive service."
          description="Every project is supported with a practical, solution-focused approach from initial discussion to final requirement planning."
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
              title="Choose BANCO for dependable quality, clear guidance, and practical project support."
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
              title="Our solutions are suitable for a wide range of sectors and building requirements."
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
          title="We emphasize product quality, practical support, and long-term customer confidence."
          description="From technical discussion to requirement planning, our goal is to make every inquiry clear, efficient, and dependable."
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
