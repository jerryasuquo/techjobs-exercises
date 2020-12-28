/*
// require the express module
const express = require("express");
// create an app object from the express function, which contains methods for making requests and starting the server
const app = express();

// create a route for a GET request to '/' - when that route is reached (or hit), run a function
app.get("/", function(request, response) {
  /* inside of this callback we have two large objects, request and response
        request - can contain data about the request (query string, url parameters, form data)
        response - contains useful methods for determining how to respond (with html, text, json, etc.)
    let's respond by sending the text Hello World!
    // close this comment here!!!
  return response.send("Hello World!");
});

// let's tell our server to listen on port 3000 and when the server starts, run a callback function that console.log's a message
app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});
*/

// same pattern as above, require express, invoke the express function
const express = require("express");
const app = express();

// same as above, listen for a GET request
app.get("/", function(request, response) {
  return response.send("Hello World!");
});

// when a request comes in to /instructors/ANYTHING
app.get("/instructor/:firstName", function(request, response) {
  // let's capture the "dynamic" part of the URL, which we have called "firstName". The name that we give to this dynamic part of the URL will become a key in the params object, which exists on the request object.

  // let's send back some text with whatever data came in the URL!
  return response.send(
    `The name of this instructor is ${request.params.firstName}`
  );
});

app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});