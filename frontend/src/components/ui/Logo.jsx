import { Link } from "react-router-dom";
import { site } from "../../data/siteData";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" stroke="#d4a843" strokeWidth="2.5" aria-hidden="true">
        <path d="M3 30V12M3 12h6v18M9 30V4M9 4h7v26M16 30V16M16 16h8v14M2 30h24" />
      </svg>
      <span className="leading-tight">
        <span className="block text-sm font-bold">{site.name}</span>
        <span className="block text-[11px] text-stone-600">{site.tagline}</span>
      </span>
    </Link>
  );
}
