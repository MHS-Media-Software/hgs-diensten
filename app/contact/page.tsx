import BreadcrumbHero from "../../components/BreadcrumbHero";
import ContactDetails from "../../components/ContactDetails";
import FaqAccordion from "../../components/FaqAccordion";
import { concept } from "../../lib/concept";

export default function ContactPage() {
  return (
    <>
      <BreadcrumbHero title={concept.contactPage?.heroTitle || "Contact"} text={concept.contactPage?.heroText} imageKey="contact-hero" />
      <ContactDetails />
      <FaqAccordion />
    </>
  );
}
