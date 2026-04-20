import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building05,
  Certificate01,
  CheckCircleBroken,
  Droplets01,
  LayersThree01,
  MarkerPin01,
  Shield01,
  Zap
} from "@untitledui/icons";

import { ApplicationGrid } from "@/components/application-grid";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { StatsStrip } from "@/components/stats-strip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  aboutSnapshot,
  applications,
  benefits,
  contactDetails,
  ctaContent,
  homeHero,
  homeSpotlightIcons,
  pageMetadata,
  productName,
  productOverview,
  qualityItems,
  testimonialsPlaceholder,
  trustItems
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/"
  }
};

const spotlightIconMap = [Shield01, Droplets01, LayersThree01, Zap];

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

  const technicalSnapshot = [
    { value: "110 MPa", label: "Tensile strength" },
    { value: "155 MPa", label: "Compressive strength" },
    { value: "140 MPa", label: "Flexural strength" },
    { value: "110 Kgf/m²", label: "Roof load" },
    { value: "<0.1%", label: "Light water absorption" },
    { value: "65 °C", label: "Max water temperature" }
  ];

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 banco-gradient-hero">
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
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.32em] text-brand-aqua sm:text-sm">{homeHero.eyebrow}</p>
                <h1 className="max-w-[36rem] text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1] text-[#0b3954]">
                  {homeHero.title}
                </h1>
                <p className="max-w-[34rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {homeHero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href={homeHero.primaryCta.href} variant="accent" className="w-full sm:w-auto">
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
                    <p className="font-heading text-lg font-semibold tracking-[-0.03em] text-[#0b3954]">{item.value}</p>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center lg:col-span-7 lg:justify-end">
            <div className="relative w-full max-w-[58rem] rounded-[2.25rem] border border-white/70 bg-white/60 p-3 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-4">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <div className="flex h-full flex-col justify-between rounded-[1.8rem] bg-[#071f30] px-5 py-5 text-white sm:px-6 lg:min-h-[calc(100svh-var(--site-header-offset)-7.5rem)]">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                      <Certificate01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
                      Featured System
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-white/45">Product</p>
                      <h2 className="mt-2 font-heading text-3xl font-semibold leading-tight text-white">{productName}</h2>
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

      {/* 2. TRUST STRIP */}
      <StatsStrip items={trustItems} />

      {/* 3. WHO WE ARE */}
      <section id="about" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SplitSection
          imageSrc="/images/company-aerial.jpg"
          imageAlt="Company overview illustration"
          eyebrow="Who We Are"
          title={aboutSnapshot.title}
          text={aboutSnapshot.text}
          points={aboutSnapshot.points}
          cta={{ label: "Learn More About BANCO", href: "/about" }}
        />
      </section>

      {/* 4. PRODUCT SPOTLIGHT */}
      <section id="product-overview" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Product Spotlight"
          title={productOverview.title}
          description={productOverview.text}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeSpotlightIcons.map((item, index) => {
            const Icon = spotlightIconMap[index % spotlightIconMap.length];
            return (
              <article
                key={item.title}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-[#0b3954]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8">
          <Button href="/frp-panel-type-water-tank" variant="secondary">
            Explore the Tank
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* 5. KEY BENEFITS */}
      <section id="benefits" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Key Benefits"
          title="Twelve benefits that define BANCO FRP panel type water tanks."
          description="From hygiene and water quality to portability, strength, and relocation — engineered for dependable long-term service."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      {/* 6. APPLICATIONS PREVIEW */}
      <section id="applications" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Applications"
          title="From factories to safari parks — one tank system, many uses."
          description="BANCO FRP panel type water tanks serve industrial, institutional, hospitality, infrastructure, and housing applications across Tanzania and beyond."
        />
        <div className="mt-8">
          <ApplicationGrid items={applications} compact />
        </div>
        <div className="mt-8">
          <Button href="/applications" variant="secondary">
            See all applications
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* 7. TECHNICAL SNAPSHOT */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Technical Snapshot"
              title="Engineered to rigorous mechanical and operating standards."
              description="A glance at the headline performance data. See the full spec sheet for operating conditions, material properties, and accessory details."
            />
            <div className="mt-6">
              <Button href="/technical-specifications" variant="secondary">
                View full specifications
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {technicalSnapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight text-[#0b3954]">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY BANCO / QUALITY ASSURANCE */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <Badge tone="accent">Why BANCO</Badge>
              <h2 className="font-heading text-2xl font-semibold leading-tight text-[#0b3954] sm:text-3xl md:text-4xl">
                A Quality Product by Neomech (T) Ltd.
              </h2>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Our FRP water tanks conserve water to the highest quality standards, serving the needs of private
                residences, accommodation complexes, hospitals, hotels, offices, industrial, municipal, and irrigation
                projects — every unit supplied to the same standard of design and specification, in the size and shape
                best suited to every customer.
              </p>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {qualityItems.map((item) => (
                <div key={item} className="flex items-start gap-3 py-4 text-sm leading-7 text-slate-700">
                  <CheckCircleBroken className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (PLACEHOLDER) */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Testimonials"
          title="Trusted by project teams across Tanzania."
          description="Placeholder quotes — final client testimonials pending confirmation."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonialsPlaceholder.map((t, i) => (
            <figure
              key={i}
              className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm"
            >
              <Badge tone="gray">Pending client confirmation</Badge>
              <blockquote className="mt-4 text-sm leading-7 text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-slate-500">{t.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 10. CTA BANNER */}
      <CtaBanner {...ctaContent} />

      {/* Contact preview */}
      <section id="contact-preview" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Contact"
          title="Talk to our team about your water storage project."
          description="Reach Neomech (T) Ltd. in Dar es Salaam by phone, email, or the inquiry form."
        />
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
