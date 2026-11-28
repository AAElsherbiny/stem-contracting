import { Link } from "react-router-dom";
import Blueprint from "./Blueprint";

export default function ProjectCard({ project: p, className = "" }) {
  const photo = p.photos?.[0];
  return (
    <article className={`relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white ${className}`}>
      <div className="relative aspect-[3/2]">
        <Blueprint variant={p.variant} photo={photo} label={`${p.title} drawing`} className="h-full w-full" />
        {!photo && (
          <span className="absolute bottom-2 left-2 bg-white px-2 text-[11px] leading-[19px] font-bold text-muted">
            Sample drawing
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-6 pt-6 pb-[25px]">
        <p className="text-[13px] leading-[23px] font-bold text-gold-700">{p.category}{p.place && ` · ${p.place}`}</p>
        <h3 className="title-sm mt-2">{p.title}</h3>
        <p className="mt-[7px] text-[15px] leading-[26px] text-muted">{p.text}</p>
        <Link to={`/projects/${p.id}`} className="text-body mt-auto pt-4 font-bold text-gold-700 hover:text-ink">
          View project details<span className="sr-only"> for {p.title}</span>
        </Link>
      </div>
    </article>
  );
}
