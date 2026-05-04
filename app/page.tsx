import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Bell01, Building05, Globe01, Home01, LayersThree01, LifeBuoy01, Mail01, MarkerPin01, Phone, Tool01, User01 } from "@untitledui/icons";

import { Button } from "@/components/ui/button";
import { AboutGallery } from "@/components/about-gallery";
import { cn, siteContainer } from "@/lib/utils";
import {
  aboutContent,
  applicationsContent,
  contactDetails,
  homeHero,
  homeTickerItems,
  homeValueCards,
  pageMetadata,
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/",
  },
};

const marqueeItems = [...homeTickerItems, ...homeTickerItems];
const compactApplications = applicationsContent.items.slice(0, 8);

const heroCollageItems = [
  {
    title: "Industrial",
    src: "/images/hero/industrial.png",
    className: "col-start-1 col-span-2 row-start-1 row-span-3 rounded-tl-[1.75rem]",
  },
  {
    title: "Commercial",
    src: "/images/hero/commercial.png",
    className: "col-start-3 col-span-2 row-start-1 row-span-3",
  },
  {
    title: "Residential",
    src: "/images/hero/residential.png",
    className: "col-start-5 col-span-2 row-start-1 row-span-4 rounded-tr-[1.75rem] text-direction-ltr",
  },
  {
    title: "Infrastructure",
    src: "/images/hero/infra.png",
    className: "col-start-1 col-span-3 row-start-4 row-span-3 rounded-bl-[1.75rem]",
  },
  {
    title: "Hospitality",
    src: "/images/hero/hospitality.png",
    className: "col-start-4 col-span-3 row-start-5 row-span-2 rounded-br-[1.75rem]",
  },
];

const sectorCards = [
  {
    title: "Industrial Facilities",
    image: "/images/gallery/1.png",
  },
  {
    title: "Commercial Projects",
    image: "/images/gallery/2.png",
  },
  {
    title: "Infrastructure",
    image: "/images/gallery/3.png",
  },
  {
    title: "Hospitals",
    image: "/images/gallery/4.png",
  },
  {
    title: "Hotels",
    image: "/images/gallery/5.png",
  },
  {
    title: "Residential",
    image: "/images/gallery/1.png",
  },
  {
    title: "Municipal",
    image: "/images/gallery/2.png",
  },
  {
    title: "Irrigation",
    image: "/images/gallery/3.png",
  },
];


const icons = [
  Building05,
  Tool01,
  Home01,
  User01,
  Bell01,
  LayersThree01,
  Globe01,
  LifeBuoy01,
  Building05,
];


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
  description,
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

      <h2 className="text-3xl font-extrabold uppercase leading-[1.06] tracking-[0.1em] text-[#0c5aa6] sm:text-4xl lg:text-[2.65rem]">
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

function HeroCollage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-[#0c5aa6]/10 blur-3xl" />

      <div className="relative grid h-[390px] grid-cols-6 grid-rows-6 gap-3 sm:h-[500px] lg:h-[520px]">
        {heroCollageItems.map((image) => (
          <div
            key={image.title}
            className={[
              "group relative overflow-hidden bg-[#08285b] shadow-[0_18px_38px_rgba(8,40,91,0.14)]",
              "ring-1 ring-white/70 transition duration-500 hover:z-10 hover:-translate-y-1 hover:ring-[#29b9ec]/60",
              image.className,
            ].join(" ")}
          >
            <Image
              src={image.src}
              alt={`${image.title} water storage application`}
              fill
              priority={image.title === "Infrastructure"}
              fetchPriority={image.title === "Infrastructure" ? "high" : undefined}
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 28vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-150"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,40,91,0.08)_0%,rgba(8,40,91,0.62)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,185,236,0.18),transparent_38%)]" />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white sm:text-[12px]">
                {image.title}
              </p>
            </div>
          </div>
        ))}

        {/* Center rounded logo block */}
        <div className="relative col-span-1 col-start-4 row-span-1 row-start-4 flex items-center justify-center overflow-hidden bg-transparent transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,185,236,0.12),transparent_42%)]" />

          <Image
            src="/images/logo.png"
            alt="BANCO Water Tank"
            fill
            sizes="140px"
            className="relative z-10 h-full w-full scale-175 object-contain p-2 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}

function ClientSectorMarquee() {
  const scrollingCards = [...sectorCards, ...sectorCards];

  return (
    <div className="relative banco-scroll-marquee">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f6fbff] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f6fbff] to-transparent" />

      <div className="overflow-x-auto pb-5 banco-scrollbar-none">
        <div className="banco-scroll-marquee__track px-1">
          {scrollingCards.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group relative flex min-h-[220px] w-[270px] shrink-0 flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/25 bg-[#08285b] p-6 text-white shadow-[0_22px_55px_rgba(8,40,91,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_75px_rgba(8,40,91,0.26)] sm:w-[310px]"
            >
              <Image
                src={item.image}
                alt={`${item.title} water storage projects`}
                fill
                sizes="(max-width: 640px) 270px, 310px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,40,91,0.18)_0%,rgba(8,40,91,0.72)_54%,rgba(8,40,91,0.94)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,185,236,0.35),transparent_42%)]" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <div className="relative mt-8">
                <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9fe9ff]">
                    {item.title}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#f6fbff] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-5 2xl:px-14">
        <div className={cn("relative grid gap-10 pt-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14", siteContainer)}>
          <div className="max-w-2xl">
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#0f60b2] sm:text-xs">
              {homeHero.eyebrow}
            </p>

            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold uppercase leading-[1.02] tracking-[0.06em] text-[#0c5aa6] sm:text-5xl lg:text-6xl">
              {homeHero.subLine}
            </h1>

            <div className="mt-5 h-[3px] w-full max-w-[560px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

            <p className="mt-6 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#0c5aa6] sm:text-[13px]">
              {homeHero.productLine}
            </p>

            <p className="mt-5 max-w-2xl text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
              {homeHero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={homeHero.primaryCta.href}
                className="w-full rounded-full bg-[#0c5aa6] px-7 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_18px_38px_rgba(12,90,166,0.22)] hover:bg-[#08457f] sm:w-auto"
              >
                {homeHero.primaryCta.label}
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>

              <Button
                href={homeHero.secondaryCta.href}
                variant="secondary"
                className="w-full rounded-full border border-[#c7dced] bg-white px-7 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[#0c5aa6] hover:border-[#0c5aa6] hover:bg-[#f1f8fd] sm:w-auto"
              >
                {homeHero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Hygienic Storage", "FRP Panel System", "Project Ready"].map((item) => (
                <div
                  key={item}
                  className="border border-[#d8e8f4] bg-white/82 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0c5aa6] shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm font-medium leading-7 text-[#4a4a4a]">
              A quality product by Neomech (T) Ltd.
            </p>
          </div>

          <HeroCollage />
        </div>
      </section>

      {/* Moving Stats Strip */}
      <section className="mx-auto mt-10 border-y border-[#d8e8f4] bg-white">
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
      <section className="relative w-full overflow-hidden bg-[#f6fbff] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14">
        <WaterBackground />

        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#bdd9ee] to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#29b9ec]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#0c5aa6]/10 blur-3xl" />

        <div className={cn("relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center", siteContainer)}>
          <div className="relative order-last lg:order-first">
            <div className="absolute -left-5 top-8 hidden h-[82%] w-[82%] rounded-[2rem] bg-[#0c5aa6] lg:block" />
            <div className="absolute -bottom-5 right-8 hidden h-32 w-32 rounded-full bg-[#29b9ec]/20 blur-2xl lg:block" />

            <AboutGallery />

            <div className="relative z-10 -mt-8 ml-6 grid max-w-[520px] grid-cols-2 overflow-hidden rounded-[1.5rem] border border-[#cfe0ef] bg-white shadow-[0_22px_55px_rgba(8,40,91,0.14)] sm:ml-10">
              <div className="border-r border-[#d8e8f4] px-5 py-5">
                <p className="text-3xl font-extrabold text-[#0c5aa6]">FRP</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4a5c72]">
                  Modular System
                </p>
              </div>

              <div className="px-5 py-5">
                <p className="text-3xl font-extrabold text-[#0c5aa6]">24/7</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4a5c72]">
                  Storage Reliability
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
              Safe Water Storage
            </p>

            <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-[0.06em] text-[#0c5aa6] sm:text-3xl lg:text-4xl">
              Engineered For Reliable Water Storage
            </h2>

            <div className="mt-5 h-[3px] w-full max-w-[520px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

            <p className="mt-6 max-w-2xl text-[16px] font-semibold leading-8 text-[#15324d]">
              {aboutContent.intro}
            </p>

            <div className="mt-7 space-y-5 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
              {aboutContent.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Designed for hygienic storage",
                "Modular panel configuration",
                "Suitable for large-scale projects",
                "Built for long-term performance",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 rounded-[1.25rem] border border-[#d8e8f4] bg-white/82 p-4 shadow-[0_14px_35px_rgba(8,40,91,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#9bcce9]"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0c5aa6] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm font-bold leading-6 text-[#15324d]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className={cn("relative", siteContainer)}>
          <BrochureHeading
            eyebrow="Product Strength"
            title="Why choose FRP panel tanks"
          />

          <div className="grid gap-0 border-y border-[#d8e8f4] md:grid-cols-2">
            {homeValueCards.slice(0, 6).map((item, index) => (
              <article
                key={item.title}
                className={[
                  "border-b border-[#d8e8f4] px-6 py-6 md:border-r",
                  index >= 4 ? "md:border-b-0" : "",
                  index % 2 === 1 ? "md:border-r-0" : "",
                ].join(" ")}
              >
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

        <div className={cn("relative", siteContainer)}>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
                Applications
              </p>

              <h2 className="max-w-3xl text-3xl font-extrabold uppercase leading-[1.06] tracking-[0.1em] text-[#0c5aa6] sm:text-4xl lg:text-[2.65rem]">
                Built for varied water storage environments
              </h2>

              <div className="mt-2 h-[3px] w-full max-w-[820px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
            </div>

            <Button
              href="/applications"
              variant="secondary"
              className="w-fit rounded-none border border-[#0c5aa6] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0c5aa6] hover:bg-[#f1f8fd]"
            >
              View All Applications
            </Button>
          </div>

          <div className="grid gap-x-14 gap-y-7 sm:grid-cols-2">
            {compactApplications.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (<article
                key={item.title}
                className="grid grid-cols-[58px_1fr] gap-5 border-b border-[#d8e8f4] pb-7"
              >
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#1aa7de] bg-[#1aa7de] shadow-[inset_0_0_0_4px_white,0_8px_18px_rgba(12,90,166,0.18)]">
                  <Icon
                    className="size-7 text-white"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-[15px] font-extrabold uppercase italic tracking-wide text-[#0c5aa6]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[15px] font-extrabold leading-6 text-[#0f60b2]">
                    {item.description}
                  </p>
                </div>
              </article>)
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="our-clients" className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className={cn("relative", siteContainer)}>
          <BrochureHeading
            eyebrow="Our Clients"
            title="Trusted by industry stakeholders"
          />

          <ClientSectorMarquee />
        </div>
      </section>

      {/* Contact Strip */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <div className={cn("relative overflow-hidden rounded-[2rem] bg-[#08285b] text-white shadow-[0_34px_90px_rgba(8,40,91,0.24)]", siteContainer)}>
          <Image
            src="/images/water-tank-big.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1320px"
            className="object-cover object-center opacity-35"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,40,91,0.97)_0%,rgba(8,40,91,0.9)_42%,rgba(8,40,91,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,185,236,0.34),transparent_34%),radial-gradient(circle_at_15%_90%,rgba(255,255,255,0.13),transparent_28%)]" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10 xl:p-12">
            <div className="flex min-h-[480px] flex-col justify-between">
              <div>
                <p className="inline-flex border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#c7f4ff] backdrop-blur-md">
                  Contact US
                </p>

                <h2 className="mt-6 max-w-[20ch] text-3xl font-extrabold uppercase leading-[0.94] tracking-[0.055em] text-white sm:text-4xl lg:text-5xl">
                  Talk To The BANCO Team
                </h2>

                <div className="mt-6 h-[3px] w-full max-w-[430px] bg-gradient-to-r from-white via-[#78d7ff] to-transparent" />

                <p className="mt-6 max-w-xl text-[15px] font-medium leading-8 text-white/84 sm:text-base">
                  Reach our team for sizing support, technical discussions,
                  project coordination, and commercial inquiries for BANCO FRP
                  panel type water tanks.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/contact"
                  className="rounded-full bg-white px-7 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[#0c5aa6] shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:bg-[#eaf6ff]"
                >
                  Contact Us
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>

                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/16"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/16 bg-white/[0.08] p-4 backdrop-blur-md sm:p-5 lg:p-6">
              <div className="mb-5 flex flex-col gap-2 border-b border-white/14 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="mt-2 text-2xl font-extrabold uppercase tracking-[0.06em] text-white">
                    Contact Details
                  </h3>
                </div>

                <p className="max-w-xs text-sm font-medium leading-6 text-white/68 sm:text-right">
                  For project inquiries, product support, and quotation discussions.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="group grid gap-4 rounded-[1.35rem] border border-white/14 bg-white/[0.08] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#9fe9ff]/60 hover:bg-white/[0.12] sm:grid-cols-[3.5rem_1fr_auto] sm:items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[#9fe9ff] ring-1 ring-white/18 transition group-hover:bg-[#29b9ec] group-hover:text-white">
                    <Phone className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[#9fe9ff]">
                      Phone
                    </span>
                    <span className="mt-2 block text-[16px] font-bold leading-7 text-white">
                      {contactDetails.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group grid gap-4 rounded-[1.35rem] border border-white/14 bg-white/[0.08] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#9fe9ff]/60 hover:bg-white/[0.12] sm:grid-cols-[3.5rem_1fr_auto] sm:items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[#9fe9ff] ring-1 ring-white/18 transition group-hover:bg-[#29b9ec] group-hover:text-white">
                    <Mail01 className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[#9fe9ff]">
                      Email
                    </span>
                    <span className="mt-2 block break-all text-[16px] font-bold leading-7 text-white">
                      {contactDetails.email}
                    </span>
                  </div>
                </a>

                <div className="group grid gap-4 rounded-[1.35rem] border border-white/14 bg-white/[0.08] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#9fe9ff]/60 hover:bg-white/[0.12] sm:grid-cols-[3.5rem_1fr_auto] sm:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[#9fe9ff] ring-1 ring-white/18 transition group-hover:bg-[#29b9ec] group-hover:text-white">
                    <MarkerPin01
                      className="size-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[#9fe9ff]">
                      Address
                    </span>
                    <span className="mt-2 block text-[16px] font-bold leading-7 text-white">
                      {contactDetails.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
