"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fields = [
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "location", label: "Project location", type: "text", required: false },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static-export friendly: compose a mailto with the enquiry.
    // Swap for Formspree / Basin / your endpoint when a backend is ready.
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:we2interiordesignstudio@gmail.com?subject=New enquiry — ${data.get("name")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 flex flex-col items-start justify-center bg-canvas"
          >
            <p className="eyebrow mb-4">Thank you</p>
            <p className="font-serif text-3xl tracking-tight">
              Your enquiry is on its way.
              <br />
              We reply within two working days.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={onSubmit} className="space-y-10">
        <div className="grid gap-10 md:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span className="eyebrow">{f.label}{f.required && " *"}</span>
              <input
                name={f.name}
                type={f.type}
                required={f.required}
                className="mt-3 w-full border-b border-ink/20 bg-transparent pb-3 font-sans text-lg text-ink outline-none transition-colors focus:border-bronze"
              />
            </label>
          ))}
        </div>

        <label className="block">
          <span className="eyebrow">Tell us about your project *</span>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-3 w-full resize-none border-b border-ink/20 bg-transparent pb-3 font-sans text-lg text-ink outline-none transition-colors focus:border-bronze"
          />
        </label>

        <button
          type="submit"
          data-cursor="hover"
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 font-sans text-[0.7rem] uppercase tracking-wide text-canvas transition-colors duration-500 hover:bg-bronze"
        >
          Send Enquiry
          <span className="transition-transform duration-500 group-hover:translate-x-1">&#8594;</span>
        </button>
      </form>
    </div>
  );
}
