import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text side — visitor stays the subject in the opening line. */}
        <div>
          <h2
            className="text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Not a Vendor Claiming Library Expertise.{" "}
            <span className="text-brand-blue">The Source of It.</span>
          </h2>

          <p className="mt-5 text-base text-zinc-700">
            Every organisation can benefit from the expertise behind
            Singapore&rsquo;s National Library Board. That&rsquo;s why LAAS
            exists — as NLB&rsquo;s own corporate arm, sharing its proven
            methodology and technology beyond NLB itself. You&rsquo;re not
            hiring a consultant guessing at what works. You&rsquo;re getting
            the real thing.
          </p>

          <p className="mt-4 text-base text-zinc-700">
            NLB runs a network of 28 libraries across Singapore — plus the
            National Library and the National Archives of Singapore —
            lending more than 38.8 million items a year. It&rsquo;s a scale
            and a model that other national library systems visit Singapore
            to study. That&rsquo;s the expertise LAAS makes available to
            you.
          </p>

          {/* Glance-able proof pair, consistent with the Trust Bar's
              stat-number treatment. */}
          <div className="mt-8 flex gap-10">
            <div>
              <p className="text-2xl font-semibold text-brand-blue sm:text-3xl">
                28
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Libraries in NLB&rsquo;s network
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-blue sm:text-3xl">
                38.8M+
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Items loaned a year
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-brand-blue/20 bg-brand-blue-tint px-4 py-1.5 text-xs font-medium text-brand-blue">
              Wholly-owned by NLB
            </span>
            <span className="rounded-full border border-brand-blue/20 bg-brand-blue-tint px-4 py-1.5 text-xs font-medium text-brand-blue">
              Since 2000
            </span>
          </div>

          <a
            href="#"
            className="mt-8 inline-block text-sm font-semibold text-brand-blue hover:underline"
          >
            Learn About Our Governance →
          </a>
        </div>

        {/* Photo side */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/who-we-are.jpg"
            alt="A modern NLB library reading area overlooking the waterfront"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
