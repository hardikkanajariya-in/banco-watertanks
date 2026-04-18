import type { Metadata } from "next";

import { BenefitsGrid } from "@/components/benefits-grid";
import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { benefits, ctaContent, pageMetadata, productFeatures, technicalHighlights, useCaseFit } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.product.title,
  description: pageMetadata.product.description,
  alternates: {
    canonical: "/frp-panel-type-water-tank"
  }
};

export default function ProductPage() {
  return (
    <>
      <PageHero eyebrow="FRP Panel Type Water Tank" />

      <section id="overview" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SplitSection
          imageSrc="/images/product-storage-tank.jpg"
          imageAlt="FRP panel type water tank illustration"
          eyebrow="What It Is"
          title="The FRP panel type water tank is a modular water storage solution designed for reliable performance."
          text="It is suitable for projects that require durable construction, hygienic water storage, and flexible capacity planning with a practical panel-based installation approach."
          points={productFeatures}
        />
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Key Benefits"
          title="Designed to deliver durability, hygiene, and practical installation flexibility."
          description="The product benefits below highlight why FRP panel tanks are widely used across different types of projects."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section id="design" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <DesignVisual />
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Key technical highlights support confident product selection."
          description="These points provide a quick overview of the product’s construction, suitability, and practical use."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Use-Case Fit"
          title="Suitable for projects where reliability, modularity, and efficient planning matter."
        />
        <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-3">
          {useCaseFit.map((item) => (
            <div key={item} className="border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </section>

      <div id="cta">
        <CtaBanner {...ctaContent} />
      </div>
    </>
  );
}
