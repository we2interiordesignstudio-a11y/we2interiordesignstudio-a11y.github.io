"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import type { Project } from "@/lib/projects";

export default function ProjectGallery({ gallery }: { gallery: Project["gallery"] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (open === null) return;
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, gallery.length]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {gallery.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            data-cursor="hover"
            className={`block text-left ${img.wide ? "md:col-span-2" : ""}`}
            aria-label={`Open image: ${img.caption}`}
          >
            <Photo
              src={img.src}
              caption={img.caption}
              ratio={img.wide ? "aspect-[16/9]" : "aspect-[4/5]"}
              sizes={img.wide ? "(max-width: 768px) 100vw, 80vw" : "(max-width: 768px) 100vw, 40vw"}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/95 p-4 md:p-12"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 z-10 font-sans text-[0.7rem] uppercase tracking-label text-canvas/70 hover:text-canvas"
              onClick={() => setOpen(null)}
            >
              Close ✕
            </button>
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[80svh] w-full" style={{ aspectRatio: "16/10" }}>
                <Image
                  src={gallery[open].src}
                  alt={gallery[open].caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-sans text-[0.72rem] uppercase tracking-wide text-canvas/60">
                {gallery[open].caption} — {open + 1} / {gallery.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
