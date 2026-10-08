export const errorHandler = (err, req, res, next) => {
  const status =
    Number.isInteger(err.cause) && err.cause >= 400 && err.cause < 600
      ? err.cause
      : 500;

  return res.status(status).json({
    message: err.message || "Internal Server Error",
  });
};
