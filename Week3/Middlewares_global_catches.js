// Checking authentication, DUMB way to check.

const express = require("express");

const app = express();


// This middleware is to get body parameters if they are in JSON for POST and PUT requests.
app.use(express.json());



// http://localhost:3003/health-checkup?kidneyid=1   -> This is how you should pass the query parameters
// In Headers, add username and password.

// Writing functions as the Middleware. These will do the checks. 

function userMiddleware(req, res, next) {
  if (username != "hirdanshu" && password != "pass") {
    res.status(403).json({ message: "Invalid username or password" });
  } else {
    // This next() is a function itself that will route the to the next function if everything is fine.
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyid = req.query.kidneyid;
  if (kidneyid != 1 && kidneyid != 2) {
    res.status(403).json({ message: "Invalid kidneyID " });
  }
  else{
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  // const username = req.headers.username;
  // const password = req.headers.password;
  // const kidneyid = req.query.kidneyid;

  // if (!(username == "hirdanshu" && password == "pass")) {
  //   res.status(400).json({ msg: "Invalid username or password" });
  //   return;
  // }
  // if (kidneyid != 1 && kidneyid != 2) {
  //   res.status(400).json({ msg: "Invalid input, check kar" });
  //   return;
  // }
  // res.json({
  //   msg: "Kidney is fine, tension not",
  // });

  // Something with kidney here.
  res.send("Your kidney is fine")
});

// Another GET request using the middleware functions defined.
app.get('/heartcheck', userMiddleware, function (req, res) {

  // Something with heart check here.
  res.send("health is okay");
});

const Port = 3003;

app.listen(Port, () => {
  console.log("Connected to Port: " + Port);
});
