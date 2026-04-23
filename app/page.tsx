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

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="FRP Water Tank"
              title="A clearer product story without the card clutter."
              description="The brochure content is now presented with one dominant image, shorter copy blocks, and a tighter hierarchy."
            />
            <div className="mt-6 space-y-4">
              {homeValueCards.slice(0, 3).map((item) => (
                <div key={item.title} className="border-b border-[#d8e8f4] pb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f60b2]">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Button href="/frp-water-tank" variant="secondary">
                View FRP Water Tank Details
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#d0e3f2] bg-white p-3 shadow-[0_24px_70px_-46px_rgba(12,61,134,0.45)]">
            <Image
              src="/images/product-storage-tank.jpg"
              alt="BANCO FRP tank visual"
              width={960}
              height={720}
              className="aspect-[4/3.05] w-full rounded-[1.45rem] object-cover"
            />
            <div className="absolute inset-x-7 bottom-7 rounded-[1.4rem] bg-white/94 p-5 shadow-lg backdrop-blur">
              <div className="grid gap-3 md:grid-cols-2">
                {homeReasons.slice(0, 4).map((item) => (
                  <p key={item} className="text-sm leading-6 text-slate-700">
                    {item}
                  </p>
                ))}
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

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Comparison"
              title="A simpler preview of Banco water tank vs others."
              description="The preview now reads like a table excerpt instead of stacked cards, with the full page following the flyer wording."
            />
            <div className="mt-6 space-y-4">
              {comparisonContent.callouts.map((item) => (
                <p key={item} className="border-b border-[#d8e8f4] pb-4 text-sm leading-7 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-7">
              <Button href="/comparison" variant="accent">
                Open Full Comparison
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.6rem] border border-[#d0e3f2] bg-white shadow-sm">
            <div className="grid grid-cols-[8.5rem_1fr_1fr] border-b border-[#d0e3f2] bg-[#f2f8fc] text-sm font-semibold uppercase tracking-[0.08em] text-[#0c3d86]">
              <div className="px-4 py-4">Parameter</div>
              <div className="border-l border-[#d0e3f2] px-4 py-4">Banco</div>
              <div className="border-l border-[#d0e3f2] px-4 py-4">Others</div>
            </div>
            {homeComparisonPreview.map((item) => (
              <div
                key={item.parameter}
                className="grid grid-cols-[8.5rem_1fr_1fr] border-b border-[#d8e8f4] last:border-b-0"
              >
                <div className="bg-[#f7fbfe] px-4 py-4 text-sm font-semibold text-[#0c3d86]">{item.parameter}</div>
                <div className="border-l border-[#d8e8f4] px-4 py-4 text-sm leading-7 text-slate-700">{item.banco}</div>
                <div className="border-l border-[#d8e8f4] px-4 py-4 text-sm leading-7 text-slate-700">{item.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#1e6ab7] bg-[#0c5cad] text-white">
          <Image
            src="/images/contact-water-tower.jpg"
            alt="BANCO contact section background"
            fill
            sizes="100vw"
            className="object-cover opacity-18 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,40,91,0.92)_0%,rgba(13,92,174,0.84)_100%)]" />
          <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c7f4ff]">Contact</p>
              <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-tight sm:text-[2.5rem]">
                {contactContent.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                {contactContent.description}
              </p>
              <div className="mt-7">
                <Button href="/contact" className="bg-white text-[#0c3d86] hover:bg-[#e6f6fd]">
                  Contact Us
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center gap-2 text-[#c7f4ff]">
                  <Phone className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Phone</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/84">{contactDetails.phone}</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center gap-2 text-[#c7f4ff]">
                  <Mail01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Email</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/84">{contactDetails.email}</p>
              </div>
              <div className="border-t border-white/20 pt-4 sm:col-span-3">
                <div className="flex items-center gap-2 text-[#c7f4ff]">
                  <MarkerPin01 className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Address</p>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/84">{contactDetails.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
