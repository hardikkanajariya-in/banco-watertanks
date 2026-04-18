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
      <PageHero
        eyebrow="Applications"
        title="A sector-led page that helps prospects recognize where FRP panel tank solutions fit."
        description="This route supports self-qualification by showing the product across common building, service, industrial, and institutional contexts without drifting into unnecessary complexity."
        primaryCta={{ label: "Discuss Your Requirement", href: "/contact" }}
        secondaryCta={{ label: "View Product Page", href: "/frp-panel-type-water-tank" }}
      />

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <SectionIntro
          eyebrow="Application Overview"
          title="The purpose here is relevance: visitors should find their context quickly."
          description="Each card can later be expanded with real project examples, sector notes, or capacity references if the client provides them."
          align="center"
        />
        <div className="mt-8">
          <ApplicationGrid items={applications} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8">
          <SectionIntro
            eyebrow="Why FRP Fits"
            title="The product’s modular, durable, and project-ready nature makes it broadly usable."
            description="This block ties the product benefits back to real application logic: organized installation planning, durable material choice, and suitability across multiple sectors."
          />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
