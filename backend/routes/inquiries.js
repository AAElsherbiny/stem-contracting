const express = require('express');
const Inquiry = require('../models/Inquiry');
const inquiryRateLimiter = require('../middleware/inquiryRateLimiter');
const honeypot = require('../middleware/honeypot');
const { sendInquiryNotification } = require('../utils/mailer');

const router = express.Router();

function validateInquiry({ name, email, phone, serviceType, message }) {
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

  return errors;
}

// POST /api/inquiries
router.post('/', inquiryRateLimiter, honeypot, async (req, res) => {
  const errors = validateInquiry(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const { name, email, phone, serviceType, message } = req.body;
  const inquiry = await Inquiry.create({ name, email, phone, serviceType, message });

  // The inquiry is already saved, so a mail failure must not fail the request.
  sendInquiryNotification(inquiry).catch((error) =>
    console.error('Inquiry email failed:', error.message)
  );

  res.status(201).json({
    success: true,
    message: 'Your request was received. We will contact you soon.',
  });
});

module.exports = router;
