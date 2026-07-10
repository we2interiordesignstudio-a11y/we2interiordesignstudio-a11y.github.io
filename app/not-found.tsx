import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-8">Error 404</p>
      <h1 className="font-serif text-display-lg tracking-tight">Lost the thread.</h1>
      <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-ink/55">
        The page you are looking for has been moved, renamed, or never existed. Let us guide you
        back to something beautiful.
      </p>
      <div className="mt-12">
        <MagneticButton href="/" variant="solid">
          Return Home
        </MagneticButton>
      </div>
    </section>
  );
}
