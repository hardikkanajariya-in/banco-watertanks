import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SpecTable } from "@/components/spec-table";
import { ctaContent, pageMetadata, productContent } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.product.title,
  description: pageMetadata.product.description,
  alternates: {
    canonical: "/frp-water-tank"
  }
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="FRP Water Tank"
      />

      {/* Safe Water Storage System - Brochure Style */}
      {/* Safe Water Storage System - Brochure Style */}
      <section
        id="safe-water-storage"
        className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14"
      >
        {/* Soft water-style background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-95" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold uppercase tracking-[0.12em] text-[#0c5aa6]">
              Safe Water Storage System
            </h2>

            <div className="mt-2 h-[3px] w-full bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
          </div>

          {/* Quote */}
          <div className="mb-12 flex justify-end">
            <p className="max-w-lg text-right text-xl font-semibold italic leading-snug text-[#0c5aa6] sm:text-2xl">
              “Managing the world&apos;s water supply”
            </p>
          </div>

          {/* Text Content */}
          <div className="space-y-7 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base sm:leading-8">
            <p className="text-justify">
              It is an obvious fact, which nonetheless deserves emphasizing, that
              water is fundamental to our daily lives. Whether for drinking, cooking,
              washing or cleaning, as well as industrial and commercial requirements.
              As demand grows year by year, the management and conservation of supplies
              becomes ever more critical, the highest standards of purity of the
              delivered product are insisted upon.
            </p>

            <p className="text-justify">
              The FRP Panel Type Water Tanks storage system has been designed and
              developed for the single purpose of meeting these demands, with utmost
              efficiency and flexibility, with uncompromising levels of quality and
              reliability. Specified to meet the most rigorous conditions, it has
              become the system of choice around the world for applications from
              individual homes to major building and industrial complexes.
            </p>

            <p className="text-justify">
              The FRP Panel Type Water Tanks system is supremely flexible and provide
              free-standing long term storage capacity. Our water tanks conserve water
              to the highest quality standards, serving the needs of private
              residences, accommodation complexes, hospitals, hotels and offices, as
              well as industrial, municipal and irrigation projects where large-scale
              water storage is required. Every unit is supplied to the same standard of
              design and specification, to the size and shape best suited to every need
              of the customer. Assembly and installation is straight forward, and can
              be easily carried out by the user or contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Panel Design - Brochure Style */}
      <section
        id="standard-panel-design"
        className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14"
      >
        {/* Soft water background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-90" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold uppercase tracking-[0.12em] text-[#0c5aa6] sm:text-4xl">
              Standard Panel Design
            </h2>

            <div className="mt-2 h-[3px] w-full max-w-[820px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
          </div>

          <div className="mx-auto max-w-5xl">
            <Image
              src="/images/standard-panel-design.png"
              alt="Standard panel design diagram"
              width={1100}
              height={820}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>

          {/* Optional callouts for mobile/content support */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {productContent.standardPanelDesign.callouts.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#dcecf7] bg-white/80 px-4 py-3 text-sm font-medium leading-6 text-slate-600 shadow-[0_8px_24px_rgba(12,90,166,0.05)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section
        id="technical-specifications"
        className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14"
      >
        {/* Soft bottom water-style background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-90" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* Brochure-style heading */}
          <div className="mb-12">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-[#0c5aa6]">
              Technical Specifications
            </p>

            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#0c5aa6] sm:text-4xl">
              Technical Data
            </h2>

            <div className="mt-3 h-[3px] w-full max-w-[780px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

            <p className="mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-600">
              Operating conditions and mechanical properties taken directly from the brochure,
              presented in a clean engineering-friendly format.
            </p>
          </div>

          {/* Tables */}
          <div className="grid gap-10 lg:grid-cols-2">
            {productContent.technicalSpecifications.map((section) => (
              <SpecTable
                key={section.title}
                title={section.title}
                rows={section.rows}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10">
        {/* Soft water-style bottom background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#eef8ff] via-[#f8fcff] to-transparent opacity-80" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#0c5aa6] sm:text-4xl">
              Features
            </h2>
            <div className="mt-2 h-[3px] w-full max-w-[760px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* Left Content */}
            <div>
              {productContent.features.map((group, index) => {
                const isAccessories = group.title.toLowerCase().includes("accessories");

                return (
                  <div key={group.title} className={index > 0 ? "mt-14" : ""}>
                    <h3 className="mb-5 text-xl font-extrabold uppercase tracking-wide text-[#0c5aa6] sm:text-2xl">
                      {group.title}
                    </h3>

                    {isAccessories ? (
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="relative pl-5 text-[15px] font-medium leading-7 text-[#2b2b2b]"
                          >
                            <span className="absolute left-0 top-[11px] h-1.5 w-1.5 rounded-full bg-[#0c5aa6]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="max-w-md space-y-6">
                        {group.items.map((item) => (
                          <p
                            key={item}
                            className="text-[15px] font-medium leading-7 text-[#4a4a4a]"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Product Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative mt-2 w-full max-w-[380px]">
                <div className="absolute -inset-6 rounded-full bg-[#eaf5fb] opacity-50 blur-3xl" />

                <img
                  src="/images/frp-water-tank.png"
                  alt="FRP panel type water tank assembly"
                  className="relative z-10 w-full object-contain drop-shadow-[0_20px_35px_rgba(15,74,130,0.18)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
