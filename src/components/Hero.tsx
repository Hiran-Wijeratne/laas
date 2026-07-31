import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Background photo — single static image now, no rotation. */}
      <Image
        src="/hero.png"
        alt="Bright, modern building with wavy architecture and glass detailing"
        fill
        priority
        className="object-cover"
      />

      {/* Whitish overlay over the whole background photo */}
      <div className="absolute inset-0 bg-white/30" aria-hidden />

      {/* Text sits directly on the photo, centered, no card/scrim behind it,
          near the top of the viewport per team feedback (pill removed,
          top space shortened). */}
      <div className="relative mx-auto w-full max-w-7xl px-6 text-center sm:px-10">
        <div className="relative mx-auto max-w-3xl">
          {/* Almost-transparent white wash directly behind the text, just
              enough to lift legibility without reading as a visible card. */}
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-3xl bg-white/15 sm:-inset-x-10 sm:-inset-y-8" />

          {/* Small, low-key eyebrow pill — present but not competing
              with the headline for attention. */}
          <span className="mb-1 inline-block rounded-full border border-zinc-900/10 bg-white/40 px-3 py-1 text-xs font-medium text-zinc-600">
            LAAS &middot; An NLB Company &middot; Est. 2000
          </span>

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
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-700">
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
