import { concept, images, c, getColor } from "../lib/concept";
import { DynamicIcon } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function Timeline() {
  const bg = getColor("steps", "bg", c.accent);
  const cardBg = getColor("steps", "cardBg", "rgba(255,255,255,0.1)");
  const text = getColor("steps", "textColor", "#ffffff");
  const iconColor = getColor("steps", "iconColor", c.accent);

  if (!concept.steps?.length) return null;

  return (
    <section className="relative px-4 py-20 sm:px-8 sm:py-28" style={{ backgroundColor: bg }}>
      {images["steps-bg"] && (
        <div className="absolute inset-0">
          <img src={images["steps-bg"]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: bg, opacity: 0.8 }} />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-14 text-center sm:mb-20">
          <div className="flex justify-center">
            <SectionBadge text="Onze werkwijze" color="rgba(255,255,255,0.8)" borderColor="rgba(255,255,255,0.4)" />
          </div>
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: text, animationDelay: "100ms" }}>{concept.stepsTitle}</h2>
          <p className="mx-auto mt-4 max-w-lg animate-fade-in-up text-sm font-light sm:text-base" style={{ color: text, opacity: 0.7, animationDelay: "200ms" }}>
            {concept.stepsText}
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 md:block" style={{ backgroundColor: "rgba(255,255,255,0.25)" }} />
          <div className="space-y-10 md:space-y-16">
            {concept.steps?.map((step, i) => (
              <div key={i} className={`flex animate-fade-in-up flex-col items-center gap-4 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`} style={{ animationDelay: `${i * 200}ms` }}>
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="rounded-xl p-6 backdrop-blur-sm transition-colors hover:bg-white/20" style={{ backgroundColor: cardBg }}>
                    <h4 className="text-base font-semibold" style={{ color: text }}>{step.title}</h4>
                    <p className="mt-2 text-xs font-light sm:text-sm" style={{ color: text, opacity: 0.75 }}>{step.description}</p>
                  </div>
                </div>
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-xl">
                  <DynamicIcon name={step.icon} className="h-5 w-5" style={{ color: iconColor }} />
                </div>
                <div className="hidden w-[45%] md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
