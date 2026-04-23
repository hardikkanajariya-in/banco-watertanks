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

      <section className="w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionIntro
            eyebrow="FRP Tank Advantages"
            title="Pure, clean water always."
            description="Core product advantages, translated into a clearer and more credible web layout."
          />

          <div className="border-t border-[#d9e5f1]">
            {advantagesContent.tankAdvantages.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 border-b border-[#d9e5f1] py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-7"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f5f9d]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#0c2d52]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-y border-[#e7eef5] bg-[#f8fbfe] px-4 py-16 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionIntro
            eyebrow="Benefits of FRP Water Tanks"
            title="Twelve strong reasons to choose the system."
            description="A more readable, web-first presentation of the brochure-backed benefits."
          />

          <div>
            <BenefitsGrid items={advantagesContent.benefits} />

            <div className="mt-10 border-t border-[#d9e5f1] pt-6">
              <Button href="/comparison" variant="accent">
                Open Banco vs Others Comparison
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
