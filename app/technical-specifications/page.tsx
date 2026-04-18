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

      <section id="spec-summary" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Specification Summary"
          title="Review the key product specifications for FRP panel type water tank solutions."
          description="A quick overview of important product details for evaluation and requirement planning."
        />
        <div className="mt-8">
          <TechnicalHighlights items={specificationHighlights} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6">
          {specificationSections.map((section) => (
            <SpecTable key={section.title} title={section.title} rows={section.rows} />
          ))}
        </div>
      </section>

      <section id="panel-details" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <DesignVisual />
      </section>

      <section id="capacity-or-size-table" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Capacity and Configuration"
            title="Available in multiple capacities and configurations to suit project requirements."
            description="Tank size, layout, and fitting details can be selected according to your storage requirement."
          />
        </div>
      </section>

      <section id="installation-or-support" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Installation and Support"
            title="Installation details and support scope can be discussed based on your project requirement."
            description="Our team can help you understand the suitable tank configuration, installation considerations, and related product details."
          />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
