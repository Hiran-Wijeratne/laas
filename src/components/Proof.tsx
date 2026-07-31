import Image from "next/image";

const CASES = [
  {
    org: "Republic Polytechnic",
    logo: "/case-rp.png",
    image: "/case-rp-photo.jpg",
    summary:
      "LAAS took over daily library operations — increasing utilisation and enriching students' learning journeys.",
    note: "Testimonial to be sourced from RP.",
  },
  {
    org: "Temasek Polytechnic",
    logo: "/case-tp.png",
    image: "/case-tp-photo.jpg",
    summary:
      "A robotics solution now automatically finds missing and mis-shelved books across TP's entire collection.",
    note: "Testimonial to be sourced from TP.",
  },
  {
    org: "Records Management Consultancy",
    logo: null,
    image: "/case-records.jpg",
    summary:
      "Government agencies and statutory boards rely on LAAS's methodology to build file plans their staff can actually use.",
    note: "Named case study/testimonial to be confirmed before publishing.",
  },
];

export default function Proof() {
  return (
    <section className="bg-brand-blue-tint px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Real Organisations. Real Results.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {CASES.map((item) => (
            <div
              key={item.org}
              className="overflow-hidden rounded-xl border border-zinc-200 shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.org}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                {/* Logo area — same height on every card, blank when
                    there's no logo, so the org-name text below always
                    starts from the same position. */}
                <div className="flex h-32 items-end">
                  {item.logo && (
                    <Image
                      src={item.logo}
                      alt={item.org}
                      width={360}
                      height={120}
                      className="h-full w-auto object-contain"
                    />
                  )}
                </div>
                {/* Org name — same font, same position, on every card. */}
                <p
                  className="mt-3 text-lg font-semibold text-black"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.org}
                </p>
                <p className="mt-3 text-sm text-zinc-700">{item.summary}</p>
                <p className="mt-3 text-xs text-zinc-400 italic">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-10 inline-block text-sm font-semibold text-brand-blue hover:underline"
        >
          See All Projects →
        </a>

        {/* Required attribution: the Temasek Polytechnic photo is
            CC BY-SA 4.0 and requires credit. The Republic Polytechnic
            photo is public domain, so no credit is legally required
            for it. */}
        <p className="mt-6 text-xs text-zinc-400">
          Temasek Polytechnic photo by{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Temasek_Polytechnic_Main_Gate.JPG"
            className="underline hover:text-zinc-600"
          >
            Deoma12
          </a>
          , licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            className="underline hover:text-zinc-600"
          >
            CC BY-SA 4.0
          </a>
          .
        </p>
      </div>
    </section>
  );
}
