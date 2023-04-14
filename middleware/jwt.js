const jwt = require("jsonwebtoken");
const env = require("../config/envConfig");
const { status } = require("../helper/api.responses");

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token)
    return next(createError(status.Unauthorized, "You are not authenticated!"));
  jwt.verify(token, env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(status.Forbidden, "Token is not valid!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};

module.exports = verifyToken;
