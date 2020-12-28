const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.get("/", (req, res) => {
//   res.json({ message: "That's it!" });
// });

// app.get("/instructor", (req, res) => {
//   res.json({ name: "Elie" });
// });

// Adding a status code
app.get("/", (req, res) => {
  res.status(200).json({ name: "Elie" });
});

app.get("/secret", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});

app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});