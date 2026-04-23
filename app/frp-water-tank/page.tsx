import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SpecTable } from "@/components/spec-table";
import { BlobMask } from "@/components/ui/blob-mask";
import { ctaContent, pageMetadata, productContent } from "@/data/site";
import { CheckCircleBroken, LayersThree01 } from "@untitledui/icons";

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

      {/* Safe Water Storage - Elegant Split Section */}
      <section id="safe-water-storage" className="relative w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[radial-gradient(circle,rgba(41,185,236,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
            <div className="relative lg:pl-10 order-last lg:order-first">
              <div className="absolute inset-0 bg-[#f4f9fd] rounded-[3rem] -z-10 -translate-x-5 translate-y-5 rotate-2"></div>
              <BlobMask variant={4} className="w-full h-auto aspect-[4/3] md:aspect-[5/4] shadow-[0_24px_50px_-15px_rgba(12,61,134,0.2)]">
                <Image
                  src="/images/product-storage-tank.jpg"
                  alt="BANCO FRP water tank product visual"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </BlobMask>
              <div className="absolute -bottom-6 -right-4 sm:bottom-10 sm:-right-8 rounded-[1.5rem] bg-white p-6 shadow-xl border border-[#eef4f9] max-w-[220px]">
                <div className="flex items-center gap-3 text-[#29b9ec] mb-2">
                  <CheckCircleBroken className="size-6" strokeWidth={2} />
                  <p className="text-xl font-bold text-[#0c3d86]">100%</p>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Hygienic Storage</p>
              </div>
            </div>

            <div className="space-y-8">
              <SectionIntro
                eyebrow="Safe Water Storage System"
                title="Designed and developed to meet demanding water storage requirements."
                description={productContent.safeWaterStorage[0]}
              />
              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                {productContent.safeWaterStorage.slice(1).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Panel Design - Elevated Banners */}
      <section id="standard-panel-design" className="relative w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-[#08285b] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(41,185,236,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:items-start text-white">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9fe9ff] ring-1 ring-white/20">
                Standard Panel Design
              </p>
              <h2 className="mb-6 text-[clamp(2rem,3vw,2.5rem)] font-bold leading-tight text-white tracking-tight">
                {productContent.standardPanelDesign.title}
              </h2>
              <p className="text-[16px] leading-relaxed text-[#c7def0] max-w-lg font-medium">
                {productContent.standardPanelDesign.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {productContent.standardPanelDesign.callouts.map((item, i) => (
                <article key={item} className="flex flex-col rounded-[1.5rem] bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#29b9ec]/20 text-[#29b9ec]">
                    <LayersThree01 className="size-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-white/90">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="technical-specifications" className="w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-[#f8fbff] border-y border-[#eaf2f8]">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionIntro
              eyebrow="Technical Specifications"
              title="Technical data taken directly from the brochure."
              description="Operating conditions and mechanical properties remain visible in a clean engineering-friendly layout."
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
            {productContent.technicalSpecifications.map((section) => (
              <SpecTable key={section.title} title={section.title} rows={section.rows} />
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section id="features" className="w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionIntro
              eyebrow="Features"
              title="Assembly details and accessories organized for quick review."
              description="The website now follows the brochure sequence, so engineers and clients can move from storage purpose to panel design, specifications, and features in order."
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            {productContent.features.map((group) => (
              <article key={group.title} className="rounded-[2rem] border border-[#eaf2f8] bg-white p-8 shadow-[0_8px_30px_rgba(12,61,134,0.04)]">
                <h3 className="text-2xl font-bold text-[#0c3d86] mb-6 flex items-center justify-between">
                  {group.title}
                  <div className="h-2 w-12 rounded-full bg-[#e8f1f8]"></div>
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={item} className="flex items-start gap-4 rounded-[1.2rem] bg-[#f8fbff] p-4 transition-colors hover:bg-[#eef5fb] text-[15px] leading-relaxed text-slate-700 font-medium">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0c3d86] text-white text-[10px] font-bold">
                        {i + 1}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
