export default function Map() {
  return (
    <section id="location" className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          Visit Our Rice Mill
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Sri Sai Balaji Modern Rice Mill, Gollaprolu, Kakinada
        </p>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">

          <iframe
            src="https://www.google.com/maps?q=Sri%20Sai%20Balaji%20Modern%20Rice%20Mill%20Gollaprolu%20Kakinada&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>

        </div>

        <div className="text-center mt-8">

          <a
            href="https://maps.app.goo.gl/ooGrJxA7n17yMA1D7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800"
          >
            Get Directions
          </a>

        </div>

      </div>

    </section>
  );
}