// All mock data lives here so pages stay presentational.

export const site = {
  name: "STEM Contracting",
  tagline: "From vision to reality",
  address: "47 Ismail Serry St., Smouha, Alexandria",
  phone: "03 4245663",
  mobile: "01028210104",
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

export const hero = {
  title: "Electrical works, from study to commissioning.",
  text: "ETAP studies, MV/LV installation, testing, maintenance and solar energy.",
};

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
    items: [
      "Structural and concrete construction",
      "Architectural and detailed design",
      "Interior and exterior finishing",
      "Excavation and infrastructure",
    ],
  },
  {
    title: "Electrical",
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

export const projects = [
  { id: 1, variant: "building", category: "Residential", place: "Alexandria", title: "Al Noor Residence Towers", text: "Turnkey housing: civil, architectural and electromechanical works." },
  { id: 2, variant: "tower", category: "Commercial", place: "Smouha, Alexandria", title: "Corniche Business Hub", text: "Office building structure and interior finishing." },
  { id: 3, variant: "school", category: "Service buildings", place: "Beheira", title: "Delta Secondary School", text: "Secondary school with classrooms and technology labs." },
  { id: 4, variant: "pylon", category: "Electrical", place: "Alexandria", title: "Harbor Substation", text: "Switchgear installation, testing and commissioning." },
];

export const steps = [
  { title: "Listen", text: "We understand your needs as if they were our own." },
  { title: "Plan", text: "We plan precisely, because reality isn’t built by accident." },
  { title: "Build", text: "We execute with purpose, to safety and quality standards." },
  { title: "Deliver", text: "We keep our promises, then go beyond them." },
];
