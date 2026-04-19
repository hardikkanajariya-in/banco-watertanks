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

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SplitSection
          imageSrc="/images/company-aerial.jpg"
          imageAlt="BANCO company overview"
          eyebrow="Company Overview"
          title="BANCO combines a long manufacturing history in Tanzania with FRP water tank innovation."
          text="Established in 1965, BANCO pioneered the foam mattress industry in Tanzania, expanded into plastics manufacturing, and now offers FRP panel type water tanks as its latest innovation through Neomech (T) Ltd."
        />
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Operating Principles"
          title="The product story is built around safety, durability, quality, and reliability."
          description="The final source content emphasizes dependable water storage, efficient design, and local manufacturing strength."
        />
        <div className="mt-8 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          {companyPrinciples.map((item) => (
            <div key={item} className="border-t border-slate-200 pt-5 text-sm leading-7 text-slate-900">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-t border-slate-200 pt-6">
            <SectionIntro
              eyebrow="Why Choose BANCO"
              title="Choose BANCO for proven manufacturing roots and safe water storage design."
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
              title="The approved content covers a wide range of sectors and operating environments."
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

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Quality and Support"
          title="Quality is reinforced through the panel system, surface finish, light resistance, and drainage design."
          description="These features support hygienic performance, leakage resistance, and reduced maintenance over the long term."
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
