import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { ctaContent, pageMetadata } from "@/data/site";
import { PageHero } from "@/components/page-hero";
import { cn, siteContainer } from "@/lib/utils";
import { Virus, Droplets01, BezierCurve01, PackageCheck, RefreshCcw01, ShieldTick, Waves, Zap, Columns03, Tool02, Sun, Settings01 } from "@untitledui/icons";


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
  },
  {
    title: "Complete Drainage",
    description:
      "The base of the FRP Panel Type Water Tank is constructed with convex bottom panels. This not only provides a positive sealing pressure, which increases as the water height increases, but also enables a free flow of water from all parts of the tank to the concave drainage panel. Complete and fast drainage from the lowest point is thus ensured, with no possibility for static water to accumulate and become stale or contaminated."
  },
  {
    title: "Flexural Strength",
    description:
      "FRP Panel Type Water Tanks have excellent flexural strength, also known as modulus of rupture, bend strength, or fracture strength. It is defined as a material’s ability to resist deformation under load."
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

const benefitIconMap = {
  "Excellent Hygiene": Virus,
  "Pure Water Quality": Droplets01,
  "Design Flexibility": BezierCurve01,
  Portability: PackageCheck,
  Relocation: RefreshCcw01,
  "Leakage Resistance": ShieldTick,
  Drainage: Waves,
  "Strength and Durability": Zap,
  "Internal Tank Partition": Columns03,
  Repairing: Tool02,
  "UV Resistance": Sun,
  Maintenance: Settings01,
};

type BenefitTitle = keyof typeof benefitIconMap;

function BenefitIcon({ title }: { title: BenefitTitle }) {
  const Icon = benefitIconMap[title];

  return (
    <div className="group relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1aa7de] via-[#1599cf] to-[#0c5aa6] shadow-[0_12px_26px_rgba(12,90,166,0.22)]">
      <div className="absolute inset-[4px] rounded-[14px] border border-white/35" />

      <div className="relative flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-white" />
      </div>
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

        <div className={cn("relative", siteContainer)}>
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
        <div className={cn("relative", siteContainer)}>
          <BrochureHeading>Benefits of FRP Tanks</BrochureHeading>

          <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-[62px_1fr] gap-5"
              >
                <BenefitIcon title={item.title as BenefitTitle} />

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