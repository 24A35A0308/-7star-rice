import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "RGL Rice",
    image: "/images/rgl-v2.png",
    href: "/products/rgl",
    label: "Best seller",
    description: "A dependable daily rice variety known for clean grains, pleasant aroma, and consistent cooking quality.",
  },
  {
    name: "BPT Rice",
    image: "/images/bpt-v2.png",
    href: "/products/bpt",
    label: "Premium choice",
    description: "Carefully processed BPT rice with refined texture, excellent taste, and reliable quality for families.",
  },
  {
    name: "HMT Rice",
    image: "/images/hmt-v2.png",
    href: "/products/hmt",
    label: "Fine grain",
    description: "Fresh, polished HMT rice selected for softness, purity, and a rich home-style cooking experience.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Product range</p>
          <h2 className="section-title">
            Premium rice varieties for homes, dealers, and wholesalers.
          </h2>
          <p className="section-text mt-6">
            Choose from our carefully processed RGL, BPT, and HMT rice varieties,
            packed for freshness and consistent quality.
          </p>
        </div>

        <div className="section-content grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-lg border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex min-h-[280px] items-center justify-center bg-white p-8">
                <span className="absolute left-5 top-5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-800">
                  {product.label}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={270}
                  className="h-[240px] w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-7 text-left">
                <h3 className="text-2xl font-extrabold text-slate-950">{product.name}</h3>
                <p className="mt-4 min-h-[96px] text-base leading-7 text-slate-600">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
