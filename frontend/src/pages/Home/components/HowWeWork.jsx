import { steps } from "../../../data/siteData";

export default function HowWeWork() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="font-display text-4xl font-semibold">How we work</h2>
          <p className="text-sm text-stone-600">The same four stages on every project.</p>
        </div>

        <ol className="mt-10 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-gold-500 pt-4">
              <p className="text-xs font-bold text-gold-700">0{i + 1}</p>
              <h3 className="mt-1 text-base font-bold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
