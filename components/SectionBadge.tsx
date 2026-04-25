export default function SectionBadge({ text, color, borderColor, align = "left" }) {
  return (
    <span
      className={`mb-3 inline-block animate-fade-in-down border-l-2 py-1 pl-3 text-xs font-light italic ${align === "center" ? "mx-auto block" : ""}`}
      style={{ color, borderColor }}
    >
      {text}
    </span>
  );
}
