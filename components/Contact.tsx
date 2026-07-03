"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "7starrice",
        "template_2ufytuk",
        form.current,
        "MSFmPzFbtmPr3vSj-"
      )
      .then(
        () => {
          setStatus("✅ Your enquiry has been sent successfully.");
          form.current?.reset();
        },
        () => {
          setStatus("❌ Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4">
          We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* Contact Details */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-2xl font-bold text-green-700 mb-6">
                Get in Touch
              </h3>

              <p className="mb-4 text-lg font-medium text-gray-800">
                📞 Phone: +91 9866426247
              </p>

              <p className="mb-4 text-lg font-medium text-gray-800">
                📞 Alternate Phone: +91 9030373674
              </p>

              <p className="mb-4 text-lg font-medium text-gray-800">
                📧 Email: saibalajeebpt@gmail.com
              </p>

              <p className="mb-6 text-lg font-medium text-gray-800">
                📍 Address: B. Parthipadu, Pithapuram, Andhra Pradesh
              </p>

              <a
                href="https://wa.me/919866426247"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700"
              >
                💬 Chat on WhatsApp
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border rounded-lg p-3"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border rounded-lg p-3"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
            >
              Send Message
            </button>

            {status && (
              <p className="font-semibold text-green-700">
                {status}
              </p>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}