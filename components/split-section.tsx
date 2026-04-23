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
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
        {/* Image side */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-[1.5rem] bg-[#29b9ec]/10 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#0c3d86]/8 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d8e8f4] bg-white p-2 shadow-[0_24px_70px_-36px_rgba(12,61,134,0.28)] sm:rounded-[2rem]">
              <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={920}
                  height={700}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,61,134,0.14),transparent_40%)]" />
              </div>
            </div>

            <div className="absolute -bottom-5 left-5 hidden rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                BANCO
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0c3d86]">
                Reliable engineered storage systems
              </p>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
          <div className="max-w-2xl">
            {eyebrow ? (
              <div className="mb-5">
                <Badge>{eyebrow}</Badge>
              </div>
            ) : null}

            <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0c2d52]">
              {title}
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-[17px]">
              {text}
            </p>

            {points?.length ? (
              <div className="mt-8 grid gap-3">
                {points.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-[#d8e8f4] bg-white p-4 shadow-sm transition-colors hover:bg-[#f8fcff]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf4fb]">
                        <CheckCircleBroken
                          className="size-4 text-[#104a84]"
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                        {item}
                      </span>
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