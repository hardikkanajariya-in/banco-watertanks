"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LegacyRedirectProps = {
  href: string;
  label: string;
};

export function LegacyRedirect({ href, label }: LegacyRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <main className="flex min-h-[60svh] items-center justify-center px-4 py-16 sm:px-6 lg:px-10 2xl:px-14">
      <div className="max-w-xl rounded-[1.75rem] border border-[#c3d7ef] bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5f9d]">Page Updated</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0c2d52]">{label}</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This content has moved as part of the new BANCO website structure.
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#104a84] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c3c6c]"
        >
          Continue
        </Link>
      </div>
    </main>
  );
}
