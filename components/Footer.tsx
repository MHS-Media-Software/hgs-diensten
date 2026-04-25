import Link from "next/link";
import { concept, logoUrl, c, getColor } from "../lib/concept";
import { Facebook, Instagram, Youtube } from "../lib/icons";

export default function Footer() {
  const bg = getColor("footer", "bg", c.text);
  const text = getColor("footer", "textColor", "#ffffff66");
  const title = getColor("footer", "titleColor", "#ffffffcc");

  return (
    <footer className="px-4 py-12 sm:px-8 sm:py-16" style={{ backgroundColor: bg }}>
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            {logoUrl && <img src={logoUrl} alt="" className="h-8 w-auto" />}
            <span className="text-base font-semibold text-white">{concept.companyName}</span>
          </div>
          <p className="mt-3 text-xs font-light" style={{ color: text }}>{concept.footerTagline}</p>
          <div className="mt-4 flex gap-3">
            {concept.socialMedia?.facebook && <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"><Facebook className="h-3.5 w-3.5 text-white/60" /></div>}
            {concept.socialMedia?.instagram && <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"><Instagram className="h-3.5 w-3.5 text-white/60" /></div>}
            {concept.socialMedia?.youtube && <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"><Youtube className="h-3.5 w-3.5 text-white/60" /></div>}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold" style={{ color: title }}>Navigatie</h4>
          <div className="mt-3 space-y-2">
            {concept.pages?.map((p) => (
              <Link key={p.slug} href={p.slug} className="block text-xs font-light transition-colors hover:text-white" style={{ color: text }}>{p.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold" style={{ color: title }}>Diensten</h4>
          <div className="mt-3 space-y-2">
            {concept.services?.slice(0, 4).map((s, i) => (
              <p key={i} className="text-xs font-light" style={{ color: text }}>{s.name}</p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold" style={{ color: title }}>Informatie</h4>
          <div className="mt-3 space-y-2 text-xs font-light" style={{ color: text }}>
            {concept.companyInfo?.kvk && <p>KVK: {concept.companyInfo.kvk}</p>}
            {concept.companyInfo?.btw && <p>BTW: {concept.companyInfo.btw}</p>}
            {concept.companyInfo?.iban && <p>IBAN: {concept.companyInfo.iban}</p>}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t pt-6 text-center text-[10px]" style={{ borderColor: "rgba(255,255,255,0.1)", color: text, opacity: 0.7 }}>
        © {new Date().getFullYear()} {concept.companyName}. Alle rechten voorbehouden. | Gemaakt door MHS Media
      </div>
    </footer>
  );
}
