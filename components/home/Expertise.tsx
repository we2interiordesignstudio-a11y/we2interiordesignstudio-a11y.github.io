"use client";

import { useState } from "react";
import { expertise } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export default function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-canvas py-28 md:py-40">
      <div className="container-editorial">
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="font-serif text-display-sm md:col-span-7">Our Expertise</h2>
          <Reveal className="font-sans text-sm leading-relaxed text-ink/55 md:col-span-5" delay={1}>
            Seven disciplines, one sensibility. Whatever the brief, the intent is constant — spaces
            that feel composed, considered and quietly luxurious.
          </Reveal>
        </div>

        <ul className="border-t border-line">
          {expertise.map((item, i) => (
            <li
              key={item.title}
              onMouseEnter={() => setActive(i)}
              className="group border-b border-line"
            >
              <div className="flex cursor-pointer items-baseline gap-6 py-7 transition-colors duration-500 md:gap-12 md:py-9">
                <span className="font-sans text-xs tracking-wide text-bronze">{item.n}</span>
                <h3
                  className={`font-serif text-3xl tracking-tight transition-all duration-500 md:text-5xl ${
                    active === i ? "translate-x-2 text-bronze md:translate-x-4" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="ml-auto hidden max-w-xs text-right font-sans text-sm leading-relaxed text-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:block">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
