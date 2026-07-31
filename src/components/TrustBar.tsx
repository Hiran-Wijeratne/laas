const STATS = [
  { number: "25+", unit: "Years", label: "Since 2000" },
  {
    number: "20+",
    unit: "Organisations",
    label: "Singapore ministries, boards & institutes",
  },
  {
    number: "5",
    unit: "Regions",
    label: "Singapore, USA, China, Middle East, SE Asia",
  },
  {
    number: "100%",
    unit: "NLB-Owned",
    label: "A National Library Board company",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white px-6 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 sm:gap-6">
        {STATS.map((stat, index) => (
          <div
            key={stat.number + stat.unit}
            className={`px-2 text-center ${
              index > 0 ? "border-l border-brand-blue/15" : ""
            }`}
          >
            <p className="leading-tight">
              <span className="text-2xl font-bold text-brand-blue sm:text-4xl lg:text-5xl">
                {stat.number}
              </span>{" "}
              <span className="text-sm font-semibold text-brand-blue sm:text-lg lg:text-xl">
                {stat.unit}
              </span>
            </p>
            <p className="mt-1 text-xs leading-tight text-zinc-600 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
