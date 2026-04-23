import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "accent";
  className?: string;
};

const buttonClasses = {
  primary:
    "bg-[#104a84] text-white shadow-[0_18px_38px_-26px_rgba(16,74,132,0.8)] hover:bg-[#0c3c6c]",
  secondary:
    "border border-[#c3d7ef] bg-white text-[#102033] hover:border-[#1f5f9d] hover:text-[#104a84]",
  tertiary:
    "bg-[#eef5ff] text-[#104a84] hover:bg-[#dcecff]",
  accent:
    "bg-[#08213c] text-white shadow-[0_18px_40px_-26px_rgba(8,33,60,0.88)] hover:bg-[#06172b]"
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
