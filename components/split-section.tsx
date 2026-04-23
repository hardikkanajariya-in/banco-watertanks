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

export function SplitSection({ imageSrc, imageAlt, eyebrow, title, text, points, cta, reverse = false }: SplitSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <Image src={imageSrc} alt={imageAlt} width={920} height={700} className="aspect-[4/3] h-full w-full rounded-[1.25rem] object-cover sm:rounded-[1.5rem]" />
      </div>
      <div className={`space-y-5 ${reverse ? "lg:order-1" : ""}`}>
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h2 className="text-2xl font-semibold leading-tight text-[#0c2d52] sm:text-3xl md:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{text}</p>
        {points ? (
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {points.map((item) => (
              <div key={item} className="py-3 text-sm leading-7 text-slate-900">
                <div className="flex items-start gap-3">
                  <CheckCircleBroken className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {cta ? (
          <Button href={cta.href} variant="secondary" className="w-full sm:w-auto">
            {cta.label}
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
