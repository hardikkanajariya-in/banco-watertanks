import { Badge } from "@/components/ui/badge";

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
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
