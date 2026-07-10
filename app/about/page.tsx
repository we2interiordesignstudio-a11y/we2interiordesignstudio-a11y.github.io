import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "we2 is an interior design studio in Vadodara — a small team composing timeless residential and hospitality interiors defined by restraint and material honesty.",
};

const values = [
  { title: "Restraint", body: "We remove until only the essential remains. What is left is calm, confident and quietly rich." },
  { title: "Material Honesty", body: "Stone, plaster, oak, brass — chosen for how they feel and how they age, never for pretence." },
  { title: "Proportion", body: "Rooms that sit right in the body before the eye. Scale is our first material." },
  { title: "Craft", body: "We work with makers, not catalogues. Detail is where luxury actually lives." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Studio"
        title={["A studio built", "on restraint."]}
        intro="we2 is an interior design studio based in Vadodara. We compose spaces for people who value the quiet kind of luxury — the sort you feel rather than announce."
      />

      <section className="container-editorial grid gap-16 py-16 md:grid-cols-2 md:gap-24 md:py-24">
        <Reveal>
          <Photo
            src="/projects/rathod-07.jpg"
            alt="Entrance foyer — Rathod Residence, by we2 studio"
            ratio="aspect-[4/5]"
            caption="Entrance foyer — Rathod Residence"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal className="font-serif text-2xl leading-[1.4] tracking-tight md:text-3xl">
            We began with a simple conviction: that a home should feel inevitable — as though it
            could not have been any other way.
          </Reveal>
          <Reveal delay={1} className="mt-8 font-sans text-sm leading-relaxed text-ink/60">
            Founded in Vadodara, we2 is a deliberately small practice. That is a choice, not a
            limitation. It means the people who take your first call are the same people drawing
            your joinery and standing on your site. We take on a handful of projects each year so
            that each receives the attention it deserves.
          </Reveal>
          <Reveal delay={2} className="mt-6 font-sans text-sm leading-relaxed text-ink/60">
            Our work spans private residences, luxury villas, apartments and hospitality across
            India — unified not by a signature look, but by a way of thinking.
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24 md:py-32">
        <div className="container-editorial">
          <h2 className="mb-14 font-serif text-display-sm tracking-tight">What we believe</h2>
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal as="div" key={v.title} delay={i * 0.5} className="border-t border-line pt-6">
                <h3 className="font-serif text-2xl tracking-tight">{v.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/60">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-28 text-center md:py-40">
        <h2 className="mx-auto max-w-[16ch] font-serif text-display tracking-tight">
          Designed for the way you live.
        </h2>
        <div className="mt-12 flex justify-center">
          <MagneticButton href="/contact" variant="solid">
            Work With Us
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
