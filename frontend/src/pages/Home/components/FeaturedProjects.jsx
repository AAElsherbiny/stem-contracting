import { Link } from "react-router-dom";
import { projects } from "../../../data/siteData";
import Blueprint from "../../../components/ui/Blueprint";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-semibold">Featured projects</h2>
        <Link to="/projects" className="inline-flex min-h-11 items-center text-sm font-bold text-gold-700 underline underline-offset-4 hover:text-ink">
          All projects
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-lg border border-stone-200 bg-white">
            <div className="relative">
              <Blueprint variant={p.variant} label={`${p.title} drawing`} className="aspect-[4/3]" />
              <span className="absolute bottom-2 left-2 rounded bg-white px-2 py-0.5 text-[10px] font-semibold text-stone-700">
                Sample drawing
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] font-bold text-gold-700">{p.category} · {p.place}</p>
              <h3 className="mt-2 font-display text-xl leading-tight font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{p.text}</p>
              <Link to="/projects" className="mt-4 inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4 hover:text-gold-700">
                View project details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
