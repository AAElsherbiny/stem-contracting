import { Link } from "react-router-dom";
import { site, navLinks } from "../../data/siteData";
import Logo from "../ui/Logo";

const linkClass = "flex h-9 items-center text-[15px] leading-[26px] text-muted hover:text-ink hover:underline";
const headingClass = "mb-4 text-base leading-[22px] font-bold tracking-[-0.01em]";

export default function Footer() {
  return (
    <>
    <footer className="border-t border-line bg-cream-50">
      <div className="wrap pt-12 pb-8 lg:pt-[73px]">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          <div>
            <Logo />
            <address className="mt-[15px] text-[15px] leading-[26px] text-muted not-italic">
              <p>{site.address}</p>
              <p>{site.phone} · {site.mobile}</p>
              <a href={`mailto:${site.email}`} className="hover:text-ink hover:underline">{site.email}</a>
            </address>
          </div>

          <nav aria-label="Explore">
            <h2 className={headingClass}>Explore</h2>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className={headingClass}>Services</h2>
            <ul>
              <li><Link to="/services" className={linkClass}>Civil &amp; architectural</Link></li>
              <li><Link to="/services" className={linkClass}>Electrical</Link></li>
              <li><Link to="/quote" className={linkClass}>Request a quote</Link></li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-[13px] leading-[22px] text-muted">
          © 2026 {site.name}. {site.tagline}.
        </p>
      </div>
    </footer>
      {/* Top bar: contact is always visible */}
      <div className="bg-ink text-[13px] leading-[22px] text-white">
        <div className="wrap flex h-[34px] items-center justify-between gap-4">
          <span className="opacity-85 max-sm:hidden">{site.address}</span>
          <span className="ml-auto">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-500">{site.phone}</a>
            {" · "}
            <a href={`mailto:${site.email}`} className="hover:text-gold-500">{site.email}</a>
          </span>
        </div>
      </div>
    </>
  );
}
