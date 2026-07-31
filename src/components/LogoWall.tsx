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
    <section className="bg-white py-16 text-center sm:py-20">
      <h2 className="px-6 text-lg font-semibold text-zinc-900 sm:px-10 sm:text-xl">
        Trusted by Organisations That Can&rsquo;t Afford to Get This Wrong
      </h2>

      {/* Logo row — grayscale by default, full colour on hover, matching
          the reference's simple centred logo-strip pattern. */}
      <div className="mt-10 grid w-full grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 px-6 sm:grid-cols-3 sm:px-10 lg:grid-cols-6 lg:gap-x-6 lg:px-16">
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

      <p className="mx-auto mt-10 max-w-xl px-6 text-sm text-zinc-600 sm:px-10">
        Also shaping libraries internationally — from New York to Saudi
        Arabia, China to Myanmar.
      </p>
    </section>
  );
}
