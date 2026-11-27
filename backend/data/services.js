// Source: Stem_Updated_Profile.pdf, pages 10-19.
// Two service lines: 4 Civil & Architectural + 7 Electrical.
// The inquiry form's "service type" dropdown should be filled from these names.

const services = [
  // ---------------- Civil & Architectural ----------------
  {
    id: 1,
    slug: 'structural-concrete-works',
    name: 'Structural and Concrete Construction Works',
    category: 'Civil & Architectural',
    description:
      'All types of reinforced concrete works, including foundations, columns and slabs, built with modern techniques and quality materials for durable, stable structures.',
  },
  {
    id: 2,
    slug: 'architectural-detailed-design',
    name: 'Architectural and Detailed Design',
    category: 'Civil & Architectural',
    description:
      "Precise architectural plans that turn the client's vision into reality, balancing aesthetics, functionality and constructability.",
  },
  {
    id: 3,
    slug: 'interior-exterior-finishing',
    name: 'Interior and Exterior Finishing Works',
    category: 'Civil & Architectural',
    description:
      'Complete finishing for floors, walls, ceilings and façades, using a wide range of materials and top-tier workmanship.',
  },
  {
    id: 4,
    slug: 'excavation-infrastructure',
    name: 'Excavation, Backfilling and Infrastructure Works',
    category: 'Civil & Architectural',
    description:
      'Excavation, grading and installation of infrastructure networks (electricity, drainage, water), in line with technical standards and safety protocols.',
  },

  // ---------------- Electrical ----------------
  {
    id: 5,
    slug: 'electrical-studies-etap',
    name: 'Electrical Studies and Protection Coordination (ETAP)',
    category: 'Electrical',
    description:
      'Load flow, short circuit, voltage drop, cable sizing, power factor correction and harmonic analysis, plus protection coordination studies and relay settings optimization using ETAP modeling and simulation.',
  },
  {
    id: 6,
    slug: 'installation-commissioning-testing',
    name: 'Installation, Commissioning and Testing',
    category: 'Electrical',
    description:
      'Turnkey installation of MV/LV switchgear, transformers, RMUs, bus ducts and AC/DC UPS; grounding, lighting and cathodic protection systems; power and control cables, generators and motors; plus protection relay and SCADA testing.',
  },
  {
    id: 7,
    slug: 'ei-technical-support',
    name: 'E&I Technical Support, Troubleshooting and RCA',
    category: 'Electrical',
    description:
      'Inspection, conformance and safety compliance checks, thermal imaging, harmonics and power factor monitoring, and rapid troubleshooting to minimize downtime.',
  },
  {
    id: 8,
    slug: 'ei-maintenance-repair',
    name: 'E&I Maintenance and Repair',
    category: 'Electrical',
    description:
      'CMMS-based maintenance plans covering preventive, predictive and corrective maintenance: visual checks, temperature monitoring, vibration analysis, lubrication checks and wear monitoring.',
  },
  {
    id: 9,
    slug: 'renewable-energy',
    name: 'Renewable Energy Solutions',
    category: 'Electrical',
    description:
      'Feasibility studies, design, supply and installation of solar PV and solar-powered lighting systems, including grid-connected and hybrid solutions.',
  },
  {
    id: 10,
    slug: 'hazardous-area-inspection',
    name: 'Hazardous Area Installation and Inspection',
    category: 'Electrical',
    description:
      'Installation and inspection by certified Ex inspectors, checking area classification, equipment certification and marking, IP ratings, temperature classes and gas group compatibility.',
  },
  {
    id: 11,
    slug: 'material-supply',
    name: 'Material Supplies',
    category: 'Electrical',
    description:
      'Supply of high-quality electrical materials and equipment through trusted partners, including explosion-proof equipment, for the needs of different industries.',
  },
];

module.exports = services;