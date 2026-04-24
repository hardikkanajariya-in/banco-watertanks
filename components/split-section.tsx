import Image from "next/image";
import { ArrowRight, CheckCircleBroken } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type SplitSectionProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  text: string;
  points?: string[];
  cta?: {
    label: string;
    href: string;
  };
  reverse?: boolean;
};

export function SplitSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  text,
  points,
  cta,
  reverse = false,
}: SplitSectionProps) {
  return (
    <section className="relative">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative border border-[#d2dfe8] bg-white p-3 shadow-[0_24px_60px_-44px_rgba(12,61,134,0.34)]">
            <div className="flex items-center justify-between border-b border-[#d2dfe8] px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              <span>BANCO</span>
              <span className="text-[#0c3d86]">Group Overview</span>
            </div>
            <div className="relative mt-3 overflow-hidden">
              <div className="relative">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={920}
                  height={700}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-3 border-t border-[#d2dfe8] px-2 pt-4 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Manufacturing
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0c3d86]">
                  Reliable engineered storage systems
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Market
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Tanzania-wide industrial and commercial projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
          <div className="max-w-2xl">
            {eyebrow ? (
              <div className="mb-4">
                <Badge>{eyebrow}</Badge>
              </div>
            ) : null}

            <h2 className="max-w-[17ch] text-[clamp(1.95rem,3.4vw,3.1rem)] font-semibold leading-[1.03] tracking-tight text-[#0c2d52]">
              {title}
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              {text}
            </p>

            {points?.length ? (
              <div className="mt-8 border-y border-[#d2dfe8]">
                {points.map((item, index) => (
                  <div
                    key={item}
                    className="grid gap-3 border-b border-[#d2dfe8] py-4 last:border-b-0 sm:grid-cols-[4rem_1fr]"
                  >
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f60b2]">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <CheckCircleBroken className="size-4" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {cta ? (
              <div className="mt-8">
                <Button href={cta.href} variant="secondary" className="w-full sm:w-auto">
                  {cta.label}
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
