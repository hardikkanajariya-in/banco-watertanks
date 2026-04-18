import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "gray" | "accent";
  className?: string;
};

const toneClasses = {
  brand: "bg-[var(--color-brand-50)] text-[var(--brand)] ring-1 ring-inset ring-[var(--color-border-brand)]",
  gray: "bg-[var(--surface-alt)] text-[var(--color-fg-secondary)] ring-1 ring-inset ring-[var(--color-border-secondary)]",
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
