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
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className={`overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm ${reverse ? "lg:order-2" : ""}`}>
        <Image src={imageSrc} alt={imageAlt} width={920} height={700} className="h-full w-full rounded-[1.5rem] object-cover" />
      </div>
      <div className={`space-y-5 ${reverse ? "lg:order-1" : ""}`}>
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{title}</h2>
        <p className="text-lg leading-8 text-slate-600">{text}</p>
        {points ? (
          <div className="grid gap-3">
            {points.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-900">
                <div className="flex items-start gap-3">
                  <CheckCircleBroken className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {cta ? (
          <Button href={cta.href} variant="secondary">
            {cta.label}
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
