import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Mail01, MarkerPin01, Phone } from "@untitledui/icons";

import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import {
  aboutContent,
  applicationsContent,
  contactContent,
  contactDetails,
  homeHero,
  homeTickerItems,
  homeValueCards,
  pageMetadata
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/"
  }
};

const marqueeItems = [...homeTickerItems, ...homeTickerItems];
const compactApplications = applicationsContent.items.slice(0, 8);

function WaterBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-95" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-[radial-gradient(circle_at_25%_50%,rgba(12,90,166,0.07),transparent_18%),radial-gradient(circle_at_58%_58%,rgba(12,90,166,0.05),transparent_16%),radial-gradient(circle_at_78%_70%,rgba(12,90,166,0.04),transparent_20%)]" />
    </>
  );
}

function BrochureHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold uppercase tracking-[0.12em] text-[#0c5aa6]">
        {title}
      </h2>

      <div className="mt-2 h-[3px] w-full bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

      {description ? (
        <p className="mt-5 max-w-3xl text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero - Brochure Style */}
      <section className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        {/* Brochure corner accents */}
        <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-[#0c5aa6] [clip-path:polygon(0_0,100%_0,0_100%)]" />
        <div className="pointer-events-none absolute left-24 top-0 h-16 w-16 bg-[#29b9ec] [clip-path:polygon(0_0,100%_0,0_100%)]" />

        <WaterBackground />

        <div className="relative mx-auto grid max-w-6xl gap-12 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.3em] text-[#0c5aa6]">
              BANCO Water Tank
            </p>

            <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#10a8e8]">
              {homeHero.eyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold uppercase leading-[1.04] tracking-[0.08em] text-[#0c5aa6]">
              {homeHero.subLine}
            </h1>

            <div className="mt-3 h-[3px] w-full max-w-[820px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

            <p className="mt-6 text-[0.8rem] font-extrabold uppercase tracking-[0.24em] text-[#0c5aa6]">
              {homeHero.productLine}
            </p>

            <p className="mt-5 max-w-2xl text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
              {homeHero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={homeHero.primaryCta.href}
                className="w-full rounded-none bg-[#0c5aa6] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white hover:bg-[#08457f] sm:w-auto"
              >
                {homeHero.primaryCta.label}
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>

              <Button
                href={homeHero.secondaryCta.href}
                variant="secondary"
                className="w-full rounded-none border border-[#0c5aa6] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0c5aa6] hover:bg-[#f1f8fd] sm:w-auto"
              >
                {homeHero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-8 text-sm font-medium leading-7 text-[#4a4a4a]">
              A quality product by Neomech (T) Ltd.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[#eaf5fb] opacity-70 blur-3xl" />

            <div className="relative mx-auto max-w-[440px]">
              <Image
                src="/images/product-storage-tank.jpg"
                alt="BANCO FRP Water Tank Product"
                width={560}
                height={620}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_24px_45px_rgba(12,90,166,0.18)]"
              />
            </div>

            <div className="relative mx-auto mt-6 max-w-[440px] bg-[#0c5aa6] px-5 py-4 text-white">
              <p className="text-[13px] font-medium leading-7">
                Designed for hygienic, durable, and long-term water storage
                applications across residential, commercial, and industrial
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Stats Strip */}
      <section className="border-y border-[#d8e8f4] bg-white">
        <div className="banco-marquee py-4">
          <div className="banco-marquee-track">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.value}-${index}`}
                className="mx-4 inline-flex items-center gap-4 whitespace-nowrap border-r border-[#d8e8f4] pr-8 last:border-r-0"
              >
                <p className="text-xl font-extrabold text-[#0c5aa6]">
                  {item.value}
                </p>

                <p className="text-sm font-medium leading-6 text-[#4a4a4a]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Product Story */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <BrochureHeading
              eyebrow="Safe Water Storage"
              title="Engineered for reliable water storage"
              description={aboutContent.intro}
            />

            <div className="space-y-6 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
              {aboutContent.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="/about"
                className="rounded-none bg-[#0c5aa6] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white hover:bg-[#08457f]"
              >
                About Banco
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>
            </div>
          </div>

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
        </div>
      </section>

      {/* Value Cards */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className="relative mx-auto max-w-6xl">
          <BrochureHeading
            eyebrow="Product Strength"
            title="Why choose FRP panel tanks"
            description="Key product strengths presented in a clean brochure-style layout for quick understanding."
          />

          <div className="grid gap-0 border-y border-[#d8e8f4] md:grid-cols-3">
            {homeValueCards.slice(0, 6).map((item, index) => (
              <article
                key={item.title}
                className={[
                  "border-b border-[#d8e8f4] px-6 py-6 md:border-r",
                  index >= 3 ? "md:border-b-0" : "",
                  index % 3 === 2 ? "md:border-r-0" : ""
                ].join(" ")}
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c5aa6]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-lg font-extrabold uppercase italic tracking-wide text-[#0c5aa6]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-medium leading-7 text-[#4a4a4a]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Applications"
              title="Built for varied water storage environments"
              description={applicationsContent.intro}
              align="left"
            />

            <Button
              href="/applications"
              variant="secondary"
              className="w-fit rounded-none border border-[#0c5aa6] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0c5aa6] hover:bg-[#f1f8fd]"
            >
              View All Applications
            </Button>
          </div>

          <div className="grid gap-x-14 gap-y-7 sm:grid-cols-2">
            {compactApplications.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-[#d8e8f4] pb-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#1aa7de] bg-[#1aa7de] text-sm font-extrabold text-white shadow-[inset_0_0_0_4px_white]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-[15px] font-extrabold uppercase italic tracking-wide text-[#0c5aa6]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] font-medium leading-7 text-[#10a8e8]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section
        id="our-clients"
        className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14"
      >
        <WaterBackground />

        <div className="relative mx-auto max-w-6xl">
          <BrochureHeading
            eyebrow="Our Clients"
            title="Trusted by industry stakeholders"
            description="We partner with organizations across Tanzania to deliver reliable water storage solutions. Client logos can be added here later."
          />

          <div className="grid grid-cols-2 border border-[#d8e8f4] bg-white md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="flex min-h-32 items-center justify-center border-b border-r border-[#d8e8f4] px-4 text-center last:border-r-0"
              >
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                  Logo {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10 lg:py-12 2xl:px-14">
        <div className="relative mx-auto max-w-6xl overflow-hidden bg-[#0c5aa6] text-white">
          <Image
            src="/images/contact-water-tower.jpg"
            alt="BANCO contact section background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-15"
          />

          <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c7f4ff]">
                Contact
              </p>

              <h2 className="mt-3 max-w-[34ch] text-3xl font-extrabold uppercase leading-tight tracking-[0.08em] text-white">
                {contactContent.title}
              </h2>

              <div className="mt-3 h-[3px] w-full max-w-[420px] bg-gradient-to-r from-white via-[#78d7ff] to-transparent" />

              <p className="mt-5 max-w-lg text-[15px] font-medium leading-7 text-white/85">
                {contactContent.description}
              </p>

              <div className="mt-6">
                <Button
                  href="/contact"
                  className="rounded-none bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0c5aa6] hover:bg-[#eaf6ff]"
                >
                  Contact Us
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="grid border border-white/20 bg-white/5 lg:grid-cols-3">
              <div className="border-b border-white/20 px-5 py-5 lg:border-b-0 lg:border-r">
                <Phone className="size-5 text-[#9fe9ff]" strokeWidth={1.7} aria-hidden="true" />

                <span className="mt-4 block text-[11px] font-bold uppercase tracking-widest text-[#9fe9ff]">
                  Phone
                </span>

                <span className="mt-2 block text-[15px] font-medium text-white">
                  {contactDetails.phone}
                </span>
              </div>

              <div className="border-b border-white/20 px-5 py-5 lg:border-b-0 lg:border-r">
                <Mail01 className="size-5 text-[#9fe9ff]" strokeWidth={1.7} aria-hidden="true" />

                <span className="mt-4 block text-[11px] font-bold uppercase tracking-widest text-[#9fe9ff]">
                  Email
                </span>

                <span className="mt-2 block break-all text-[15px] font-medium text-white">
                  {contactDetails.email}
                </span>
              </div>

              <div className="px-5 py-5">
                <MarkerPin01 className="size-5 text-[#9fe9ff]" strokeWidth={1.7} aria-hidden="true" />

                <span className="mt-4 block text-[11px] font-bold uppercase tracking-widest text-[#9fe9ff]">
                  Address
                </span>

                <span className="mt-2 block text-[15px] font-medium leading-relaxed text-white">
                  {contactDetails.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}