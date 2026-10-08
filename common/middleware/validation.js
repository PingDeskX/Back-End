export const validation = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req);
    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        details: result.error.issues.map((issue) => issue.message),
      });
    }

    Object.assign(req, result.data);
    return next();
  };
};
