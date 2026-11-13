const express = require('express');

const router = express.Router();

// Temporary storage (resets when the server restarts).
// Milestone 2: replace with a real database.
const inquiries = [];

// POST /api/inquiries
router.post('/', (req, res) => {
  const { name, email, phone, serviceType, message } = req.body;
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Please enter a valid email, for example name@company.com.';
  }
  if (!phone || phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!serviceType) {
    errors.serviceType = 'Please choose a service.';
  }
  if (!message || message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const inquiry = {
    id: inquiries.length + 1,
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    serviceType,
    message: message.trim(),
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  inquiries.push(inquiry);

  res.status(201).json({
    success: true,
    message: 'Your request was received. We will contact you soon.',
  });
});

module.exports = router;