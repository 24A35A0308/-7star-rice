"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const fieldClass =
  "w-full rounded-md border border-stone-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("7starrice", "template_2ufytuk", form.current, "MSFmPzFbtmPr3vSj-")
      .then(
        () => {
          setStatus("Your enquiry has been sent successfully.");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">
            Talk to us about rice supply, pricing, and availability.
          </h2>
          <p className="section-text mt-6">
            Share your requirement and our team will help you with product details,
            dealer enquiries, and bulk supply questions.
          </p>
        </div>

        <div className="section-content grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-950">Get in touch</h3>
            <div className="mt-8 space-y-5 text-slate-700">
              <p className="flex gap-4"><FaPhoneAlt className="mt-1 text-emerald-800" /> +91 8340096545</p>
              <p className="flex gap-4"><FaPhoneAlt className="mt-1 text-emerald-800" /> +91 9030373674</p>
              <p className="flex gap-4"><FaEnvelope className="mt-1 text-emerald-800" /> saibalajeebpt@gmail.com</p>
              <p className="flex gap-4"><FaMapMarkerAlt className="mt-1 text-emerald-800" /> B. Parthipadu, Pithapuram, Andhra Pradesh</p>
            </div>

            <a
              href="https://wa.me/918340096545"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="rounded-lg border border-stone-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="from_name" placeholder="Your name" required className={fieldClass} />
              <input type="email" name="reply_to" placeholder="Email address" required className={fieldClass} />
            </div>
            <input type="text" name="phone" placeholder="Phone number" required className={`mt-4 ${fieldClass}`} />
            <textarea name="message" placeholder="Tell us your requirement" rows={6} required className={`mt-4 ${fieldClass}`} />

            <button
              type="submit"
              className="mt-5 rounded-full bg-emerald-800 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"
            >
              Send Message
            </button>

            {status && <p className="mt-4 font-semibold text-emerald-800">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
