import { concept, images, c, getColor } from "../lib/concept";

export default function ProjectGrid() {
  const bg = getColor("services", "bg", c.background);
  const titleColor = getColor("services", "titleColor", c.text);
  const accent = getColor("services", "accentBorder", c.accent);

  if (!concept.projects?.length) return null;

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor }}>
            {concept.projecten?.gridTitle || "Onze projecten"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl animate-fade-in-up text-sm sm:text-base" style={{ color: c.text + "88", animationDelay: "100ms" }}>
            {concept.projecten?.gridText}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concept.projects.map((project, i) => (
            <div
              key={i}
              className="group relative h-72 animate-fade-in-up overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {images["project-" + i] ? (
                <img src={images["project-" + i]} alt={project.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <div className="h-full w-full bg-gray-200" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-5">
                <h3 className="text-base font-semibold text-white sm:text-lg">{project.name}</h3>
                <p className="mt-1 text-xs text-white/70">{project.date} · {project.location}</p>
              </div>
              <div className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-semibold text-white" style={{ backgroundColor: accent }}>
                Project
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
