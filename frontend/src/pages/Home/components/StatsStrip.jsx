import { stats } from "../../../data/siteData";

export default function StatsStrip() {
  return (
    <section aria-label="Company statistics" className="bg-cream-100">
      <dl className="mx-auto grid max-w-[1280px] grid-cols-4 gap-6 px-5 py-10 md:px-10 max-md:grid-cols-2">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="font-display text-4xl font-semibold text-gold-700">{s.value}</dd>
            <dt className="mt-1 text-sm text-stone-700">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
