"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-700",
          scrolled ? "bg-canvas/80 py-4 backdrop-blur-md" : "py-6"
        )}
      >
        <nav className="container-editorial flex items-center justify-between">
          <Link href="/" aria-label="we2 home" className="text-ink transition-colors hover:text-bronze">
            <LogoMark className="h-7 w-auto" />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline font-sans text-[0.72rem] uppercase tracking-wide transition-colors",
                  pathname === item.href ? "text-bronze" : "text-ink/70 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-xs transition-colors hover:border-bronze hover:text-bronze lg:flex"
            >
              {dark ? "☾" : "☀"}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Open menu"
              className="flex flex-col items-end gap-[5px] lg:hidden"
            >
              <span className={cn("h-px bg-ink transition-all duration-300", open ? "w-6 translate-y-[6px] rotate-45" : "w-6")} />
              <span className={cn("h-px bg-ink transition-all duration-300", open ? "opacity-0" : "w-4")} />
              <span className={cn("h-px bg-ink transition-all duration-300", open ? "w-6 -translate-y-[6px] -rotate-45" : "w-6")} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[75] flex flex-col justify-center bg-canvas px-8 lg:hidden"
          >
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={item.href} className="font-serif text-5xl tracking-tight text-ink">
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="mt-14 font-sans text-xs uppercase tracking-label text-ink/50">
              {site.email}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
