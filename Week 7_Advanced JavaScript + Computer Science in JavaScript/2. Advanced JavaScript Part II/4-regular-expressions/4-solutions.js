/*
The notorious Captain Schneider has given you a very straight forward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.
*/

function nothingSpecial(str) {
  //   let specialCharsPattern = new RegExp("^[a-z][A-Z][0-9]s", "g");
  if (typeof str !== "string") return "Not a string!";
  const specialCharsPattern = /[^a-zA-Z0-9\s]/g;
  const match = str.replace(specialCharsPattern, "");
  return match;
}
console.log(nothingSpecial("Hello World!")); // "Hello World"
console.log(nothingSpecial("%^Take le$ft ##quad%r&a&nt")); // "Take left quadrant"
console.log(nothingSpecial("M$$$$$$$y ally!!!!!")); // "My ally"
console.log(nothingSpecial(25), "\n"); // "Not a string!"

/* Sentence Count
Create a function that will tell how many sentences are in a paragraph, 
based on the number of periods ".", 
question marks "?" and "!" exclamation points 
that an input string contains.
*/

function sentenceCount(paragraphStr) {
  // const sentencePunctuationsPattern = /[.!?]/g
  const sentencePunctuationsPattern = new RegExp("[.?!]", "g");
  let sentencePunctuationsArr = paragraphStr.matchAll(
    sentencePunctuationsPattern
  );
  const sentenceLength = [...sentencePunctuationsArr].length;
  return sentenceLength;
}

console.log(sentenceCount("No punctuation"));
console.log(sentenceCount("This is a sentence."));
console.log(sentenceCount("Can you hear me now? Good!"));
console.log(
  sentenceCount("Too many things to do. Rawr! When do I get a break?"),
  "\n"
);

/*
Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise. But looks like he has messed it up. Could you help him out? Please!

Rank and Upvote if you liked it :D

P.S.- Random tests to be added soon.
*/

function isItBugged(format) {
  // Hmm. There seems to be a bug!
  var pattern = /^\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/g;
  if (format.match(pattern)) return true;
  return false;
}

console.log(isItBugged("01_09_2016 01:20"));
console.log(isItBugged("14-10-1066 12:00"));
console.log(isItBugged("Tenth of January"), "\n");

/*
Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.
Examples of arrays that will be tested:

const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

Notes:

You will always be given an array with at least 1 string to check.
*/

function authList(strArr) {
  const pattern = /^(?=.*\d)(?=.*[a-z])[\da-z]{6,10}$/;
  return strArr.every((val) => pattern.test(val));
}

const usernames1 = ["dstark5081", "uni8209", "gaurav6257", "dani4204"];
console.log(`${authList(usernames1)}`);

const usernames2 = ["dstark5081", "uni8209", "gaurav", "dani4204"];
console.log(`${authList(usernames2)}`);

const usernames3 = ["d_stark5081", "uni8209", "gaurav6257", "dani4204"];
console.log(`${authList(usernames3)}`);
