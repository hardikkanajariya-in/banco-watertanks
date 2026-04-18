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
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-center font-semibold whitespace-normal transition duration-200";

const sharedStyle = {
  fontSize: "0.875rem",
  lineHeight: "1.25rem"
} as const;

export function Button({ children, href, type = "button", variant = "primary", className }: ButtonProps) {
  const resolvedClassName = cn(sharedClassName, buttonClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={resolvedClassName} style={sharedStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={resolvedClassName} style={sharedStyle}>
      {children}
    </button>
  );
}
