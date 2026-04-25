import HeroHome from "../components/HeroHome";
import UspStrip from "../components/UspStrip";
import AboutSection from "../components/AboutSection";
import PartnersMarquee from "../components/PartnersMarquee";
import UniqueFeatures from "../components/UniqueFeatures";
import ServicesGrid from "../components/ServicesGrid";
import Timeline from "../components/Timeline";
import ProjectsGallery from "../components/ProjectsGallery";
import BlogPreview from "../components/BlogPreview";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import { concept } from "../lib/concept";

export default function HomePage() {
  const hasPricing = concept.pricing && Array.isArray(concept.pricing.tiers) && concept.pricing.tiers.length > 0;
  return (
    <>
      <HeroHome />
      <UspStrip />
      <AboutSection />
      <PartnersMarquee />
      <UniqueFeatures />
      <ServicesGrid title="Onze diensten" subtitle={concept.uniqueFeatures?.sectionText} />
      <Timeline />
      {hasPricing && <PricingSection />}
      <ProjectsGallery />
      <BlogPreview />
      <Testimonials />
    </>
  );
}
