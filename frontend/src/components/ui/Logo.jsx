import { Link } from "react-router-dom";
import { site } from "../../data/siteData";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#d2a84c" strokeWidth="2.7" aria-hidden="true">
        <path d="M5 31V14M5 14h7v17M12 31V6M12 6h8v25M20 31V18M20 18h9v13M4 31h28" />
      </svg>
      <span>
        <span className="block text-[17px] leading-[19px] font-bold">{site.name}</span>
        <span className="block text-[13px] leading-[22px] text-muted">{site.tagline}</span>
      </span>
    </Link>
  );
}
