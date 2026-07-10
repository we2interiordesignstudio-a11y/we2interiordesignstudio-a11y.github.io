import { processSteps } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export default function ProcessTimeline() {
  return (
    <section className="bg-ink py-28 text-canvas md:py-40">
      <div className="container-editorial">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-display-sm">The Process</h2>
          <Reveal className="max-w-sm font-sans text-sm leading-relaxed text-canvas/55" delay={1}>
            Five deliberate movements, from the first conversation to the final styled shelf.
          </Reveal>
        </div>

        <div className="border-t border-canvas/15">
          {processSteps.map((step, i) => (
            <Reveal as="div" key={step.n} delay={i * 0.5} className="grid gap-6 border-b border-canvas/15 py-10 md:grid-cols-12 md:items-baseline md:py-12">
              <span className="font-serif text-2xl text-bronze md:col-span-2">{step.n}</span>
              <h3 className="font-serif text-3xl tracking-tight md:col-span-4 md:text-4xl">{step.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-canvas/60 md:col-span-6">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
