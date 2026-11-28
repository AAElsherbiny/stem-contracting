// All mock data lives here so pages stay presentational.

export const site = {
  name: "STEM Contracting",
  tagline: "From vision to reality",
  address: "47 Ismail Serry St., Smouha, Alexandria",
  phone: "03 4245663",
  mobile: "01028210104",
  whatsapp: "01023692996",
  email: "info@stem-contracting.com",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Admin", to: "/admin" },
];

export const heroSlides = [
  {
    title: "Built with care,\ndelivered on time.",
    text: "STEM Contracting delivers civil, architectural and electrical works\nfrom Alexandria, with the planning that turns a vision into reality.",
    cta: "Explore services",
    variant: "crane",
  },
  {
    title: "Civil and\narchitectural, under\none roof.",
    text: "Reinforced concrete, detailed design and finishing from one\naccountable team.",
    cta: "See civil services",
    variant: "tower",
  },
  {
    title: "Electrical works,\nfrom study to\ncommissioning.",
    text: "ETAP studies, MV/LV installation, testing, maintenance and solar\nenergy.",
    cta: "See electrical services",
    variant: "pylon",
  },
];

export const stats = [
  { value: "48", label: "Projects delivered" },
  { value: "1,200+", label: "Units completed" },
  { value: "35", label: "Clients served" },
  { value: "5", label: "Years since 2021" },
];

export const about = {
  title: "Trust is built in actions, not slogans.",
  p1: "Founded in Alexandria in 2021, STEM Contracting set out to become one of the leading construction companies in Egypt and the Middle East.",
  p2: "We treat every project as if it defines who we are, guided by three pillars: quality, commitment and dedication.",
};

export const services = [
  {
    title: "Civil & architectural",
    variant: "building",
    items: [
      "Structural and concrete construction",
      "Architectural and detailed design",
      "Interior and exterior finishing",
      "Excavation and infrastructure",
    ],
  },
  {
    title: "Electrical",
    variant: "pylon",
    items: [
      "Studies using ETAP",
      "Installation, commissioning and testing",
      "Technical support and RCA",
      "Maintenance and repair",
      "Renewable energy",
      "Hazardous area inspection",
      "Material supplies",
    ],
  },
];

// Only the structural service has copy in the design; others show title only.
export const serviceDetails = {
  "Structural and concrete construction":
    "We execute all types of reinforced concrete works, including foundations, columns and slabs, using modern techniques and high-quality materials to ensure structural durability and stability.",
};

export const categories = ["All", "Residential", "Commercial", "Service buildings", "Electrical", "Interior", "Other"];

export const categoryVariant = {
  Residential: "building",
  Commercial: "tower",
  "Service buildings": "school",
  Electrical: "pylon",
  Interior: "interior",
  Other: "building",
};

export const projects = [
  { id: "1", variant: "building", category: "Residential", place: "Alexandria", title: "Al Noor Residence Towers", text: "Turnkey housing: civil, architectural and electromechanical works." },
  {
    id: "2", variant: "tower", category: "Commercial", place: "Smouha, Alexandria", title: "Corniche Business Hub",
    text: "Office building structure and interior finishing.",
    overview: "Mock overview. An administrative building delivered with structural works and full interior finishing.",
    client: "Demo Client B", duration: "8 months", highlights: ["6 floors", "2,800 m²"],
  },
  { id: "3", variant: "school", category: "Service buildings", place: "Beheira", title: "Delta Secondary School", text: "Secondary school with classrooms and technology labs." },
  { id: "4", variant: "pylon", category: "Electrical", place: "Alexandria", title: "Harbor Substation Upgrade", text: "Switchgear installation, testing and commissioning." },
  { id: "5", variant: "interior", category: "Interior", place: "Smouha, Alexandria", title: "Smouha Clinic Fit-out", text: "Site survey, adaptation and interior execution." },
  { id: "6", variant: "solar", category: "Electrical", place: "Matrouh", title: "Solar Yard Phase 1", text: "Study, supply and installation of a solar PV yard." },
];

export const steps = [
  { title: "Listen", text: "We understand your needs as if they were our own." },
  { title: "Plan", text: "We plan precisely, because reality isn’t built by accident." },
  { title: "Build", text: "We execute with purpose, to safety and quality standards." },
  { title: "Deliver", text: "We keep our promises, then go beyond them." },
];
