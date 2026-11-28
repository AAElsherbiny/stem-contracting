import { steps } from "../../../data/siteData";
import SectionHead from "../../../components/ui/SectionHead";

export default function HowWeWork() {
  return (
    <section className="bg-cream-50">
      <div className="wrap section-y">
        <SectionHead title="How we work">
          <p className="text-body text-muted">The same four stages on every project.</p>
        </SectionHead>

        <ol className="mt-12 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((s) => (
            <li key={s.title} className="border-t-[2.4px] border-gold-500 pt-14 pb-6">
              <h3 className="text-body font-bold">{s.title}</h3>
              <p className="mt-0.5 text-[15px] leading-[26px] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
