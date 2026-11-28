import { Link } from "react-router-dom";
import { services } from "../../../data/siteData";
import SectionHead from "../../../components/ui/SectionHead";

export default function WhatWeDo() {
  return (
    <section className="bg-cream-50">
      <div className="wrap section-y">
        <SectionHead title="What we do">
          <p className="text-body text-muted">Two disciplines, one accountable team.</p>
        </SectionHead>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-[72px]">
          {services.map((group) => (
            <div key={group.title}>
              <h3 className="title-sm">{group.title}</h3>
              <ul className="mt-4 border-t border-line">
                {group.items.map((item) => (
                  <li key={item} className="text-body border-b border-line py-4 font-bold">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link to="/services" className="text-body mt-8 inline-block font-bold text-gold-700 underline hover:text-ink">
          See every service in detail
        </Link>
      </div>
    </section>
  );
}
