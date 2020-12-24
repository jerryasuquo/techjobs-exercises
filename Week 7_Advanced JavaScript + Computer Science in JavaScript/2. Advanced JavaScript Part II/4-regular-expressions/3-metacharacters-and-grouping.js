var simplePhoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
var betterPhoneRegex = /\d{3}-\d{3}-\d{4}/;
var str = "My number is 201-867-5309";
console.log(str.match(betterPhoneRegex, "\n"));

var noNumbers = /\D+/;
var str = "H3ll0";
console.log(str.match(noNumbers, "\n"));

var match = "this \t is \n a string \n on many \n lines".match(/[\t\n]/g);
console.log(match, "\n");

var match = "please remove all the white space now".replace(/\s/g, "");
console.log(match, "\n");

var match = "please remove everything but the white space now".replace(
  /\S/g,
  ""
);
console.log(match, "\n");

var match = "pl3ease r3mov3 ALL 12the 44word characters__. So what is left? Maybe [] or {} or () or !@#$%^&*".replace(
  /\w/g,
  ""
); // "     .    ?  []  {}  ()  !@#$%^&*"
console.log(match, "\n");

var match = "j ".replace(/\W/g, "wow");
console.log(match, "\n");

var matchOne = "this is great".match(/^t.*/);
var matchTwo = "now this is not great".match(/^t.*/);
console.log(matchOne, "\n");
console.log(matchTwo, "\n");

var pattern = /.*\.test.js$/;
var matchOne = "first.test.js".match(pattern);
var matchTwo = "first.js".match(pattern);
console.log(matchOne, "\n");
console.log(matchTwo, "\n");

var pattern = /[^aeiou]/g;
var matchOne = "let's get rid of everything that is not a vowel".replace(
  pattern,
  ""
);
console.log(matchOne, "\n");

var pattern = "bread|pancakes$";
var matchOne = "banana bread".match("bread|pancakes$"); // ["bread"]
var matchTwo = "banana pancakes".match("bread|pancakes$"); // ["pancakes"]
console.log(matchOne, "\n");
console.log(matchTwo, "\n");

var matchOne = "my email is. . . . . . .elie@rithmschool.com".match(/\b/g)
  .length; // 12 - why does this return 12? Count each start and end of a word (between non character word)

// my
// email
// is
// elie
// infschool
// com

// => 6 * 2 = 12

// Now let's use word boundaries a bit better!

var regex = /\w+\b/g;
var matchTwo = "my email is. . . . . . . elie@rithmschool.com".match(regex); // ["my", "email", "is", "elie", "infschool", "com"]

var matchThree = "http://www.google.com".match(regex); // ["http", "www", "google", "com"]

console.log(matchOne, "\n");
console.log(matchTwo, "\n");
console.log(matchThree, "\n");

var tweet = "This is the best tweet #amazing #perfect #sogood";
var regex = /#([\S]+)/gi;

var matches = tweet.match(regex);

var result = matches.map((v) => v.replace(regex, "hashtag: $1")); // ["hashtag: amazing", "hashtag: perfect", "hashtag: sogood"]

console.log(result);
