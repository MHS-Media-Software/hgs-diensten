import BreadcrumbHero from "../../components/BreadcrumbHero";
import ServicesGrid from "../../components/ServicesGrid";
import DienstenUsp from "../../components/DienstenUsp";
import { concept } from "../../lib/concept";

export default function DienstenPage() {
  return (
    <>
      <BreadcrumbHero title={concept.diensten?.heroTitle || "Diensten"} text={concept.diensten?.heroText} imageKey="diensten-hero" />
      <ServicesGrid title={concept.diensten?.sectionTitle || "Onze diensten"} subtitle={concept.diensten?.sectionText} />
      <DienstenUsp />
    </>
  );
}
