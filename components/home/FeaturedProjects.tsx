import Link from "next/link";
import { projects } from "@/lib/projects";
import Photo from "@/components/ui/Photo";
import { Reveal, RevealLine } from "@/components/ui/Reveal";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="featured" className="bg-canvas py-28 md:py-40">
      <div className="container-editorial">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-display-sm">
            <RevealLine>Selected</RevealLine>
            <RevealLine delay={0.08}>Works</RevealLine>
          </h2>
          <Reveal className="max-w-sm font-sans text-sm leading-relaxed text-ink/60" delay={1}>
            A considered portfolio of homes and apartments — each a study in restraint, material
            and light.
          </Reveal>
        </div>
      </div>

      <div className="space-y-24 md:space-y-40">
        {featured.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={p.slug} className="container-editorial">
              <Link href={`/projects/${p.slug}`} data-cursor="hover" className="group block">
                <div className={`grid items-center gap-8 md:grid-cols-12 ${flip ? "" : ""}`}>
                  <div className={`md:col-span-8 ${flip ? "md:order-2" : ""}`}>
                    <Photo src={p.hero} alt={p.title} tone={p.tone} ratio="aspect-[16/10]" label={`0${i + 1}`} />
                  </div>
                  <div className={`md:col-span-4 ${flip ? "md:order-1 md:pr-8" : "md:pl-4"}`}>
                    <p className="eyebrow mb-4">{p.category} · {p.year}</p>
                    <h3 className="font-serif text-4xl leading-tight tracking-tight transition-colors duration-500 group-hover:text-bronze md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 font-sans text-sm leading-relaxed text-ink/60">{p.intro}</p>
                    <span className="mt-7 inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-wide text-ink/70">
                      View Project
                      <span className="transition-transform duration-500 group-hover:translate-x-1.5">&#8594;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      <div className="container-editorial mt-28 border-t border-line pt-10 text-center">
        <Link href="/projects" className="link-underline font-serif text-2xl tracking-tight md:text-3xl">
          View all projects
        </Link>
      </div>
    </section>
  );
}
