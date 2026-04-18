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
    "bg-teal-700 text-white shadow-sm hover:bg-teal-800",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-teal-300 hover:text-teal-700",
  tertiary:
    "bg-teal-50 text-teal-700 hover:bg-teal-100"
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
