"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const aboutGalleryImages = [
  {
    src: "/images/about/4.png",
    label: "Industrial Facility",
    alt: "Industrial facility for engineered water storage solutions",
  },
  {
    src: "/images/about/2.png",
    label: "Plant Operations",
    alt: "Industrial plant and utility infrastructure",
  },
  {
    src: "/images/about/3.png",
    label: "Infrastructure",
    alt: "Large construction and infrastructure development",
  },
  {
    src: "/images/about/1.png",
    label: "Project Support",
    alt: "Modern project planning and commercial workspace",
  },
];

export function AboutGallery() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalImages = aboutGalleryImages.length;

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = (index + totalImages) % totalImages;

    container.scrollTo({
      left: container.clientWidth * nextIndex,
      behavior: "smooth",
    });

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (isPaused || totalImages <= 1) return;

    const timer = window.setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, totalImages]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(nextIndex);
  };

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(8,40,91,0.16)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-[#08285b]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {aboutGalleryImages.map((image, index) => (
            <div
              key={image.src}
              className="relative h-full w-full shrink-0 snap-start"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition duration-700 hover:scale-105"
                unoptimized
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,40,91,0.03)_0%,rgba(8,40,91,0.62)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,185,236,0.26),transparent_36%)]" />

              <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {image.label}
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-[#08285b]/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(totalImages).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 right-5 flex gap-2">
          {aboutGalleryImages.map((image, index) => (
            <button
              key={`${image.src}-dot`}
              type="button"
              aria-label={`Go to gallery image ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={[
                "h-2 rounded-full shadow-sm transition-all duration-300",
                activeIndex === index
                  ? "w-7 bg-white"
                  : "w-2 bg-white/60 hover:bg-white/90",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
