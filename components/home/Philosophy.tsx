import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export default function Philosophy() {
  return (
    <section className="bg-mist py-28 md:py-40">
      <div className="container-editorial grid items-center gap-16 md:grid-cols-2 md:gap-24">
        <Reveal>
          <Photo
            src="/projects/rathod-05.jpg"
            alt="Guest bedroom in warm terracotta — Rathod Residence"
            ratio="aspect-[4/5]"
            caption="Rathod Residence — guest bedroom in terracotta"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>

        <div>
          <Reveal className="eyebrow mb-8">Our Philosophy</Reveal>
          <Reveal delay={1}>
            <blockquote className="font-serif text-3xl leading-[1.25] tracking-tight md:text-[2.75rem] md:leading-[1.2]">
              &ldquo;Every project begins with understanding how people wish to live — the rest is
              patience, proportion and the honesty of good materials.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={2} className="mt-10 max-w-md font-sans text-sm leading-relaxed text-ink/60">
            We are not interested in trends. We design rooms that feel inevitable — quiet enough to
            live in for decades, generous enough to grow with you. Luxury, to us, is the absence of
            everything unnecessary.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
