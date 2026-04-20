import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import { applicationClusters, caseStudiesPlaceholder, ctaContent, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.applications.title,
  description: pageMetadata.applications.description,
  alternates: {
    canonical: "/applications"
  }
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="One tank system — every water storage use-case."
        description="From individual residences to major building complexes and industrial sites, BANCO FRP panel tanks adapt to the demands of each project."
        primaryCta={{ label: "Discuss your project", href: "/contact" }}
      />

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Use-Case Clusters"
          title="Six application families. Countless projects."
          description="Explore how BANCO FRP tanks serve residential, commercial, industrial, infrastructure, irrigation, and emergency needs."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {applicationClusters.map((c) => (
            <article
              key={c.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Badge>{c.title}</Badge>
              <p className="mt-4 text-sm leading-7 text-slate-600">{c.description}</p>
              <ul className="mt-5 space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <span
                      className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-aqua"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Case Studies"
          title="Projects delivered across Tanzania."
          description="Featured project case studies — pending client confirmation and approval."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudiesPlaceholder.map((cs, i) => (
            <article
              key={i}
              className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm"
            >
              <Badge tone="accent">Pending confirmation</Badge>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#0b3954]">{cs.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{cs.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
