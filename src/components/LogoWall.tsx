import Image from "next/image";

const LOGOS = [
  { src: "/logo-rp.png", alt: "Republic Polytechnic", href: "#" },
  { src: "/logo-tp.png", alt: "Temasek Polytechnic", href: "#" },
  { src: "/logo-ncss.png", alt: "National Council of Social Service", href: "#" },
  { src: "/logo-toteboard.png", alt: "Tote Board", href: "#" },
  { src: "/logo-pa.png", alt: "People's Association", href: "#" },
  { src: "/logo-scb.png", alt: "Science Centre Board", href: "#" },
];

export default function LogoWall() {
  return (
    <section className="bg-white px-6 py-16 text-center sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="block text-zinc-900">Trusted by Organisations</span>
          <span className="block text-brand-blue">
            That Can&rsquo;t Afford to Get This Wrong.
          </span>
        </h2>

        {/* Logo row — grayscale by default, full colour on hover, matching
            the reference's simple centred logo-strip pattern. Kept to a
            narrower max-width so the row stays tight instead of spreading
            across the full section width. */}
        <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((logo) => (
            <a
              key={logo.alt}
              href={logo.href}
              className="opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={360}
                height={144}
                className="h-24 w-auto max-w-full object-contain sm:h-32 lg:h-36"
              />
            </a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-sm text-zinc-600">
          Also shaping libraries internationally — from New York to Saudi
          Arabia, China to Myanmar.
        </p>
      </div>
    </section>
  );
}
