import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SpecTable } from "@/components/spec-table";
import { ctaContent, pageMetadata, productContent } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.product.title,
  description: pageMetadata.product.description,
  alternates: {
    canonical: "/frp-water-tank"
  }
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="FRP Water Tank"
        title="Safe water storage, standard panel design, technical specifications, and brochure-led features."
        description={productContent.intro}
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Comparison", href: "/comparison" }}
      />

      <section id="safe-water-storage" className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[#d7e4f2] bg-white p-3 shadow-sm">
            <Image
              src="/images/product-storage-tank.jpg"
              alt="BANCO FRP water tank product visual"
              width={920}
              height={720}
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="Safe Water Storage System"
              title="Designed and developed to meet demanding water storage requirements."
              description={productContent.safeWaterStorage[0]}
            />
            <div className="mt-6 space-y-4">
              {productContent.safeWaterStorage.slice(1).map((item) => (
                <p key={item} className="text-base leading-8 text-slate-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="standard-panel-design" className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <div className="rounded-[2rem] border border-[#d7e4f2] bg-white p-6 shadow-sm sm:p-10">
          <SectionIntro
            eyebrow="Standard Panel Design"
            title={productContent.standardPanelDesign.title}
            description={productContent.standardPanelDesign.description}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {productContent.standardPanelDesign.callouts.map((item) => (
              <article key={item} className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-5">
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-specifications" className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="Technical Specifications"
          title="Technical data taken directly from the brochure."
          description="Operating conditions and mechanical properties remain visible in a clean engineering-friendly layout."
        />
        <div className="mt-8 grid gap-6">
          {productContent.technicalSpecifications.map((section) => (
            <SpecTable key={section.title} title={section.title} rows={section.rows} />
          ))}
        </div>
      </section>

      <section id="features" className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="Features"
          title="Assembly details and accessories organized for quick review."
          description="The website now follows the brochure sequence, so engineers and clients can move from storage purpose to panel design, specifications, and features in order."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {productContent.features.map((group) => (
            <article key={group.title} className="rounded-[1.75rem] border border-[#d7e4f2] bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#0c2d52]">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="rounded-[1.15rem] bg-[#f8fbff] px-4 py-3 text-sm leading-7 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
