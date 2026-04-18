import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
};

const buttonClasses = {
  primary:
    "bg-[var(--color-bg-brand-primary)] text-white shadow-[var(--shadow-xs)] hover:bg-[var(--color-bg-brand-primary_hover)]",
  secondary:
    "border border-[var(--color-border-primary)] bg-white text-[var(--foreground)] hover:border-[var(--color-border-brand)] hover:text-[var(--brand)]",
  tertiary:
    "bg-[var(--color-bg-brand-secondary)] text-[var(--brand)] hover:bg-[var(--color-bg-brand-secondary_hover)]"
};

const sharedClassName =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200";

export function Button({ children, href, type = "button", variant = "primary", className }: ButtonProps) {
  const resolvedClassName = cn(sharedClassName, buttonClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={resolvedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={resolvedClassName}>
      {children}
    </button>
  );
}
