import { useState } from "react";
import { site } from "../../data/siteData";
import PageHeader from "../../components/ui/PageHeader";
import Field from "../../components/ui/Field";
import Button from "../../components/ui/Button";

const label = "text-[13px] leading-[23px] text-muted";
const value = "text-body";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader title="Let’s talk about your project">Our team will get back to you.</PageHeader>

      <section className="wrap grid gap-12 py-12 lg:grid-cols-2 lg:gap-[72px] lg:py-[103px]">
        <div>
          <h2 className="title-lg">Contact information</h2>
          <dl className="mt-5 space-y-[22px]">
            <div><dt className={label}>Address</dt><dd className={value}>{site.address}</dd></div>
            <div>
              <dt className={label}>Email</dt>
              <dd className={`${value} font-bold text-gold-700`}><a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a></dd>
            </div>
            <div><dt className={label}>Phone</dt><dd className={value}>{site.phone} · {site.mobile}</dd></div>
            <div><dt className={label}>WhatsApp</dt><dd className={value}>{site.whatsapp}</dd></div>
          </dl>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); }}
          className="space-y-6 self-start rounded-2xl bg-white p-8 shadow-card"
        >
          <h2 className="title-md">Send us a message</h2>
          <Field label="Name" name="name" autoComplete="name" required />
          <Field label="Email" name="email" type="email" autoComplete="email" required />
          <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
          <Field label="Message" as="textarea" name="message" className="[&_textarea]:min-h-[130px]" required />
          <Button type="submit" className="w-full">Send message</Button>
          {sent && <p role="status" className="text-[15px] leading-[26px] font-bold text-gold-700">Thank you. We will get back to you soon.</p>}
        </form>
      </section>
    </>
  );
}
