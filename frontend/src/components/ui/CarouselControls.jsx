const chevron = (d) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const arrow =
  "flex h-11 w-11 items-center justify-center rounded border border-line bg-white text-ink transition-colors hover:bg-cream-100";

// Dots on the left, previous/next on the right (Hero, Featured projects, Project detail).
export default function CarouselControls({ count, index, onSelect, onPrev, onNext, label = "slide", className = "" }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex gap-0.5">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to ${label} ${i + 1}`}
            aria-current={i === index}
            className="flex h-11 w-9 items-center justify-center sm:w-11"
          >
            <span className={`h-1 transition-all ${i === index ? "w-[34px] bg-gold-500" : "w-[22px] bg-line"}`} />
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={onPrev} aria-label={`Previous ${label}`} className={arrow}>{chevron("M15 6l-6 6 6 6")}</button>
        <button type="button" onClick={onNext} aria-label={`Next ${label}`} className={arrow}>{chevron("M9 6l6 6-6 6")}</button>
      </div>
    </div>
  );
}
