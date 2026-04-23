import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Mail01, MarkerPin01, Phone } from "@untitledui/icons";

import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { Button } from "@/components/ui/button";
import {
  aboutContent,
  applicationsContent,
  comparisonContent,
  contactContent,
  contactDetails,
  homeComparisonPreview,
  homeHero,
  homeReasons,
  homeTickerItems,
  homeValueCards,
  pageMetadata
} from "@/data/site";
import { BlobMask } from "@/components/ui/blob-mask";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/"
  }
};

const marqueeItems = [...homeTickerItems, ...homeTickerItems];
const compactApplications = applicationsContent.items.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0d5cae] text-white">
        <Image
          src="/images/hero-industrial.jpg"
          alt="BANCO industrial water storage background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,40,91,0.95)_0%,rgba(8,40,91,0.84)_44%,rgba(13,92,174,0.52)_100%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#ffffff_26%,transparent_27%)] opacity-95" />
        <div className="pointer-events-none absolute left-14 top-0 h-20 w-16 bg-[#29b9ec]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 bg-[radial-gradient(circle_at_bottom_right,#08285b_0%,#08285b_50%,transparent_51%)]" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-24 w-16 bg-[#29b9ec]" />

        <div className="relative px-4 sm:px-6 lg:px-10 2xl:px-14">
          <div className="flex min-h-[calc(100svh-var(--site-header-offset))] items-center py-10 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 w-full items-center">
              <div className="max-w-[38rem]">
                <p className="font-heading text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white/94">
                  BANCO WATER TANK
                </p>
                <p className="mt-4 inline-flex rounded-full bg-white/16 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#dff7ff] backdrop-blur">
                  {homeHero.eyebrow}
                </p>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#9fe9ff]">
                  {homeHero.productLine}
                </p>
                <h1 className="mt-3 max-w-[11ch] text-[clamp(2.35rem,4.8vw,4.25rem)] font-semibold leading-[0.93] text-white">
                  {homeHero.subLine}
                </h1>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/82 sm:text-base sm:leading-8">
                  {homeHero.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={homeHero.primaryCta.href} className="w-full bg-white text-[#0c3d86] hover:bg-[#e3f3fb] sm:w-auto">
                    {homeHero.primaryCta.label}
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                  </Button>
                  <Button href={homeHero.secondaryCta.href} variant="secondary" className="w-full border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/14 hover:text-white sm:w-auto">
                    {homeHero.secondaryCta.label}
                  </Button>
                </div>

                <p className="mt-7 text-sm leading-7 text-white/72">A quality product by Neomech (T) Ltd.</p>
              </div>

              <div className="relative hidden lg:flex items-center justify-center">
                <BlobMask variant={3} className="w-100 h-100">
                  <Image
                    src="/images/product-storage-tank.jpg"
                    alt="BANCO FRP Water Tank Product"
                    width={500}
                    height={600}
                    className="max-w-full h-full drop-shadow-2xl"
                    priority
                  />
                </BlobMask>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#c7def0] bg-white">
        <div className="banco-marquee py-4">
          <div className="banco-marquee-track">
            {marqueeItems.map((item, index) => (
              <div key={`${item.value}-${index}`} className="mx-4 inline-flex items-center gap-4 whitespace-nowrap border-r border-[#d8e8f4] pr-8 last:border-r-0">
                <p className="font-heading text-lg font-semibold text-[#0c3d86]">{item.value}</p>
                <p className="text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <SplitSection
          imageSrc="/images/company-aerial.jpg"
          imageAlt="BANCO group overview"
          eyebrow="About Us"
          title={aboutContent.title}
          text={aboutContent.intro}
          points={aboutContent.bullets}
          cta={{ label: "Explore the Group Overview", href: "/about" }}
        />
      </section>

      <section className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <SectionIntro
              eyebrow="FRP Water Tank"
              title="A clearer product story with stronger visual hierarchy."
              description="The product story is presented with a more premium content structure, cleaner scanning, and a stronger balance between technical clarity and visual presentation."
            />

            <div className="mt-8 grid gap-4">
              {homeValueCards.slice(0, 3).map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-[1.35rem] border border-[#d8e8f4] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(12,61,134,0.20)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf4fb] text-[12px] font-bold text-[#0f60b2]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f60b2]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/frp-water-tank" variant="secondary" className="w-full sm:w-auto">
                View FRP Water Tank Details
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#29b9ec]/10 blur-2xl" />
            <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-[#0c3d86]/8 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#d0e3f2] bg-white p-3 shadow-[0_24px_70px_-40px_rgba(12,61,134,0.28)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/product-storage-tank.jpg"
                  alt="BANCO FRP tank visual"
                  width={960}
                  height={720}
                  className="aspect-[4/3.05] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,61,134,0.28),rgba(12,61,134,0.02),transparent)]" />
              </div>

              <div className="absolute inset-x-6 bottom-6 rounded-[1.35rem] border border-white/70 bg-white/92 p-5 shadow-xl backdrop-blur-xl">
                <div className="grid gap-3 md:grid-cols-2">
                  {homeReasons.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#29b9ec]" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Applications"
              title="Applications shown as a working range, not a wall of cards."
              description={applicationsContent.intro}
            />
            <div className="mt-7">
              <Button href="/applications" variant="secondary">
                View All Applications
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="flex w-max gap-5 py-4 snap-x snap-mandatory">
              {compactApplications.map((item, index) => (
                <article
                  key={item.title}
                  className="w-[17rem] shrink-0 snap-start flex flex-col justify-between rounded-[1.3rem] border border-[#d0e3f2] bg-white p-6 shadow-sm transition-all hover:shadow-[0_8px_30px_rgb(12,61,134,0.08)] hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f3fb] text-[12px] font-bold text-[#0f60b2]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-semibold leading-tight text-[#0c3d86] mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <SectionIntro
              eyebrow="Comparison"
              title="A clearer way to compare Banco water tanks."
              description="A sharper preview of the full comparison, designed for quick scanning on mobile and desktop."
            />

            <div className="mt-8 space-y-4">
              {comparisonContent.callouts.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-[#0c3d86]/18 pl-4 text-sm leading-7 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/comparison" variant="accent">
                Open Full Comparison
              </Button>
              <span className="text-sm text-slate-500">
                Detailed parameters, full wording, and expanded review
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_-24px_rgba(15,23,42,0.22)]">
            <div className="border-b border-slate-200 bg-slate-50/90 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Quick Preview
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                    Banco vs other tanks
                  </h3>
                </div>
                <div className="hidden rounded-full bg-[#0c3d86] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:inline-flex">
                  Banco Highlighted
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-[minmax(10rem,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                <div className="px-5 py-4 sm:px-6">Parameter</div>
                <div className="border-l border-slate-200 bg-[#0c3d86] px-5 py-4 text-white sm:px-6">
                  Banco
                </div>
                <div className="border-l border-slate-200 px-5 py-4 sm:px-6">Others</div>
              </div>

              {homeComparisonPreview.map((item, index) => (
                <div
                  key={item.parameter}
                  className="grid grid-cols-[minmax(10rem,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-slate-200 last:border-b-0"
                >
                  <div
                    className={[
                      "px-5 py-5 text-sm font-semibold text-slate-900 sm:px-6",
                      index % 2 === 0 ? "bg-slate-50/70" : "bg-white",
                    ].join(" ")}
                  >
                    {item.parameter}
                  </div>

                  <div className="border-l border-slate-200 bg-[#0c3d86]/[0.04] px-5 py-5 text-sm leading-7 text-slate-700 sm:px-6">
                    {item.banco}
                  </div>

                  <div className="border-l border-slate-200 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">
                    {item.others}
                  </div>
                </div>
              ))}
            </div>

            <div className="divide-y divide-slate-200 md:hidden">
              {homeComparisonPreview.map((item) => (
                <article key={item.parameter} className="px-5 py-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                    {item.parameter}
                  </h3>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-[#0c3d86]/12 bg-[#0c3d86]/[0.04] p-4">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0c3d86]">
                        Banco
                      </div>
                      <p className="text-sm leading-7 text-slate-700">{item.banco}</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Others
                      </div>
                      <p className="text-sm leading-7 text-slate-600">{item.others}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12 2xl:px-14">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#0c3d86]/18 bg-[#0c5cad] text-white shadow-[0_24px_70px_-30px_rgba(12,61,134,0.55)]">
          <Image
            src="/images/contact-water-tower.jpg"
            alt="BANCO contact section background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />

          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,28,68,0.94)_0%,rgba(12,61,134,0.88)_48%,rgba(11,97,179,0.78)_100%)]" />
          <div className="absolute inset-y-0 left-[46%] hidden w-px bg-white/12 lg:block" />

          <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c7f4ff]">
                Contact
              </p>

              <h2 className="mt-2 max-w-[35ch] text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {contactContent.title}
              </h2>

              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/78">
                {contactContent.description}
              </p>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" className="bg-white text-[#0c3d86] hover:bg-[#eaf6ff]">
                  Contact Us
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>

                <p className="text-xs leading-relaxed text-white/68 max-w-[200px]">
                  Fast support for product queries, orders, and dealership requirements
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8 lg:pl-12">
              <div className="group flex items-start gap-5">
                <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                  <Phone className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Phone</span>
                  <span className="mt-1 block text-[15px] font-medium text-white">{contactDetails.phone}</span>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                  <Mail01 className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Email</span>
                  <span className="mt-1 block text-[15px] font-medium text-white break-all">{contactDetails.email}</span>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                  <MarkerPin01 className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Address</span>
                  <span className="mt-1 block max-w-[280px] text-[15px] font-medium text-white leading-relaxed">{contactDetails.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
