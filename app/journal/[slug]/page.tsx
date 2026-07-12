import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalEntry, journal } from "@/lib/journal";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return journal.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getJournalEntry(params.slug);
  if (!entry) return { title: "Journal" };
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      title: `${entry.title} · we2 studio journal`,
      description: entry.excerpt,
      type: "article",
      images: [{ url: entry.cover }],
    },
  };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const entry = getJournalEntry(params.slug);
  if (!entry) notFound();

  const index = journal.findIndex((e) => e.slug === entry.slug);
  const next = journal[(index + 1) % journal.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.excerpt,
    image: `${site.url}${entry.cover}`,
    datePublished: entry.dateISO,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Editorial header */}
      <header className="container-editorial pt-40 md:pt-52">
        <div className="mx-auto max-w-prose text-center">
          <p className="eyebrow">
            {entry.category} · {entry.date} · {entry.readingTime}
          </p>
          <h1 className="mt-6 font-serif text-display-sm tracking-tight md:text-[3.4rem] md:leading-[1.05]">
            {entry.title}
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-ink/55">{entry.excerpt}</p>
        </div>
      </header>

      {/* Cover */}
      <div className="container-editorial mt-14 md:mt-20">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image src={entry.cover} alt={entry.coverAlt} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>

      {/* Body */}
      <div className="container-editorial py-16 md:py-24">
        <div className="mx-auto max-w-prose">
          {entry.body.map((para, i) =>
            para.startsWith("> ") ? (
              <blockquote
                key={i}
                className="my-12 border-l-2 border-bronze pl-6 font-serif text-2xl leading-snug tracking-tight text-ink md:my-14 md:text-3xl"
              >
                {para.slice(2)}
              </blockquote>
            ) : (
              <p key={i} className="mb-6 font-sans text-[1.02rem] leading-[1.85] text-ink/75">
                {para}
              </p>
            )
          )}
        </div>
      </div>

      {/* Next article */}
      <section className="border-t border-line">
        <Link href={`/journal/${next.slug}`} data-cursor="hover" className="group block py-16 md:py-20">
          <div className="container-editorial flex flex-col items-center text-center">
            <p className="eyebrow mb-5">Next Entry</p>
            <h2 className="max-w-[18ch] font-serif text-4xl tracking-tight transition-colors duration-500 group-hover:text-bronze md:text-6xl">
              {next.title}
            </h2>
          </div>
        </Link>
      </section>
    </article>
  );
}
