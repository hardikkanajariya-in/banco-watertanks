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
    <div className={`max-w-3xl space-y-3 ${alignment}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="text-2xl font-semibold leading-tight text-[#0c3d86] sm:text-3xl md:text-[2.6rem]">{title}</h2>
      {description ? <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p> : null}
    </div>
  );
}
