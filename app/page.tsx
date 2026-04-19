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
    { value: "Clean Water", label: "Designed to help maintain hygienic water storage" },
    { value: "Modular Build", label: "Panel-based construction supports transport and installation" },
    { value: "Complete Drainage", label: "Convex bottom panel design helps prevent stagnant water" }
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.18),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef6f5_45%,_#f8fafc_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(90deg,rgba(15,23,42,0.03),transparent,rgba(15,23,42,0.02))]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-white/90 text-teal-800 ring-teal-200 backdrop-blur">Proudly Made in Tanzania</Badge>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur">
                  <MarkerPin01 className="size-4 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                  {contactDetails.address}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">{homeHero.eyebrow}</p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-slate-950 sm:text-5xl lg:text-6xl">
                  {homeHero.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {homeHero.description}
                </p>
              </div>
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
                  className="rounded-[1.5rem] border border-white/80 bg-white/70 p-4 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur"
                >
                  <p className="text-sm font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.3)] backdrop-blur sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Building05 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-600">
                  Suitable for homes, accommodation complexes, hospitals, hotels, offices, and industrial utility projects.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <LayersThree01 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-600">
                  Available with modular panels, bracing, ladders, flanges, level indicators, overflow, and drain nozzles.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute inset-x-6 top-6 -bottom-6 rounded-[2rem] bg-slate-950/8 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.45)] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/hero-industrial.jpg"
                  alt="BANCO FRP panel type water tank hero illustration"
                  width={960}
                  height={780}
                  className="aspect-[4/4.2] h-full w-full object-cover sm:aspect-[4/3.7] lg:aspect-[4/4.4]"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.12)_100%)]" />
              </div>

              <div className="pointer-events-none absolute inset-x-6 top-6 flex justify-between gap-4">
                <div className="max-w-[14rem] rounded-2xl border border-white/20 bg-slate-950/75 p-4 text-white shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">Featured System</p>
                  <p className="mt-2 text-base font-semibold leading-6">{productName}</p>
                </div>
                <div className="hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-right shadow-lg backdrop-blur sm:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Use Cases</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">Housing, utilities, industry</p>
                </div>
              </div>

              <div className="relative -mt-10 px-2 pb-2 sm:px-4 sm:pb-4">
                <div className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="gray">Why teams choose BANCO</Badge>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-teal-700">
                      <Certificate01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
                      Safe and hygienic storage focus
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {heroHighlights.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                          <CheckCircleBroken className="size-4" strokeWidth={1.8} aria-hidden="true" />
                        </div>
                        <p className="text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip items={trustItems} />

      <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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

      <section id="product-overview" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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

      <section id="benefits" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Benefits"
          title="Key benefits of BANCO FRP panel type water tanks."
          description="The approved product content emphasizes hygiene, water quality, flexibility, portability, and durable long-term performance."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <DesignVisual />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Important technical highlights for product evaluation."
          description="A quick summary of the panel system, anti-algae performance, drainage design, and assembly details."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section id="applications" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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

      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
