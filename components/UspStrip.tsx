import { concept, c, getColor } from "../lib/concept";
import { DynamicIcon } from "../lib/icons";

export default function UspStrip() {
  const cardBg = getColor("usp", "cardBg", c.text);
  const cardText = getColor("usp", "cardText", "#ffffff");
  const iconColor = getColor("usp", "iconColor", c.accent);

  return (
    <div className="relative z-10 -mt-16 px-4 sm:-mt-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {concept.uspCards?.map((usp, i) => (
          <div
            key={i}
            className="flex animate-fade-in-up items-start gap-4 rounded-xl p-5 shadow-xl transition-transform hover:-translate-y-2 sm:p-6"
            style={{ backgroundColor: cardBg, color: cardText, animationDelay: `${(i + 1) * 200}ms` }}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: iconColor + "20" }}>
              <DynamicIcon name={usp.icon} className="h-5 w-5" style={{ color: iconColor }} />
            </div>
            <div>
              <h4 className="text-sm font-semibold">{usp.title}</h4>
              <p className="mt-1 text-xs font-light" style={{ opacity: 0.6 }}>{usp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
