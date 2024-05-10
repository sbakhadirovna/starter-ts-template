const { ForbiddenError } = require("../errors");

const hasRole =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      const error = new ForbiddenError("Role is not permitted");
      return res.status(401).json({ error: error.message });
    }
    next();
  };

module.exports = hasRole;
