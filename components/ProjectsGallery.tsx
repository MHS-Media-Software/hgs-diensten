import { concept, images, c, getColor } from "../lib/concept";
import SectionBadge from "./SectionBadge";

export default function ProjectsGallery() {
  const bg = getColor("services", "bg", c.background);
  const titleColor = getColor("services", "titleColor", c.text);
  const textColor = getColor("services", "textColor", c.text + "88");
  const accentBorder = getColor("services", "accentBorder", c.accent);

  if (!concept.projects?.length) return null;

  const allProjects = concept.projects;
  const half = Math.ceil(allProjects.length / 2);
  const row1 = allProjects.slice(0, Math.max(half, 1));
  const row2 = allProjects.slice(Math.max(half, 1));
  const doubled1 = row1.length ? [...row1, ...row1, ...row1] : [];
  const doubled2 = row2.length ? [...row2, ...row2, ...row2] : [];

  return (
    <section className="overflow-hidden px-0 py-16 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto mb-12 max-w-6xl px-4 text-center sm:mb-16 sm:px-8">
        <div className="flex justify-center">
          <SectionBadge text="Wat we al hebben gedaan" color={textColor} borderColor={accentBorder} />
        </div>
        <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>
          {concept.projects[0]?.name ? "Onze projecten" : "Onze projecten"}
        </h2>
      </div>
      <div className="space-y-6">
        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {doubled1.map((p, i) => (
            <ProjectCard key={`r1-${i}`} project={p} img={images["project-" + (i % 3)]} titleColor={titleColor} />
          ))}
        </div>
        <div className="flex animate-marquee-reverse gap-6 whitespace-nowrap">
          {doubled2.map((p, i) => (
            <ProjectCard key={`r2-${i}`} project={p} img={images["project-" + (3 + (i % 3))]} titleColor={titleColor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, img, titleColor }) {
  return (
    <div className="relative h-64 w-80 shrink-0 overflow-hidden rounded-xl shadow-lg sm:h-72 sm:w-96">
      {img ? (
        <img src={img} alt={project.name} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-gray-200" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">{project.name}</h3>
        <p className="mt-1 text-xs text-white/70">{project.date} · {project.location}</p>
      </div>
    </div>
  );
}
