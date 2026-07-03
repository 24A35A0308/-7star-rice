import Image from "next/image";

const images = [
  "/images/factory.jpg",
  "/images/warehousestock.jpg",
  "/images/millingunitplatform.jpg",
  "/images/dryer.jpg",
  "/images/boiler.jpg",
  "/images/sortex.jpg",
  "/images/processing-unit.jpg",
  "/images/conveyor.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Our Gallery
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Take a look at our rice mill, products and facilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-80 object-contain bg-white p-2 transitionn-transform duration-300 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}