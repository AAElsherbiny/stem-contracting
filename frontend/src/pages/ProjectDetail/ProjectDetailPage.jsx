import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProjects } from "../../data/projectsStore";
import Blueprint from "../../components/ui/Blueprint";
import Button from "../../components/ui/Button";
import CarouselControls from "../../components/ui/CarouselControls";
import ProjectCard from "../../components/ui/ProjectCard";
import PlaceholderPage from "../PlaceholderPage";

const VARIANTS = ["building", "tower", "school", "pylon", "interior", "solar"];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const all = useMemo(getAllProjects, []);
  const p = all.find((x) => x.id === id);
  const [i, setI] = useState(0);

  if (!p) return <PlaceholderPage title="Project not found" notFound />;

  // Uploaded photos if any; otherwise three drawings starting with the project's own.
  const start = VARIANTS.indexOf(p.variant);
  const slides = p.photos?.length
    ? p.photos.map((photo) => ({ photo }))
    : [0, 1, 2].map((k) => ({ variant: VARIANTS[(start + k) % VARIANTS.length] }));
  const n = slides.length;
  const s = slides[i % n];
  const rows = [["Client", p.client], ["Location", p.place], ["Type", p.category], ["Duration", p.duration]].filter(([, v]) => v);
  const more = all.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      <section className="wrap pt-12 lg:pt-[111px]">
        <Link to="/projects" className="text-body font-bold text-gold-700 hover:text-ink">← All projects</Link>
        <h1 className="title-page mt-4">{p.title}</h1>
        <p className="text-body mt-2 text-muted">{p.category}{p.place && ` · ${p.place}`}</p>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
          <Blueprint variant={s.variant} photo={s.photo} label={`${p.title} view ${i + 1}`} className="h-full w-full" />
          {!s.photo && (
            <span className="absolute bottom-2 left-2 bg-white px-2 text-[11px] leading-[19px] font-bold text-muted">Sample drawing</span>
          )}
        </div>
        <CarouselControls
          count={n}
          index={i % n}
          onSelect={setI}
          onPrev={() => setI((i + n - 1) % n)}
          onNext={() => setI((i + 1) % n)}
          label="image"
          className="mt-6"
        />
      </section>

      <section className="wrap grid gap-10 py-12 lg:grid-cols-2 lg:gap-[72px] lg:py-[104px]">
        <div>
          <h2 className="title-lg">Overview</h2>
          <p className="text-body mt-4 text-muted">{p.overview ?? p.text}</p>
          <p className="text-body mt-4 font-bold">Scope of work: {p.text}</p>
          {p.highlights?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.highlights.map((h) => (
                <li key={h} className="rounded-full bg-cream-100 px-3 text-[13px] leading-[26px] font-bold text-gold-700">{h}</li>
              ))}
            </ul>
          )}
          <Button to="/contact" className="mt-8">Discuss a similar project</Button>
        </div>

        <aside className="self-start rounded-2xl bg-white p-8 shadow-card">
          <h2 className="title-sm">At a glance</h2>
          <dl className="mt-4 space-y-4">
            {rows.map(([k, v]) => (
              <div key={k} className="text-body grid grid-cols-[101px_1fr]">
                <dt className="text-muted">{k}</dt>
                <dd className="font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      {more.length > 0 && (
        <section className="bg-cream-50">
          <div className="wrap section-y">
            <h2 className="title-xl">More projects</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((x) => <ProjectCard key={x.id} project={x} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
