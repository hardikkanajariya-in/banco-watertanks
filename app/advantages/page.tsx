import type { Metadata } from "next";

import { BenefitsGrid } from "@/components/benefits-grid";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { advantagesContent, ctaContent, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.advantages.title,
  description: pageMetadata.advantages.description,
  alternates: {
    canonical: "/advantages"
  }
};

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Advantages"
        title="FRP tank advantages and product benefits in one place."
        description={advantagesContent.intro}
        primaryCta={{ label: "See Full Comparison", href: "/comparison" }}
      />

      <section className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="FRP Tank Advantages"
          title="Pure, clean water always."
          description="These are the core design-led advantages highlighted in the brochure."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {advantagesContent.tankAdvantages.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#d7e4f2] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f5f9d]">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="Benefits of FRP Water Tanks"
          title="Twelve brochure-backed reasons to choose the system."
          description="The benefits list has been preserved and cleaned up in a more usable website format."
        />
        <div className="mt-8">
          <BenefitsGrid items={advantagesContent.benefits} />
        </div>
        <div className="mt-8">
          <Button href="/comparison" variant="accent">Open Banco vs Others Comparison</Button>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
