"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
};

// A button that leans gently toward the cursor.
export default function MagneticButton({ href, children, className, variant = "outline", onClick, type }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-sans text-[0.7rem] uppercase tracking-wide transition-colors duration-500";
  const styles = {
    solid: "bg-ink text-canvas hover:bg-bronze",
    outline: "border border-ink/25 text-ink hover:border-bronze hover:text-bronze",
    ghost: "text-ink hover:text-bronze",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <span className={cn(base, styles, className)}>
        {children}
        <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
          &#8594;
        </span>
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={typeof children === "string" ? children : undefined}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick}>
      {inner}
    </button>
  );
}
