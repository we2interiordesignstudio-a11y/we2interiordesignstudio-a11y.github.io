"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/ui/Logo";

// Elegant one-time loading veil. Reveals on first paint, then lifts away.
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("we2-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("we2-loaded", "1");
    }, 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink text-canvas"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <LogoMark className="h-16 w-auto text-canvas md:h-24" />
              <div className="mt-6 font-sans text-[0.65rem] uppercase tracking-label text-stone">
                Architect&ensp;|&ensp;Interior&ensp;|&ensp;Civil
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 h-px -translate-x-1/2 bg-stone/50"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
