type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, description, align = "left" }: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-8 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
