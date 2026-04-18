import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Building05, LayersThree01 } from "@untitledui/icons";

import { ApplicationGrid } from "@/components/application-grid";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { StatsStrip } from "@/components/stats-strip";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  aboutSnapshot,
  applications,
  benefits,
  ctaContent,
  homeHero,
  pageMetadata,
  productOverview,
  technicalHighlights,
  trustItems
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div className="space-y-6">
            <Badge>{homeHero.eyebrow}</Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-6xl">
              {homeHero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">{homeHero.description}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={homeHero.primaryCta.href}>
                {homeHero.primaryCta.label}
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </Button>
              <Button href={homeHero.secondaryCta.href} variant="secondary">
                {homeHero.secondaryCta.label}
              </Button>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <Card className="rounded-[1.25rem] p-4">
                <div className="flex items-start gap-3">
                  <Building05 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    Built to feel clear and credible for commercial, industrial, and institutional buyers.
                  </p>
                </div>
              </Card>
              <Card className="rounded-[1.25rem] p-4">
                <div className="flex items-start gap-3">
                  <LayersThree01 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    Structured for future brochure downloads, certifications, and additional product sections.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-4">
            <Image
              src="/images/hero-tank.svg"
              alt="BANCO FRP panel type water tank hero illustration"
              width={960}
              height={780}
              className="h-full w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <StatsStrip items={trustItems} />

      <section id="about" className="container-shell section-shell">
        <SplitSection
          imageSrc="/images/company-overview.svg"
          imageAlt="Company overview illustration"
          eyebrow="About BANCO"
          title={aboutSnapshot.title}
          text={aboutSnapshot.text}
          points={aboutSnapshot.points}
          cta={{ label: "Learn More About BANCO", href: "/about" }}
        />
      </section>

      <section id="product-overview" className="container-shell section-shell">
        <SplitSection
          imageSrc="/images/product-overview.svg"
          imageAlt="FRP panel type water tank overview illustration"
          eyebrow="Product Overview"
          title={productOverview.title}
          text={productOverview.text}
          cta={{ label: "Explore the Product", href: "/frp-panel-type-water-tank" }}
          reverse
        />
      </section>

      <section id="benefits" className="container-shell section-shell">
        <SectionIntro
          eyebrow="Benefits"
          title="Key advantages presented in a clean, scan-friendly grid."
          description="These cards are designed to communicate practical value quickly without turning the page into a dense brochure dump."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section className="container-shell section-shell">
        <DesignVisual />
      </section>

      <section className="container-shell section-shell">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Structured feature communication for trust-focused product evaluation."
          description="This block bridges the gap between marketing-level product benefits and deeper technical review."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section id="applications" className="container-shell section-shell">
        <SectionIntro
          eyebrow="Applications"
          title="Relevant across building, utility, institutional, and industrial contexts."
          description="The site preview highlights common sectors first, then routes users to the fuller applications page."
        />
        <div className="mt-8">
          <ApplicationGrid items={applications} compact />
        </div>
      </section>

      <CtaBanner {...ctaContent} />

      <section id="contact" className="container-shell section-shell">
        <SectionIntro
          eyebrow="Contact"
          title="Make the inquiry step clear and low-friction."
          description="The homepage contact block surfaces direct communication details and a simple email-based inquiry form for this static implementation."
        />
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
