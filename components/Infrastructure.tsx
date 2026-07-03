import Image from "next/image";

export default function Infrastructure() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          Our Modern Infrastructure
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Advanced machinery and modern technology ensure premium-quality rice production.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/dryer.jpg"
              alt="Dryer Plant"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-700">
                Dryer Plant
              </h3>
              <p className="mt-3 text-gray-600">
                Modern drying system that preserves grain quality.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/boiler.jpg"
              alt="Steam Boiler"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-700">
                Steam Boiler
              </h3>
              <p className="mt-3 text-gray-600">
                Efficient steam generation for rice processing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/sortex.jpg"
              alt="Color Sorter"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-700">
                Color Sorter
              </h3>
              <p className="mt-3 text-gray-600">
                Removes impurities and delivers premium-quality rice.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/processing-unit.jpg"
              alt="Processing Unit"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-700">
                Processing Unit
              </h3>
              <p className="mt-3 text-gray-600">
                Fully automated milling with hygienic processing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/conveyor.jpg"
              alt="Conveyor System"
              width={500}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-700">
                Conveyor System
              </h3>
              <p className="mt-3 text-gray-600">
                Smooth automated transportation throughout the plant.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}