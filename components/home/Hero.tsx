"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      {/* Background: swap for a film later — <video src="/hero.mp4" autoPlay muted loop playsInline poster="/projects/dune-01.jpg" /> */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/projects/dune-01.jpg"
            alt="Dune House living room by we2 interior design studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* whisper-quiet vignette for text legibility — flat, not a gradient */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="container-editorial relative z-10 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mb-8 font-sans text-[0.7rem] uppercase tracking-label text-cream/80"
        >
          Architect · Interior · Civil — Vadodara
        </motion.p>

        <h1 className="max-w-[16ch] font-serif text-display-lg text-cream">
          {["We design spaces", "that become", "timeless."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 2 + i * 0.14, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 1 }}
          className="mt-12"
        >
          <MagneticButton href="/projects" variant="solid">
            Explore Projects
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 md:right-16 md:flex"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-label text-cream/70">Scroll</span>
        <span className="block h-10 w-px bg-cream/50" />
      </motion.div>

      <Link href="#featured" aria-label="Skip to content" className="sr-only">
        Skip to content
      </Link>
    </section>
  );
}
