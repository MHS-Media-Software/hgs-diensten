import { concept, images, c, getColor } from "../lib/concept";
import SectionBadge from "./SectionBadge";

export default function OverOnsStory() {
  const bg = getColor("about", "bg", c.background);
  const titleColor = getColor("about", "titleColor", c.text);
  const textColor = getColor("about", "textColor", c.text + "88");
  const accent = c.accent;

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row md:gap-14">
        <div className="w-full animate-fade-in-left md:w-1/2">
          <SectionBadge text="Ons verhaal" color={textColor} borderColor={accent} />
          <h2 className="text-2xl font-semibold sm:text-4xl" style={{ color: titleColor }}>
            {concept.overOns?.storyTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed font-light whitespace-pre-line sm:text-base" style={{ color: textColor }}>
            {concept.overOns?.storyText}
          </p>
        </div>
        <div className="w-full animate-fade-in-right md:w-1/2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl" style={{ backgroundColor: c.text + "10" }}>
            {images["over-ons-story"] && <img src={images["over-ons-story"]} alt="" className="h-full w-full object-cover" />}
          </div>
        </div>
      </div>
    </section>
  );
}
