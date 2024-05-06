// Create a backend that has 2 endpoints, uses password and JWT for authentication, and returns error 403 if failed.

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
// To PARSE JSON from request bodies.
app.use(express.json());

// In memory database.
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// write logic to return true or false if this user exists
// in ALL_USERS array
function userExists(username, password) {
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      username == ALL_USERS[i].username &&
      password == ALL_USERS[i].password
    ) {
      return true;
    }
  }
  return false;
}

// extract the username and password from the body and return the JWT if that user exists.
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does'nt exist in our in memory db",
    });
  }
// Using .sign to verify and then generate a JWT.
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

// This expects a token in the headers. In try catch error block.
// In the headers tab add the JWT token and then send the request.
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // Return everything except yourself
    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.username === username) {
          return false;
        } else {
          return true;
        }
      }),
    });
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3009);
console.log("Server running on port 3009");
