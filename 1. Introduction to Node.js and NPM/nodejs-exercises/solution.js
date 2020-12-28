/*
For this exercise, we are going to build a simple command line tool which allows us to make a request to an API and store the data in a text file! We will be using the following modules:

fs - for reading and writing to a file
process - for gathering arguments from the command line
request - for making API requests (this is an external module)

This application should accept a command line argument using process.argv. The command line argument should be a search term and your application should make an API request to the dad joke API to search for a joke based on the search term. If it finds jokes matching the term, it should output a random joke, and should also save the joke to a file called jokes.txt. If it doesn't find a joke, it should log a message to the console telling the user that no jokes were found for that search term.
 */

"use strict";

var prompt = require("prompt");
const axios = require("axios");
const fs = require("fs");

prompt.start();

prompt.get(["term"], function (err, input) {
  if (input) {
    getJoke(input);
  } else {
    console.log(err);
  }

  setTimeout(() => {
    process.exit();
  }, 10000);
});

function getJoke(term) {
  const baseUrl = `https://icanhazdadjoke.com/search?term=${term}`;
  axios
    .get(baseUrl, {
      headers: { Accept: "application/json" },
    })
    .then((resp) => {
      if (resp.data.results.length > 0) {
        let rand = Math.floor(Math.random() * resp.data.results.length + 1) - 1;
        fs.appendFile(
          "jokes.txt",
          `${resp.data.results[rand].joke}\n`,
          (err) => {
            if (err) throw err;
            console.log("Saved!");
          }
        );
      } else {
        console.log(`Uh oh! No jokes were found.`);
      }
    })
    .catch((err) => console.log(err));
}
