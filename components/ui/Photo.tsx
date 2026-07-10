"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  src?: string; // real photograph/render — takes priority over tone
  tone?: string; // warm placeholder tone used when no src is given
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
 * Pass `src` for a real image; without it, renders a warm placeholder tone.
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
  return (
    <figure className={cn("group relative", className)}>
      <div className={cn("relative w-full overflow-hidden", ratio, !src && "photo-frame")}>
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
              className={cn(
                "object-cover",
                hover && "transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
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
              src ? "text-cream/80" : "text-ink/40"
            )}
          >
            {label}
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-sans text-[0.7rem] tracking-wide text-ink/45">{caption}</figcaption>
      )}
    </figure>
  );
}
