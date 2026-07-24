import Header from "../components/Header";
import Products from "../components/Products";
import WhyChoose from "../components/WhyChoose";
import Delivery from "../components/Delivery";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Infrastructure from "../components/Infrastructure";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Stats from "../components/Stats";
import Comparison from "../components/Comparison";
import Map from "../components/Map";
import DealerForm from "@/components/DealerForm";

export default function Home() {
  return (
    <main className="bg-stone-50 text-slate-950">
      <Header />

      <section
        id="home"
        className="relative h-screen min-h-[100vh] overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/hero_image.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.45)] to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 py-24">
          <div className="max-w-[600px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200 sm:text-sm">
              Sri Sai Balajee Modern Rice Mill
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[4.5rem] lg:text-[5.25rem]">
              7 STARS RICE
            </h1>

            <p className="mt-7 text-lg font-medium leading-relaxed text-stone-100 sm:text-xl">
            {/* Premium Rice, Expertly Milled for Exceptional Quality. */}
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-300 sm:text-base sm:leading-8">
              {/* Trusted RGL, BPT and HMT rice — hygienically milled and supplied across Andhra Pradesh. */}
            </p>

            {/* <div className="mt-10 flex flex-wrap items-center gap-2.5">
              {["RGL RICE", "BPT RICE", "HMT RICE"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[rgba(16,185,129,0.4)] bg-[rgba(16,185,129,0.12)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-colors duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                >
                  {chip}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <Stats />

      <section id="about" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="section-intro">
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title">
              Committed to Quality. Driven by Trust.
            </h2>
            <p className="section-text mt-8">
              Sri Sai Balajee Modern Rice Mill is a trusted manufacturer of
              premium-quality rice in Andhra Pradesh, combining advanced milling
              technology with stringent quality standards to deliver rice of
              exceptional purity, freshness, and taste.
            </p>
            <p className="section-text mt-6">
              From carefully selected paddy to hygienic processing and precision
              packaging, every step is focused on preserving the natural goodness
              of each grain. We proudly supply premium RGL, BPT, and HMT rice to
              wholesalers, retailers, and distributors with a commitment to
              consistency, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <Products />
      <Comparison />
      <WhyChoose />
      <Infrastructure />
      <Gallery />
      <Delivery />
      <DealerForm />
      <Contact />
      <Map />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
