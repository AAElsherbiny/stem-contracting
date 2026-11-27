const express = require('express');
const Inquiry = require('../models/Inquiry');
const inquiryRateLimiter = require('../middleware/inquiryRateLimiter');
const honeypot = require('../middleware/honeypot');
const { sendInquiryNotification } = require('../utils/mailer');

const router = express.Router();

function readText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function cleanInquiry(body) {
  return {
    name: readText(body.name),
    email: readText(body.email),
    phone: readText(body.phone),
    serviceType: readText(body.serviceType),
    message: readText(body.message),
  };
}

function validateInquiry({ name, email, phone, serviceType, message }) {
  const errors = {};

  if (name.length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = 'Please enter a valid email, for example name@company.com.';
  }
  if (phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!serviceType) {
    errors.serviceType = 'Please choose a service.';
  }
  if (message.length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }

  return errors;
}

// POST /api/inquiries
router.post('/', inquiryRateLimiter, honeypot, async (req, res) => {
  const data = cleanInquiry(req.body);
  const errors = validateInquiry(data);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const inquiry = await Inquiry.create(data);

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
