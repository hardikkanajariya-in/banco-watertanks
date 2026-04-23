import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "@untitledui/icons";

type PageHeroProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-sky-100 bg-white min-h-[50vh]">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#f8fcff_0%,#eef7fc_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(41,185,236,0.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(12,61,134,0.10),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(41,185,236,0.08),transparent_30%)]" />

      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#0c3d86_1px,transparent_1px),linear-gradient(to_bottom,#0c3d86_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Breadcrumb */}
      <div className="relative z-20 w-full px-4 py-5 sm:px-6 lg:px-10 2xl:px-14">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link href="/" className="font-medium transition hover:text-[#0c3d86]">
            Home
          </Link>
          <ChevronRight
            className="size-4 shrink-0 text-slate-400"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <span className="font-semibold text-[#0c3d86]">{eyebrow}</span>
        </nav>
      </div>

      {title ? (
        <div className="relative z-10 flex min-h-[calc(50vh-72px)] items-center w-full px-4 pb-10 pt-4 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14 lg:pt-4 2xl:px-14">
          <div className="mx-auto max-w-[1440px] w-full">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              {/* Left content */}
              <div className="max-w-3xl">
                <h1 className="mt-2 text-[clamp(1.4rem,5vw,2.8rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-slate-950">
                  <span className="block">{title}</span>
                  <span className="mt-2 block bg-[linear-gradient(90deg,#0c3d86_0%,#29b9ec_85%)] bg-clip-text text-transparent">
                    Engineered for durability.
                  </span>
                </h1>

                {description ? (
                  <p className="mt-5 max-w-2xl text-[16px] leading-8 text-slate-600 sm:text-[17px]">
                    {description}
                  </p>
                ) : null}
              </div>

              {/* Right visual */}
              <div className="relative hidden lg:block">
                <div className="relative mx-auto h-[360px] w-full max-w-[560px]">
                  {/* glow */}
                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29b9ec]/20 blur-3xl" />

                  {/* main card */}
                  <div className="absolute right-0 top-6 h-[300px] w-[88%] overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_30px_80px_-24px_rgba(12,61,134,0.28)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.30),rgba(255,255,255,0.08))]" />
                    <Image
                      src="/images/company-aerial.jpg"
                      alt="BANCO facility highlight"
                      fill
                      className="object-cover"
                      sizes="560px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,61,134,0.40),rgba(12,61,134,0.05),transparent)]" />
                  </div>

                  {/* floating product card */}
                  <div className="absolute bottom-0 left-0 h-[170px] w-[190px] overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-[0_24px_60px_-20px_rgba(12,61,134,0.20)]">
                    <Image
                      src="/images/product-storage-tank.jpg"
                      alt="Water tank detail"
                      fill
                      className="object-cover"
                      sizes="190px"
                    />
                  </div>

                  {/* info badge */}
                  <div className="absolute left-[34%] top-0 rounded-2xl border border-sky-100 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Performance
                    </div>
                    <div className="mt-1 text-lg font-bold text-[#0c3d86]">
                      FRP Panel Tank Systems
                    </div>
                  </div>

                  {/* decorative shapes */}
                  <div className="absolute right-10 top-0 h-16 w-16 rounded-[1.25rem] border border-sky-200/70 bg-white/60 shadow-lg backdrop-blur rotate-12" />
                  <div className="absolute bottom-1 right-16 h-5 w-5 rounded-full bg-[#29b9ec] shadow-[0_0_25px_rgba(41,185,236,0.7)]" />
                  <div className="absolute left-24 top-1/2 h-4 w-4 rounded-full bg-[#0c3d86]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}