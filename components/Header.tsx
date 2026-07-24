"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 z-50 border-b transition-[top,background-color,border-color,box-shadow] duration-300 ease-out ${
        isScrolled
          ? "top-0 border-stone-200/80 bg-white shadow-lg"
          : "top-5 border-transparent bg-transparent shadow-none sm:top-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        <a href="#home" className="flex items-center gap-3" aria-label="7STARS RICE home">
          <Image
            src="/images/7stars-logo.png"
            alt="7STARS Rice Logo"
            width={54}
            height={54}
            priority
            className="h-[54px] w-[54px] object-contain"
          />
          <div className="hidden sm:block">
            <p
              className={`text-sm font-extrabold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
            </p>
            <p
              className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? "text-slate-500" : "text-white/80"
              }`}
            >
            </p>
          </div>
        </a>

        <nav
          className={`hidden items-center gap-7 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 md:flex ${
            isScrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 ${
                isScrolled ? "hover:text-emerald-600" : "hover:text-amber-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#dealer"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 lg:inline-flex ${
            isScrolled
              ? "border border-transparent bg-emerald-600 text-white hover:bg-emerald-500"
              : "border border-white bg-transparent text-white hover:bg-white/10"
          }`}
        >
          Dealer Enquiry
        </a>

        <button
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-colors duration-300 md:hidden ${
            isScrolled
              ? "border-stone-200 text-slate-900"
              : "border-white text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className={`border-t px-6 py-3 transition-colors duration-300 md:hidden ${
            isScrolled
              ? "border-stone-200/60 bg-white"
              : "border-white/20 bg-black/60 backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block border-b py-3 text-sm font-semibold uppercase tracking-wide last:border-b-0 transition-colors duration-300 ${
                isScrolled
                  ? "border-stone-100 text-slate-900 hover:text-emerald-600"
                  : "border-white/10 text-white hover:text-amber-200"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#dealer"
            className={`mt-3 inline-flex rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              isScrolled
                ? "bg-emerald-600 text-white"
                : "border border-white text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Dealer Enquiry
          </a>
        </nav>
      )}
    </header>
  );
}
