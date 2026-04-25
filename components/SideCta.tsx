"use client";

import Link from "next/link";
import { c, getColor } from "../lib/concept";
import { concept } from "../lib/concept";
import { ArrowRight } from "../lib/icons";

export default function SideCta() {
  const buttonBg = getColor("nav", "buttonBg", c.accent);
  return (
    <Link
      href="/contact"
      className="fixed top-1/2 right-0 z-40 hidden origin-right -translate-y-1/2 -rotate-90 items-center gap-2 rounded-t-lg px-5 py-2 text-xs font-medium text-white shadow-lg transition-transform hover:scale-105 lg:flex"
      style={{ backgroundColor: buttonBg }}
    >
      <ArrowRight className="h-3 w-3 rotate-180" />
      {concept.ctaButtonText || "Contact"}
    </Link>
  );
}
