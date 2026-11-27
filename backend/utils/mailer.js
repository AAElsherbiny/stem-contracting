const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildInquiryText({ name, email, phone, serviceType, message }) {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${serviceType}`,
    '',
    message,
  ].join('\n');
}

function sendInquiryNotification(inquiry) {
  return transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.COMPANY_EMAIL,
    replyTo: inquiry.email,
    subject: `New inquiry from ${inquiry.name} (${inquiry.serviceType})`,
    text: buildInquiryText(inquiry),
  });
}

module.exports = { sendInquiryNotification };
