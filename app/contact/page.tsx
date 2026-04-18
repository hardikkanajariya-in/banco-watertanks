import type { Metadata } from "next";

import { ContactBlock } from "@/components/contact-block";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { contactDetails, pageMetadata } from "@/data/site";

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
        title="A straightforward inquiry page focused on low-friction business contact."
        description="The static implementation keeps the page practical: direct phone and email visibility, a simple inquiry form, and clear business information without decorative distractions."
      />

      <section className="container-shell section-shell">
        <SectionIntro
          eyebrow="Contact Details"
          title="Use this page for quotations, technical discussions, or general product inquiries."
          description="The current details are placeholders and should be replaced with final phone, email, and address information before launch."
        />
        <div className="mt-8">
          <ContactBlock />
        </div>
      </section>

      <section className="container-shell section-shell">
        <div className="surface-panel p-8">
          <SectionIntro
            eyebrow="Business Information"
            title="Full address, map embed, and response workflow can be expanded here later if required."
            description={`Current placeholder location: ${contactDetails.address}. You can also add GST, regional office details, or WhatsApp contact once the client confirms what should be public.`}
          />
        </div>
      </section>
    </>
  );
}
