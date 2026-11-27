const express = require('express');
const services = require('../data/services');

const router = express.Router();

// GET /api/services
// Optional filter: ?category=Electrical  (or "Civil & Architectural", URL-encoded)
router.get('/', (req, res) => {
  const { category } = req.query;

  if (typeof category === 'string' && category.trim()) {
    const wanted = category.trim().toLowerCase();
    return res.json(services.filter((s) => s.category.toLowerCase() === wanted));
  }

  res.json(services);
});

module.exports = router;