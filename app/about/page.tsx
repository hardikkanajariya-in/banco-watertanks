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
        className="relative w-full overflow-hidden bg-[#f7fbff] px-4 py-8 sm:px-6 lg:px-10 lg:py-10 2xl:px-14"
      >
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#1aa7de]/10 blur-3xl" />
          <div className="absolute bottom-[-18%] left-[-8%] h-[460px] w-[460px] rounded-full bg-[#0c5aa6]/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0c5aa6]/20 to-transparent" />
        </div>

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

          {/* Main Feature Layout */}
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            {/* Left Visual Card */}
            <div className="relative">
              <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l-[6px] border-t-[6px] border-[#1aa7de] lg:block" />
              <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b-[6px] border-r-[6px] border-[#0c5aa6] lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(12,90,166,0.16)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                  <Image
                    src="/images/product-storage-tank.jpg"
                    alt="BANCO manufacturing facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071f3d]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      Facility View
                    </div>

                    <h3 className="mt-4 max-w-md text-2xl font-black uppercase leading-tight tracking-[0.08em] text-white sm:text-3xl">
                      BANCO Manufacturing Facility
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="rounded-[2rem] border border-[#d8e8f4] bg-white p-6 shadow-[0_24px_70px_rgba(12,90,166,0.08)] sm:p-8 lg:p-10">
              <div className="mb-8 flex items-start gap-4">
                <div className="mt-1 h-12 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#1aa7de] to-[#0c5aa6]" />

                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#1aa7de]">
                    Corporate Strength
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[0.08em] text-[#0c5aa6] sm:text-3xl">
                    Reliable Products Backed By A Strong Group
                  </h3>
                </div>
              </div>

              <div className="text-[15px] font-medium leading-7 text-[#4a4a4a] sm:text-base">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="mt-14 rounded-[2rem] border border-[#d8e8f4] bg-white p-6 shadow-[0_18px_45px_rgba(12,90,166,0.07)] sm:p-8">
            <div className="mb-7">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.28em] text-[#1aa7de]">
                Why It Matters
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-[#0c5aa6] sm:text-3xl">
                Built On Practical Advantages
              </h3>
            </div>

            <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
              {aboutContent.bullets.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1aa7de] shadow-[0_0_0_5px_rgba(26,167,222,0.12)]" />

                  <p className="text-[15px] font-medium leading-7 text-[#4a4a4a]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Statement */}
          <div className="mt-14 overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(12,90,166,0.22)]">
            <div className="relative grid gap-7 p-6 sm:p-8 lg:p-10 grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <Image
                  src="/images/blueprint-white.png"
                  alt="Standard panel design diagram"
                  width={720}
                  height={480}
                  className="h-auto w-[80%] object-contain"
                  priority={false}
                />
              </div>

              <div className="relative">
                <p className="max-w-4xl text-lg font-bold leading-8 sm:text-xl">
                  BANCO combines manufacturing experience, engineering reliability,
                  and regional presence to deliver dependable water storage solutions.
                </p>

                <div className="inline-flex w-fit rounded-full border border-blue/75 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.24em]">
                  Reliable Water Storage
                </div>
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

            <h2 className="text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold uppercase leading-[1.08] tracking-[0.12em] text-[#0c5aa6]">
              Operations Organized As A National Manufacturing Network
            </h2>

            <div className="mt-3 h-[3px] w-full max-w-[900px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

            <p className="mt-5 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
              Our operations are strategically placed across Tanzania to ensure rapid
              distribution and exceptional project coordination across the region.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            {/* Left Statement Panel */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0c5aa6] p-7 text-white shadow-[0_24px_60px_rgba(12,90,166,0.22)] sm:p-8 lg:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#1aa7de]/30 blur-2xl" />

              <div className="relative">
                <div className="mb-7 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#c7f4ff]">
                    Network Strength
                  </p>
                </div>

                <h3 className="max-w-md text-3xl font-black uppercase leading-[1.05] tracking-[0.07em] text-white sm:text-4xl lg:text-[2.6rem]">
                  Reliable Production
                  <span className="block text-[#78d7ff]">Regional Reach</span>
                </h3>

                <div className="my-7 h-[3px] w-full bg-gradient-to-r from-white via-[#78d7ff] to-transparent" />

                <p className="text-[15px] font-medium leading-8 text-white/85 sm:text-base">
                  BANCO&apos;s manufacturing network supports consistent quality, faster
                  coordination, and dependable supply for water storage projects across
                  residential, commercial, industrial, and infrastructure requirements.
                </p>
              </div>
            </div>

            {/* Right Footprint Timeline */}
            <div className="relative rounded-[2rem] border border-[#d8e8f4] bg-white p-5 shadow-[0_24px_60px_rgba(12,90,166,0.08)] sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute bottom-0 left-8 top-8 hidden w-px bg-gradient-to-b from-[#1aa7de] via-[#d8e8f4] to-transparent sm:block" />

              {primaryFootprint ? (
                <article className="relative mb-5 overflow-hidden rounded-[1.5rem] border border-[#bfe2f5] bg-[#f6fbff] p-6 sm:ml-8">
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[#1aa7de]/10" />

                  <div className="relative grid gap-5 lg:grid-cols-[12rem_1fr] lg:items-start">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1aa7de]">
                        Primary Hub
                      </p>

                      <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[0.06em] text-[#0c5aa6]">
                        {primaryFootprint.title}
                      </h3>
                    </div>

                    <p className="text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
                      {primaryFootprint.description}
                    </p>
                  </div>
                </article>
              ) : null}

              <div className="space-y-4 sm:ml-8">
                {supportingFootprint.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[1.35rem] border border-[#d8e8f4] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#1aa7de]/40 hover:shadow-[0_18px_42px_rgba(12,90,166,0.1)] sm:p-6"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-[#1aa7de]/8 transition duration-300 group-hover:scale-125" />

                    <div className="relative grid gap-4">
                      <div>
                      </div>

                      <div>
                        <h3 className="text-lg font-black uppercase italic tracking-wide text-[#0c5aa6]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[15px] font-medium leading-7 text-[#4a4a4a]">
                          {item.description}
                        </p>
                      </div>
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
