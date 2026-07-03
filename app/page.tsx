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

export default function Home() {
  return (
    <main>
      <Header />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-[center_top] text-white"
        style={{
          backgroundImage: "url('/images/rice-mill.png')",
        }}
      >
<div className="bg-black/50 p-10 rounded-2xl text-center max-w-4xl">

  <p className="text-sm md:text-base tracking-widest text-gray-200 mb-3">
    SRI SAI BALAJEE MODERN RICE MILL
  </p>

  <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400">
     7STARS RICE
  </h1>

  <p className="mt-6 text-xl md:text-3xl font-semibold">
    Premium Quality Rice from Andhra Pradesh
  </p>

  <p className="mt-6 text-lg text-gray-200 leading-8">
    Delivering hygienically processed, premium-quality rice with
    modern technology, traditional purity, and trusted excellence
    across Andhra Pradesh.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

    <a
      href="#products"
      className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
    >
      🌾 Explore Products
    </a>

    <a
      href="#contact"
      className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition"
    >
      📞 Contact Us
    </a>

  </div>

</div>
       
      </section>
      <Stats />

     <section
       id="about"
       className="py-24 bg-white"
     >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-green-700">
            About Sri Sai Balajee Modern Rice Mill
          </h2>

          <p className="mt-10 text-xl text-gray-700 text-center leading-9">
            Sri Sai Balajee Modern Rice Mill is a trusted rice mill located in Andhra Pradesh.
            We specialize in producing premium-quality rice with modern
            processing technology while maintaining traditional purity.

            Our mission is to deliver fresh, hygienic and nutritious rice
            to every family across Andhra Pradesh.
          </p>

        </div>

      </section>

      <Products />

      <Gallery />

      <WhyChoose />

      <Delivery />

      <Contact />

      <Infrastructure />

      <Footer />

      <WhatsAppButton />

      <Comparison />

      <Map />

    </main>
    
  );

}