import { stats } from "../../../data/siteData";

export default function StatsStrip() {
  return (
    <section aria-label="Company statistics" className="bg-cream-100">
      <dl className="mx-auto grid max-w-[1296px] grid-cols-4 px-6 py-8 max-md:grid-cols-2">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-6 py-8 max-md:py-5 ${i ? "md:border-l md:border-line" : ""}`}>
            <dd className="font-display text-[40px] leading-10 font-semibold text-gold-700">{s.value}</dd>
            <dt className="mt-0.5 text-[15px] leading-[26px] text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
