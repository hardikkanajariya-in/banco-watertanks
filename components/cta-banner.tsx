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
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
      <div className="overflow-hidden rounded-[2rem] border border-teal-200 bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_100%)] px-8 py-10 text-white lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-white/10 text-[#d8edf2] ring-0">Get in Touch</Badge>
            <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
            <p className="text-base leading-8 text-white/75">{text}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href={primary.href} className="bg-white text-[#102129] hover:bg-[#dce8eb]">
              {primary.label}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Button>
            {secondary ? <Button href={secondary.href} variant="secondary" className="border-white/20 bg-white/8 text-white hover:border-white/45 hover:bg-white/12 hover:text-white">{secondary.label}</Button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
