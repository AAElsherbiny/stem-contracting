const express = require('express');
const projects = require('../data/projects');

const router = express.Router();

// Query values can be arrays (?a=1&a=2), so only accept plain strings.
const asText = (value) => (typeof value === 'string' && value.trim() ? value.trim() : null);

// Case-insensitive exact match; an empty filter matches everything.
const matches = (field, wanted) =>
  !wanted || (typeof field === 'string' && field.toLowerCase() === wanted.toLowerCase());

const unique = (key) => [...new Set(projects.map((p) => p[key]))].sort();

// GET /api/projects/filters
// Values for the frontend filter dropdowns. Must stay above '/:slug'.
router.get('/filters', (req, res) => {
  res.json({
    categories: unique('category'),
    countries: unique('country'),
    types: unique('type'),
  });
});

// GET /api/projects
// Optional filters: ?category=Electrical &country=Egypt &type=Supply &featured=true &search=transformer
router.get('/', (req, res) => {
  const category = asText(req.query.category);
  const country = asText(req.query.country);
  const type = asText(req.query.type);
  const search = asText(req.query.search);
  const featuredOnly = req.query.featured === 'true';

  const term = search ? search.toLowerCase() : null;

  const result = projects.filter(
    (p) =>
      matches(p.category, category) &&
      matches(p.country, country) &&
      matches(p.type, type) &&
      (!featuredOnly || p.featured) &&
      (!term || [p.title, p.client, p.location, p.scope].join(' ').toLowerCase().includes(term))
  );

  res.json(result);
});

// GET /api/projects/some-slug
router.get('/:slug', (req, res) => {
  const project = projects.find((p) => p.slug === req.params.slug);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json(project);
});

module.exports = router;