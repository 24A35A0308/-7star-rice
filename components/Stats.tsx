export default function Stats() {
  const stats = [
    {
      number: "100%",
      title: "Premium Quality",
      icon: "🌾",
    },
    {
      number: "1000+",
      title: "Happy Customers",
      icon: "😊",
    },
    {
      number: "25+",
      title: "Cities Served",
      icon: "🚚",
    },
    {
      number: "24/7",
      title: "Customer Support",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-green-700 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-green-700 mt-4">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}