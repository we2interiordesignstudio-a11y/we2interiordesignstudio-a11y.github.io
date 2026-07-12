import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/ui/Reveal";

/**
 * One immersive, full-bleed project moment between philosophy and process —
 * the homepage's "held breath". Uses the first project as the studio's signature work.
 */
export default function FeaturedSpotlight() {
  const featured = projects[0];

  return (
    <section aria-label="Featured project">
      <Link
        href={`/projects/${featured.slug}`}
        data-cursor="hover"
        className="group relative block h-[110svh] min-h-[640px] overflow-hidden"
      >
        <Image
          src="/projects/rathod-07.jpg"
          alt={`${featured.title} — entrance foyer with brass nameplate, designed by we2 studio`}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[2400ms] ease-luxe group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-charcoal/30 transition-colors duration-700 group-hover:bg-charcoal/40" />

        <div className="absolute inset-0 flex items-end">
          <div className="container-editorial pb-16 text-cream md:pb-24">
            <Reveal>
              <p className="mb-5 font-sans text-[0.7rem] uppercase tracking-label text-cream/75">
                Featured Work — {featured.category}
              </p>
              <h2 className="max-w-[14ch] font-serif text-display tracking-tight">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/80">
                {featured.intro}
              </p>
              <span className="mt-8 inline-flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-wide text-cream">
                Enter the home
                <span className="transition-transform duration-500 group-hover:translate-x-2">&#8594;</span>
              </span>
            </Reveal>
          </div>
        </div>
      </Link>
    </section>
  );
}
