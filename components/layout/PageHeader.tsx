import { RevealLine } from "@/components/ui/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string[];
  intro?: string;
}) {
  return (
    <header className="container-editorial pb-16 pt-40 md:pb-24 md:pt-52">
      <p className="eyebrow mb-8">{eyebrow}</p>
      <h1 className="font-serif text-display tracking-tight">
        {title.map((line, i) => (
          <RevealLine key={line} delay={i * 0.1} immediate>
            {line}
          </RevealLine>
        ))}
      </h1>
      {intro && (
        <p className="mt-10 max-w-prose font-sans text-base leading-relaxed text-ink/60">{intro}</p>
      )}
    </header>
  );
}
