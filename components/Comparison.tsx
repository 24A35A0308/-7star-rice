const rows = [
  ["Softness", "Excellent", "Very good", "Excellent"],
  ["Aroma", "Very good", "Excellent", "Excellent"],
  ["Best use", "Daily meals", "Family cooking", "Premium meals"],
  ["Packing", "26kg / 30kg", "26kg / 30kg", "26kg / 30kg"],
];

export default function Comparison() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Compare varieties</p>
          <h2 className="section-title">
            Find the right rice for your kitchen or business.
          </h2>
          <p className="section-text mt-6">
            A quick guide to help families, dealers, and wholesalers choose with confidence.
          </p>
        </div>

        <div className="section-content overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left">
              <thead className="bg-emerald-900 text-white">
                <tr>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wide">Feature</th>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wide">RGL</th>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wide">BPT</th>
                  <th className="px-6 py-5 text-sm font-bold uppercase tracking-wide">HMT</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-b border-stone-100 last:border-b-0">
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-6 py-5 text-base ${
                          index === 0 ? "font-extrabold text-slate-950" : "font-medium text-slate-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
