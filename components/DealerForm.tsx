"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function DealerForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendDealerEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "7starrice",
        "template_k20mkjf",
        form.current,
        "MSFmPzFbtmPr3vSj-"
      )
      .then(
        () => {
          setStatus("✅ Dealer enquiry sent successfully.");
          form.current?.reset();
        },
        () => {
          setStatus("❌ Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <section id="dealer" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Become Our Dealer / Distributor
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Interested in selling 7 Star Rice? Fill out the form below and our team will contact you.
        </p>

        <form
          ref={form}
          onSubmit={sendDealerEnquiry}
          className="mt-10 space-y-4"
        >

          <input
            type="text"
            name="dealer_name"
            placeholder="Dealer Name"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <input
            type="text"
            name="district"
            placeholder="District"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <select
            name="rice_variety"
            required
            defaultValue=""
            className="w-full border rounded-lg p-3 text-gray-900 bg-white"
          >
            <option value="" disabled>
              Rice Variety Interested
            </option>
            <option>RGL</option>
            <option>BPT</option>
            <option>HMT</option>
          </select>

          <input
            type="text"
            name="monthly_requirement"
            placeholder="Monthly Requirement (e.g. 10 Tons)"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Additional Message"
            required
            className="w-full border rounded-lg p-3 text-gray-900 placeholder-gray-500 bg-white"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
          >
            Submit Dealer Enquiry
          </button>

          {status && (
            <p className="font-semibold text-green-700">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}