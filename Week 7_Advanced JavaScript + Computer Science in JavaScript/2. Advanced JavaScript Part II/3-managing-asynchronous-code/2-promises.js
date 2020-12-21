// function firstPromise() {
//   return new Promise(function (resolve, reject) {
//     var x = Math.random();
//     if (x > 0.5) {
//       resolve(`Hooray! Your promise was resolved with value ${x}`);
//     } else {
//       reject(`Oh no, your promise was rejected with value ${x}`);
//     }
//   });
// }

// // console.log(firstPromise());

// console.log(
//   firstPromise()
//     .then(function (data) {
//       return data;
//     })
//     .catch(function (error) {
//       return error;
//     })
// );

// function secondPromise() {
//   return new Promise(function (resolve, reject) {
//     var timeToResolve = Math.random() * 5000;
//     var maxTime = 3000;
//     if (timeToResolve < maxTime) {
//       setTimeout(function () {
//         resolve(
//           `Hooray! I completed your request after ${timeToResolve} milliseconds.`
//         );
//       }, timeToResolve);
//     } else {
//       setTimeout(function () {
//         reject(
//           `Sorry, this is taking too long. Stopping after ${maxTime} milliseconds.`
//         );
//       }, maxTime);
//     }
//   });
// }

// console.log(
//   secondPromise()
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// );

// function getJokesAbout(term) {
//   return fetch(`https://icanhazdadjoke.com/search?term=${term}`);
// }

// // getJokesAbout("spider")
// Promise.all([
//   getJokesAbout("spider"),
//   getJokesAbout("ghost"),
//   getJokesAbout("pizza"),
// ])
//   .then(function (data) {
//     console.log("Woah check out all this data", data);
//   })
//   .catch(function (err) {
//     console.log("Oops, something went wrong", err);
//   });

// fetch("https://icanhazdadjoke.com/search?term=spider")
//   .then(function (data) {
//     console.log("Here's some data on spider jokes: ", data);
//     return fetch("https://icanhazdadjoke.com/search?term=ghost");
//   })
//   .then(function (data) {
//     console.log("Here's some data on ghost jokes: ", data);
//     return fetch("https://icanhazdadjoke.com/search?term=pizza");
//   })
//   .then(function (data) {
//     console.log("Here's some data on pizza jokes: ", data);
//   })
//   .catch(function (error) {
//     console.log("Oops something went wrong!", error);
//   });

function first() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("first is done");
      resolve(10);
    }, 500);
  });
}

function second(previousPromiseData) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("second is done and we just got", previousPromiseData);
      resolve(previousPromiseData + 10);
    }, 500);
  });
}

function third(previousPromiseData) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("third is done and the total is", previousPromiseData);
      resolve();
    }, 500);
  });
}

first().then(second).then(third);
