import type { Metadata } from "next";

import { ContactBlock } from "@/components/contact-block";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/data/site";
import { cn, siteContainer } from "@/lib/utils";

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
      />

      <section className="relative w-full px-4 py-16 sm:px-6 lg:px-10 lg:py-24 2xl:px-14 bg-[#f4f9fd] border-t border-[#eaf2f8]">
        <div className={siteContainer}>
          <ContactBlock />
        </div>
      </section>
    </>
  );
}
