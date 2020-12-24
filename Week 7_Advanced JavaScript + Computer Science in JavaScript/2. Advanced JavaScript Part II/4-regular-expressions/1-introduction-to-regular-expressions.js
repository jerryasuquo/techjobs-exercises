var pattern = /Elie/;
var str = "My name is Elie, is your name Elie?";
var matches = str.match(pattern);
console.log(matches, "\n");

pattern = /Elie/g;
var matches = str.match(pattern);
console.log(matches, "\n");

pattern = /elie/gi;
var matches = str.match(pattern);
console.log(matches, "\n");

pattern = /.at/gi;
var str = "The cat in the hat deserves a pat";
var matches = str.match(pattern);
console.log(matches, "\n");

pattern = /..a.e/gi;
var str = "shape tape grape";
var matches = str.match(pattern);
console.log(matches, "\n");

pattern = /.2./g;
var numbers = "123 321 121 111 428 888";
var matches = numbers.match(pattern);
console.log(matches, "\n");

pattern = /[a-d].../g;
var str = "amen bean cups deer pear";
var matches = str.match(pattern);
console.log(matches, "\n");

var match1 = "cookies".match(/cookies?/);
var match2 = "cookie".match(/cookies?/);
var match3 = "cookies".match(/cookiess?/);
var match4 = "cookies".match(/cookiesss?/);

console.log(match1);
console.log(match2);
console.log(match3);
console.log(match4, "\n");

pattern = /cookies+/;
var match1 = "cookiessssssssss".match(pattern);
var match2 = "cookies".match(pattern);
var match3 = "cookie".match(pattern);
console.log(match1);
console.log(match2);
console.log(match3, "\n");

pattern = /cookies*/;
var match1 = "cookiessssssssss".match(pattern);
var match2 = "cookies".match(pattern);
var match3 = "cookie".match(pattern);
console.log(match1);
console.log(match2);
console.log(match3, "\n");

pattern = /.*e.*/gi;
var match1 = "elie".match(pattern);
var match2 = "elephants are everywhere".match(pattern);
var match3 = "can you think of a string containing almost all non-consonants?".match(
  pattern
);
console.log(match1);
console.log(match2);
console.log(match3, "\n");

pattern = /hel{2,}o/g;
var match = "helo hello helllo hellllllllllo".match(pattern);
console.log(match, "\n");

pattern = /[od]{2,}/g;
var match = "noodle caboodle testing fiddle person diddle muddle booooombox".match(
  pattern
).length;
console.log(match, "\n");

// let's try to find the number of periods in a sentence.
pattern = /\./g;
var match = "Hello. I'm Elie.".match(pattern);
console.log(match, "\n");

var str = "awesome";
var newStr = str.replace("e", "z");
console.log(newStr, "\n");

var str = "awesome";
pattern = /e/g;
var newStr = str.replace(pattern, "z");
console.log(newStr, "\n");

// using a callback
var str = "awesome";
pattern = /[aeiou]/g;
var newStr = str.replace(pattern, function (match) {
  return match.toUpperCase();
});
console.log(newStr, "\n");

var str = "awesome";
var newStrOne = str.search("awe");
var newStrTwo = str.search("z");
console.log(newStrOne, "\n");
console.log(newStrTwo, "\n");

// using a regular expression
var str = "awesome";
pattern = /..e/;
var newStrOne = str.search(pattern);
var newStrTwo = str.search("p");
console.log(newStrOne, "\n");
console.log(newStrTwo, "\n");

var str = "My name is elie";
pattern = /e/;
var newStr = str.split(pattern);
console.log(newStr, "\n");

function countLetters(word, letter) {
  var matches = word.match(letter);
  if (matches) {
    return matches.length;
  }
  return 0;
}
console.log(countLetters("awesome", "e"));

function countLetters(word, letter) {
  var regex = new RegExp(letter, "gi");
  var matches = word.match(regex);
  if (matches) {
    return matches.length;
  }
  return 0;
}
console.log(countLetters("awesome", "e"));
