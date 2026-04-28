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
          isCenter ? "mx-auto text-center" : "",
        ].join(" ")}
      >
        {/* EYEBROW */}
        {eyebrow ? (
          <p
            className={[
              "mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#0c5aa6]",
              isCenter ? "text-center" : "",
            ].join(" ")}
          >
            {eyebrow}
          </p>
        ) : null}

        {/* TITLE */}
        <h2
          className={[
            "font-extrabold uppercase leading-[1.08] tracking-[0.12em] text-[#0c5aa6]",
            "text-[clamp(1.8rem,4vw,2.65rem)]",
            isCenter ? "mx-auto max-w-[24ch]" : "max-w-[52ch]",
          ].join(" ")}
        >
          {title}
        </h2>

        {/* BROCHURE DIVIDER */}
        <div
          className={[
            "mt-2 h-[3px] bg-gradient-to-r from-[#0c5aa6] via-[#78aed7] to-transparent",
            isCenter ? "mx-auto w-full max-w-[760px]" : "w-full max-w-[820px]",
          ].join(" ")}
        />

        {/* DESCRIPTION */}
        {description ? (
          <p
            className={[
              "mt-5 text-[15px] font-medium leading-8 text-[#4a4a4a] sm:text-base sm:leading-8",
              isCenter ? "mx-auto max-w-[760px]" : "max-w-[760px]",
            ].join(" ")}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}