import { Badge } from "@/components/ui/badge";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className={isCenter ? "flex justify-center" : ""}>
          <Badge>{eyebrow}</Badge>
        </div>
      ) : null}

      <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#0c3d86]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}