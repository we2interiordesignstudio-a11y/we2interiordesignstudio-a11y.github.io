import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Photo from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of interior design projects by we2 studio — residences, luxury villas, apartments and hospitality across India.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={["Selected", "projects."]}
        intro="A considered body of work across residences and apartments. Each project is a study in restraint, material and light."
      />

      <section className="container-editorial pb-32">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="div" key={p.slug} delay={(i % 2) * 0.5} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <Link href={`/projects/${p.slug}`} data-cursor="hover" className="group block">
                <Photo
                  src={p.hero}
                  alt={p.title}
                  tone={p.tone}
                  ratio={i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}
                  label={`0${i + 1}`}
                />
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-3xl tracking-tight transition-colors duration-500 group-hover:text-bronze md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-wide text-ink/50">
                      {p.category} · {p.location}
                    </p>
                  </div>
                  <span className="font-sans text-sm text-ink/40">{p.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
