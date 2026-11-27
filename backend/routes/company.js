const express = require('express');
const company = require('../data/company');

const router = express.Router();

// GET /api/company
// Story, vision, mission, values, contact details and partners
// for the About, Contact and footer sections.
router.get('/', (req, res) => {
  res.json(company);
});

module.exports = router;