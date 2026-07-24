import Image from "next/image";

const images = [
  { src: "/images/factory.jpg", alt: "Rice mill facility" },
  { src: "/images/warehousestock.jpg", alt: "Warehouse stock" },
  { src: "/images/millingunitplatform.jpg", alt: "Milling unit platform" },
  { src: "/images/dryer.jpg", alt: "Dryer plant" },
  { src: "/images/sortex.jpg", alt: "Color sorter" },
  { src: "/images/conveyor.jpg", alt: "Conveyor system" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Gallery</p>
          <h2 className="section-title">
            A closer look at our mill and process.
          </h2>
          <p className="section-text mt-6">
            Clean spaces, modern equipment, and practical storage support the quality of every batch.
          </p>
        </div>

        <div className="section-content grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={460}
                className="h-72 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
