import { useState } from "react";
import { services, serviceDetails } from "../../data/siteData";
import PageHeader from "../../components/ui/PageHeader";
import Blueprint from "../../components/ui/Blueprint";
import Button from "../../components/ui/Button";
import CtaBanner from "../../components/ui/CtaBanner";

export default function ServicesPage() {
  const [sel, setSel] = useState({ group: services[0], item: services[0].items[0] });

  return (
    <>
      <PageHeader title="Our services">Select a service to see what it covers.</PageHeader>

      <section className="wrap grid gap-10 py-12 lg:grid-cols-[480fr_672fr] lg:gap-12 lg:py-[104px]">
        <div className="space-y-6">
          {services.map((group) => (
            <div key={group.title}>
              <h2 className="mb-2 text-[13px] leading-[18px] font-bold tracking-[0.02em] text-muted">{group.title}</h2>
              <ul>
                {group.items.map((item) => {
                  const active = sel.item === item;
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSel({ group, item })}
                        className={`flex h-[52px] w-full items-center border-l-[2.4px] px-6 text-left text-base leading-[22px] transition-colors ${
                          active
                            ? "border-gold-500 bg-cream-100 font-bold text-ink"
                            : "border-line font-medium text-muted hover:bg-cream-50 hover:text-ink"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <article aria-live="polite" className="self-start overflow-hidden rounded-2xl bg-white shadow-card">
          <Blueprint variant={sel.group.variant} label={sel.group.title} className="aspect-[672/378] w-full" />
          <div className="p-8">
            <p className="text-[13px] leading-[23px] font-bold text-gold-700">{sel.group.title}</p>
            <h2 className="title-lg mt-1">{sel.item}</h2>
            {serviceDetails[sel.item] && <p className="text-body mt-4 text-muted">{serviceDetails[sel.item]}</p>}
            <Button to="/quote" className="mt-6">Request a quote</Button>
          </div>
        </article>
      </section>

      <CtaBanner />
    </>
  );
}
