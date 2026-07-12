import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { journal } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Field notes, philosophy and craft from the we2 interior design studio.",
};

export default function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={["Notes on", "living well."]}
        intro="Occasional writing on the ideas behind our work — restraint, material, light, and the slow craft of a home."
      />

      <section className="container-editorial pb-32">
        <Reveal className="group mb-24 block">
          <Link href={`/journal/${lead.slug}`} data-cursor="hover" className="grid items-center gap-10 md:grid-cols-2">
            <Photo src={lead.cover} alt={lead.title} tone={lead.tone} ratio="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 50vw" />
            <div>
              <p className="eyebrow">{lead.category} · {lead.date}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">{lead.title}</h2>
              <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink/60">{lead.excerpt}</p>
              <span className="mt-8 inline-block link-underline font-sans text-[0.72rem] uppercase tracking-wide text-ink/70">
                Read entry &#8594;
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="grid gap-x-10 gap-y-16 border-t border-line pt-16 md:grid-cols-2">
          {rest.map((entry, i) => (
            <Reveal as="div" key={entry.slug} delay={i * 0.5} className="group">
              <Link href={`/journal/${entry.slug}`} data-cursor="hover" className="block">
              <Photo src={entry.cover} alt={entry.title} tone={entry.tone} ratio="aspect-[16/10]" sizes="(max-width: 768px) 100vw, 50vw" />
              <p className="eyebrow mt-6">{entry.category} · {entry.date}</p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight transition-colors duration-500 group-hover:text-bronze">
                {entry.title}
              </h3>
              <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-ink/60">{entry.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
