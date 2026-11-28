import { about } from "../../../data/siteData";
import Button from "../../../components/ui/Button";
import Blueprint from "../../../components/ui/Blueprint";

export default function About() {
  return (
    <section className="wrap section-y grid items-center gap-12 lg:grid-cols-2 lg:gap-[72px]">
      <div className="relative mx-auto aspect-[564/598] w-full max-w-[564px]">
        <Blueprint variant="tower" label="Building illustration" className="h-[92%] w-[78%]" />
        <div className="absolute right-0 bottom-0 aspect-square w-[52%] border-8 border-white bg-white">
          <Blueprint variant="building" label="Detail illustration" className="h-full w-full" />
        </div>
      </div>

      <div>
        <h2 className="title-xl">{about.title}</h2>
        <p className="text-body mt-4 text-muted">{about.p1}</p>
        <p className="text-body mt-4 text-muted">{about.p2}</p>
        <Button to="/about" variant="outline" className="mt-8">Our story</Button>
      </div>
    </section>
  );
}
