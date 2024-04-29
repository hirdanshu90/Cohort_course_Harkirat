const express = require("express");

const app = express();

const users = [
  {
    name: "Hirdanshu",
    kidneys: [
      { healthy: false },
      { healthy: false },
      { healthy: true },
      { healthy: true },
      { healthy: true },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  // Counting number of healthy kidneys from the users object created above.

  const Hir_kidneys = users[0].kidneys;
  let numberOfKidneys = Hir_kidneys.length;
  let numberofhealthykidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (Hir_kidneys[i].healthy) {
      numberofhealthykidneys += 1;
    }
  }
  res.json({
    "numberofhealthykidneys: ": numberofhealthykidneys,
    "numberofunhealthykidneys: ": numberOfKidneys - numberofhealthykidneys,
  });
  console.log(
    "numberofhealthykidneys" + numberofhealthykidneys,
    "numberofunhealthykidneys: " + (numberOfKidneys - numberofhealthykidneys)
  );
});

// If we send more number of POST request via POSTMAN, no of kidneys will be updated. But if refreshed, it will be back again to default in the users object
app.post("/", (req, res) => {
  // Created a body here that is to be send.
  const isHealthy = req.body.isHealthy;
  // Updating the users array (our own database here.)
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// WE also have to check if there are unhealthy kidneys, if not, then return 411 status code.

// PUT request to convert the unhealthy kidney healthy again.
app.put("/", (req, res) => {
  if (isthereatleastoneunheatlykidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "Done!",
    });
  } else {
    res.json({
      msg: "Nothing to do!",
    });
  }
});

// Function to check if there are unhealthy kidneys.
function isthereatleastoneunheatlykidney() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == false) {
      return true;
    }
  }
  return false;
}
// DELETE request to remove the unhealthy kidneys.
app.delete("/", (req, res) => {
  if (isthereatleastoneunheatlykidney()) {
    users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy);

    res.json({
      msg: "Done!",
    });
  } else {
    res.status(401).json({
      msg: "No bad kidneys",
    });
  }
});

const Port = 3001;

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
