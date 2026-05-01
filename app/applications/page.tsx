import type { Metadata } from "next";

import { ApplicationGrid } from "@/components/application-grid";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { applicationsContent, ctaContent, pageMetadata } from "@/data/site";
import { cn, siteContainer } from "@/lib/utils";

export const metadata: Metadata = {
  title: pageMetadata.applications.title,
  description: pageMetadata.applications.description,
  alternates: {
    canonical: "/applications"
  }
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
      />

      <section className="relative w-full px-4 py-8 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-[#f8fbff] overflow-hidden">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(41,185,236,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className={cn("relative", siteContainer)}>
          <div className="mb-14 max-w-4xl">
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
              Application Coverage
            </p>

            <h2 className="max-w-4xl text-[clamp(1rem,3vw,2rem)] font-extrabold uppercase leading-[1.08] tracking-[0.12em] text-[#0c5aa6]">
              From Factories And Housing To Hospitals And Public Infrastructure
            </h2>

            <div className="mt-3 h-[3px] w-full max-w-[900px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
          </div>

          <div className="mt-8">
            <ApplicationGrid items={applicationsContent.items} />
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
