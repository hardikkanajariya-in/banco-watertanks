import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ctaContent, downloadsPlaceholder, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.downloads.title,
  description: pageMetadata.downloads.description,
  alternates: {
    canonical: "/downloads"
  }
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Brochure, datasheet, installation guide."
        description="Technical documents and product literature for engineers, consultants, and contractors. PDF files pending client upload."
        primaryCta={{ label: "Request documents", href: "/contact" }}
      />

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Available Documents"
          title="Everything you need to specify BANCO FRP tanks."
          description="Download buttons will activate once the client approves and uploads the PDFs."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {downloadsPlaceholder.map((d) => (
            <article
              key={d.title}
              className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-6 shadow-sm"
            >
              <Badge tone="accent">Pending upload</Badge>
              <h3 className="mt-3 font-heading text-xl font-semibold text-[#0b3954]">{d.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d.description}</p>
              <div className="mt-5">
                <Button href="/contact" variant="secondary">
                  Request by email
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
