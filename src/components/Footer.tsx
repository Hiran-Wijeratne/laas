import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-tint px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Image
          src="/laas-logo.png"
          alt="LAAS — Library & Archives Solutions"
          width={120}
          height={33}
        />

        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#" className="hover:text-brand-blue">
            Terms of Use
          </a>
          <a href="#" className="hover:text-brand-blue">
            Privacy Policy
          </a>
        </nav>

        <p className="text-sm text-zinc-500">
          Copyright &copy; LAAS 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
