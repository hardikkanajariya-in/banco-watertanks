import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { StatsStrip } from "@/components/stats-strip";
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

const overviewFacts = [
  { value: "1965", label: "Established in Tanzania" },
  { value: "3", label: "Manufacturing plants" },
  { value: "10", label: "Branches nationwide" },
  { value: "FRP", label: "Latest water storage innovation" }
];

export default function AboutPage() {
  const [primaryFootprint, ...supportingFootprint] = aboutContent.footprint;

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={aboutContent.title}
        description={aboutContent.intro}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section id="group-overview" className="w-full bg-white px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-2xl">
            <SectionIntro
              eyebrow="Group Overview"
              title="A manufacturing legacy presented with clearer corporate structure."
            />

            <div className="mt-8 space-y-5 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-y border-[#d8e4ed]">
              {aboutContent.bullets.map((item, index) => (
                <div key={item} className="grid gap-3 border-b border-[#d8e4ed] py-4 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f60b2]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden border border-[#d2dfe8] bg-white shadow-[0_24px_60px_-44px_rgba(12,61,134,0.34)]">
              <div className="flex items-center justify-between border-b border-[#d2dfe8] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>Facility View</span>
                <span className="text-[#0c3d86]">BANCO</span>
              </div>
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/images/company-aerial.jpg"
                  alt="BANCO manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 52rem"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-0 border border-[#d2dfe8] bg-[#f4f8fb] sm:grid-cols-2">
              {overviewFacts.map((item, index) => (
                <div
                  key={item.label}
                  className={[
                    "border-b border-[#d2dfe8] px-5 py-5 sm:border-r",
                    index >= 2 ? "sm:border-b-0" : "",
                    index % 2 === 1 ? "sm:border-r-0" : ""
                  ].join(" ")}
                >
                  <p className="text-3xl font-semibold tracking-tight text-[#08285b]">{item.value}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsStrip items={brandStats} />

      <section id="manufacturing-footprint" className="w-full border-y border-[#dbe7f0] bg-[#f4f8fb] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-xl">
            <SectionIntro
              eyebrow="Manufacturing Footprint"
              title="Operations organized as a national manufacturing network."
              description="Our operations are strategically placed across Tanzania to ensure rapid distribution and exceptional project coordination across the region."
            />
          </div>

          <div className="grid gap-4">
            <article className="border border-[#d3dee7] bg-white p-6 shadow-[0_18px_44px_-40px_rgba(12,61,134,0.28)]">
              <div className="grid gap-5 lg:grid-cols-[10rem_1fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f60b2]">Primary Hub</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#08285b]">{primaryFootprint.title}</h3>
                </div>
                <p className="text-[15px] leading-7 text-slate-600">{primaryFootprint.description}</p>
              </div>
            </article>

            <div className="border border-[#d3dee7] bg-white">
              {supportingFootprint.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-3 border-b border-[#d3dee7] px-5 py-5 last:border-b-0 sm:grid-cols-[4rem_1fr]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f60b2]">
                    Node {String(index + 2).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0c3d86]">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
  id="leadership"
  className="relative overflow-hidden bg-gradient-to-br from-[#eef6ff] via-white to-[#f7fbff] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14"
>
  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0f60b2]/10 blur-3xl" />
  <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#08285b]/10 blur-3xl" />

  <div className="relative mx-auto max-w-[1320px]">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-[#0f60b2]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0f60b2] shadow-sm">
        Leadership
      </span>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#08285b] sm:text-4xl lg:text-5xl">
        Executive Team
      </h2>

      <h3 className="mt-3 text-lg font-semibold text-[#0c3d86] sm:text-xl">
        Meet the leaders driving our vision
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
        Our executive team brings decades of manufacturing and industry experience to guide the group&apos;s strategic growth.
      </p>
    </div>

    <div className="mt-14 grid gap-8 sm:grid-cols-2">
      {[1, 2].map((i) => (
        <article
          key={i}
          className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(8,40,91,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(8,40,91,0.18)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#08285b] via-[#0f60b2] to-[#57a6ff]" />

          <div className="grid gap-7 md:grid-cols-[9rem_1fr] md:items-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#0f60b2]/20 blur-xl transition group-hover:bg-[#0f60b2]/30" />
              <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl border border-[#d3dee7] bg-gradient-to-br from-white to-[#eef6ff] text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shadow-inner">
                Image
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0f60b2]">
                Leadership Profile
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#08285b]">
                Jane Doe
              </h3>

              <p className="mt-2 inline-flex rounded-full bg-[#0f60b2]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0c3d86]">
                Managing Director
              </p>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
                Jane brings over 20 years of manufacturing experience, leading the company&apos;s expansion across East Africa.
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
