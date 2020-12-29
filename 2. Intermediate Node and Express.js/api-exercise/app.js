const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const usersRoute = require("./routeUrls/users");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/users", usersRoute);

app.listen(3000, () => {
  console.log("Starting server on port 3000...");
});
