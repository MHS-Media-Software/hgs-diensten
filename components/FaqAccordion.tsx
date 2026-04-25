import { concept, c, getColor } from "../lib/concept";
import { Plus } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function FaqAccordion() {
  const bg = getColor("uniqueFeatures", "bg", c.text);
  const titleColor = getColor("uniqueFeatures", "titleColor", "#ffffff");
  const textColor = getColor("uniqueFeatures", "textColor", "#ffffff99");
  const accent = getColor("uniqueFeatures", "iconColor", c.accent);

  if (!concept.contactPage?.faq?.length) return null;

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="flex justify-center">
            <SectionBadge text="De antwoorden op al je vragen" color={textColor} borderColor={accent} />
          </div>
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>
            {concept.contactPage.faqTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl animate-fade-in-up text-sm sm:text-base" style={{ color: textColor, animationDelay: "200ms" }}>
            {concept.contactPage.faqText}
          </p>
        </div>
        <div className="space-y-3">
          {concept.contactPage.faq.map((item, i) => (
            <details
              key={i}
              className="group animate-fade-in-up rounded-xl border p-5 transition-colors hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.1)", animationDelay: `${(i + 1) * 80}ms` }}
            >
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold sm:text-base" style={{ color: titleColor }}>
                <span>{item.question}</span>
                <Plus className="accordion-icon h-4 w-4 shrink-0 transition-transform" style={{ color: accent }} />
              </summary>
              <p className="mt-3 text-xs leading-relaxed font-light sm:text-sm" style={{ color: textColor }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
