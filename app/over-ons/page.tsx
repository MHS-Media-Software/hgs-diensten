import BreadcrumbHero from "../../components/BreadcrumbHero";
import OverOnsStory from "../../components/OverOnsStory";
import Testimonials from "../../components/Testimonials";
import { concept } from "../../lib/concept";

export default function OverOnsPage() {
  return (
    <>
      <BreadcrumbHero title={concept.overOns?.heroTitle || "Over ons"} text={concept.overOns?.heroText} imageKey="over-ons-hero" />
      <OverOnsStory />
      <Testimonials />
    </>
  );
}
