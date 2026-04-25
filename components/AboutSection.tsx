import { concept, images, c, getColor } from "../lib/concept";
import { CheckCircle } from "../lib/icons";

export default function AboutSection() {
  const bg = getColor("about", "bg", c.background);
  const titleColor = getColor("about", "titleColor", c.text);
  const textColor = getColor("about", "textColor", c.text + "88");
  const badgeBg = getColor("about", "badgeBg", c.accent);
  const badgeText = getColor("about", "badgeText", "#ffffff");

  if (!concept.about) return null;

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-14">
        <div className="relative w-full animate-fade-in-left md:w-1/2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl" style={{ backgroundColor: c.text + "10" }}>
            {images.about && <img src={images.about} alt="" className="h-full w-full object-cover" />}
          </div>
          <div className="absolute -right-2 -bottom-4 animate-rotate-in rounded-xl px-4 py-3 shadow-lg sm:-right-4 sm:-bottom-6 sm:px-6 sm:py-5" style={{ backgroundColor: badgeBg, animationDelay: "400ms" }}>
            <div className="text-3xl font-bold sm:text-4xl" style={{ color: badgeText }}>{concept.about.yearsExperience}</div>
            <div className="text-[10px] font-light sm:text-xs" style={{ color: badgeText, opacity: 0.85 }}>jaar ervaring</div>
          </div>
        </div>
        <div className="w-full animate-fade-in-right md:w-1/2" style={{ animationDelay: "200ms" }}>
          <h2 className="text-2xl font-semibold sm:text-4xl" style={{ color: titleColor }}>{concept.about.title}</h2>
          <p className="mt-4 text-sm leading-relaxed font-light whitespace-pre-line sm:text-base" style={{ color: textColor }}>{concept.about.text}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {concept.about.checklistItems?.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: titleColor }}>
                <CheckCircle className="h-4 w-4" style={{ color: c.accent }} /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
