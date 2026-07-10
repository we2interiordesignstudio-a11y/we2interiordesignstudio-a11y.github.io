import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";
import Photo from "@/components/ui/Photo";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How we work — five deliberate movements from discovery and concept to design, execution and styling.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title={["A deliberate", "process."]}
        intro="Good design is not an accident. It is the result of listening closely, deciding slowly, and holding the vision without compromise."
      />

      <section className="container-editorial pb-20">
        {processSteps.map((step, i) => (
          <Reveal as="div" key={step.n} className="grid gap-8 border-t border-line py-16 md:grid-cols-12 md:gap-12 md:py-24">
            <span className="font-serif text-6xl text-bronze/80 md:col-span-2 md:text-7xl">{step.n}</span>
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{step.title}</h2>
              <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/65">{step.body}</p>
            </div>
            <div className="md:col-span-5">
              <Photo tone={["#D8CFBF", "#CFC6B5", "#D3CABA", "#C9C0B0", "#DED6C6"][i]} ratio="aspect-[4/3]" />
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-editorial py-24 text-center">
        <MagneticButton href="/contact" variant="solid">
          Start the conversation
        </MagneticButton>
      </section>
    </>
  );
}
