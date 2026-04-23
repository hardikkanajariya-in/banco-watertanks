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
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className={isCenter ? "flex justify-center" : ""}>
          <Badge>{eyebrow}</Badge>
        </div>
      ) : null}

      <h2 className="mt-4 max-w-[13ch] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-tight text-[#0c3d86]">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 text-[15px] leading-8 text-slate-600 sm:text-[17px] ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}