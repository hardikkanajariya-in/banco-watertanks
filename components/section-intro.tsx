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
  align = "center",
}: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <div className="relative w-full">
      <div
        className={[
          "w-full",
          isCenter ? "text-center" : "",
        ].join(" ")}
      >
        {/* EYEBROW */}
        {eyebrow && (
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0f60b2]">
            {eyebrow}
          </p>
        )}

        {/* TITLE */}
        <h2
          className={[
            "mt-4 font-semibold leading-[1.05] tracking-[-0.035em] text-[#0c3d86]",
            "text-[clamp(2rem,3.5vw,3.4rem)]",
            isCenter ? "mx-auto max-w-[28ch]" : "max-w-[40ch]",
          ].join(" ")}
        >
          {title}
        </h2>

        {/* DIVIDER */}
        <div
          className={[
            "mt-6 h-[2px] w-16 bg-[#29b9ec]",
            isCenter ? "mx-auto" : "",
          ].join(" ")}
        />

        {/* DESCRIPTION */}
        {description && (
          <p
            className={[
              "mt-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8",
              isCenter ? "mx-auto max-w-[60ch]" : "max-w-[60ch]",
            ].join(" ")}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}