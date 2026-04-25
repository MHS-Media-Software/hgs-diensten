"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { concept, logoUrl, c, getColor } from "../lib/concept";
import { Menu, X } from "../lib/icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const bg = getColor("nav", "bg", c.text + "f5");
  const text = getColor("nav", "text", "#ffffff");
  const buttonBg = getColor("nav", "buttonBg", c.accent);
  const buttonText = getColor("nav", "buttonText", "#ffffff");

  return (
    <nav className="sticky top-0 z-50 px-4 py-3 backdrop-blur sm:px-8 sm:py-4" style={{ backgroundColor: bg }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {logoUrl && <img src={logoUrl} alt="Logo" className="h-8 w-auto object-contain" />}
          <span className="text-base font-semibold sm:text-lg" style={{ color: text }}>{concept.companyName}</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {concept.pages?.map((p) => {
            const active = pathname === p.slug || (p.slug !== "/" && pathname.startsWith(p.slug));
            return (
              <Link
                key={p.slug}
                href={p.slug}
                className="text-sm font-light transition-opacity hover:opacity-100"
                style={{ color: text, opacity: active ? 1 : 0.7 }}
              >
                {p.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-lg px-5 py-2 text-sm font-medium transition-transform hover:scale-105 sm:block" style={{ backgroundColor: buttonBg, color: buttonText }}>
            {concept.ctaButtonText || "Contact"}
          </Link>
          <button className="lg:hidden" style={{ color: text }} onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mt-3 space-y-2 border-t pt-3 lg:hidden" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {concept.pages?.map((p) => (
            <Link key={p.slug} href={p.slug} className="block text-sm font-light" style={{ color: text, opacity: 0.7 }} onClick={() => setOpen(false)}>
              {p.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
