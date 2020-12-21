// function* firstGenerator() {
//   for (var i = 0; i < 5; i++) {
//     yield i;
//   }
// }

// var gen = firstGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for (var data of firstGenerator()) {
//   console.log(data);
// }

// function getJokesAbout(term) {
//   fetch(
//     `https://icanhazdadjoke.com/search?term=${term}`,
//     function (data) {
//       // we could also do gen.next(data) to make this function run all three at once
//       console.log(data);
//     },
//     function (err) {
//       console.log(err);
//     }
//   );

//   function* displayResults() {
//     var result1 = yield getJokesAbout("spider");
//     console.log(result1);
//     var result2 = yield getJokesAbout("ghost");
//     console.log(result2);
//     var result3 = yield getJokesAbout("pizza");
//     console.log(result3);
//   }

//   var gen = displayResults();
//   // if we want to print all without using next()
//   for (var jokeData of displayResults()) {
//     console.log(jokeData);
//   }
// }

// async function asyncExample() {
//   return 1;
// }

// asyncExample(); // Promise {<resolved>: 1}

// Using Promises alone
async function logJokesAbout(term) {
  var data = await fetch(`https://icanhazdadjoke.com/search?term=${term}`);
  console.log("Here is the joke data!", data);
}

logJokesAbout("spider");
logJokesAbout("pizza");
// etc.
