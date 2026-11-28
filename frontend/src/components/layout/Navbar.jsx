import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteData";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

// Active page is underlined + aria-current.
function linkClass({ isActive }) {
  return `relative flex h-11 items-center px-4 text-[15px] leading-[26px] font-bold transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-[3px] ${
    isActive ? "text-ink after:bg-gold-500" : "text-muted after:bg-transparent hover:text-ink"
  }`;
}

export default function Navbar() {
  // The only state in the shell: opens the menu on small screens.
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="flex h-[76px] items-center justify-between gap-6 px-6 md:px-12">
          <Logo />

          <div className="flex items-center gap-6">
            <nav aria-label="Main" className="flex items-center max-lg:hidden">
              {navLinks.filter((l) => l.to !== "/admin").map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <Button to="/quote" size="sm" className="max-sm:hidden">Request a quote</Button>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded border border-line lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="wrap border-t border-line bg-white pb-5 lg:hidden">
            {navLinks.filter((l) => l.to !== "/admin").map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-12 items-center border-b border-line text-base font-bold ${isActive ? "text-gold-700" : "text-ink"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button to="/quote" onClick={() => setOpen(false)} className="mt-4 w-full">Request a quote</Button>
          </nav>
        )}
      </header>
    </>
  );
}
