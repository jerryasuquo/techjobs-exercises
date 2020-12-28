/*
For this exercise we will be building a simple application where we will store a shopping list. You should use an array to store your items in the shopping list.

Our application should have the following routes:

GET /items - this should respond with a list of shopping items.
POST /items - this route should accept form data and add it to the shopping list.
GET /items/:id - this route should display a single item's name and price
PATCH /items/:id - this route should accept edits to existing items.
DELETE /items/:id - this route should allow you to delete a specific item from the array.
*/

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Item = require("./item");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/items", (req, res, next) => {
  return res.json(Item.list);
});

app.post("/items", (req, res, next) => {
  let newItem = new Item(req.body.name, req.body.price);
  return res.json(newItem);
});

app.get("/items/:id", (req, res, next) => {
  let foundItem = Item.find(+req.params.id);
  return res.json(foundItem);
});

app.patch("/items/:id", (req, res, next) => {
  let foundItem = Item.update(+req.params.id, req.body);
  return res.json(foundItem);
});

app.delete("/items/:id", (req, res, next) => {
  Item.remove(+req.params.id);
  return res.json("Deleted!");
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error("Error! Not Found.");
  err.status = 404;
  next(err);
});

// Error handlers
// Development error handler will print stacktrace
if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}

// Production error handler
// No stacktrace leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {},
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
