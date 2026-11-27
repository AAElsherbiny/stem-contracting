function errorHandler(error, req, res, next) {
  const status = getStatus(error);

  if (status >= 500) {
    console.error(error);
  }

  res.status(status).json({
    success: false,
    message: status >= 500 ? 'Something went wrong. Please try again later.' : error.message,
  });
}

function getStatus(error) {
  if (error.name === 'ValidationError') return 400;
  return error.status || 500;
}

module.exports = errorHandler;
