import Image from "next/image";

const COURSES = [
  {
    title: "Gateway to Library Skills Series",
    image: "/course-gateway.png",
    href: "#",
  },
  {
    title: "Records Management Appraisal Masterclass",
    image: "/course-appraisal.png",
    href: "#",
  },
  {
    title: "Records Management Training",
    image: "/course-records-appraisal.png",
    href: "#",
  },
  {
    title: "Digitisation Course",
    image: "/course-digitisation.png",
    href: "#",
  },
];

export default function TrainingCourses() {
  return (
    <section className="bg-brand-blue-tint px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="mx-auto max-w-2xl text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-zinc-900">Professional Training </span>
          <span className="text-brand-blue">Courses</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base">
          Practical, industry-led training for librarians, archivists, and
          records management professionals.
        </p>

        <a
          href="#"
          className="mt-6 inline-block rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange/90"
        >
          View All Courses
        </a>

        {/* Same card style as the Services section directly above:
            full-bleed photo, aspect-[2/3], white panel over the bottom
            edge only, no dark overlay on the image itself. */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {COURSES.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className="group relative block aspect-[2/3] w-full overflow-hidden rounded-lg text-left transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
            >
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/85 p-5">
                <p
                  className="line-clamp-3 min-h-24 text-2xl leading-tight font-semibold text-zinc-900 sm:min-h-28 sm:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                  title={course.title}
                >
                  {course.title}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand-blue hover:underline">
                  View Course →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
