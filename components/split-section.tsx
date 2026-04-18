import Image from "next/image";
import Link from "next/link";

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
      <div className={`overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white p-4 ${reverse ? "lg:order-2" : ""}`}>
        <Image src={imageSrc} alt={imageAlt} width={920} height={700} className="h-full w-full rounded-[1.5rem] object-cover" />
      </div>
      <div className={`space-y-5 ${reverse ? "lg:order-1" : ""}`}>
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">{title}</h2>
        <p className="text-base leading-8 text-[var(--muted)]">{text}</p>
        {points ? (
          <div className="grid gap-3">
            {points.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[var(--border)] bg-white px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                {item}
              </div>
            ))}
          </div>
        ) : null}
        {cta ? (
          <Link
            href={cta.href}
            className="inline-flex rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
