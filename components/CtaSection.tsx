"use client";

import { concept, images, c, getColor } from "../lib/concept";
import { Mail, Phone, MapPin } from "../lib/icons";

export default function CtaSection() {
  const bg = getColor("cta", "bg", c.background);
  const cardBg = getColor("cta", "cardBg", c.text);
  const text = getColor("cta", "textColor", "#ffffffb3");
  const buttonBg = getColor("cta", "buttonBg", c.accent);
  const formBg = getColor("cta", "formBg", "rgba(255,255,255,0.1)");

  return (
    <section id="offerte" className="px-4 py-16 sm:px-8 sm:py-20" style={{ backgroundColor: bg }}>
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-2xl" style={{ backgroundColor: cardBg }}>
        {images["cta-bg"] && (
          <div className="absolute inset-0">
            <img src={images["cta-bg"]} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(75deg, ${cardBg}ed 61%, transparent 100%)`, opacity: 0.76 }} />
          </div>
        )}
        <div className="relative z-10 grid gap-8 p-8 sm:p-12 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="animate-fade-in-up text-2xl font-semibold text-white sm:text-3xl">{concept.ctaTitle}</h2>
            <p className="mt-4 animate-fade-in-up text-sm leading-relaxed font-light" style={{ color: text, animationDelay: "100ms" }}>{concept.ctaText}</p>
            <div className="mt-6 space-y-3">
              {concept.contact?.email && <div className="flex items-center gap-3 text-sm text-white/80"><Mail className="h-4 w-4" style={{ color: buttonBg }} /> {concept.contact.email}</div>}
              {concept.contact?.phone && <div className="flex items-center gap-3 text-sm text-white/80"><Phone className="h-4 w-4" style={{ color: buttonBg }} /> {concept.contact.phone}</div>}
              {concept.contact?.address && <div className="flex items-center gap-3 text-sm text-white/80"><MapPin className="h-4 w-4" style={{ color: buttonBg }} /> {concept.contact.address}</div>}
            </div>
          </div>
          <div className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: formBg }}>
            <h3 className="mb-4 text-base font-semibold text-white">Vraag een offerte aan</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Naam" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/30 focus:outline-none" />
              <input placeholder="E-mailadres" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/30 focus:outline-none" />
              <input placeholder="Telefoonnummer" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/30 focus:outline-none" />
              <textarea placeholder="Uw bericht" rows={3} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/30 focus:outline-none" />
              <button type="submit" className="w-full rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]" style={{ backgroundColor: buttonBg }}>{concept.ctaButtonText || "Versturen"}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
