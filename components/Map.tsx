export default function Map() {
  return (
    <section id="location" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Location</p>
          <h2 className="section-title">Visit our rice mill.</h2>
          <p className="section-text mt-6">
            Sri Sai Balajee Modern Rice Mill, Gollaprolu, Kakinada, Andhra Pradesh.
          </p>
        </div>

        <div className="section-content overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=Sri%20Sai%20Balaji%20Modern%20Rice%20Mill%20Gollaprolu%20Kakinada&output=embed"
            width="100%"
            height="480"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/ooGrJxA7n17yMA1D7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-emerald-800 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
