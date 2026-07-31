import Image from "next/image";

const PILLARS = [
  {
    title: "Consultancy Services",
    image: "/pillar-consultancy.jpg",
    alt: "Consultancy Services",
    outcome: "Plan a Space People Want to Use.",
    supporting:
      "Library design, space planning, and Records Management compliance — built on NLB-proven methodology.",
    href: "#",
  },
  {
    title: "Library Operations",
    image: "/pillar-operations.jpg",
    alt: "Library Operations",
    outcome: "Keep It Running — Without Building a Team From Scratch.",
    supporting:
      "Full or partial outsourced library operations, run to NLB service standards.",
    href: "#",
  },
  {
    title: "Content Delivery Services",
    image: "/pillar-content-delivery.jpg",
    alt: "Content Delivery Services",
    outcome: "Help Every User Find What They Need, Faster.",
    supporting:
      "Making your collections searchable and discoverable, in every format.",
    href: "#",
  },
  {
    title: "Training",
    image: "/pillar-training.jpg",
    alt: "Training",
    outcome: "Give Your Team the Skills to Do This Themselves.",
    supporting:
      "Hands-on courses for librarians, records officers, and archivists.",
    href: "#",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <h2
          className="mx-auto max-w-2xl text-center text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Build. Run. Improve. All in One Place.
        </h2>

        {/* Four pillar tiles — back to the taller cards, each with the
            service name as a clear eyebrow label above the outcome line. */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="group relative block aspect-[2/3] overflow-hidden rounded-lg text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* No dark overlay/shadow on the photo at all — a light,
                  near-opaque panel sits behind the text instead, so the
                  image itself stays untouched above it. */}
              <div className="absolute inset-x-0 bottom-0 bg-white/85 p-5">
                <p
                  className="text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-800">
                  {pillar.outcome}
                </p>
                <p className="mt-2 text-xs text-zinc-600">
                  {pillar.supporting}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold text-brand-blue underline underline-offset-2">
                  Learn More
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-600">
          Every one of these is backed by technology already proven inside
          Singapore&rsquo;s own libraries — see how ↓
        </p>
      </div>
    </section>
  );
}
