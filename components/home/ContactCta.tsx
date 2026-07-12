import MagneticButton from "@/components/ui/MagneticButton";
import { RevealLine } from "@/components/ui/Reveal";

export default function ContactCta() {
  return (
    <section className="bg-canvas py-28 md:py-44">
      <div className="container-editorial text-center">
        <p className="eyebrow mb-10">Begin a Project</p>
        <h2 className="mx-auto max-w-[18ch] font-serif text-display tracking-tight">
          <RevealLine>Let us design</RevealLine>
          <RevealLine delay={0.1}>your next chapter.</RevealLine>
        </h2>
        <p className="mx-auto mt-8 max-w-md font-sans text-sm leading-relaxed text-ink/60">
          We take on a small number of projects each year. If ours feels like the right hands for
          yours, we would love to hear from you.
        </p>
        <div className="mt-12 flex justify-center">
          <MagneticButton href="/contact" variant="solid">
            Start a Conversation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
