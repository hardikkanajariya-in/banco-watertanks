import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "gray" | "accent";
  className?: string;
};

const toneClasses = {
  brand: "bg-[#eef5ff] text-[#104a84] ring-1 ring-inset ring-[#c3d7ef]",
  gray: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
  accent: "bg-[#0c2d52] text-white ring-1 ring-inset ring-[#2d74b9]"
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
