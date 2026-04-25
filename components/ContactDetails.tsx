import { concept, c, getColor } from "../lib/concept";
import { Mail, Phone, MapPin } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function ContactDetails() {
  const bg = getColor("about", "bg", c.background);
  const titleColor = getColor("about", "titleColor", c.text);
  const textColor = getColor("about", "textColor", c.text + "88");
  const accent = c.accent;
  const mapSrc = concept.contact?.address
    ? `https://maps.google.com/maps?q=${encodeURIComponent(concept.contact.address)}&t=m&z=14&output=embed`
    : null;

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="animate-fade-in-left">
            <SectionBadge text="Onze gegevens" color={textColor} borderColor={accent} />
            <h2 className="text-2xl font-semibold sm:text-4xl" style={{ color: titleColor }}>
              {concept.contactPage?.detailsTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed font-light sm:text-base" style={{ color: textColor }}>
              {concept.contactPage?.detailsText}
            </p>
            <div className="mt-6 space-y-4">
              {concept.contact?.email && (
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: accent + "15" }}>
                    <Mail className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <a href={`mailto:${concept.contact.email}`} className="text-sm" style={{ color: titleColor }}>
                    {concept.contact.email}
                  </a>
                </div>
              )}
              {concept.contact?.phone && (
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: accent + "15" }}>
                    <Phone className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <a href={`tel:${concept.contact.phone}`} className="text-sm" style={{ color: titleColor }}>
                    {concept.contact.phone}
                  </a>
                </div>
              )}
              {concept.contact?.address && (
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: accent + "15" }}>
                    <MapPin className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <span className="text-sm" style={{ color: titleColor }}>{concept.contact.address}</span>
                </div>
              )}
            </div>
          </div>
          <div className="animate-fade-in-right">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              {mapSrc ? (
                <iframe src={mapSrc} className="h-full w-full border-0" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-200 text-sm text-gray-500">Geen adres beschikbaar</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
