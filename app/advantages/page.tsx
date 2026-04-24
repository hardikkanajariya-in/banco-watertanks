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

      <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-6 border-b border-[#d9e5f1] pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0f60b2]">
                FRP Tank Advantages
              </p>

              <h3 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-[#08285b] sm:text-4xl lg:text-5xl">
                Pure, clean water always.
              </h3>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                Core product advantages presented in a clearer, more credible layout for easy scanning and better decision-making.
              </p>
            </div>

            <div className="hidden text-right lg:block">
              <p className="text-sm font-semibold text-[#0c3d86]">
                Built for hygiene, durability, and reliability.
              </p>
            </div>
          </div>

          <div className="mt-10 divide-y divide-[#d9e5f1]">
            {advantagesContent.tankAdvantages.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-5 py-7 transition-all duration-300 hover:bg-[#f8fbfe] sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:px-5 lg:py-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9e5f1] bg-white text-sm font-bold text-[#0f60b2] transition-all duration-300 group-hover:border-[#0f60b2] group-hover:bg-[#0f60b2] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h4 className="text-xl font-bold tracking-tight text-[#08285b] transition-colors duration-300 group-hover:text-[#0f60b2]">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="hidden text-[#0f60b2] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block">
                  →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-[#f8fbfe] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,96,178,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(8,40,91,0.10),transparent_36%)]" />

        <div className="relative mx-auto max-w-[1320px]">


          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-col gap-6 border-b border-[#e4edf6] pb-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Left Content */}
              <div className="max-w-3xl">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0f60b2]">
                  FRP Tank Benefits
                </p>

                <h3 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#08285b] sm:text-4xl lg:text-5xl">
                  Twelve reasons why FRP tanks are built for long-term performance.
                </h3>

                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Explore the key advantages of Banco FRP tanks across durability, lifecycle value, maintenance, and operational reliability.
                </p>
              </div>

              {/* Right CTA */}
              <div className="flex shrink-0 items-center gap-4">
                <Button
                  href="/comparison"
                  variant="accent"
                  className="rounded-full px-6 py-3 text-sm font-bold shadow-[0_10px_30px_rgba(8,40,91,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(8,40,91,0.24)]"
                >
                  Compare Banco vs Others
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {advantagesContent.benefits.map((item, index) => (
              <article key={item.title} className="group relative overflow-hidden rounded-3xl border border-[#dbe8f4] bg-white p-6 shadow-[0_18px_50px_rgba(8,40,91,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#0f60b2]/40 hover:shadow-[0_28px_70px_rgba(8,40,91,0.16)]" >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#08285b] via-[#0f60b2] to-[#72b8ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6ff] text-sm font-extrabold text-[#0f60b2] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0f60b2] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h4 className="mt-6 text-lg font-bold text-[#08285b] transition-colors duration-300 group-hover:text-[#0f60b2]">
                  {item.title}
                </h4>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-bold text-[#0f60b2] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Learn more
                  <span className="ml-2">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
