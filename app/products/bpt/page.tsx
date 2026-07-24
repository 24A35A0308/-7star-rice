import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const highlights = [
  "Premium quality rice",
  "Rich natural aroma",
  "Soft and fluffy after cooking",
  "Hygienically processed",
  "Suitable for daily meals",
];

export default function BPTPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <Link href="/#products" className="text-sm font-bold uppercase tracking-wide text-emerald-800 hover:text-emerald-700">
          Back to Products
        </Link>

        <div className="mt-10 grid gap-12 rounded-lg border border-stone-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-[460px] items-center justify-center rounded-lg bg-stone-50 p-8">
            <Image src="/images/bpt-v2.png" alt="BPT Rice" width={500} height={600} className="h-[420px] w-auto object-contain" priority />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Premium variety</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-950">BPT Rice</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our premium BPT Rice is carefully processed using advanced milling technology to preserve natural taste, aroma, softness, and nutritional value.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-slate-950">Product Highlights</h2>
              <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3"><FaCheck className="text-emerald-800" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-slate-950">Available Packing</h2>
              <div className="mt-4 flex gap-3">
                <span className="rounded-full bg-emerald-50 px-5 py-2 font-bold text-emerald-800">26 Kg</span>
                <span className="rounded-full bg-emerald-50 px-5 py-2 font-bold text-emerald-800">30 Kg</span>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-stone-50 p-6">
              <h2 className="text-2xl font-extrabold text-slate-950">Specifications</h2>
              <div className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
                <p><strong>Variety:</strong> BPT</p>
                <p><strong>Color:</strong> White</p>
                <p><strong>Broken:</strong> Minimum</p>
                <p><strong>Moisture:</strong> Standard</p>
                <p><strong>Origin:</strong> Andhra Pradesh</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="https://wa.me/918340096545" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-800 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"><FaWhatsapp /> WhatsApp Enquiry</a>
              <a href="tel:+918340096545" className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold uppercase tracking-wide text-slate-950 transition hover:bg-amber-300"><FaPhoneAlt /> Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

