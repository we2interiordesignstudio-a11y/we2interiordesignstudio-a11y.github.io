import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { Reveal, RevealLine } from "@/components/ui/Reveal";
import ProjectGallery from "@/components/project/ProjectGallery";
import MagneticButton from "@/components/ui/MagneticButton";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.intro,
    openGraph: { title: `${project.title} · we2 studio`, description: project.intro },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://we2interiors.com" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://we2interiors.com/projects" },
      { "@type": "ListItem", position: 3, name: project.title },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Cinematic hero */}
      <section className="relative flex h-[92svh] min-h-[560px] items-end overflow-hidden">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src={project.hero}
            alt={`${project.title} — ${project.category}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="container-editorial relative z-10 pb-16 text-cream md:pb-24">
          <p className="mb-6 font-sans text-[0.7rem] uppercase tracking-label text-cream/80">
            {project.category} · {project.year}
          </p>
          <h1 className="font-serif text-display-lg tracking-tight">
            <RevealLine immediate>{project.title}</RevealLine>
          </h1>
        </div>
      </section>

      {/* Facts + intro */}
      <section className="container-editorial grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <dl className="space-y-8">
            {[
              { k: "Location", v: project.location },
              { k: "Area", v: project.area },
              { k: "Year", v: project.year },
              { k: "Scope", v: project.scope.join(", ") },
              { k: "Materials", v: project.materials.join(", ") },
            ].map((row) => (
              <div key={row.k} className="border-t border-line pt-4">
                <dt className="eyebrow">{row.k}</dt>
                <dd className="mt-2 font-sans text-sm text-ink/70">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-8">
          <Reveal className="font-serif text-3xl leading-[1.3] tracking-tight md:text-[2.4rem] md:leading-[1.25]">
            {project.intro}
          </Reveal>
        </div>
      </section>

      {/* Concept */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <h2 className="font-serif text-display-sm tracking-tight md:col-span-4">The Concept</h2>
          <Reveal className="max-w-prose font-sans text-base leading-relaxed text-ink/65 md:col-span-8" delay={1}>
            {project.concept}
          </Reveal>
        </div>
      </section>

      {/* Visual story */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <p className="eyebrow mb-10">The story — click any frame to view fullscreen</p>
        </div>
        <ProjectGallery
          gallery={project.gallery}
          tone={project.tone}
          quote={`${project.concept.split(". ")[0]}.`}
        />
      </section>

      {/* Next project */}
      <section className="border-t border-line">
        <Link href={`/projects/${next.slug}`} data-cursor="hover" className="group block bg-canvas py-20 md:py-28">
          <div className="container-editorial flex flex-col items-center text-center">
            <p className="eyebrow mb-6">Next Project</p>
            <h2 className="font-serif text-display tracking-tight transition-colors duration-500 group-hover:text-bronze">
              {next.title}
            </h2>
            <span className="mt-8 inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-wide text-ink/60">
              View <span className="transition-transform duration-500 group-hover:translate-x-1.5">&#8594;</span>
            </span>
          </div>
        </Link>
      </section>

      <section className="container-editorial py-24 text-center">
        <MagneticButton href="/contact" variant="outline">
          Begin your project
        </MagneticButton>
      </section>
    </article>
  );
}
