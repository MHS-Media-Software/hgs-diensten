import { concept, images, c, getColor } from "../lib/concept";
import { ArrowRight } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function ServicesGrid({ title, subtitle }) {
  const bg = getColor("services", "bg", c.background);
  const cardBg = getColor("services", "cardBg", "#ffffff");
  const cardBorder = getColor("services", "cardBorder", c.text + "10");
  const titleColor = getColor("services", "titleColor", c.text);
  const textColor = getColor("services", "textColor", c.text + "88");
  const accentBorder = getColor("services", "accentBorder", c.accent);

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="flex justify-center">
            <SectionBadge text="Wat we voor je kunnen doen" color={textColor} borderColor={accentBorder} />
          </div>
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl animate-fade-in-up text-sm sm:text-base" style={{ color: textColor, animationDelay: "200ms" }}>{subtitle}</p>}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concept.services?.map((service, i) => (
            <div
              key={i}
              className="group animate-fade-in-up overflow-hidden rounded-xl border shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: cardBorder, backgroundColor: cardBg, animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden sm:h-52" style={{ backgroundColor: c.text + "08" }}>
                {images["service-" + i] && <img src={images["service-" + i]} alt={service.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />}
              </div>
              <div className="border-t-[3px] p-5" style={{ borderColor: accentBorder }}>
                <h3 className="text-base font-semibold" style={{ color: titleColor }}>{service.name}</h3>
                <p className="mt-2 text-xs leading-relaxed font-light sm:text-sm" style={{ color: textColor }}>{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium" style={{ color: accentBorder }}>
                  Meer info <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
