import type { Metadata } from "next";

import { ApplicationGrid } from "@/components/application-grid";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { applicationsContent, ctaContent, pageMetadata } from "@/data/site";

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
        title="Applications directly mapped from the BANCO brochure."
        description={applicationsContent.intro}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
      />

      <section className="relative w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-[#f8fbff] overflow-hidden">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(41,185,236,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionIntro
              eyebrow="Application Coverage"
              title="From factories and housing to hospitals and public infrastructure."
              description="The same modular FRP system adapts to many different water storage environments."
            />
          </div>

          <div className="mt-8 mx-auto max-w-7xl">
            <ApplicationGrid items={applicationsContent.items} />
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
