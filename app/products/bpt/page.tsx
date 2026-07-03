import Image from "next/image";
import Link from "next/link";

export default function BPTPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-center text-5xl font-bold text-green-700 mb-16">
        Premium BPT Rice
      </h1>

      <Link
        href="/#products"
        className="text-green-700 font-semibold hover:underline"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-10 items-center">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
          <Image
            src="/images/bpt-v2.png"
            alt="BPT Rice"
            width={500}
            height={600}
            className="mx-auto hover:scale-105 transition duration-500"
          />
        </div>

        {/* Product Details */}
        <div>

          <h2 className="text-5xl font-bold text-green-700">
            BPT Rice
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Our premium BPT Rice is carefully processed using advanced
            milling technology to preserve its natural taste, aroma,
            softness and nutritional value.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-green-700">
              Product Highlights
            </h3>

            <ul className="mt-4 space-y-3 text-lg text-gray-700">
              <li>✅ Premium Quality Rice</li>
              <li>✅ Rich Natural Aroma</li>
              <li>✅ Soft & Fluffy After Cooking</li>
              <li>✅ Hygienically Processed</li>
              <li>✅ Suitable for Daily Meals</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-green-700">
              Available Packing
            </h3>

            <div className="flex gap-4 mt-4">
              <span className="bg-green-700 text-white px-5 py-2 rounded-full">
                26 Kg
              </span>

              <span className="bg-green-700 text-white px-5 py-2 rounded-full">
                30 Kg
              </span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-green-700">
              Specifications
            </h3>

            <div className="mt-4 space-y-2 text-lg text-gray-700">
              <p><strong>Variety:</strong> BPT</p>
              <p><strong>Color:</strong> White</p>
              <p><strong>Broken:</strong> Minimum</p>
              <p><strong>Moisture:</strong> Standard</p>
              <p><strong>Origin:</strong> Andhra Pradesh</p>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="https://wa.me/919866426247"
              target="_blank"
              className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-800 transition"
            >
              WhatsApp Enquiry
            </a>

            <a
              href="tel:+919866426247"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
            >
              Call Now
            </a>
          </div>

        </div>

      </div>

    </main>
  );
}