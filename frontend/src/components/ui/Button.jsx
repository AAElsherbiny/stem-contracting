import { Link } from "react-router-dom";

// One button for the whole site (HCI: consistency). min-h-11 = 44px touch target (Fitts's law).
const base =
  "inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-bold transition-colors";

const variants = {
  primary: "bg-gold-500 text-ink hover:bg-gold-600",
  outline: "border border-ink bg-white text-ink hover:bg-cream-100",
};

export default function Button({ to, variant = "primary", className = "", children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;

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
