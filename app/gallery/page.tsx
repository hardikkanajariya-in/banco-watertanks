import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import { ctaContent, galleryPlaceholder, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.gallery.title,
  description: pageMetadata.gallery.description,
  alternates: {
    canonical: "/gallery"
  }
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="BANCO in pictures."
        description="Installations, factory operations, panels, and accessories. Photo set pending client upload."
      />

      <section className="w-full px-4 py-12 sm:px-6 lg:px-10 lg:py-16 2xl:px-14">
        <SectionIntro
          eyebrow="Photos"
          title="Project and factory gallery."
          description="Images will be added after client approval and upload."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPlaceholder.map((g, i) => (
            <figure
              key={i}
              className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center"
            >
              <Badge tone="accent">Pending upload</Badge>
              <figcaption className="text-sm text-slate-500">{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}
