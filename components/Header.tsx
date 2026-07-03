"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <Image
          src="/images/7stars-logo.png"
          alt="7STARS Rice Logo"
          width={80}
          height={80}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-700">Home</a>
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#products" className="hover:text-green-700">Products</a>
          <a href="#gallery" className="hover:text-green-700">Gallery</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <a
            href="#home"
            className="block px-6 py-4 border-b hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className="block px-6 py-4 border-b hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#products"
            className="block px-6 py-4 border-b hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>

          <a
            href="#gallery"
            className="block px-6 py-4 border-b hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="block px-6 py-4 hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}