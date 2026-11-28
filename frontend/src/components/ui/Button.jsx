import { Link } from "react-router-dom";

// One button for the whole site. h-[50px] per Figma; size="sm" (44px) is used in the navbar.
const base =
  "inline-flex items-center justify-center rounded border px-8 text-[15px] leading-5 font-bold transition-colors";

const variants = {
  primary: "border-gold-500 bg-gold-500 text-ink hover:border-gold-600 hover:bg-gold-600",
  outline: "border-ink bg-transparent text-ink hover:bg-cream-100",
};
const sizes = { md: "h-[50px]", sm: "h-11 px-6" };

export default function Button({ to, variant = "primary", size = "md", className = "", children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
