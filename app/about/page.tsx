import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { StatsStrip } from "@/components/stats-strip";
import { cn, siteContainer } from "@/lib/utils";
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
      />

      <section
  id="group-overview"
  className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14"
>
  {/* Brochure-style soft water background */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-95" />
  <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />

  <div className={cn("relative", siteContainer)}>
    {/* Section Heading */}
    <div className="mb-10">
      <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
        Group Overview
      </p>

      <h2 className="max-w-4xl text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold uppercase leading-[1.08] tracking-[0.12em] text-[#0c5aa6]">
        A Manufacturing Legacy With Strong Corporate Structure
      </h2>

      <div className="mt-3 h-[3px] w-full max-w-[900px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
    </div>

    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      {/* Left Text Content */}
      <div>
        <div className="space-y-7 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bullet Rows */}
        <div className="mt-10 border-y border-[#d8e8f4]">
          {aboutContent.bullets.map((item, index) => (
            <div
              key={item}
              className="grid gap-3 border-b border-[#d8e8f4] py-5 last:border-b-0 sm:grid-cols-[4rem_1fr]"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c5aa6]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="text-[15px] font-medium leading-7 text-[#4a4a4a]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual + Facts */}
      <div className="lg:pt-2">
        <div className="border border-[#d8e8f4] bg-white shadow-[0_20px_45px_rgba(12,90,166,0.08)]">
          <div className="flex items-center justify-between border-b border-[#d8e8f4] px-5 py-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Facility View
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c5aa6]">
              BANCO
            </span>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src="/images/company-aerial.jpg"
              alt="BANCO manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Facts Grid */}
        <div className="mt-5 grid border border-[#d8e8f4] bg-[#f6fbff] sm:grid-cols-2">
          {overviewFacts.map((item, index) => (
            <div
              key={item.label}
              className={[
                "border-b border-[#d8e8f4] px-5 py-5 sm:border-r",
                index >= 2 ? "sm:border-b-0" : "",
                index % 2 === 1 ? "sm:border-r-0" : "",
              ].join(" ")}
            >
              <p className="text-3xl font-extrabold tracking-tight text-[#0c5aa6]">
                {item.value}
              </p>

              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4a4a4a]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Blue brochure note */}
        <div className="mt-5 bg-[#0c5aa6] px-5 py-4 text-white">
          <p className="text-[14px] font-medium leading-7">
            BANCO combines manufacturing experience, engineering reliability,
            and regional presence to deliver dependable water storage solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <StatsStrip items={brandStats} />

     <section
  id="manufacturing-footprint"
  className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14"
>
  {/* Brochure-style soft water background */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-95" />
  <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />

  <div className={cn("relative", siteContainer)}>
    {/* Heading */}
    <div className="mb-10">
      <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
        Manufacturing Footprint
      </p>

      <h2 className="max-w-4xl text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold uppercase leading-[1.08] tracking-[0.12em] text-[#0c5aa6]">
        Operations Organized As A National Manufacturing Network
      </h2>

      <div className="mt-3 h-[3px] w-full max-w-[900px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

      <p className="mt-5 max-w-3xl text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
        Our operations are strategically placed across Tanzania to ensure rapid
        distribution and exceptional project coordination across the region.
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      {/* Left blue information block */}
      <div className="bg-[#0c5aa6] px-6 py-7 text-white sm:px-8 sm:py-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c7f4ff]">
          Network Strength
        </p>

        <h3 className="mt-4 max-w-md text-2xl font-extrabold uppercase leading-tight tracking-[0.08em] text-white sm:text-3xl">
          Reliable Production And Regional Reach
        </h3>

        <div className="mt-4 h-[3px] w-full max-w-[360px] bg-gradient-to-r from-white via-[#78d7ff] to-transparent" />

        <p className="mt-5 text-[15px] font-medium leading-8 text-white/85">
          BANCO’s manufacturing network supports consistent quality, faster
          coordination, and dependable supply for water storage projects across
          residential, commercial, industrial, and infrastructure requirements.
        </p>
      </div>

      {/* Right footprint content */}
      <div>
        {primaryFootprint ? (
          <article className="mb-5 border border-[#d8e8f4] bg-[#f6fbff] p-6">
            <div className="grid gap-5 lg:grid-cols-[13rem_1fr] lg:items-start">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c5aa6]">
                  Primary Hub
                </p>

                <h3 className="mt-3 text-2xl font-extrabold uppercase leading-tight tracking-wide text-[#0c5aa6]">
                  {primaryFootprint.title}
                </h3>
              </div>

              <p className="text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
                {primaryFootprint.description}
              </p>
            </div>
          </article>
        ) : null}

        <div className="border-y border-[#d8e8f4]">
          {supportingFootprint.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 border-b border-[#d8e8f4] py-5 last:border-b-0 sm:grid-cols-[6rem_1fr]"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c5aa6]">
                Node {String(index + 2).padStart(2, "0")}
              </p>

              <div>
                <h3 className="text-lg font-extrabold uppercase italic tracking-wide text-[#0c5aa6]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] font-medium leading-7 text-[#4a4a4a]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
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

  <div className={cn("relative", siteContainer)}>
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
