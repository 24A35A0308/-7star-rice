import Image from "next/image";
import Link from "next/link";
export default function Products() {
  return (
    <section
      id="products"
      className="bg-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Our Premium Rice
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Choose from our premium quality rice varieties.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="relative bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
              Best Seller
            </span>

            <Image
              src="/images/rgl-v2.png"
              alt="RGL Rice"
              width={180}
              height={220}
              className="mx-auto mb-6 h-auto"
            />

            <h3 className="text-2xl font-bold text-green-700">
              RGL Rice
            </h3>

            <p className="mt-4 text-gray-600">
              Premium quality RGL rice with excellent taste and aroma.
            </p>

            <Link
              href="/products/rgl"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            
            <Image
              src="/images/bpt-v2.png"
              alt="BPT Rice"
              width={180}
              height={220}
              className="mx-auto mb-6 h-auto"
            />

            <h3 className="text-2xl font-bold text-green-700">
              BPT Rice
            </h3>

            <p className="mt-4 text-gray-600">
              High-quality BPT rice processed with modern technology.
            </p>

            <Link
              href="/products/bpt"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <Image
              src="/images/hmt-v2.png"
              alt="HMT Rice"
              width={180}
              height={220}
              className="mx-auto mb-6 h-auto"
            />

            <h3 className="text-2xl font-bold text-green-700">
              HMT Rice
             </h3>

            <p className="mt-4 text-gray-600">
              Finest HMT rice with freshness, purity and rich flavour.
            </p>

            <Link
              href="/products/hmt"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Learn More
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}