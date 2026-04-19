import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SpecTable } from "@/components/spec-table";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { ctaContent, pageMetadata, specificationHighlights, specificationSections } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.technical.title,
  description: pageMetadata.technical.description,
  alternates: {
    canonical: "/technical-specifications"
  }
};

export default function TechnicalSpecificationsPage() {
  return (
    <>
      <PageHero eyebrow="Technical Specifications" />

      <section id="spec-summary" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Specification Summary"
          title="Review the key product specifications for FRP panel type water tank solutions."
          description="This section now reflects the approved operating conditions, material properties, and assembly details from the final product text."
        />
        <div className="mt-8">
          <TechnicalHighlights items={specificationHighlights} />
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-6">
          {specificationSections.map((section) => (
            <SpecTable key={section.title} title={section.title} rows={section.rows} />
          ))}
        </div>
      </section>

      <section id="panel-details" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <DesignVisual />
      </section>

      <section id="capacity-or-size-table" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Capacity and Configuration"
            title="Tank size, shape, and accessories can be selected to match site requirements."
            description="The final content highlights design flexibility, customizable partitions, and accessories suited to different applications."
          />
        </div>
      </section>

      <section id="installation-or-support" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Installation and Support"
            title="Assembly is designed to be straightforward using standard tools and on-site panel installation."
            description="The final content states that installation can be carried out by the user or contractor with basic tools and equipment."
          />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
