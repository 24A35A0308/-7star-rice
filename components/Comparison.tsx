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

        <div className="overflow-x-auto mt-12">

          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">

            <thead className="bg-green-700 text-white">

              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4">RGL</th>
                <th className="p-4">BPT</th>
                <th className="p-4">HMT</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4 font-semibold">Softness</td>
                <td className="text-center">⭐⭐⭐⭐⭐</td>
                <td className="text-center">⭐⭐⭐⭐</td>
                <td className="text-center">⭐⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Aroma</td>
                <td className="text-center">⭐⭐⭐⭐</td>
                <td className="text-center">⭐⭐⭐⭐⭐</td>
                <td className="text-center">⭐⭐⭐⭐⭐</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold">Daily Meals</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
                <td className="text-center">✔️</td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Packing</td>
                <td className="text-center">26kg / 30kg</td>
                <td className="text-center">26kg / 30kg</td>
                <td className="text-center">26kg / 30kg</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}