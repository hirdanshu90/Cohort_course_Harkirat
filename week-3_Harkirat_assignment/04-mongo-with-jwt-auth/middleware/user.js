const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  //   Get back token from the string, Bearer token....
  const words = token.split(" ");
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  //   Usually JWT has the username decoded inside the token.
  // We can access the username from the jwt token as well. So here we have decoded the value.
  if (decodedValue.username) {
    req.username = decodedValue.username;
    console.log(req.username);
    next();
  } else {
    res.status(403).json({
      msg: "You are not allowed to access",
    });
  }
}

module.exports = userMiddleware;
