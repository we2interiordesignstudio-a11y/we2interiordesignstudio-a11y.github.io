import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior architecture, residential design, hospitality, commercial and full turnkey delivery by we2 studio, Vadodara.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title={["Services", "& scope."]}
        intro="From a single considered room to a home delivered end to end, we work at whatever depth a project needs — always to the same standard."
      />

      <section className="container-editorial pb-32">
        <div className="border-t border-line">
          {services.map((s, i) => (
            <Reveal as="div" key={s.title} delay={i * 0.4} className="grid gap-8 border-b border-line py-14 md:grid-cols-12 md:py-20">
              <span className="font-serif text-2xl text-bronze md:col-span-1">0{i + 1}</span>
              <h2 className="font-serif text-4xl tracking-tight md:col-span-4 md:text-5xl">{s.title}</h2>
              <div className="md:col-span-7">
                <p className="max-w-prose font-sans text-base leading-relaxed text-ink/65">{s.body}</p>
                <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  {s.includes.map((inc) => (
                    <li key={inc} className="font-sans text-[0.72rem] uppercase tracking-wide text-ink/60">
                      — {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 text-center">
          <MagneticButton href="/contact" variant="solid">
            Discuss your project
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
