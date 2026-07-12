import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

const beliefs = [
  {
    title: "Honest surfaces",
    body: "Stone that reads as stone, timber that shows its grain. We choose materials for what they are, not what they imitate.",
  },
  {
    title: "Made to age",
    body: "Brass that will patina, plaster that will soften. A we2 interior is chosen for its tenth year, not its first photograph.",
  },
  {
    title: "The maker's hand",
    body: "Fluting, carving, hand-finished texture — the details that cannot be bought off a shelf, only made for one home.",
  },
];

export default function MaterialsSection() {
  return (
    <section className="py-28 md:py-40" aria-label="Materials and craftsmanship">
      <div className="container-editorial">
        <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="font-serif text-display-sm md:col-span-7">
            Materials &amp; craftsmanship
          </h2>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-ink/55 md:col-span-5">
            Every project is built from a short, disciplined palette — natural, tactile, and
            chosen to grow more beautiful with use.
          </p>
        </div>

        {/* Tactile triptych — close crops of real work */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <Reveal as="div">
            <Photo
              src="/projects/dune-04.jpg"
              alt="Bespoke limed-oak wardrobes and floating shelves — Dune House"
              ratio="aspect-[4/5]"
              caption="Limed oak, carved by hand — Dune House"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Reveal>
          <Reveal as="div" delay={1}>
            <Photo
              src="/projects/sage-03.jpg"
              alt="Reeded glass, sage lacquer and quartzite kitchen — The Sage Apartment"
              ratio="aspect-[4/5]"
              caption="Reeded glass and quartzite — The Sage Apartment"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Reveal>
          <Reveal as="div" delay={2}>
            <Photo
              src="/projects/rathod-04.jpg"
              alt="Brushed brass mirrors and cream lacquer dressing corner — Rathod Residence"
              ratio="aspect-[4/5]"
              caption="Brushed brass and cream lacquer — Rathod Residence"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
          {beliefs.map((b, i) => (
            <Reveal as="div" key={b.title} delay={i}>
              <h3 className="font-serif text-2xl tracking-tight">{b.title}</h3>
              <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-ink/55">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
