import BreadcrumbHero from "../../components/BreadcrumbHero";
import ProjectGrid from "../../components/ProjectGrid";
import Timeline from "../../components/Timeline";
import { concept } from "../../lib/concept";

export default function ProjectenPage() {
  return (
    <>
      <BreadcrumbHero title={concept.projecten?.heroTitle || "Projecten"} text={concept.projecten?.heroText} imageKey="projecten-hero" />
      <ProjectGrid />
      <Timeline />
    </>
  );
}
