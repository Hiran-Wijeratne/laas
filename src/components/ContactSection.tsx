"use client";

import { useEffect, useRef, useState } from "react";

const ENQUIRY_OPTIONS = [
  "Consultancy",
  "Library Operations",
  "Content Delivery",
  "Training",
  "Careers",
  "Other",
];

function Field({
  label,
  type = "text",
  required = true,
  className = "",
}: {
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block text-left ${className}`}>
      <span className="flex items-baseline justify-between text-sm text-zinc-500">
        {label}
        {required && <span className="text-brand-orange">*</span>}
      </span>
      <input
        type={type}
        required={required}
        className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none focus:border-brand-blue"
      />
    </label>
  );
}

function EnquiryDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative block text-left" ref={wrapperRef}>
      <span className="flex items-baseline justify-between text-sm text-zinc-500">
        I&rsquo;m enquiring about
        <span className="text-brand-orange">*</span>
      </span>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="mt-2 flex w-full items-center justify-between border-b border-zinc-300 bg-transparent pb-2 text-left text-sm outline-none focus:border-brand-blue"
      >
        <span className={selected ? "text-zinc-900" : "text-zinc-400"}>
          {selected || "Select one"}
        </span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden
          className={`shrink-0 text-zinc-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Required hidden field so the value still posts with the form. */}
      <input type="hidden" name="enquiry" value={selected} required />

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-2 w-full rounded-xl border border-zinc-200 bg-white p-2 shadow-lg"
        >
          {ENQUIRY_OPTIONS.map((option) => (
            <li key={option} role="option" aria-selected={selected === option}>
              <button
                type="button"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-zinc-800 hover:bg-brand-blue-tint"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-brand-blue-tint px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-zinc-200 bg-white px-8 py-12 shadow-sm sm:px-12 sm:py-16">
        {/* Headline: same two-line, colour-split pattern used across the
            page, closing the loop the hero opened. */}
        <h2
          className="text-center text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="block text-zinc-900">
            Planning a New Library or Digitisation Project?
          </span>
          <span className="block text-brand-blue">Talk to Our Consultants Today</span>
        </h2>

        {/* Fields sit in a narrower centred column so each underline rule
            stays a reasonable length instead of stretching the full width
            of the wide card. */}
        <form className="mx-auto mt-14 max-w-xl space-y-5">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Name" />
            <Field label="Email" type="email" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Phone" type="tel" />
            <EnquiryDropdown />
          </div>

          <label className="block text-left">
            <span className="flex items-baseline justify-between text-sm text-zinc-500">
              Message
              <span className="text-brand-orange">*</span>
            </span>
            <textarea
              required
              rows={1}
              className="mt-2 w-full resize-none border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none focus:border-brand-blue"
            />
          </label>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange/90"
            >
              Send Your Message
              <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
