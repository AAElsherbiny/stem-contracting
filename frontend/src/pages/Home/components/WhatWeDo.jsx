import { Link } from "react-router-dom";
import { services } from "../../../data/siteData";

export default function WhatWeDo() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="font-display text-4xl font-semibold">What we do</h2>
          <p className="text-sm text-stone-600">Two disciplines, one accountable team.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-12 max-md:grid-cols-1">
          {services.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <ul className="mt-3">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-stone-200 py-4 text-sm font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link to="/services" className="mt-10 inline-flex min-h-11 items-center text-sm font-bold text-gold-700 underline underline-offset-4 hover:text-ink">
          See every service in detail
        </Link>
      </div>
    </section>
  );
}
