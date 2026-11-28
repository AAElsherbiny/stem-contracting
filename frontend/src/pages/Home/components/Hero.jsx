import { useMemo, useState } from "react";
import { heroSlides } from "../../../data/siteData";
import { getSliderPhotos } from "../../../data/projectsStore";
import Button from "../../../components/ui/Button";
import Blueprint from "../../../components/ui/Blueprint";
import CarouselControls from "../../../components/ui/CarouselControls";

export default function Hero() {
  const [i, setI] = useState(0);
  const photos = useMemo(getSliderPhotos, []);
  const n = heroSlides.length;
  const s = heroSlides[i];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative flex min-h-[640px] flex-col justify-between overflow-hidden bg-ink text-white"
    >
      {/* Slider photo (or line drawing) fills the whole hero, with a gradient for text legibility */}
      <Blueprint
        key={i}
        variant={s.variant}
        photo={photos[i]}
        label={s.title.replace(/\n/g, " ")}
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/60 to-ink/10 max-md:bg-linear-to-t max-md:from-ink/90 max-md:via-ink/70 max-md:to-ink/30" aria-hidden="true" />

      <div className="wrap relative flex w-full flex-1 items-center py-16">
        <div className="max-w-[627px]">
          <h1 className="font-display text-[clamp(2.5rem,6.2vw,4.75rem)] leading-[1.06] font-semibold tracking-[-0.01em] whitespace-pre-line">
            {s.title}
          </h1>
          <p className="text-lead mt-6 max-w-[603px] whitespace-pre-line text-white/85">{s.text}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button to="/services">{s.cta}</Button>
            <Button to="/quote" variant="outline" className="border-white text-white hover:bg-white/15">
              Request a quote
            </Button>
          </div>
        </div>
      </div>

      <div className="wrap relative w-full pb-8">
        <CarouselControls
          count={n}
          index={i}
          onSelect={setI}
          onPrev={() => setI((i + n - 1) % n)}
          onNext={() => setI((i + 1) % n)}
          label="slide"
        />
      </div>
    </section>
  );
}
