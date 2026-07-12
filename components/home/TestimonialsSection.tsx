"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="bg-canvas py-28 md:py-40">
      <div className="container-editorial max-w-5xl text-center">
        <p className="eyebrow mb-14">In Their Words</p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl leading-[1.3] tracking-tight md:text-[2.9rem] md:leading-[1.25]"
          >
            &ldquo;{t.quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-12 font-sans text-[0.7rem] uppercase tracking-label text-ink/60">
          {t.name} — {t.project}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-8 bg-bronze" : "w-1.5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
