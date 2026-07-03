export default function Comparison() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Compare Our Rice Varieties
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Choose the perfect rice for your family or business.
        </p>

        {/* Responsive scroll container */}
        <div className="overflow-x-auto mt-12 pb-4">

          <table className="w-full min-w-[600px] border border-gray-300 rounded-lg overflow-hidden">

            {/* HEADER */}
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3 md:p-4 text-left">Feature</th>
                <th className="p-3 md:p-4">RGL</th>
                <th className="p-3 md:p-4">BPT</th>
                <th className="p-3 md:p-4">HMT</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              <tr className="border-b">
                <td className="p-3 md:p-4 font-semibold whitespace-nowrap">
                  Softness
                </td>
                <td className="text-center whitespace-nowrap">⭐⭐⭐⭐⭐</td>
                <td className="text-center whitespace-nowrap">⭐⭐⭐⭐</td>
                <td className="text-center whitespace-nowrap">⭐⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-3 md:p-4 font-semibold whitespace-nowrap">
                  Aroma
                </td>
                <td className="text-center whitespace-nowrap">⭐⭐⭐⭐</td>
                <td className="text-center whitespace-nowrap">⭐⭐⭐⭐⭐</td>
                <td className="text-center whitespace-nowrap">⭐⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-b">
                <td className="p-3 md:p-4 font-semibold whitespace-nowrap">
                  Daily Meals
                </td>
                <td className="text-center whitespace-nowrap">✔️</td>
                <td className="text-center whitespace-nowrap">✔️</td>
                <td className="text-center whitespace-nowrap">✔️</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-3 md:p-4 font-semibold whitespace-nowrap">
                  Packing
                </td>
                <td className="text-center whitespace-nowrap text-sm md:text-base">
                  26kg / 30kg
                </td>
                <td className="text-center whitespace-nowrap text-sm md:text-base">
                  26kg / 30kg
                </td>
                <td className="text-center whitespace-nowrap text-sm md:text-base">
                  26kg / 30kg
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}