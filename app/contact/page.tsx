import type { Metadata } from "next";

import { ContactBlock } from "@/components/contact-block";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/data/site";

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
      <PageHero eyebrow="Contact Us" />

      <section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-14 2xl:px-14">
        <ContactBlock />
      </section>
    </>
  );
}
