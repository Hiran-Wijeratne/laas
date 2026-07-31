import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-brand-blue-tint px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text side — visitor stays the subject in the opening line. */}
        <div>
          <h2
            className="text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Who We Are
          </h2>

          <p className="mt-5 text-sm text-zinc-700 sm:text-base">
            A wholly-owned company of the National Library
            <br />
            Board Singapore (NLB), LAAS is the NLB&rsquo;s
            <br />
            corporate arm to market NLB&rsquo;s library&rsquo;s and
            <br />
            archives&rsquo; expertise, products and services to local
            <br />
            and overseas organisations.
          </p>

          <p className="mt-4 text-sm text-zinc-700 sm:text-base">
            LAAS also has a team of highly qualified
            <br />
            librarians and staff who run and operate libraries
            <br />
            for its clients. Information does not add much
            <br />
            value if they are not discoverable. LAAS employs
            <br />
            innovative use of technologies to make information searchable
            <br />
            and discoverable across different formats.
          </p>
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
