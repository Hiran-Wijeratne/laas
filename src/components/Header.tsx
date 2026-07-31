import Image from "next/image";

const NAV_LINKS = [
  { label: "Services/Products", href: "#what-we-do" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Training / Courses", href: "#training" },
  { label: "Join", href: "#join" },
];

const ABOUT_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Board Members", href: "#board-members" },
  { label: "Our Team", href: "#our-team" },
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
        <nav className="hidden items-center gap-8 lg:flex">
          {/* About (dropdown) */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-800 hover:text-brand-blue">
              About
            </button>
            <div className="invisible absolute top-full left-1/2 z-30 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <ul className="rounded-xl border border-zinc-100 bg-white py-2 shadow-lg">
                {ABOUT_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-brand-blue"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-800 hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact CTA — same style as the hero's primary CTA */}
        <a
          href="#contact"
          className="rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange/90"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
