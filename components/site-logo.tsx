import Link from "next/link";
import Image from "next/image";

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
      <div className="relative flex h-16 w-auto items-center justify-center overflow-hidden">
        <Image 
          src="/images/banco-logo.png" 
          alt="Banco Water Tank Logo" 
          width={180} 
          height={64} 
          className="h-12 w-auto object-contain"
          priority
        />
      </div>
      {!compact && (
        <span className="sr-only">BANCO Water Tank</span>
      )}
    </Link>
  );
}
