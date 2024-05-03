- res.send is for sending text
- res.json is for sending json ,,,,, MOSTLY this is used for sending response.

- No return in middleware function. We use res.status().json({}) or next().

- We send once on a get request.( res.send ).

- Purpose and Use of express.json()

- Parsing JSON:

  The primary use of express.json() is to automatically parse JSON formatted request bodies and make this data easily accessible through the req.body property in your route handlers. This means that when your server receives a JSON payload, this middleware processes it and adds a body object to the request (req) object containing the parsed data.

  Middleware in Express: In Express, middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. express.json() is a built-in middleware function in Express.

  Configurability: You can configure express.json() with options to control behavior such as setting the maximum request body size (using limit), handling of empty JSON bodies, and so on. By default, it only accepts UTF-8 encoding of the body and limits the body size to 100kb.

  - MIDDLEWARES

  In Express.js, middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware functions can perform a variety of tasks such as executing code, making changes to the request and the response objects, ending the request-response cycle, and calling the next middleware function in the stack.

  const express = require('express');
  const app = express();

// Application-level middleware
app.use((req, res, next) => {
console.log('Time:', Date.now());
next();
});

// Third-party middleware for logging
const morgan = require('morgan');
app.use(morgan('dev'));

// Route-level middleware
app.get('/', (req, res) => {
res.send('Home Page');
});

// Middleware for handling 404 (Page Not Found)
app.use((req, res, next) => {
res.status(404).send("Sorry can't find that!");
});

// Error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});

// Starting the server
app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});

Adding handlers
