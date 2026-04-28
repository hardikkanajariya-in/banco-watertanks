import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { ctaContent, pageMetadata } from "@/data/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: pageMetadata.advantages.title,
  description: pageMetadata.advantages.description,
  alternates: {
    canonical: "/advantages"
  }
};

const tankAdvantages = [
  {
    title: "No Algae Growth",
    description:
      "The growth of algae and other micro-organisms is closely related to light. To prevent this requires light transmission of less than 0.1% in direct sunlight.\n\nAll standard FRP Panel Type Water Tanks molded panels have a light transmission of less than 0.005%, to prevent algae growth even if the tank is installed in full sunlight. Growth of algae, if allowed to occur, will adversely affect water taste, and can lead to disease such as gastroenteritis."
  },
  {
    title: "No Bacterial Growth",
    description:
      "All FRP Panel Type Water Tanks are hot press molded with perfectly smooth finish, eliminating the problem at the source. Conventional tanks allow stored water to be in contact with rough surfaces, this creates a breeding ground for bacterial growth."
  },
  {
    title: "Minimal Cleaning Requirement",
    description:
      "The smooth interior surfaces, and free-draining design of FRP Panel Type Water Tanks minimizes any opportunity for pollutants, whether originating internally or externally to develop and accumulate. Routine cleaning requirements are consequently simple and infrequent, with no risk of leaving residual material or cleaning agents inside the tank."
  }
];

const benefits = [
  {
    title: "Excellent Hygiene",
    description: "High resistance to bacteria growth and algae formation"
  },
  {
    title: "Pure Water Quality",
    description:
      "Engineered design ensures complete manhole sealing to prevent any contamination from dust or insects."
  },
  {
    title: "Design Flexibility",
    description:
      "High flexibility- tank shape and capacity can be fully customised depending on the location"
  },
  {
    title: "Portability",
    description:
      "Innovative design allows even large capacity tanks to be transported safely"
  },
  {
    title: "Relocation",
    description:
      "Designed for easy disassembly, portability, relocation and re-installation at new location"
  },
  {
    title: "Leakage Resistance",
    description:
      "Unique design can handle high water pressure and has high resistance to leakages"
  },
  {
    title: "Drainage",
    description: "Unique design allows 100% drainage"
  },
  {
    title: "Strength and Durability",
    description:
      "Excellent compression, tension, strength allows for high durability"
  },
  {
    title: "Internal Tank Partition",
    description:
      "Fully customisable and changeable partitions are possible depending on application."
  },
  {
    title: "Repairing",
    description:
      "In case of accidental damage, specific panels can be replaced using basic tools"
  },
  {
    title: "UV Resistance",
    description: "Highly resistant"
  },
  {
    title: "Maintenance",
    description: "Not required"
  }
];

function BrochureHeading({ children }: { children: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold uppercase tracking-[0.12em] text-[#0c5aa6]">
        {children}
      </h2>

      <div className="mt-2 h-[3px] w-full bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent" />
    </div>
  );
}

function WaterBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#edf8ff] via-[#f8fcff] to-transparent opacity-95" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-full rounded-[50%] bg-[#dff1fb] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-full bg-[radial-gradient(circle_at_30%_50%,rgba(12,90,166,0.08),transparent_18%),radial-gradient(circle_at_60%_55%,rgba(12,90,166,0.06),transparent_16%),radial-gradient(circle_at_75%_70%,rgba(12,90,166,0.05),transparent_20%)]" />
    </>
  );
}

function BenefitIcon({ index }: { index: number }) {
  return (
    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#1aa7de] bg-[#1aa7de] shadow-[inset_0_0_0_4px_white,0_8px_18px_rgba(12,90,166,0.18)]">
      <span className="text-sm font-extrabold text-white">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Advantages"
      />
      {/* FRP Tank Advantages */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className="relative mx-auto max-w-5xl">
          <BrochureHeading>FRP Tank Advantages</BrochureHeading>

          <div className="mb-8 flex justify-end">
            <p className="max-w-sm text-right text-xl font-bold italic leading-snug text-[#0c5aa6] sm:text-2xl">
              “Pure, clean water. Always”
            </p>
          </div>

          <div className="mb-7 bg-[#0c5aa6] px-5 py-4 sm:px-6">
            <p className="text-[15px] font-medium leading-7 text-white sm:text-base">
              Pure, clean water at all times and for all purposes – drinking,
              domestic or industrial – is what the FRP Panel Type Water Tank is
              designed to deliver. The specifications and exclusive design
              features of the system protect against any occurrence of static
              water, growth of algae, contamination from corrosion or bacteria,
              or accumulation of externally introduced material.
            </p>
          </div>

          <div className="space-y-8">
            {tankAdvantages.map((item) => (
              <article key={item.title}>
                <h3 className="mb-3 text-[15px] font-extrabold uppercase italic tracking-wide text-[#0c5aa6] sm:text-base">
                  {item.title}
                </h3>

                <div className="space-y-5 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base">
                  {item.description.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of FRP Tanks */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20 2xl:px-14">
        <WaterBackground />

        <div className="relative mx-auto max-w-5xl">
          <BrochureHeading>Benefits of FRP Tanks</BrochureHeading>

          <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-[58px_1fr] gap-5"
              >
                <BenefitIcon index={index} />

                <div>
                  <h3 className="mb-2 text-[15px] font-extrabold uppercase italic tracking-wide text-[#0c5aa6]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] font-extrabold leading-6 text-[#10a8e8]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner {...ctaContent} />
    </>
  );
}