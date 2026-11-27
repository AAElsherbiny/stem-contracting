const SUCCESS_MESSAGE = 'Your request was received. We will contact you soon.';

// Real users never see the "website" field, so only bots fill it.
// Bots get a fake success so they don't learn they were detected.
function honeypot(req, res, next) {
  if (req.body.website) {
    return res.status(201).json({ success: true, message: SUCCESS_MESSAGE });
  }
  next();
}

module.exports = honeypot;
