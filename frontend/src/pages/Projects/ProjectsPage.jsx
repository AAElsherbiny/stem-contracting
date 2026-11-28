import { useMemo, useState } from "react";
import { categories } from "../../data/siteData";
import { getAllProjects } from "../../data/projectsStore";
import PageHeader from "../../components/ui/PageHeader";
import ProjectCard from "../../components/ui/ProjectCard";

export default function ProjectsPage() {
  const all = useMemo(getAllProjects, []);
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? all : all.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader title="Our projects">Select any project to see its full details.</PageHeader>

      <section className="wrap py-12 lg:py-[104px]">
        <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`h-11 rounded-full border px-[25px] text-[15px] leading-5 font-bold transition-colors ${
                filter === c ? "border-gold-500 bg-gold-500" : "border-line bg-white hover:bg-cream-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {shown.length ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        ) : (
          <p className="text-body mt-8 text-muted">No projects in this category yet.</p>
        )}
      </section>
    </>
  );
}
