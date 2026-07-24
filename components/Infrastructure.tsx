import Image from "next/image";

const facilities = [
  {
    title: "Dryer Plant",
    image: "/images/dryer.jpg",
    description: "Controlled drying helps preserve grain quality and supports consistent milling output.",
  },
  {
    title: "Steam Boiler",
    image: "/images/boiler.jpg",
    description: "Efficient steam generation supports reliable processing for premium rice production.",
  },
  {
    title: "Color Sorter",
    image: "/images/sortex.jpg",
    description: "Sorting technology removes impurities and improves the final appearance of every batch.",
  },
  {
    title: "Processing Unit",
    image: "/images/processing-unit.jpg",
    description: "A modern milling line designed for hygienic handling and dependable production flow.",
  },
  {
    title: "Conveyor System",
    image: "/images/conveyor.jpg",
    description: "Automated movement across the plant reduces manual handling and improves efficiency.",
  },
];

export default function Infrastructure() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Infrastructure</p>
          <h2 className="section-title">
            Modern facilities behind every premium pack.
          </h2>
          <p className="section-text mt-6">
            Our machinery and process flow are built to support hygienic milling,
            clean sorting, and consistent quality control.
          </p>
        </div>

        <div className="section-content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50 shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={420}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
