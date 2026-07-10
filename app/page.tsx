import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import Expertise from "@/components/home/Expertise";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import JournalSection from "@/components/home/JournalSection";
import ContactCta from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <Expertise />
      <ProcessTimeline />
      <TestimonialsSection />
      <JournalSection />
      <ContactCta />
    </>
  );
}
