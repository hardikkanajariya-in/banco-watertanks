import type { Metadata } from "next";
import { ArrowRight } from "@untitledui/icons";

import { ComparisonTable } from "@/components/comparison-table";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { comparisonContent, ctaContent, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.comparison.title,
  description: pageMetadata.comparison.description,
  alternates: {
    canonical: "/comparison",
  },
};

function WaterBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-95" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-[radial-gradient(circle_at_25%_50%,rgba(12,90,166,0.07),transparent_18%),radial-gradient(circle_at_58%_58%,rgba(12,90,166,0.05),transparent_16%),radial-gradient(circle_at_78%_70%,rgba(12,90,166,0.04),transparent_20%)]" />
    </>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <PageHero
        eyebrow="Comparison"
      />

      {/* Comparison Table */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="mb-14 max-w-[920px]">
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]">
              Banco Vs Others
            </p>

            <h2 className="max-w-[900px] text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold uppercase leading-[1.08] tracking-[0.12em] text-[#0c5aa6]">
              Comparison Table Aligned To The Supplied Flyer
            </h2>

            <div className="mt-3 h-[3px] w-full max-w-[900px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />

            <p className="mt-5 max-w-[850px] text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
              The wording below has been corrected from the image you shared so
              the table matches the brochure comparison more closely.
            </p>
          </div>

          <ComparisonTable rows={comparisonContent.rows} />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}