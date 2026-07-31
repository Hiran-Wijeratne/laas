import Image from "next/image";

const PRODUCTS = [
  {
    title: "OneSearch",
    image: "/product-onesearch.jpg",
    teaser: "Help every user find what they need, in one search.",
    detail:
      "OneSearch gives users a single interface to everything your library holds, even when it lives on different platforms and systems — the catalogue, born-digital and digitised materials, commercial databases, and eBooks. A single sign-on means users no longer need to know which platform holds what they're looking for; results are automatically grouped by type and source, saving time on every search.",
    href: "#",
  },
  {
    title: "Online Browsing",
    image: "/product-onlinebrowsing.jpg",
    teaser: "Let patrons discover your shelves, anytime, anywhere.",
    detail:
      "Online Browsing lets patrons explore your physical library virtually, any time. They can discover new arrivals and returns by subject, then see a book's exact location on a digital map of the library — and browse the shelves around it to find related titles, all before ever stepping through the door.",
    href: "#",
  },
  {
    title: "Mobile Borrowing App",
    image: "/product-mobileapp.jpg",
    teaser: "Turn borrowing into a 10-second task.",
    detail:
      "Patrons open the app, scan a book's barcode, and walk straight through the library's security gates — no borrowing kiosks, no queues. It's built to save time for patrons and staff alike while cutting the operational cost of running checkout infrastructure.",
    href: "#",
  },
  {
    title: "Library Stock Tracking",
    image: "/product-stocktracking.jpg",
    teaser: "Stop losing hours to missing books.",
    detail:
      "A robotics unit patrols the library, cross-referencing what it finds against the Library Management System to automatically report the exact floor, shelf, bay, and tier of every misplaced or mis-shelved item — turning hours of manual searching into a routine, automated report.",
    href: "#",
  },
];

export default function Innovations() {
  return (
    <section className="bg-brand-blue-tint px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="text-2xl leading-tight font-semibold text-zinc-900 sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Technology Proven Inside Singapore&rsquo;s Own Libraries First.
        </h2>
        <p className="mt-3 text-sm font-medium text-zinc-500">
          Built for one reason: to make knowledge findable.
        </p>

        {/* Same taller-card, text-on-photo pattern as the "What We Do"
            pillars, reused here for the product suite. */}
        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <a
              key={product.title}
              href={product.href}
              className="group relative block aspect-[2/3] overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-900/80 via-zinc-900/30 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  className="text-xl leading-tight font-semibold text-white sm:text-2xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.title}
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">
                  {product.teaser}
                </p>
                <p className="mt-2 line-clamp-4 text-xs text-white/75">
                  {product.detail}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold text-white underline underline-offset-2">
                  Learn More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
