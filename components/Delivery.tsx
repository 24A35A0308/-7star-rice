export default function Delivery() {
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

  return (
    <section className="bg-green-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          🚚 Delivering Across Andhra Pradesh
        </h2>

        <p className="text-center mt-4 text-lg">
          We supply premium quality rice to dealers, wholesalers and families.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {cities.map((city) => (
            <div
              key={city}
              className="bg-white text-green-700 rounded-xl p-5 text-center font-bold shadow-lg"
            >
              {city}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}