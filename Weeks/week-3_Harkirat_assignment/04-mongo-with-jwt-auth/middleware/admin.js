const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header is present
  if (!authHeader) {
    return res.status(401).json({
      msg: "Authorization header missing",
    });
  }

  // Extract the token from the header
  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(401).json({
      msg: "Invalid authorization format",
    });
  }

  const token = tokenParts[1];

  try {
    // Verify the token
    const decodedValue = jwt.verify(token, JWT_SECRET);

    // Check if the username is present in the decoded token
    if (decodedValue.username) {
      req.user = decodedValue; // Add decoded token to request for further use
      next();
    } else {
      res.status(403).json({
        msg: "You are not allowed to access",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({
      msg: "Invalid token",
    });
  }
}

module.exports = adminMiddleware;
