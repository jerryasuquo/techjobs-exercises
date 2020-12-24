/*
Part I

What is a regular expression? What are some use cases of regular expressions?
A regular expression is a sequence of characters that create a pattern. We can use regular expressions to search for and find these patterns in strings, which enables us to perform complex pattern-matching on strings.

What are the two ways to create regular expression in JavaScript?
One way to create a regular expression is to place the pattern between two forward slashes //. However, if we want to dynamically create the regular expression, we can use the RegExp constructor function. This function accepts as its first parameter the pattern (what goes inside the //) and as a second parameter, a string of all the flags we want to pass in.

What is a flag?
A flag variable (also called boolean variable, or often just flag), in its simplest form, is a variable you define to have one value until some condition is true, in which case you change the variable's value. The value of the variable can toggle depending on events in the program. It is a variable you can use to control the flow of a function or statement, allowing you to check for certain conditions while your function progresses.

What is the difference between ?, + *?
? - This matches at most 1 of the previous match. In other words, it marks the previous the previous match as optional.
+ - This matches one or more of the previous match.
* - This matches zero or more of the previous match.

What is the difference between [] and {}?
Imagine that we want to match a string that has four characters, but the first character has to be "a", "b", "c" or "d", a way of specifying all of those characters is by using the character sets - and they are denoted by placing characters inside of []. You can specify a range with character sets using the - character. But,
When we want a specific quantity of characters we can use the character range which is denoted by {}. You can even specify a range with a minimum and maximum value e{1,3} will match the letter 'e' one to three times. If you omit the second number in the character range, but include a ,, it will match an infinite amount. For example, e{2,} will match the character "e" two times or more.

What does the search function do?
The search function in JavaScript can accept as its first parameter either a string or a regular expression. Similar to indexOf, the search function will return the first starting point of where a match is found or -1 if a match is not found.
What do the exec and test functions do (these functions exist on the RegExp prototype)?
*/

// Part II

/*
countNumbers
Write a function called countNumbers which accepts a string of numbers 
and returns the count of numbers between 0 and 9.
*/

function countNumbers(numStr) {
  const pattern = new RegExp(/[0-9]/, "gi");
  var matches = numStr.match(pattern);
  if (matches) {
    return matches.length;
  }
  return 0;
}
console.log(countNumbers("321321dsadsa930-29d132b13a"));
console.log(countNumbers("this is so wonderful"));
console.log(countNumbers("this is so 1234"));

/*
capitalSentence
Write a function called capitalSentence which accepts a string and 
returns another string with all the capital letters joined together.
*/

function capitalSentence(str) {
  var pattern = new RegExp("[A-Z]", "g");
  var matches = str.match(pattern); // returns an array
  var capStr = matches.join("");

  return capStr;
}

console.log(capitalSentence("The Cat In The Hat")); // "TCITH"
console.log(capitalSentence("And I Think to Myself What a Wonderful World")); // "AITMWWW"

/*
isValidPassword
Write a function called isValidPassword, which accepts a string. 
If the string is longer than 7 characters and includes 
at least one special character (!,@,#, or $), 
the function should return true. Otherwise, return false
*/

function isValidPassword(str) {
  //   var pattern = new RegExp("[!@#$]+", "g");
  //   if (str.length > 7 && pattern) {
  //     return true;
  //   }
  //   return false;
  var pattern = new RegExp("[a-zA-Z0-9]{7,}[!@#$]", "g");
  var testPattern = pattern.test(str);
  return testPattern;
}
console.log(isValidPassword("TacoCat"));
console.log(isValidPassword("foo"));
console.log(isValidPassword("awesome!"));
console.log(isValidPassword("win!@"));
