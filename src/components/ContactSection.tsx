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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-brand-blue-tint px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
        {/* Headline: same two-line, colour-split pattern used across the
            page, closing the loop the hero opened. */}
        <h2
          className="text-center text-2xl leading-tight font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="block text-zinc-900">
            Let&rsquo;s Make Your Organisation&rsquo;s
          </span>
          <span className="block text-brand-blue">Knowledge Easy to Find.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-sm text-zinc-600">
          Planning, compliance, operations, or technology — tell us what
          you&rsquo;re trying to solve.
        </p>

        <form className="mt-10 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Name" />
            <Field label="Email" type="email" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Phone" type="tel" />
            <label className="block text-left">
              <span className="flex items-baseline justify-between text-sm text-zinc-500">
                I&rsquo;m enquiring about
                <span className="text-brand-orange">*</span>
              </span>
              <select
                required
                defaultValue=""
                className="mt-2 w-full border-b border-zinc-300 bg-transparent pb-2 text-sm text-zinc-900 outline-none focus:border-brand-blue"
              >
                <option value="" disabled>
                  Select one
                </option>
                {ENQUIRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-left">
            <span className="flex items-baseline justify-between text-sm text-zinc-500">
              Message
              <span className="text-brand-orange">*</span>
            </span>
            <textarea
              required
              rows={3}
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

        {/* Contact details — plain text below the form, per the copy draft. */}
        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-600">
          <p>100 Victoria Street, #B2-01, National Library Building,</p>
          <p>Singapore 188064</p>
          <p className="mt-2">
            +65 6635 8142 · enquiry@laas.com.sg
          </p>
        </div>
      </div>
    </section>
  );
}
