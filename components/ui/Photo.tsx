"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  src?: string; // real photograph/render — takes priority over tone
  tone?: string; // warm tone shown while the image develops, and as placeholder when no src
  caption?: string;
  alt?: string;
  label?: string;
  className?: string;
  ratio?: string; // e.g. "aspect-[4/5]"
  hover?: boolean; // zoom on hover
  priority?: boolean;
  sizes?: string;
};

/**
 * Editorial photography frame.
 * Real images arrive like a developing photograph: a wash of their own warm tone,
 * then a slow fade into focus. Without `src`, renders the tone as a placeholder.
 */
export default function Photo({
  src,
  tone = "#DCD3C3",
  caption,
  alt,
  label,
  className,
  ratio = "aspect-[4/5]",
  hover = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 66vw",
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={cn("group relative", className)}>
      <div
        className={cn("relative w-full overflow-hidden", ratio, !src && "photo-frame")}
        style={src ? { backgroundColor: tone } : undefined}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt ?? caption ?? "we2 studio project photograph"}
              fill
              priority={priority}
              sizes={sizes}
              onLoad={() => setLoaded(true)}
              className={cn(
                "object-cover transition-[opacity,transform] duration-[1100ms] ease-luxe",
                loaded ? "opacity-100" : "opacity-0",
                hover && "group-hover:scale-[1.05]"
              )}
            />
          ) : (
            <div className="photo-frame absolute inset-0" style={{ backgroundColor: tone }}>
              {hover && (
                <div
                  className="absolute inset-0 origin-center transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
                  style={{ backgroundColor: tone }}
                />
              )}
            </div>
          )}
        </motion.div>
        {label && (
          <span
            className={cn(
              "absolute bottom-4 left-4 z-10 font-sans text-[0.6rem] uppercase tracking-label",
              src ? "text-cream/80" : "text-ink/60"
            )}
          >
            {label}
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-sans text-[0.7rem] tracking-wide text-ink/60">{caption}</figcaption>
      )}
    </figure>
  );
}
