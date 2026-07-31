"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// hero-2 is the most prominent image — it's shown first and held on
// screen roughly twice as long as hero-1 on every rotation.
const HERO_IMAGES = [
  {
    src: "/hero-2.png",
    alt: "Bright, modern library atrium with open shelving, reading nooks, and plants",
    durationMs: 9000,
  },
  {
    src: "/hero-1.png",
    alt: "Bright, modern multi-level library interior with open shelving and reading areas",
    durationMs: 4500,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, HERO_IMAGES[activeIndex].durationMs);
    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <section className="relative isolate flex min-h-screen items-start overflow-hidden">
      {/* Background photos — stacked and crossfaded, taking turns. */}
      {HERO_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Whitish overlay over the whole background photo */}
      <div className="absolute inset-0 bg-white/30" aria-hidden />

      {/* Pill: anchored to the bottom-left corner of the hero section */}
      <span className="absolute bottom-6 left-6 z-10 inline-flex items-center justify-center rounded-full border border-brand-blue/20 bg-white/40 px-4 py-1.5 text-xs font-medium text-brand-blue sm:bottom-8 sm:left-10">
        LAAS · An NLB Company · Est. 2000
      </span>

      {/* Text sits directly on the photo, centered, no card/scrim behind it,
          positioned in the upper portion of the viewport (not dead-center) —
          matching reference/hero reference.png's layout. */}
      <div className="relative mx-auto w-full max-w-7xl -translate-y-[30px] px-6 pt-36 text-center sm:px-10 sm:pt-44">
        <div className="relative mx-auto max-w-3xl">
          {/* Almost-transparent white wash directly behind the text, just
              enough to lift legibility without reading as a visible card. */}
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-3xl bg-white/15 sm:-inset-x-10 sm:-inset-y-8" />

          {/* Headline: two stacked lines, colour change between them —
              matching the reference's structure. */}
          <h1
            className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block text-zinc-900">Modern Library &amp; Archive</span>
            <span className="block text-brand-blue">Solutions</span>
          </h1>

          {/* Subhead */}
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-700">
            LAAS brings the expertise and technology behind Singapore&rsquo;s
            National Library Board to your library, archive, or records
            challenge.
          </p>

          {/* CTA */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange/90"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
