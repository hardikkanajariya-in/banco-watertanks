import type { Metadata } from "next";

import { ApplicationGrid } from "@/components/application-grid";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { applicationsContent, ctaContent, pageMetadata } from "@/data/site";

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
        title="Applications directly mapped from the BANCO brochure."
        description={applicationsContent.intro}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
      />

      <section className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="Application Coverage"
          title="From factories and housing to hospitals and public infrastructure."
          description="The same modular FRP system adapts to many different water storage environments."
        />
        <div className="mt-8">
          <ApplicationGrid items={applicationsContent.items} />
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
