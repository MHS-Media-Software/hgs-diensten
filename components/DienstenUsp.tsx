import { concept, images, c, getColor } from "../lib/concept";
import { CheckCircle } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function DienstenUsp() {
  const bg = getColor("uniqueFeatures", "bg", c.text);
  const titleColor = getColor("uniqueFeatures", "titleColor", "#ffffff");
  const textColor = getColor("uniqueFeatures", "textColor", "#ffffff99");
  const accent = getColor("uniqueFeatures", "iconColor", c.accent);

  return (
    <section className="relative px-4 py-20 sm:px-8 sm:py-28" style={{ backgroundColor: bg }}>
      {images["diensten-usp"] && (
        <div className="absolute inset-0">
          <img src={images["diensten-usp"]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionBadge text="Waar we voor staan" color={textColor} borderColor={accent} />
            <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>
              {concept.diensten?.uspTitle}
            </h2>
            <p className="mt-4 animate-fade-in-up text-sm leading-relaxed font-light sm:text-base" style={{ color: textColor, animationDelay: "200ms" }}>
              {concept.diensten?.uspText}
            </p>
            <div className="mt-6 space-y-3">
              {concept.diensten?.uspChecklist?.map((item, i) => (
                <div key={i} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${300 + i * 100}ms` }}>
                  <CheckCircle className="h-5 w-5" style={{ color: accent }} />
                  <span className="text-sm font-medium" style={{ color: titleColor }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
