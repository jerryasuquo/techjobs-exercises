// Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.

var logOne = function () {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("one");
      resolve("one!");
    }, Math.random() * 1000);
  });
  return promise;
};

var logTwo = function () {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("two");
      resolve("two!");
    }, Math.random() * 1000);
  });
  return promise;
};

function inOrder(callBackFnOne, callBackFnTwo) {
  return callBackFnOne().then(callBackFnTwo);
}

console.log(inOrder(logOne, logTwo));
// one
// two

// it should always log those two in order regardless of their timing
