import Link from "next/link";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  compact?: boolean;
  theme?: "light" | "dark";
  className?: string;
};

export function SiteLogo({ compact = false, theme = "light", className }: SiteLogoProps) {
  const isDark = theme === "dark";

  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border shadow-[0_10px_24px_-18px_rgba(12,45,82,0.85)]",
          isDark ? "bg-white" : "bg-[#0c3d86]"
        )}
      >
        <span className={cn("absolute inset-y-0 left-0 w-[34%]", isDark ? "bg-[#0c3d86]" : "bg-[#0a56a4]")} />
        <span className={cn("absolute right-0 top-0 h-[36%] w-[38%]", isDark ? "bg-[#29b9ec]" : "bg-[#2fc0ef]")} />
        <span className={cn("absolute bottom-0 right-0 h-[36%] w-[38%]", isDark ? "bg-[#29b9ec]" : "bg-[#2fc0ef]")} />
        <span
          className={cn(
            "relative z-10 h-[68%] w-[40%] rounded-[999px_999px_999px_999px/70%_70%_100%_100%] border-[3px] border-white bg-[#29b9ec] shadow-[inset_0_2px_6px_rgba(255,255,255,0.35)]",
            isDark ? "opacity-95" : ""
          )}
        />
      </div>
      <div className="min-w-0">
        <p className={cn("font-heading text-sm font-semibold uppercase tracking-[0.22em]", isDark ? "text-white" : "text-[#0c3d86]")}>BANCO</p>
        <p className={cn("truncate text-xs uppercase tracking-[0.16em]", isDark ? "text-white/70" : "text-slate-500", compact && "hidden sm:block")}>Water Tank</p>
      </div>
    </Link>
  );
}
