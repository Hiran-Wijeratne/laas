import Image from "next/image";

const CASES = [
  {
    org: "Republic Polytechnic",
    logo: "/case-rp.png",
    image: "/product-onlinebrowsing.jpg",
    summary:
      "LAAS took over daily library operations — increasing utilisation and enriching students' learning journeys.",
    note: "Testimonial to be sourced from RP.",
  },
  {
    org: "Temasek Polytechnic",
    logo: "/case-tp.png",
    image: "/product-stocktracking.jpg",
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
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20">
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
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.org}
                    width={90}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <p className="text-sm font-semibold text-brand-blue">
                    {item.org}
                  </p>
                )}
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
      </div>
    </section>
  );
}
