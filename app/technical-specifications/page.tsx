import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { DesignVisual } from "@/components/design-visual";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { SpecTable } from "@/components/spec-table";
import { TechnicalHighlights } from "@/components/technical-highlights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  certificationsPlaceholder,
  ctaContent,
  downloadsPlaceholder,
  pageMetadata,
  specificationHighlights,
  specificationSections
} from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.technical.title,
  description: pageMetadata.technical.description,
  alternates: {
    canonical: "/technical-specifications"
  }
};

export default function TechnicalSpecificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical Specifications"
        title="Engineering-grade reference for the BANCO FRP panel type water tank."
        description="Operating conditions, mechanical properties, panel dimensions, and assembly details — everything an engineer needs to specify BANCO FRP tanks."
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
      />

      {/* Summary */}
      <section id="spec-summary" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Specification Summary"
          title="Headline specs at a glance."
          description="The values below reflect the approved operating conditions, material properties, and assembly details."
        />
        <div className="mt-8">
          <TechnicalHighlights items={specificationHighlights} />
        </div>
      </section>

      {/* Spec tables */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="grid gap-6">
          {specificationSections.map((section) => (
            <SpecTable key={section.title} title={section.title} rows={section.rows} />
          ))}
        </div>
      </section>

      {/* Panel design visual */}
      <section id="panel-details" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <DesignVisual />
      </section>

      {/* Materials of construction */}
      <section id="materials" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Badge>Materials of Construction</Badge>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-[#0b3954]">
                FRP panels plus premium steel hardware.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Hot-press molded FRP panels with SS304/316 or galvanized steel interior bracing. HDG fasteners throughout.
                Sealing gaskets between every panel joint.
              </p>
            </div>
            <ul className="space-y-3 text-sm leading-7 text-slate-700">
              <li className="border-b border-slate-200 pb-3"><span className="font-semibold text-[#0b3954]">Panels:</span> Hot-press molded FRP, 1000 × 1000 mm</li>
              <li className="border-b border-slate-200 pb-3"><span className="font-semibold text-[#0b3954]">Bracing:</span> SS304/316 or galvanized steel</li>
              <li className="border-b border-slate-200 pb-3"><span className="font-semibold text-[#0b3954]">Fasteners:</span> HDG bolts, nuts, washers</li>
              <li className="border-b border-slate-200 pb-3"><span className="font-semibold text-[#0b3954]">Flanges:</span> HDG or SS304/316</li>
              <li><span className="font-semibold text-[#0b3954]">Ladders:</span> Inside/outside, galvanized or stainless steel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance (PLACEHOLDER) */}
      <section id="compliance" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Compliance & Standards"
          title="Tested and specified to recognized standards."
          description="Client to confirm applicable compliance marks, test reports, and certifications."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {certificationsPlaceholder.map((c, i) => (
            <div
              key={i}
              className="rounded-[1.25rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600"
            >
              <p className="font-semibold text-slate-700">{c.name}</p>
              <p className="mt-1">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Downloads"
          title="Technical datasheet and drawings."
          description="PDF assets pending client upload."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {downloadsPlaceholder.slice(0, 2).map((d) => (
            <article
              key={d.title}
              className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-5 shadow-sm"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#0b3954]">{d.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d.description}</p>
              </div>
              <Button href="/downloads" variant="secondary">Coming soon</Button>
            </article>
          ))}
        </div>
      </section>

      {/* Custom spec CTA */}
      <section id="installation-or-support" className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <SectionIntro
            eyebrow="Installation & Support"
            title="Fast, tool-free on-site assembly."
            description="Assembly is straightforward using standard tools. Installation can be carried out by the user or contractor. Need a custom specification? Our engineers can help."
          />
          <div className="mt-6">
            <Button href="/contact" variant="accent">Talk to our engineers</Button>
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
