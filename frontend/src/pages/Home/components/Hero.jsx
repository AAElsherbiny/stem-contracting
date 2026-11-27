import { hero } from "../../../data/siteData";
import Button from "../../../components/ui/Button";
import Blueprint from "../../../components/ui/Blueprint";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-2 items-center gap-12 px-5 py-16 md:px-10 lg:py-24 max-lg:grid-cols-1">
      <div>
        <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">{hero.text}</p>

        {/* One primary action, one secondary (HCI: Hick's law) */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/services">See electrical services</Button>
          <Button to="/quote" variant="outline">Request a quote</Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-3 -bottom-3 h-full w-full rounded-sm border-2 border-gold-500" aria-hidden="true" />
        <Blueprint variant="pylon" label="Electrical pylon illustration" className="relative aspect-[4/3] rounded-sm" />
      </div>
    </section>
  );
}
