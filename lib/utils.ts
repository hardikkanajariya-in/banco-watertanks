import { twMerge } from "tailwind-merge";

export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}

// ----------------------------------------------------------------------------
// Layout Configuration
// ----------------------------------------------------------------------------
// Toggle `isFullWidth` to freely switch the website between a boxed layout and 
// a full-width layout. This controls the container width in all major sections.
export const isFullWidth = true;

export const siteContainer = isFullWidth 
  ? "w-full max-w-[1920px] mx-auto 2xl:px-8" 
  : "w-full max-w-[1320px] mx-auto";
