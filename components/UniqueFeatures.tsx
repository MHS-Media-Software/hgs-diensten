import { concept, images, c, getColor } from "../lib/concept";
import { DynamicIcon } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function UniqueFeatures() {
  const bg = getColor("uniqueFeatures", "bg", c.text);
  const titleColor = getColor("uniqueFeatures", "titleColor", "#ffffff");
  const textColor = getColor("uniqueFeatures", "textColor", "#ffffff99");
  const cardBg = getColor("uniqueFeatures", "cardBg", "rgba(255,255,255,0.05)");
  const iconColor = getColor("uniqueFeatures", "iconColor", c.accent);

  if (!concept.uniqueFeatures) return null;

  return (
    <section className="relative px-4 py-20 sm:px-8 sm:py-28" style={{ backgroundColor: bg }}>
      {images["unique-bg"] && (
        <div className="absolute inset-0">
          <img src={images["unique-bg"]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl sm:mb-16">
          <SectionBadge text="Wat ons uniek maakt" color={textColor} borderColor={iconColor} />
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>
            {concept.uniqueFeatures.sectionTitle}
          </h2>
          <p className="mt-4 animate-fade-in-up text-sm leading-relaxed font-light sm:text-base" style={{ color: textColor, animationDelay: "200ms" }}>
            {concept.uniqueFeatures.sectionText}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {concept.uniqueFeatures.items?.map((item, i) => (
            <div
              key={i}
              className="animate-fade-in-up rounded-xl border p-6 backdrop-blur-sm transition-colors hover:bg-white/10 sm:p-7"
              style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: cardBg, animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: iconColor + "20" }}>
                <DynamicIcon name={item.icon} className="h-5 w-5" style={{ color: iconColor }} />
              </div>
              <h4 className="text-base font-semibold" style={{ color: titleColor }}>{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed font-light sm:text-sm" style={{ color: textColor }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
