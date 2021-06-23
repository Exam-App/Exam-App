const jwt = require("jsonwebtoken");

function auth(request, response, next) {
  try {
    const token = request.cookies.token;

    if (!token) return response.status(401).json({ message: "unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    request.user = verified.user;

    next();
  } catch (error) {
    response.status(401).json({ message: "unauthorized" });
  }
}

module.exports = auth;
