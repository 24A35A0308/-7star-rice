export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">7STARS RICE</h2>
            <p className="mt-4 text-gray-300">
              Premium quality rice manufactured using modern technology
              and delivered across Andhra Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold">Quick Links</h2>

            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-300">About</a></li>
              <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
              <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>

            <p className="mt-4">📞 +91 9866426247</p>
            <p>📞 +91 9030373674</p>
            <p>📧 saibalajeebpt@gmail.com</p>
            <p>📍 B. Parthipadu, Pithapuram, Andhra Pradesh</p>
          </div>

        </div>

        <hr className="my-8 border-green-700" />

        <p className="text-center text-gray-300">
          © 2026 7STARS RICE. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}