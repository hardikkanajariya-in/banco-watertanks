import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { StatsStrip } from "@/components/stats-strip";
import { BlobMask } from "@/components/ui/blob-mask";
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

      <section id="group-overview" className="w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(41,185,236,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20 items-center max-w-[1440px] mx-auto">
          <div className="space-y-8">
            <SectionIntro
              eyebrow="Group Overview"
              title="A legacy built on disciplined manufacturing."
            />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-8 mt-8 border-t border-[#e8f1f8]">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0c3d86] mb-6">Four Key Pillars</p>
              <div className="grid gap-4 sm:grid-cols-2 text-sm leading-6 text-slate-700">
                {aboutContent.bullets.map((item, i) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f2fa] text-[#0f60b2] font-bold text-[11px]">
                      {i + 1}
                    </div>
                    <p className="pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:px-8">
            <div className="absolute inset-0 bg-[#f4f9fd] rounded-[3rem] -z-10 translate-x-5 translate-y-5 -rotate-2"></div>
            <BlobMask variant={2} className="w-full h-auto aspect-square md:aspect-[4/3] lg:aspect-square shadow-xl">
              <Image 
                src="/images/company-aerial.jpg" 
                alt="BANCO Manufacturing Facility" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </BlobMask>

            <div className="absolute -bottom-8 -left-4 sm:bottom-10 sm:-left-12 rounded-[1.5rem] bg-white p-6 shadow-[0_16px_40px_-10px_rgba(12,61,134,0.15)] border border-[#eef4f9] max-w-[220px]">
              <p className="text-4xl font-bold text-[#0c3d86] mb-1">1965</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Founded in Tanzania</p>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip items={brandStats} />

      <section id="manufacturing-footprint" className="w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-[#f9fcff] border-y border-[#eaf2f8]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionIntro
            eyebrow="Manufacturing Footprint"
            title="Nationwide production presence."
            description="Our operations are strategically placed across Tanzania to ensure rapid distribution and exceptional project coordination across the region."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {aboutContent.footprint.map((item, i) => (
            <article key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-[#d7e4f2] bg-white p-8 sm:p-10 shadow-sm transition-all hover:shadow-[0_24px_60px_-15px_rgba(12,61,134,0.15)] hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0c3d86] to-[#29b9ec] opacity-0 transition-opacity group-hover:opacity-100"></div>
              
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[#f2f8fc] text-xl font-bold text-[#0f60b2] transition-colors group-hover:bg-[#0f60b2] group-hover:text-white">
                0{i + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#0c3d86] mb-4">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
