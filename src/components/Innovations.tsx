import Image from "next/image";

const PRODUCTS = [
  {
    title: "OneSearch",
    image: "/product-onesearch.jpg",
    description:
      "OneSearch seamlessly provides access via a single user interface to all of a library's resources even if such resources may reside in different platforms and different locations. Such resources include the library's catalogue, born-digital and digitised materials of various formats, commercial databases and eBooks.",
    href: "#",
  },
  {
    title: "Online Browsing",
    image: "/product-onlinebrowsing.jpg",
    description:
      "Enable Library users to search and browse the physical library virtually 24 by 7. As users search and browse the library online, they will discover the books by subject categories and obtain the exact location of the books on a digital map of the library.",
    href: "#",
  },
  {
    title: "Mobile Borrowing App",
    image: "/product-mobileapp.jpg",
    description:
      "Open an app from your mobile phone, scan the book's barcode and walk through the security gates. It's that simple to borrow books from the Library, anywhere in the library.",
    href: "#",
  },
  {
    title: "Library Stock Tracking",
    image: "/product-stocktracking.jpg",
    description:
      "Robotics solution that met the library's need to automate the library's stock tracking of missing books and mis-shelved books. The robot, Library Stocks Tracking System, and Library Management System all interact to automatically generate reports about the physical locations of books for the entire library collection.",
    href: "#",
  },
];

export default function Innovations() {
  return (
    <section className="bg-brand-blue-tint px-6 pt-16 pb-20 sm:px-10 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-7xl text-center">
        {/* Two-tone heading, matching the live site's bold-then-light
            weight contrast, recoloured for the light background. */}
        <h2 style={{ fontFamily: "var(--font-heading)" }}>
          <span className="block text-2xl font-bold text-zinc-900 sm:text-3xl lg:text-4xl">
            Innovations for
          </span>
          <span className="block text-3xl font-light text-brand-blue sm:text-4xl lg:text-5xl">
            Libraries
          </span>
        </h2>

        {/* White floating cards on the light blue wash, image on top,
            title and description below — matching the live site's actual
            Innovations for Libraries layout. */}
        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <a href={product.href} className="relative block h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </a>
              <div className="flex flex-1 flex-col p-5">
                <p
                  className="text-lg font-semibold text-zinc-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.title}
                </p>
                <p className="mt-2 flex-1 text-sm text-zinc-600">
                  {product.description}
                </p>
                <a
                  href={product.href}
                  className="mt-4 inline-block text-sm font-semibold text-brand-orange hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
