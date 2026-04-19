import type { Metadata } from "next";

import { ApplicationGrid } from "@/components/application-grid";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { applications, ctaContent, pageMetadata } from "@/data/site";

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
      <PageHero eyebrow="Applications" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Application Overview"
          title="BANCO FRP panel type water tanks serve a wide range of storage requirements."
          description="The approved applications include industrial sectors, utilities, housing, hospitals, schools, transport hubs, hospitality sites, remote terrains, and public infrastructure."
          align="center"
        />
        <div className="mt-8">
          <ApplicationGrid items={applications} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Why FRP Fits"
            title="FRP panel construction combines hygiene, modularity, portability, and durability across varied project types."
            description="This makes the system suitable for both permanent and temporary installations, including relocatable tank requirements."
          />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
