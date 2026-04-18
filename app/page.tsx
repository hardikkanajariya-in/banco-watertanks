import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ApplicationGrid } from "@/components/application-grid";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { StatsStrip } from "@/components/stats-strip";
import { TechnicalHighlights } from "@/components/technical-highlights";
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">{homeHero.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-6xl">
              {homeHero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">{homeHero.description}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={homeHero.primaryCta.href}
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
              >
                {homeHero.primaryCta.label}
              </Link>
              <Link
                href={homeHero.secondaryCta.href}
                className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                {homeHero.secondaryCta.label}
              </Link>
            </div>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Built to feel clear, credible, and conversion-focused for commercial, industrial, institutional, and
              project-led buyers.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white p-4 shadow-[0_24px_80px_rgba(16,33,41,0.08)]">
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

      <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
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

      <section id="product-overview" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
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

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <SectionIntro
          eyebrow="Benefits"
          title="Key advantages presented in a clean, scan-friendly grid."
          description="These cards are designed to communicate practical value quickly without turning the page into a dense brochure dump."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <DesignVisual />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Structured feature communication for trust-focused product evaluation."
          description="This block bridges the gap between marketing-level product benefits and deeper technical review."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      <section id="applications" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
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

      <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
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
