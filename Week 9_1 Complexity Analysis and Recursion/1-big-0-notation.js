// O(1) or constant time

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(add(1, 2, 7), "\n"); // add requires two addition operations. O(2) --> O(1)

function sayHello() {
  for (var i = 0; i < 100; i++) {
    console.log("Hello");
  }
}
sayHello(); // logs a message to the console 100 times whenever it is called; it doesn't even have any inputs! O(100) --> O(1)

function logMultiples(num) {
  for (var i = 1; i <= 10; i++) {
    console.log(i * num, "\n");
  }
}
logMultiples(5); // O(10) --> O(1)

// O(n), or linear time
function sayHello(numOfTimes) {
  for (var i = 0; i < numOfTimes; i++) {
    console.log("Hello", "\n");
  }
}
sayHello(5); // this one takes an argument, which controls how many times Hello gets logged to the console. So we could say the runtime is O(n) --> O(1)

function doubleThenTriple(numsArr) {
  var doubled = numsArr.map(function (num) {
    return num * 2;
  });

  return doubled.map(function (num) {
    return num * 3;
  });
}
console.log(doubleThenTriple([5, 50]), "\n"); // this maps over the data set twice. So we could say the runtime is O(n + n) or O(2*n) --> O(n).

// O(n2)

function allPairs(arr) {
  var pairsArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      pairsArr.push([arr[i], arr[j]]);
    }
  }
  return pairsArr;
}

console.log(allPairs([2, 5, 10]), "\n");

function bubbleSort(arr) {
  var len = arr.length;
  var lastSwap;
  var temp;
  while (len != 0) {
    lastSwap = 0;
    for (var i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap the two elements
        temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        lastSwap = i;
      }
    }
    len = lastSwap;
  }
}
// these are iterating over all elements again,within each element of the array. So we could say the runtime (or time complexity) is O(n * n) --> O(n^2).

// Across Time and Space

function total(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(total([2, 5]), "\n"); // Here, the time complexity of total is O(n), since we're looping through the array once and adding to the total. However, the space complexity is just O(1), since we only require one additional unit of space, for the number stored in total.

function double(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(2 * array[i]);
  }
  return newArray;
}
console.log(double([2, 5])); // Here, both the time and space complexities are O(n). Space complexity is larger in this case because we need n additional units of space: one for each element in the original array.
