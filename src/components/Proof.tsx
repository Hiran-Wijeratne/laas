import Image from "next/image";

const CASES = [
  {
    org: "Republic Polytechnic",
    logo: "/case-rp.png",
    logoWidth: 380,
    logoHeight: 128,
    testimonial:
      "By providing a hassle-free, productive and seamless user experience for its users, LAAS’s operations and management of the RP library has increased the utilisation of the library. This has allowed the RP library to achieve its goal of fulfilling the information and research needs of RP students and faculty. Beyond that, the library has also enriched and supported their learning journeys in a manner that makes the RP community want to use the library more after every library experience.",
  },
  {
    org: "Temasek Polytechnic",
    logo: "/case-tp.png",
    logoWidth: 380,
    logoHeight: 128,
    testimonial:
      "LAAS supplied a robotics solution that met the TP library’s need to automate the library’s stock tracking of missing books and mis-shelved books. The robot, Library Stocks Tracking System, and TP’s Library Management System all interact to automatically generate reports about the physical locations of books for the entire library collection. The detailed location information in the reports can be broken down into Floor numbers, Shelf numbers, Bay numbers, and Tier numbers.",
  },
  {
    org: "Records Management Consultancy",
    logo: null,
    logos: [
      { src: "/logo-scb.png", alt: "Science Centre Board" },
      { src: "/logo-toteboard.png", alt: "Tote Board" },
      { src: "/logo-pa.png", alt: "People's Association" },
      { src: "/logo-ncss.png", alt: "National Council of Social Service" },
    ],
    testimonial:
      "Using our LAAS methodology, we guided our clients to create a coherent and intuitive Records Management File Plan that their staff can easily work with. This could be achieved because our methodology allows us to gain a deep understanding of our clients’ businesses, functions, and needs through in-depth research and focus group discussions.",
  },
];

export default function Proof() {
  return (
    <section className="bg-brand-blue-tint px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="text-2xl leading-tight font-semibold text-brand-blue sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Testimonials
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {CASES.map((item) => (
            <div
              key={item.org}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <Image
                src="/quote-mark.png"
                alt=""
                aria-hidden
                width={40}
                height={60}
                className="h-8 w-auto object-contain"
              />

              <p className="mt-3 flex-1 text-sm text-zinc-700">
                {item.testimonial}
              </p>

              {item.logo ? (
                <div className="mt-5 flex h-32 items-center border-t border-zinc-200 pt-5">
                  <Image
                    src={item.logo}
                    alt={item.org}
                    width={item.logoWidth}
                    height={item.logoHeight}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="mt-5 grid h-32 grid-cols-4 items-center gap-3 border-t border-zinc-200 pt-5">
                  {item.logos?.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={144}
                      height={144}
                      className="h-20 w-full object-contain"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
