import { FaHeadset, FaMapMarkedAlt, FaMedal, FaUsers } from "react-icons/fa";

const stats = [
  { number: "100%", title: "Quality focused", icon: FaMedal },
  { number: "1000+", title: "Customers served", icon: FaUsers },
  { number: "25+", title: "Cities supplied", icon: FaMapMarkedAlt },
  { number: "24/7", title: "Enquiry support", icon: FaHeadset },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 rounded-lg border border-stone-200 bg-white p-4 shadow-xl md:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4 rounded-md bg-stone-50 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800 text-white">
                  <Icon />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-950">{item.number}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
