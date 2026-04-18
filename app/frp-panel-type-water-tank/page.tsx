import type { Metadata } from "next";

import { BenefitsGrid } from "@/components/benefits-grid";
import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { Card } from "@/components/ui/card";
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
      <PageHero
        eyebrow="FRP Panel Type Water Tank"
        title="A product page built to explain modular tank value without overwhelming the visitor."
        description="The structure combines business-level clarity, benefit communication, design visualization, and technical highlights so the product can be evaluated quickly and confidently."
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Technical Specifications", href: "/technical-specifications" }}
      />

      <section id="overview" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <SplitSection
          imageSrc="/images/product-storage-tank.jpg"
          imageAlt="FRP panel type water tank illustration"
          eyebrow="What It Is"
          title="The product is presented as a modular FRP water storage system for project-based installations."
          text="This section is intended to translate brochure content into web-readable copy that answers what the tank is, how the panelized approach works at a high level, and why that matters to buyers comparing practical storage solutions."
          points={productFeatures}
        />
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Key Benefits"
          title="Benefits stay concise here so the visitor can scan before diving into specifications."
          description="This grid mirrors the homepage structure but carries more product-specific purchase framing."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section id="design" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <DesignVisual />
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Product detail should feel structured and trustworthy rather than over-designed."
          description="Use this section for the short-form technical facts that support the deeper specification page."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <SectionIntro
          eyebrow="Use-Case Fit"
          title="A short section that helps buyers self-identify whether the tank matches their project."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {useCaseFit.map((item) => (
            <Card key={item} className="rounded-[1.75rem] p-6 text-sm leading-7 text-slate-600">
              {item}
            </Card>
          ))}
        </div>
      </section>

      <div id="cta">
        <CtaBanner {...ctaContent} />
      </div>
    </>
  );
}
