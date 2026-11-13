const express = require('express');
const projects = require('../data/projects');

const router = express.Router();

// GET /api/projects  (optional filter: ?category=Residential)
router.get('/', (req, res) => {
  const { category } = req.query;

  if (category) {
    const filtered = projects.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }

  res.json(projects);
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