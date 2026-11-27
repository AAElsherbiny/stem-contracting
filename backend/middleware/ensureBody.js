// Express 5 leaves req.body undefined when the request has no JSON body.
function ensureBody(req, res, next) {
  req.body ??= {};
  next();
}

module.exports = ensureBody;
