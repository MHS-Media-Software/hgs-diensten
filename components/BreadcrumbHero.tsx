"use client";

import Link from "next/link";
import { concept, images, c, getColor } from "../lib/concept";

export default function BreadcrumbHero({ title, text, imageKey }) {
  const bg = getColor("hero", "bg", c.text);
  const img = images[imageKey];
  return (
    <div className="relative flex min-h-[320px] items-center sm:min-h-[400px]" style={{ backgroundColor: bg }}>
      {img && (
        <div className="absolute inset-0">
          <img src={img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-8 sm:py-20">
        <h1 className="animate-fade-in-up text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h1>
        {text && <p className="mx-auto mt-4 max-w-xl animate-fade-in-up text-sm text-white/80 sm:text-base" style={{ animationDelay: "150ms" }}>{text}</p>}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs animate-fade-in-up" style={{ color: "#ffffff99", animationDelay: "300ms" }}>
          <Link href="/" className="hover:text-white">{concept.companyName}</Link>
          <span>&gt;</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
      <CurveDivider fill={c.background} />
    </div>
  );
}

export function CurveDivider({ fill }) {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="h-[40px] w-full sm:h-[60px]">
        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" fill={fill} />
      </svg>
    </div>
  );
}
