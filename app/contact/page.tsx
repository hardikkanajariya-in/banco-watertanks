import type { Metadata } from "next";

import { ContactBlock } from "@/components/contact-block";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { contactContent, pageMetadata } from "@/data/site";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={contactContent.title}
        description={contactContent.description}
      />

      <section className="w-full px-4 py-14 sm:px-6 lg:px-10 lg:py-18 2xl:px-14">
        <SectionIntro
          eyebrow="How We Help"
          title="Speak with the team behind the BANCO water tank line."
          description="Use the brochure-backed contact details below for technical, commercial, and application discussions."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contactContent.supportPoints.map((item) => (
            <article key={item} className="rounded-[1.5rem] border border-[#d7e4f2] bg-white p-5 shadow-sm">
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
