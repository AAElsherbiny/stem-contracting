import { about } from "../../../data/siteData";
import Button from "../../../components/ui/Button";
import Blueprint from "../../../components/ui/Blueprint";

export default function About() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-2 items-center gap-16 px-5 py-20 md:px-10 max-lg:grid-cols-1">
      <Blueprint variant="tower" label="Building illustration" className="aspect-[4/3] rounded-sm" />

      <div>
        <h2 className="font-display text-4xl leading-tight font-semibold">{about.title}</h2>
        <p className="mt-5 text-sm leading-relaxed text-stone-600">{about.p1}</p>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">{about.p2}</p>
        <Button to="/about" variant="outline" className="mt-7">Our story</Button>
      </div>
    </section>
  );
}
