import { concept, c, getColor } from "../lib/concept";
import { Check, DynamicIcon } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function PricingSection() {
  const pricing = concept.pricing;
  if (!pricing || !Array.isArray(pricing.tiers) || pricing.tiers.length === 0) return null;

  const bg = getColor("pricing", "bg", c.background);
  const cardBg = getColor("pricing", "cardBg", "#ffffff");
  const cardBorder = getColor("pricing", "cardBorder", c.text + "15");
  const highlightBg = getColor("pricing", "highlightBg", c.primary);
  const highlightText = getColor("pricing", "highlightText", "#ffffff");
  const titleColor = getColor("pricing", "titleColor", c.text);
  const textColor = getColor("pricing", "textColor", c.text + "88");
  const accentColor = getColor("pricing", "accentColor", c.accent);

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="flex justify-center">
            <SectionBadge text="Tarieven" color={textColor} borderColor={accentColor} />
          </div>
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>
            {pricing.sectionTitle || "Onze pakketten"}
          </h2>
          {pricing.sectionText && (
            <p className="mx-auto mt-4 max-w-2xl animate-fade-in-up text-sm sm:text-base" style={{ color: textColor, animationDelay: "200ms" }}>
              {pricing.sectionText}
            </p>
          )}
        </div>
        <div className={`grid gap-6 ${pricing.tiers.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
          {pricing.tiers.map((tier, i) => {
            const isHighlighted = !!tier.highlighted;
            return (
              <div
                key={i}
                className="animate-fade-in-up flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8"
                style={{
                  borderColor: isHighlighted ? highlightBg : cardBorder,
                  backgroundColor: isHighlighted ? highlightBg : cardBg,
                  color: isHighlighted ? highlightText : titleColor,
                  animationDelay: `${(i + 1) * 120}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  {tier.icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: (isHighlighted ? "#ffffff30" : accentColor + "20") }}>
                      <DynamicIcon name={tier.icon} className="h-5 w-5" style={{ color: isHighlighted ? "#ffffff" : accentColor }} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-3xl font-bold sm:text-4xl">{tier.price}</span>
                  {tier.priceSuffix && (
                    <span className="text-xs opacity-70 sm:text-sm">{tier.priceSuffix}</span>
                  )}
                </div>
                {tier.description && (
                  <p className="mt-3 text-sm font-light" style={{ opacity: isHighlighted ? 0.85 : 0.7 }}>
                    {tier.description}
                  </p>
                )}
                {Array.isArray(tier.features) && tier.features.length > 0 && (
                  <ul className="mt-6 space-y-3 text-sm">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: isHighlighted ? "#ffffff" : accentColor }} />
                        <span style={{ opacity: isHighlighted ? 0.9 : 0.85 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {tier.ctaText && (
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:opacity-90"
                    style={{
                      marginTop: "2rem",
                      backgroundColor: isHighlighted ? "#ffffff" : accentColor,
                      color: isHighlighted ? highlightBg : "#ffffff",
                    }}
                  >
                    {tier.ctaText}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
