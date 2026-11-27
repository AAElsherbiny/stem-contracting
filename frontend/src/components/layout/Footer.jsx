import { Link } from "react-router-dom";
import { site, navLinks } from "../../data/siteData";
import Logo from "../ui/Logo";

const linkClass = "inline-flex min-h-8 items-center text-sm text-stone-600 hover:text-ink hover:underline";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream-50">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1.4fr_1fr_1fr] gap-10 px-5 py-12 md:px-10 max-md:grid-cols-1">
        <div className="space-y-2 text-sm text-stone-600">
          <Logo />
          <p className="pt-3">{site.address}</p>
          <p>{site.phone} · {site.mobile}</p>
          <a href={`mailto:${site.email}`} className="underline hover:text-ink">{site.email}</a>
        </div>

        <nav aria-label="Explore">
          <h2 className="mb-2 text-sm font-bold">Explore</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="mb-2 text-sm font-bold">Services</h2>
          <ul>
            <li><Link to="/services" className={linkClass}>Civil &amp; architectural</Link></li>
            <li><Link to="/services" className={linkClass}>Electrical</Link></li>
            <li><Link to="/quote" className={linkClass}>Request a quote</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-stone-200">
        <p className="mx-auto max-w-[1280px] px-5 py-5 text-xs text-stone-600 md:px-10">
          © 2026 {site.name}. {site.tagline}.
        </p>
      </div>
    </footer>
  );
}
