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
      <PageHero
        eyebrow="Technical Specifications"
        title="A clean specification page designed to hold brochure data without reading like a catalog dump."
        description="The current implementation uses organized placeholder tables and notes so verified material, size, accessory, and project data can be inserted quickly once the final brochure content is confirmed."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Product Page", href: "/frp-panel-type-water-tank" }}
      />

      <section id="spec-summary" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Specification Summary"
          title="Technical credibility comes from clarity, structure, and restraint."
          description="This opening block gives consultants and buyers a quick read before they move into the detailed table sets."
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
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Capacity or Size Matrix"
            title="Reserved space for verified tank capacities, dimensions, panel details, and accessory combinations."
            description="This placeholder block keeps the technical page implementation-ready while waiting for final brochure-backed values from the client."
          />
        </div>
      </section>

      <section id="installation-or-support" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SectionIntro
            eyebrow="Installation and Support"
            title="Installation scope, support structure notes, and supply boundaries should be confirmed on a project basis."
            description="This section is intentionally concise so public claims stay controlled until the client confirms exactly what should be shown online."
          />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
