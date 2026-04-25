"use client";

import { useState } from "react";
import { concept, c, getColor } from "../lib/concept";
import { Star } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function Testimonials() {
  const bg = getColor("testimonials", "bg", c.text);
  const cardBg = getColor("testimonials", "cardBg", "rgba(255,255,255,0.05)");
  const textColor = getColor("testimonials", "textColor", "#ffffffb3");
  const starColor = getColor("testimonials", "starColor", c.accent);

  if (!concept.testimonials?.length) return null;

  return (
    <section className="relative px-4 py-20 sm:px-8 sm:py-28" style={{ backgroundColor: bg }}>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center sm:mb-16">
          <div className="flex justify-center">
            <SectionBadge text="Wat onze klanten zeggen" color={textColor} borderColor={starColor} />
          </div>
          <h2 className="animate-fade-in-up text-2xl font-semibold text-white sm:text-4xl" style={{ animationDelay: "100ms" }}>
            Klanten aan het woord
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concept.testimonials?.map((t, i) => (
            <div
              key={i}
              className="animate-fade-in-up rounded-xl border p-6 transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: cardBg, animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5" style={{ color: starColor, fill: starColor }} />
                ))}
              </div>
              <p className="text-xs leading-relaxed font-light italic sm:text-sm" style={{ color: textColor }}>&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: starColor }}>
                  {t.name?.[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white sm:text-sm">{t.name}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: textColor, opacity: 0.7 }}>{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
