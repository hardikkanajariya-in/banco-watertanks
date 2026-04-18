import Link from "next/link";

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
      <div className="rounded-[2rem] border border-[var(--border)] bg-[#102129] px-8 py-10 text-white lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fc4d0]">Get in Touch</p>
            <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
            <p className="text-base leading-8 text-white/75">{text}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={primary.href} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#102129] transition hover:bg-[#dce8eb]">
              {primary.label}
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
