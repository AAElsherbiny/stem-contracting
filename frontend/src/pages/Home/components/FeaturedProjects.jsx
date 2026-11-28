import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../../data/projectsStore";
import SectionHead from "../../../components/ui/SectionHead";
import ProjectCard from "../../../components/ui/ProjectCard";
import CarouselControls from "../../../components/ui/CarouselControls";

const GAP = 24;

export default function FeaturedProjects() {
  const list = useMemo(getAllProjects, []);
  const track = useRef(null);
  const [index, setIndex] = useState(0);

  const step = () => (track.current?.children[0]?.offsetWidth ?? 0) + GAP;
  const go = (i) => {
    const n = (i + list.length) % list.length;
    track.current?.scrollTo({ left: n * step(), behavior: "smooth" });
    setIndex(n);
  };
  const onScroll = () => {
    const s = step();
    if (s > GAP) setIndex(Math.round(track.current.scrollLeft / s));
  };

  return (
    <section className="wrap section-y" aria-roledescription="carousel" aria-label="Featured projects">
      <SectionHead title="Featured projects">
        <Link to="/projects" className="text-body font-bold text-gold-700 underline hover:text-ink">All projects</Link>
      </SectionHead>

      <div
        ref={track}
        onScroll={onScroll}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {list.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            className="shrink-0 snap-start basis-full md:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]"
          />
        ))}
      </div>

      <CarouselControls
        count={list.length}
        index={index}
        onSelect={go}
        onPrev={() => go(index - 1)}
        onNext={() => go(index + 1)}
        label="project"
        className="mt-6"
      />
    </section>
  );
}
