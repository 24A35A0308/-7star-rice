import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide">7STARS RICE</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              Premium quality rice manufactured with modern processing,
              hygienic handling, and dependable supply across Andhra Pradesh.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Quick links</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Contact</h2>
            <div className="mt-5 space-y-4 text-slate-300">
              <p className="flex gap-3"><FaPhoneAlt className="mt-1 text-amber-300" /> +91 8340096545</p>
              <p className="flex gap-3"><FaPhoneAlt className="mt-1 text-amber-300" /> +91 9030373674</p>
              <p className="flex gap-3"><FaEnvelope className="mt-1 text-amber-300" /> saibalajeebpt@gmail.com</p>
              <p className="flex gap-3"><FaMapMarkerAlt className="mt-1 text-amber-300" /> B. Parthipadu, Pithapuram, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          Copyright 2026 7STARS RICE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
