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
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <h2
          className="mx-auto max-w-2xl text-center text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-zinc-900">Suite of </span>
          <span className="text-brand-blue">Services</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-zinc-600 sm:text-base">
          LAAS offers a complete suite of library and archives services. On
          the library front, LAAS provides consultancy services in the
          planning and design of new libraries in conjunction with the
          themes to reach out to the patrons.
        </p>

        {/* Pillar tiles — same card width as the original four-column
            layout, now centred as a group of three. */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="group relative block aspect-[2/3] w-full overflow-hidden rounded-lg text-left transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
