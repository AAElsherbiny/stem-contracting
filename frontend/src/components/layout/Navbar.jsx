import { useState } from "react";
import { NavLink } from "react-router-dom";
import { site, navLinks } from "../../data/siteData";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

// Active page is underlined + aria-current (HCI: visibility of system status).
function linkClass({ isActive }) {
  return `flex min-h-11 items-center border-b-2 text-sm font-semibold transition-colors ${
    isActive ? "border-gold-500 text-ink" : "border-transparent text-stone-600 hover:text-ink"
  }`;
}

export default function Navbar() {
  // The only state on the site: opens the menu on small screens.
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_#e7e5e4]">
      {/* Top bar: contact is always visible (HCI: help & recognition over recall) */}
      <div className="bg-ink text-xs text-stone-200">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-2 md:px-10">
          <span className="max-sm:hidden">{site.address}</span>
          <span className="ml-auto">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-500">{site.phone}</a>
            {" · "}
            <a href={`mailto:${site.email}`} className="hover:text-gold-500">{site.email}</a>
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-5 md:px-10">
        <Logo />

        <nav aria-label="Main" className="flex items-center gap-7 max-lg:hidden">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/quote" className="max-sm:hidden">Request a quote</Button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-stone-300 lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-stone-200 bg-white px-5 pb-5 lg:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex min-h-12 items-center border-b border-stone-100 text-base font-semibold ${
                  isActive ? "text-gold-700" : "text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/quote" onClick={() => setOpen(false)} className="mt-4 w-full">Request a quote</Button>
        </nav>
      )}
    </header>
  );
}
