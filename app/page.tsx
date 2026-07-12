import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import FeaturedSpotlight from "@/components/home/FeaturedSpotlight";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import MaterialsSection from "@/components/home/MaterialsSection";
import Expertise from "@/components/home/Expertise";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import JournalSection from "@/components/home/JournalSection";
import ContactCta from "@/components/home/ContactCta";

// The homepage as a journey:
// Hero → Selected Projects → Philosophy → Featured Project → Process →
// Materials & Craftsmanship → Expertise → Testimonials → Journal → Contact
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <FeaturedSpotlight />
      <ProcessTimeline />
      <MaterialsSection />
      <Expertise />
      <TestimonialsSection />
      <JournalSection />
      <ContactCta />
    </>
  );
}
