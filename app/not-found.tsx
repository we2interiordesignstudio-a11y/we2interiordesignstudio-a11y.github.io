import Link from "next/link";
import Photo from "@/components/ui/Photo";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="container-editorial flex min-h-[100svh] items-center pb-24 pt-40">
      <div className="grid w-full items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-6 font-serif text-display-sm tracking-tight md:text-[4.2rem] md:leading-[1.02]">
            This room doesn&rsquo;t exist.
          </h1>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-ink/60">
            The page you are looking for has been moved, renamed, or never built. Let us walk you
            back to something beautiful.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <MagneticButton href="/" variant="solid">
              Return Home
            </MagneticButton>
            <Link
              href="/projects"
              className="link-underline font-sans text-[0.72rem] uppercase tracking-wide text-ink/70"
            >
              View projects &#8594;
            </Link>
          </div>
        </div>
        <div className="hidden md:col-span-5 md:col-start-8 md:block">
          <Photo
            src="/projects/dune-05.jpg"
            alt="Dressing mirror toward the contour corridor — Dune House"
            ratio="aspect-[4/5]"
            caption="Dune House — a room that does exist"
            sizes="40vw"
          />
        </div>
      </div>
    </section>
  );
}
