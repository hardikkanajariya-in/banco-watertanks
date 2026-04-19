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

      <section id="overview" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SplitSection
          imageSrc="/images/product-storage-tank.jpg"
          imageAlt="FRP panel type water tank illustration"
          eyebrow="What It Is"
          title="The FRP panel type water tank is designed for safe, efficient, and flexible long-term water storage."
          text="The system is intended to meet growing water demand with uncompromising quality and reliability, from individual residences to major building, municipal, irrigation, and industrial applications."
          points={productFeatures}
        />
      </section>

      <section id="benefits" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Key Benefits"
          title="Designed to deliver hygiene, strength, portability, and dependable performance."
          description="The product benefits below follow the final approved content for the BANCO FRP tank system."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section id="design" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <DesignVisual />
      </section>

      <section id="features" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Key technical highlights show how the tank supports clean and durable water storage."
          description="These points summarize the assembly system, panel finish, bracing options, light resistance, and drainage performance."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Use-Case Fit"
          title="Suitable for projects where hygiene, modularity, and configurable storage matter."
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
