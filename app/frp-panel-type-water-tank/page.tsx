import type { Metadata } from "next";

import { BenefitsGrid } from "@/components/benefits-grid";
import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SplitSection } from "@/components/split-section";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  accessoriesList,
  assemblyDetails,
  benefits,
  capacitySamplePlaceholder,
  ctaContent,
  customizationOptions,
  downloadsPlaceholder,
  pageMetadata,
  productAdvantages,
  productFeatures,
  technicalHighlights
} from "@/data/site";

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
      <PageHero
        eyebrow="FRP Panel Type Water Tank"
        title="Pure, clean water at all times — for every application."
        description="The FRP panel type water tank system is designed for safe, efficient, and flexible long-term water storage. From individual homes to major building and industrial complexes, it has become the system of choice worldwide."
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Specifications", href: "/technical-specifications" }}
      />

      {/* Overview */}
      <section id="overview" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SplitSection
          imageSrc="/images/product-storage-tank.jpg"
          imageAlt="FRP panel type water tank illustration"
          eyebrow="What It Is"
          title="Modular FRP panel storage engineered to meet modern water demands."
          text="The system is intended to meet growing water demand with uncompromising quality and reliability — from individual residences to major building, municipal, irrigation, and industrial applications."
          points={productFeatures}
        />
      </section>

      {/* Assembly */}
      <section id="assembly" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Assembly Details"
          title="Designed for fast, reliable on-site assembly."
          description="Basic tools and equipment are required — installation can be carried out by the user or contractor."
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {assemblyDetails.map((item, i) => (
            <li key={i} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand-aqua">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Accessories */}
      <section id="accessories" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Accessories"
          title="A complete accessory package, standard with every tank."
          description="Roof, side, bottom, and manhole panels at 1000 × 1000 mm, plus bracing, ladders, flanges, level indicators, overflow and drain nozzles."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {accessoriesList.map((a) => (
            <article key={a.name} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-[#0b3954]">{a.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{a.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Key Advantages"
          title="Pure clean water always."
          description="Specifications and exclusive design features protect against static water, algae, corrosion, bacteria, and external contamination."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productAdvantages.map((a) => (
            <article
              key={a.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Badge>{a.title}</Badge>
              <p className="mt-4 text-sm leading-7 text-slate-600">{a.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Design Visual */}
      <section id="design" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <DesignVisual />
      </section>

      {/* Benefits */}
      <section id="benefits" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Benefits"
          title="Twelve reasons to choose BANCO FRP panel tanks."
          description="Hygiene, strength, portability, repairability, and dependable long-term performance — engineered end-to-end."
        />
        <div className="mt-8">
          <BenefitsGrid items={benefits} />
        </div>
      </section>

      {/* Technical highlights */}
      <section id="features" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Technical Highlights"
          title="Why the BANCO FRP tank performs."
          description="A summary of the assembly system, panel finish, bracing options, light resistance, and drainage performance."
        />
        <div className="mt-8">
          <TechnicalHighlights items={technicalHighlights} />
        </div>
      </section>

      {/* Customization */}
      <section id="customization" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Customization"
          title="Configurable to match your project."
          description="Shape, capacity, bracing material, ladders, flanges, and internal partitions can be customized."
        />
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {customizationOptions.map((o) => (
            <li key={o} className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm">
              <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
              <span className="text-sm leading-7 text-slate-700">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Size & capacity (PLACEHOLDER) */}
      <section id="capacity" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Size & Capacity"
          title="From small residential tanks to large-scale infrastructure."
          description={capacitySamplePlaceholder.note}
        />
        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-dashed border-slate-300 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-5 py-3">Class</th>
                <th className="px-5 py-3">Typical Capacity</th>
                <th className="px-5 py-3">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {capacitySamplePlaceholder.rows.map(([cls, cap, use]) => (
                <tr key={cls} className="border-t border-slate-100">
                  <td className="px-5 py-3 font-semibold text-[#0b3954]">{cls}</td>
                  <td className="px-5 py-3 text-slate-700">{cap}</td>
                  <td className="px-5 py-3 text-slate-600">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Installation & Warranty (PLACEHOLDER) */}
      <section id="installation" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm sm:p-8">
            <Badge tone="accent">Pending client content</Badge>
            <h3 className="mt-3 font-heading text-xl font-semibold text-[#0b3954]">Installation & Lead Time</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Delivery timelines, installation teams or partners, and on-site support details — pending client
              confirmation. Contact Neomech (T) Ltd. for project-specific information.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm sm:p-8">
            <Badge tone="accent">Pending client content</Badge>
            <h3 className="mt-3 font-heading text-xl font-semibold text-[#0b3954]">Warranty</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Warranty terms pending client confirmation. Expected service life and after-sales support details will
              be published here.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads (PLACEHOLDER) */}
      <section id="downloads" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Downloads"
          title="Brochure, datasheet, installation guide."
          description="Downloadable PDFs pending client upload."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {downloadsPlaceholder.map((d) => (
            <article
              key={d.title}
              className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-5 shadow-sm"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#0b3954]">{d.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d.description}</p>
              </div>
              <Button href="/downloads" variant="secondary">
                Coming soon
              </Button>
            </article>
          ))}
        </div>
      </section>

      <div id="cta">
        <CtaBanner {...ctaContent} />
      </div>
    </>
  );
}
