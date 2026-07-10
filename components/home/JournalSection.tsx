import Link from "next/link";
import { journal } from "@/lib/content";
import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export default function JournalSection() {
  return (
    <section className="bg-mist py-28 md:py-40">
      <div className="container-editorial">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-display-sm">The Journal</h2>
          <Link href="/journal" className="link-underline font-sans text-[0.72rem] uppercase tracking-wide text-ink/70">
            All entries &#8594;
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {journal.map((entry, i) => (
            <Reveal as="div" key={entry.slug} delay={i}>
              <Link href="/journal" data-cursor="hover" className="group block">
                <Photo src={entry.cover} alt={entry.title} tone={entry.tone} ratio="aspect-[5/6]" sizes="(max-width: 768px) 100vw, 33vw" />
                <p className="eyebrow mt-6">{entry.category} · {entry.date}</p>
                <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight transition-colors duration-500 group-hover:text-bronze">
                  {entry.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/55">{entry.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
