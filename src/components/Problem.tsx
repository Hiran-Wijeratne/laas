export default function Problem() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 pt-14 pb-14 text-center sm:px-10 sm:pt-16 sm:pb-16">
      {/* Headline: now carries the big idea directly, since the hero no
          longer states it (kicker line was removed). Same two-line,
          colour-split structure as the hero, same heading font token,
          smaller size and not uppercase. */}
      <h2
        className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="block text-zinc-900">Knowledge Only Creates Value</span>
        <span className="block text-brand-blue">When People Can Find It.</span>
      </h2>

      {/* Body — plain text, no card, no button, matching the hero's
          subhead font/colour treatment. Old headline ("Yet most
          collections...") now opens the body as the bridge into the
          specific symptoms. */}
      <p className="mt-5 max-w-2xl text-sm text-zinc-700 sm:text-base">
        Yet most collections aren&rsquo;t built to be found. Records get
        filed differently from one division to the next. Collections a
        community paid for sit underused. Staff lose hours to manual
        searches that should take minutes. That&rsquo;s not inconvenience —
        it&rsquo;s compliance risk, wasted budget, and public trust on the
        line.
      </p>

      {/* Transition line — still just text, no CTA button here. */}
      <p className="mt-4 text-sm font-semibold text-brand-blue sm:text-base">
        That&rsquo;s the gap LAAS exists to close.
      </p>
    </section>
  );
}
