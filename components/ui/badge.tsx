import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "gray" | "accent";
  className?: string;
};

const toneClasses = {
  brand: "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200",
  gray: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
  accent: "bg-[#fff4ed] text-[#b54708] ring-1 ring-inset ring-[#f7d8c0]"
};

export function Badge({ children, tone = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
