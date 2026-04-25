import { concept, images, c, getColor } from "../lib/concept";
import { ArrowRight } from "../lib/icons";
import SectionBadge from "./SectionBadge";

export default function BlogPreview() {
  const bg = getColor("about", "bg", c.background);
  const titleColor = getColor("about", "titleColor", c.text);
  const textColor = getColor("about", "textColor", c.text + "88");
  const accent = getColor("services", "accentBorder", c.accent);

  if (!concept.blogPosts?.length) return null;

  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24" style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="flex justify-center">
            <SectionBadge text="Nieuws & blogs" color={textColor} borderColor={accent} />
          </div>
          <h2 className="animate-fade-in-up text-2xl font-semibold sm:text-4xl" style={{ color: titleColor, animationDelay: "100ms" }}>
            De nieuwste updates
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {concept.blogPosts?.map((post, i) => (
            <div
              key={i}
              className="group animate-fade-in-up cursor-pointer overflow-hidden rounded-xl border shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ borderColor: c.text + "10", backgroundColor: "#ffffff", animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden" style={{ backgroundColor: c.text + "08" }}>
                {images["blog-" + i] && <img src={images["blog-" + i]} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />}
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold" style={{ color: titleColor }}>{post.title}</h3>
                <p className="mt-2 text-xs leading-relaxed font-light sm:text-sm" style={{ color: textColor }}>{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium" style={{ color: accent }}>
                  Lees meer <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
