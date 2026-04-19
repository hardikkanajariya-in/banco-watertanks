import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building05,
  Certificate01,
  CheckCircleBroken,
  LayersThree01,
  MarkerPin01
} from "@untitledui/icons";

import { ApplicationGrid } from "@/components/application-grid";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { StatsStrip } from "@/components/stats-strip";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  aboutSnapshot,
  applications,
  benefits,
  contactDetails,
  ctaContent,
  homeHero,
  pageMetadata,
  productName,
  productOverview,
  technicalHighlights,
  trustItems
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const heroHighlights = [
    "Light transmission below 0.005% helps prevent algae growth",
    "Smooth molded panel surfaces help reduce bacterial growth",
    "Modular construction supports flexible sizing, assembly, and relocation"
  ];

  const heroMetrics = [
    { value: "0.005%", label: "Light transmission for anti-algae performance" },
    { value: "1000 x 1000", label: "Standard modular panel size in mm" },
    { value: "100%", label: "Drainage-focused bottom panel design" }
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.18),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef6f5_45%,_#f8fafc_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(90deg,rgba(15,23,42,0.03),transparent,rgba(15,23,42,0.02))]" />
        <div className="pointer-events-none absolute left-[18%] top-16 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[12%] top-28 h-80 w-80 rounded-full bg-cyan-200/25 blur-3xl" />

        <div className="relative grid min-h-[calc(100svh-var(--site-header-offset))] w-full gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-4 2xl:px-14">
          <div className="flex flex-col justify-center lg:col-span-5 lg:max-w-[46rem]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur">
                  <MarkerPin01 className="size-4 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                  {contactDetails.address}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-teal-700 sm:text-sm">{homeHero.eyebrow}</p>
                <h1 className="max-w-[21ch] text-[clamp(1rem,6.8vw,3.25rem)] font-semibold leading-[0.9] text-slate-950">
                  {homeHero.title}
                </h1>
                <p className="max-w-[34rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {homeHero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href={homeHero.primaryCta.href} className="w-full bg-slate-950 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.8)] hover:bg-slate-800 sm:w-auto">
                  {homeHero.primaryCta.label}
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button
                  href={homeHero.secondaryCta.href}
                  variant="secondary"
                  className="w-full border-slate-300/80 bg-white/80 backdrop-blur sm:w-auto"
                >
                  {homeHero.secondaryCta.label}
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroMetrics.map((item) => (
                  <article
                    key={item.value}
                    className="rounded-[1.5rem] border border-white/80 bg-white/72 p-3.5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur"
                  >
                    <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.value}</p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center lg:col-span-7 lg:justify-end">
            <div className="relative w-full max-w-[58rem] rounded-[2.25rem] border border-white/70 bg-white/60 p-3 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-4">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <div className="flex h-full flex-col justify-between rounded-[1.8rem] bg-slate-950 px-5 py-5 text-white sm:px-6 lg:min-h-[calc(100svh-var(--site-header-offset)-7.5rem)]">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                      <Certificate01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
                      Featured System
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-white/45">Product</p>
                      <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">{productName}</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-white/70">
                      Safe storage design with anti-algae performance, hygienic molded panels, and modular flexibility for varied installations.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6">
                    {heroHighlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-3 py-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400/10 text-teal-200">
                          <CheckCircleBroken className="size-4" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <p className="text-sm leading-6 text-white/82">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white">
                  <Image
                    src="/images/hero-industrial.jpg"
                    alt="BANCO FRP panel type water tank hero illustration"
                    width={960}
                    height={780}
                    className="aspect-[4/3.35] h-full w-full object-cover lg:max-h-[calc(100svh-var(--site-header-offset)-7.5rem)]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.16)_100%)]" />

                  <div className="absolute inset-x-4 top-4 flex justify-end">
                    <div className="rounded-[1.5rem] border border-white/60 bg-white/88 px-4 py-3 text-right shadow-xl backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Use Cases</p>
                      <p className="mt-1 text-sm font-semibold text-slate-950">Housing, utilities, industry</p>
                    </div>
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <div className="grid gap-3 rounded-[1.75rem] border border-white/50 bg-white/82 p-3 shadow-xl backdrop-blur sm:grid-cols-2">
                      <div className="flex items-start gap-3 rounded-[1.25rem] bg-slate-50/80 px-3 py-3">
                        <Building05 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                        <p className="text-sm leading-6 text-slate-700">
                          Suitable for homes, hospitals, hotels, offices, and industrial utility projects.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 rounded-[1.25rem] bg-slate-50/80 px-3 py-3">
                        <LayersThree01 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                        <p className="text-sm leading-6 text-slate-700">
                          Available with bracing, ladders, flanges, level indicators, overflow, and drain nozzles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip items={trustItems} />

      <section id="about" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SplitSection
          imageSrc="/images/company-aerial.jpg"
          imageAlt="Company overview illustration"
          eyebrow="About BANCO"
          title={aboutSnapshot.title}
          text={aboutSnapshot.text}
          points={aboutSnapshot.points}
          cta={{ label: "Learn More About BANCO", href: "/about" }}
        />
      </section>

      <section id="product-overview" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SplitSection
          imageSrc="/images/product-storage-tank.jpg"
          imageAlt="FRP panel type water tank overview illustration"
          eyebrow="Product Overview"
          title={productOverview.title}
          text={productOverview.text}
          cta={{ label: "Explore the Product", href: "/frp-panel-type-water-tank" }}
          reverse
        />
      </section>

      <section id="benefits" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Benefits"
          title="Key benefits of BANCO FRP panel type water tanks."
          description="The approved product content emphasizes hygiene, water quality, flexibility, portability, and durable long-term performance."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <DesignVisual />
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Important technical highlights for product evaluation."
          description="A quick summary of the panel system, anti-algae performance, drainage design, and assembly details."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section id="applications" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Applications"
          title="Used across industrial, institutional, hospitality, infrastructure, and housing applications."
          description="The final product sheet covers a broad application range from factories and housing to safari parks and transport hubs."
        />
        <div className="mt-8">
          <ApplicationGrid items={applications} compact />
        </div>
      </section>

      <CtaBanner {...ctaContent} />

      <section id="contact" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Contact"
          title="Contact Neomech (T) Ltd. for BANCO FRP panel type water tank inquiries."
          description="Reach the team in Dar es Salaam by phone, email, or inquiry form."
        />
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
