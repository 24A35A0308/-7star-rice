"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const fieldClass =
  "w-full rounded-md border border-stone-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100";

export default function DealerForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendDealerEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("7starrice", "template_k20mkjf", form.current, "MSFmPzFbtmPr3vSj-")
      .then(
        () => {
          setStatus("Dealer enquiry sent successfully.");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <section id="dealer" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-intro">
          <p className="section-eyebrow">Dealer network</p>
          <h2 className="section-title">
            Become a 7STARS RICE dealer or distributor.
          </h2>
          <p className="section-text mt-6">
            Send your business details and monthly requirement. Our team will
            contact you with availability, packing options, and supply details.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendDealerEnquiry}
          className="section-content mx-auto max-w-4xl rounded-lg border border-stone-200 bg-stone-50 p-6 text-slate-950 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" name="dealer_name" placeholder="Dealer name" required className={fieldClass} />
            <input type="text" name="company_name" placeholder="Company name" required className={fieldClass} />
            <input type="tel" name="mobile" placeholder="Mobile number" required className={fieldClass} />
            <input type="email" name="email" placeholder="Email address" required className={fieldClass} />
            <input type="text" name="district" placeholder="District" required className={fieldClass} />
            <input type="text" name="state" placeholder="State" required className={fieldClass} />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <select name="rice_variety" required defaultValue="" className={fieldClass}>
              <option value="" disabled>Rice variety interested</option>
              <option>RGL</option>
              <option>BPT</option>
              <option>HMT</option>
            </select>
            <input type="text" name="monthly_requirement" placeholder="Monthly requirement" required className={fieldClass} />
          </div>

          <textarea name="message" rows={5} placeholder="Additional message" required className={`mt-4 ${fieldClass}`} />

          <button
            type="submit"
            className="mt-5 rounded-full bg-emerald-800 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700"
          >
            Submit Dealer Enquiry
          </button>

          {status && <p className="mt-4 font-semibold text-emerald-800">{status}</p>}
        </form>
      </div>
    </section>
  );
}
