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

          {/* Bottom Statement */}
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#cfe5f6] bg-white shadow-[0_24px_60px_rgba(12,90,166,0.16)]">
            <div className="relative grid items-center gap-8 bg-[radial-gradient(circle_at_18%_20%,rgba(41,185,236,0.12),transparent_34%),linear-gradient(135deg,#ffffff_0%,#eef7fd_100%)] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              {/* Blueprint visual */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#d8eaf7] bg-white">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(12,90,166,0.04),transparent_45%,rgba(41,185,236,0.08))]" />

                <Image
                  src="/images/blueprint-white.png"
                  alt="Standard panel design diagram"
                  width={720}
                  height={480}
                  className="relative h-auto w-full max-w-[520px] object-contain p-4"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="relative">
                <span className="mb-4 inline-flex rounded-full border border-[#29b9ec]/30 bg-[#29b9ec]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0c5aa6]">
                  Engineered Confidence
                </span>

                <h3 className="max-w-2xl font-heading text-2xl font-bold leading-tight text-[#08285b] sm:text-3xl">
                  Built for reliable water storage performance.
                </h3>

                <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[#365f82]">
                  BANCO combines manufacturing experience, engineering reliability, and
                  regional presence to deliver dependable FRP panel type water storage
                  solutions.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    "Modular panel design",
                    "Reliable installation",
                    "Long-term durability"
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#d7eaf7] bg-white/80 px-4 py-4 text-sm font-semibold text-[#0a3158] shadow-[0_12px_30px_rgba(12,90,166,0.08)]"
                    >
                      {item}
                    </div>
                  ))}
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
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            {/* Left Statement Panel */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0c5aa6] px-7 py-10 text-white shadow-[0_24px_60px_rgba(12,90,166,0.22)] sm:px-8 sm:py-12 lg:px-9 lg:py-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#1aa7de]/30 blur-2xl" />

              <div className="relative flex h-full min-h-[260px] flex-col items-center justify-center text-center">
                <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#c7f4ff]">
                    Network Strength
                  </p>
                </div>

                <h3 className="max-w-[14ch] text-3xl font-black uppercase leading-[1.05] tracking-[0.06em] text-white sm:text-4xl lg:text-[2.5rem]">
                  Reliable Production
                  <span className="mt-2 block text-[#78d7ff]">
                    Manufacturing Base
                  </span>
                </h3>

                <div className="mt-6 h-[3px] w-28 bg-gradient-to-r from-white via-[#78d7ff] to-transparent" />
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
                        Primary Manufacturing Site
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

      <CtaBanner {...ctaContent} />
    </>
  );
}
