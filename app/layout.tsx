import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata, siteUrl } from "@/data/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: ["/images/hero-industrial.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.className}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
