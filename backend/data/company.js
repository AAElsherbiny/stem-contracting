// Source: Stem_Updated_Profile.pdf (pages 4-8, 45, 47).
// The brochure is bilingual (Arabic / English). Only English is stored here;
// add parallel `ar` fields later if the website becomes bilingual.

const company = {
  name: 'Stem Contracting Company',
  brandName: 'Stem SCC',
  tagline: 'From Vision to Reality',
  founded: 2021,
  headquarters: 'Alexandria, Egypt',
  countries: ['Egypt', 'Saudi Arabia'],

  story:
    'Founded in 2021 in Alexandria, Egypt, with a vision of delivering outstanding construction services at the highest standards of quality and professionalism. Driven by growth, the company later extended its operations to Saudi Arabia. It is built on three pillars: Quality, Commitment and Dedication.',

  vision:
    'To become one of the leading construction companies in the Middle East, aiming for a place among the top 10 companies in the region through sustainable growth, strategic expansion and outstanding projects.',

  mission:
    'To transform ambition into achievement and the ordinary into exceptional experiences: starting from the vision, rebuilding it through smart solutions and giving it form in the real world, with passion that never compromises on quality.',

  coreValues: [
    {
      title: 'Vision begins where convention ends',
      description: 'We avoid the ready-made and carve our own path, starting from ideas, not templates.',
    },
    {
      title: 'We create to deliver, not just to impress',
      description: 'Bold solutions grounded in reality. Beauty matters, but purpose leads.',
    },
    {
      title: "Reality isn't built by accident",
      description: 'We plan precisely. Execution is the moment the vision comes alive.',
    },
    {
      title: 'Trust is built in actions, not slogans',
      description: 'We do what we say: underpromise and overdeliver.',
    },
    {
      title: 'Sustainability is a foundation, not a finish',
      description: 'Every choice respects time, people and place, and is built into our process.',
    },
  ],

  whyClientsChooseUs: [
    'We listen before we build and understand needs as if they were our own.',
    'We design bold, realistic solutions that balance beauty with function.',
    'We plan with precision and execute with purpose.',
    'We deliver what we promise, then go beyond it.',
    'We build with sustainability in mind, for what is next.',
    'We deliver tangible results, so clients come back.',
  ],

  contact: {
    emails: ['info@stem-contracting.com', 'Contact@stem-contracting.com'],
    website: 'www.stem-contracting.com',
    phones: [
      { label: 'Egypt', number: '+20 102 821 0104' },
      { label: 'Saudi Arabia', number: '+966 535 082 172' },
    ],
    offices: [
      { city: 'Smouha, Alexandria', country: 'Egypt' },
      { city: 'Makkah', country: 'Saudi Arabia' },
    ],
    // TODO confirm with the owner: the older website listed another street address
    // (47 Ismail Serry Street, Smouha, Alexandria) and the numbers +20 3 4245663 and
    // +20 1023692996. The brochure above is the newer source.
  },

  // Partner logos on page 45 of the brochure. One logo (top row, fourth) was not readable.
  partners: [
    'SUMED',
    'SIDPEC',
    'MidElec',
    'Indelec',
    'Elsewedy Electric',
    'Schneider Electric',
    'ABB',
    'AMOC',
    'ELAB',
    'ASPPC',
    'Petromaint',
    'Kahraba',
    'Cooperative Petroleum Company (CPC)',
    'Partec',
    'Giza Cable Industries',
    'Alexandria Water Company',
    'EMECO',
    'Al-Babtain Power & Telecom',
    'Eco Steel',
    'Misr Petroleum',
  ],
};

module.exports = company;