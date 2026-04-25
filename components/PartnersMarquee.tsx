import { concept, c, getColor } from "../lib/concept";

export default function PartnersMarquee() {
  const bg = getColor("partners", "bg", c.background);
  const text = getColor("partners", "textColor", c.text + "30");
  const titleColor = getColor("about", "titleColor", c.text);

  if (!concept.partners?.length) return null;
  const items = [...concept.partners, ...concept.partners];

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: bg }}>
      <h3 className="mb-10 animate-fade-in-up text-center text-lg font-semibold sm:text-xl" style={{ color: titleColor }}>
        Partners waar we trots op zijn
      </h3>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee items-center gap-16 px-4 whitespace-nowrap">
          {items.map((name, i) => (
            <span key={i} className="text-lg font-semibold tracking-wide sm:text-xl" style={{ color: text }}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
