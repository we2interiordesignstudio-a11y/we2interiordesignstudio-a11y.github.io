"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/lib/projects";

type Item = Project["gallery"][number] & { index: number };
type Row =
  | { kind: "full"; item: Item }
  | { kind: "pair"; items: [Item, Item] }
  | { kind: "tall"; item: Item };

/** Compose the flat gallery into an editorial rhythm: full-bleed → offset pair → tall study. */
function composeRows(gallery: Project["gallery"]): Row[] {
  const items: Item[] = gallery.map((g, index) => ({ ...g, index }));
  const rows: Row[] = [];
  let pending: Item[] = [];

  const flushPending = () => {
    while (pending.length >= 2) {
      rows.push({ kind: "pair", items: [pending.shift()!, pending.shift()!] });
    }
    if (pending.length === 1) {
      rows.push({ kind: "tall", item: pending.shift()! });
    }
  };

  for (const item of items) {
    if (item.wide) {
      flushPending();
      rows.push({ kind: "full", item });
    } else {
      pending.push(item);
    }
  }
  flushPending();
  return rows;
}

export default function ProjectGallery({
  gallery,
  tone,
  quote,
}: {
  gallery: Project["gallery"];
  tone?: string;
  quote?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const rows = composeRows(gallery);
  // The concept fragment breathes after the first full-bleed moment
  const quoteAfter = Math.min(1, rows.length - 1);

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

  const frame = (item: Item, ratio: string, sizes: string, className = "") => (
    <button
      onClick={() => setOpen(item.index)}
      data-cursor="hover"
      className={`block w-full text-left ${className}`}
      aria-label={`Open image: ${item.caption}`}
    >
      <Photo src={item.src} tone={tone} caption={item.caption} ratio={ratio} sizes={sizes} />
    </button>
  );

  return (
    <>
      <div className="space-y-16 md:space-y-24">
        {rows.map((row, r) => (
          <div key={r}>
            {row.kind === "full" && (
              <div className="relative left-1/2 w-screen -translate-x-1/2">
                {frame(row.item, "aspect-[16/9] md:aspect-[21/9]", "100vw")}
              </div>
            )}

            {row.kind === "pair" && (
              <div className="container-editorial grid gap-10 md:grid-cols-2 md:gap-12">
                {frame(row.items[0], "aspect-[4/5]", "(max-width: 768px) 100vw, 45vw")}
                {frame(row.items[1], "aspect-[4/5]", "(max-width: 768px) 100vw, 45vw", "md:mt-24")}
              </div>
            )}

            {row.kind === "tall" && (
              <div className="container-editorial grid items-end gap-10 md:grid-cols-12">
                <div className="md:col-span-7">
                  {frame(row.item, "aspect-[3/4]", "(max-width: 768px) 100vw, 55vw")}
                </div>
                <div className="md:col-span-4 md:col-start-9 md:pb-10">
                  <p className="font-serif text-6xl text-ink/15">
                    {String(row.item.index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ink/60">
                    {row.item.caption}
                  </p>
                </div>
              </div>
            )}

            {quote && r === quoteAfter && (
              <div className="container-editorial pt-16 md:pt-24">
                <Reveal className="mx-auto max-w-3xl text-center font-serif text-3xl leading-[1.35] tracking-tight md:text-4xl">
                  {quote}
                </Reveal>
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/95 p-4 md:p-12"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 z-10 font-sans text-[0.7rem] uppercase tracking-label text-cream/70 hover:text-cream"
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
              <p className="mt-4 text-center font-sans text-[0.72rem] uppercase tracking-wide text-cream/70">
                {gallery[open].caption} — {open + 1} / {gallery.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
