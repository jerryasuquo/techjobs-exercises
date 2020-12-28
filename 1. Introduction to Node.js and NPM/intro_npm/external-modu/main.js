const request = require("request");

request("http://swapi.dev/api/people/1", function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)); // Show the JSON for the Star Wars Character
  }
});
