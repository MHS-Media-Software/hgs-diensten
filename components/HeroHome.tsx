"use client";

import { concept, images, c, getColor } from "../lib/concept";
import { ArrowRight } from "../lib/icons";
import { CurveDivider } from "./BreadcrumbHero";

export default function HeroHome() {
  const bg = getColor("hero", "bg", c.text);
  const titleColor = getColor("hero", "titleColor", "#ffffff");
  const subtitleColor = getColor("hero", "subtitleColor", "#ffffffb3");
  const buttonBg = getColor("hero", "buttonBg", c.accent);
  const buttonText = getColor("hero", "buttonText", "#ffffff");
  const badgeColor = getColor("hero", "badgeColor", "#ffffffcc");

  return (
    <section className="relative flex min-h-[500px] items-center sm:min-h-[600px]" style={{ backgroundColor: bg }}>
      {images.hero && (
        <div className="absolute inset-0">
          <img src={images.hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block animate-fade-in-down border-l-2 py-1 pl-3 text-xs font-light italic sm:text-sm" style={{ borderColor: titleColor, color: badgeColor, animationDelay: "100ms" }}>
            {concept.heroBadge}
          </span>
          <h1 className="animate-fade-in-up text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: titleColor, animationDelay: "200ms" }}>
            {concept.heroTitle}
          </h1>
          <p className="mt-4 max-w-lg animate-fade-in-up text-sm leading-relaxed sm:mt-6 sm:text-base" style={{ color: subtitleColor, animationDelay: "300ms" }}>
            {concept.heroSubtitle}
          </p>
          <button className="mt-6 flex animate-fade-in-up items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-transform hover:scale-105 hover:animate-float-slow sm:mt-8" style={{ backgroundColor: buttonBg, color: buttonText, animationDelay: "400ms" }}>
            {concept.heroButtonText} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CurveDivider fill={c.background} />
    </section>
  );
}
