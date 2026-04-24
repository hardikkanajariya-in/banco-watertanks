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

      <section className="relative overflow-hidden bg-[#f7fbff]">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0c3d86]/10 to-transparent" />

        <div className="relative mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-[#0c3d86]/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0c3d86] shadow-sm">
                Applications
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#0c3d86] sm:text-4xl">
                Built for varied water storage environments.
              </h2>

              <p className="mt-4 text-[15px] leading-8 text-slate-600">
                {applicationsContent.intro}
              </p>
            </div>

            <Button
              href="/applications"
              variant="secondary"
              className="w-fit rounded-full border border-[#0c3d86]/10 bg-white px-6 py-3 text-[#0c3d86] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0c3d86] hover:text-white hover:shadow-lg"
            >
              View All Applications
            </Button>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-4 md:overflow-visible">
            {compactApplications.slice(0, 8).map((item, index) => (
              <article
                key={item.title}
                className="group relative min-w-[18.5rem] snap-start overflow-hidden rounded-[1.6rem] border border-white bg-white p-6 shadow-[0_16px_50px_rgba(12,61,134,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(12,61,134,0.14)] md:min-w-0"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0c3d86] via-sky-400 to-cyan-300" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-50 transition duration-300 group-hover:scale-125" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0c3d86] text-sm font-bold text-white shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-16 bg-gradient-to-r from-[#0c3d86]/30 to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-[#0c3d86]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0c3d86]">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                    Water storage solution
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-clients" className="w-full border-y border-[#dbe7f0] bg-[#f4f8fb] px-4 py-14 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <SectionIntro
              eyebrow="Our Clients"
              title="Trusted by industry and infrastructure stakeholders."
              description="We partner with organizations across Tanzania to deliver reliable water storage solutions. This section features placeholders for client logos to be added later."
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="flex min-h-32 items-center justify-center border border-[#d3dee7] bg-white px-4 text-center"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Logo {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12 2xl:px-14">
        <div className="relative isolate overflow-hidden border border-[#143b6b] bg-[#08285b] text-white shadow-[0_24px_70px_-42px_rgba(12,61,134,0.55)]">
          <Image
            src="/images/contact-water-tower.jpg"
            alt="BANCO contact section background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-18"
          />

          <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c7f4ff]">
                Contact
              </p>

              <h2 className="mt-2 max-w-[35ch] text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {contactContent.title}
              </h2>

              <p className="mt-3 max-w-lg text-[15px] leading-7 text-white/78">
                {contactContent.description}
              </p>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" className="bg-white text-[#0c3d86] hover:bg-[#eaf6ff]">
                  Contact Us
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>

                <p className="max-w-[220px] text-xs leading-relaxed text-white/68">
                  Fast support for product queries, orders, and dealership requirements
                </p>
              </div>
            </div>

            <div className="grid gap-0 border border-white/10 bg-white/6 lg:grid-cols-3">
              <div className="border-b border-white/10 px-5 py-5 lg:border-b-0 lg:border-r">
                <Phone className="size-5 text-[#9fe9ff]" strokeWidth={1.7} aria-hidden="true" />
                <span className="mt-4 block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Phone</span>
                <span className="mt-2 block text-[15px] font-medium text-white">{contactDetails.phone}</span>
              </div>

              <div className="border-b border-white/10 px-5 py-5 lg:border-b-0 lg:border-r">
                <Mail01 className="size-5 text-[#9fe9ff]" strokeWidth={1.7} aria-hidden="true" />
                <span className="mt-4 block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Email</span>
                <span className="mt-2 block break-all text-[15px] font-medium text-white">{contactDetails.email}</span>
              </div>

              <div className="px-5 py-5">
                <MarkerPin01 className="size-5 text-[#9fe9ff]" strokeWidth={1.7} aria-hidden="true" />
                <span className="mt-4 block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Address</span>
                <span className="mt-2 block text-[15px] font-medium leading-relaxed text-white">{contactDetails.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
