import { FaMapMarkerAlt } from "react-icons/fa";

const cities = [
  "Vijayawada",
  "Kakinada",
  "Visakhapatnam",
  "Tuni",
  "Rajahmundry",
  "Bhimavaram",
  "Tadepalligudem",
  "Eluru",
];

export default function Delivery() {
  return (
    <section className="bg-emerald-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow-dark">Supply network</p>
          <h2 className="section-title-dark">
            Delivering premium rice across Andhra Pradesh.
          </h2>
          <p className="section-text-dark mt-6">
            We support dealers, wholesalers, and family requirements with steady
            supply and responsive service.
          </p>
        </div>

        <div className="section-content grid grid-cols-2 gap-4 md:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="rounded-lg border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
                <FaMapMarkerAlt className="mx-auto text-amber-300" />
                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">{city}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
