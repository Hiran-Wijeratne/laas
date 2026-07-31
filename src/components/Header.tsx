import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Consultancy", href: "#what-we-do" },
  { label: "Training", href: "#what-we-do" },
  { label: "Managed Services", href: "#what-we-do" },
  { label: "Project", href: "#projects" },
  { label: "Careers", href: "#careers" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-4 z-20 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-lg bg-white px-6 py-3 shadow-md">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/laas-logo.png"
            alt="LAAS — Library & Archives Solutions"
            width={140}
            height={39}
            priority
          />
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-800 hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Client Login CTA — brand blue per manager's request */}
        <a
          href="#"
          className="rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue/90"
        >
          Client Login
        </a>
      </div>
    </header>
  );
}
