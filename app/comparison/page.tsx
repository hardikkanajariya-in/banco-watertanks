import type { Metadata } from "next";
import { ArrowRight } from "@untitledui/icons";

import { ComparisonTable } from "@/components/comparison-table";
import { CtaBanner } from "@/components/cta-banner";
import { SectionIntro } from "@/components/section-intro";
import { Button } from "@/components/ui/button";
import { comparisonContent, ctaContent, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.comparison.title,
  description: pageMetadata.comparison.description,
  alternates: {
    canonical: "/comparison"
  }
};

export default function ComparisonPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#0c5cad] text-white">
        <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#ffffff_28%,transparent_29%)] opacity-95" />
        <div className="pointer-events-none absolute left-14 top-0 h-20 w-16 bg-[#29b9ec]" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-72 bg-[radial-gradient(circle_at_top_right,#d8eefb_0%,#d8eefb_54%,transparent_55%)] opacity-90" />
        <div className="relative w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#caf4ff]">Comparison</p>
              <h1 className="mt-3 max-w-[11ch] text-[clamp(2.1rem,4.6vw,4rem)] font-semibold leading-[0.96] text-white">
                BANCO water tank vs others
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/82 sm:text-base sm:leading-8">
                {comparisonContent.intro}
              </p>
              <div className="mt-7">
                <Button href="/contact" className="bg-white text-[#0c3d86] hover:bg-[#e6f6fd]">
                  Contact Us
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="rounded-[1.2rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#caf4ff]">Why It Wins</p>
              <div className="mt-5 space-y-4">
                {comparisonContent.callouts.map((item) => (
                  <p key={item} className="border-b border-white/14 pb-4 text-sm leading-7 text-white/82 last:border-b-0 last:pb-0">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <SectionIntro
          eyebrow="Banco vs Others"
          title="Comparison table aligned to the supplied flyer."
          description="The wording below has been corrected from the image you shared so the table matches the brochure comparison more closely."
        />
        <div className="mt-8">
          <ComparisonTable rows={comparisonContent.rows} />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
