const express = require("express");

// app object initializes the express
const app = express();

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", (req, res) => {
  // n is to take the query from the URL itself.
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(ans.toString());
});

// WE pass it like this : http://localhost:3000/?n=30

app.post("/post", (req, res) => {
  res.send("Hello World from POST request!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
