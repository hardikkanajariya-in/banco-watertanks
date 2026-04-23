import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { StatsStrip } from "@/components/stats-strip";
import { Badge } from "@/components/ui/badge";
import {
  aboutContent,
  brandStats,
  ctaContent,
  pageMetadata
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
        eyebrow="About Us"
        title={aboutContent.title}
        description={aboutContent.intro}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section id="group-overview" className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5 rounded-[2rem] border border-[#d7e4f2] bg-white p-6 shadow-sm sm:p-8">
            <Badge>Group Overview</Badge>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-[2rem] border border-[#d7e4f2] bg-[#f8fbff] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5f9d]">Four Key Points</p>
            <div className="mt-6 space-y-4">
              {aboutContent.bullets.map((item) => (
                <div key={item} className="rounded-[1.35rem] bg-white p-5 shadow-sm">
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsStrip items={brandStats} />

      <section id="manufacturing-footprint" className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="Manufacturing Footprint"
          title="Built on a nationwide manufacturing footprint."
          description="The brochure highlights BANCO's production presence across Tanzania and the customer reach that supports the water tank business."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {aboutContent.footprint.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#d7e4f2] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f5f9d]">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
