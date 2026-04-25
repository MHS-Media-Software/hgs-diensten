"use client";

import { concept, c, getColor } from "../lib/concept";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "../lib/icons";

export default function TopBar() {
  const bg = getColor("topBar", "bg", c.text);
  const text = getColor("topBar", "text", "#ffffff99");
  return (
    <div className="hidden px-4 py-2 md:block" style={{ backgroundColor: bg }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-4 text-xs" style={{ color: text }}>
          {concept.contact?.email && (<span className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> {concept.contact.email}</span>)}
          {concept.contact?.phone && (<span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {concept.contact.phone}</span>)}
          {concept.contact?.address && (<span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {concept.contact.address}</span>)}
        </div>
        <div className="flex items-center gap-3">
          {concept.socialMedia?.facebook && <Facebook className="h-3.5 w-3.5 cursor-pointer transition-opacity hover:opacity-100" style={{ color: text, opacity: 0.6 }} />}
          {concept.socialMedia?.instagram && <Instagram className="h-3.5 w-3.5 cursor-pointer transition-opacity hover:opacity-100" style={{ color: text, opacity: 0.6 }} />}
          {concept.socialMedia?.youtube && <Youtube className="h-3.5 w-3.5 cursor-pointer transition-opacity hover:opacity-100" style={{ color: text, opacity: 0.6 }} />}
        </div>
      </div>
    </div>
  );
}
