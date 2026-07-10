import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "In the words of the people we have designed for.",
};

// A few extra voices for the dedicated page
const extended = [
  ...testimonials,
  {
    quote:
      "Our home feels like it has always existed. That, I think, is the highest compliment I can give.",
    name: "A private client",
    project: "Residence, Gujarat",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="In Their Words"
        title={["Kind", "words."]}
        intro="We measure our work by how our clients live in it, years later. Here is what a few of them have said."
      />

      <section className="container-editorial pb-32">
        <div className="border-t border-line">
          {extended.map((t, i) => (
            <Reveal as="div" key={i} delay={(i % 2) * 0.4} className="grid gap-6 border-b border-line py-16 md:grid-cols-12 md:py-24">
              <blockquote className="font-serif text-3xl leading-[1.3] tracking-tight md:col-span-9 md:text-4xl md:leading-[1.3]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="md:col-span-3 md:text-right">
                <p className="font-sans text-sm text-ink/70">{t.name}</p>
                <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-wide text-ink/45">{t.project}</p>
              </footer>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
