import { ArrowRight } from "@untitledui/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CtaBannerProps = {
  title: string;
  text: string;
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
};

export function CtaBanner({ title, text, primary, secondary }: CtaBannerProps) {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-10 lg:py-10 2xl:px-14">
      <div className="banco-cta-gradient overflow-hidden rounded-[2rem] border border-[#2d74b9] px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-white/10 text-[#d8edf2] ring-0">Get in Touch</Badge>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
            <p className="text-base leading-8 text-white/75">{text}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href={primary.href} className="w-full bg-white text-[#08213c] hover:bg-[#e5eef8] sm:w-auto">
              {primary.label}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Button>
            {secondary?.href != "" ? <Button href={secondary?.href} variant="secondary" className="w-full border-white/20 bg-white/10 text-white hover:border-white/50 hover:bg-white/14 hover:text-white sm:w-auto">{secondary?.label}</Button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
