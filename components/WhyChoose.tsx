import { FaAward, FaHandshake, FaIndustry, FaTruck } from "react-icons/fa";

const features = [
  {
    title: "Premium Selection",
    description: "Paddy is selected with care so every bag delivers dependable grain quality.",
    icon: FaAward,
  },
  {
    title: "Modern Milling",
    description: "Advanced processing supports cleaner grains, better polish, and hygienic handling.",
    icon: FaIndustry,
  },
  {
    title: "Reliable Supply",
    description: "A practical supply network supports families, dealers, and wholesale requirements.",
    icon: FaTruck,
  },
  {
    title: "Trusted Service",
    description: "Clear communication and steady quality make repeat buying simple and confident.",
    icon: FaHandshake,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Why choose us</p>
          <h2 className="section-title">
            A premium rice experience begins before the bag is packed.
          </h2>
          <p className="section-text mt-6">
            Every stage is managed with attention to cleanliness, consistency,
            and the everyday needs of customers who expect quality.
          </p>
        </div>

        <div className="section-content grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800 text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
