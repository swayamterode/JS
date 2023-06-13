// split the string message into an array of words
let message = "This is my first message";
console.log("\nApplication of split ():");
let words = message.split(" ");
console.log(words);

// convert the string test to uppercase
let test = "This is test 101";
let upperCaseOnly = test.toUpperCase();
console.log("\nUpper case of the text", upperCaseOnly);

// convert the string test to lowercase
let lowerCaseOnly = test.toLowerCase();
console.log("\nLower case of the text:", lowerCaseOnly);

// get the character at the specified index in the string sentence
const sentence = "My name is Pablo ok.";
let index = 6;
console.log(
  "\nThe char present at the index",
  index,
  "is:",
  sentence.at(index)
);
index = -3;
console.log(
  "\nThe char present at the index",
  index,
  "is:",
  sentence.at(index)
);

// get the character at the specified index in the string sentence
index = 4;
console.log(
  "\nThe char present at the index",
  index,
  "is:",
  sentence.charAt(index)
);

// remove all spaces from the start and end of the string para
const para = "    My is something... I do something     ";
let removeSpaces = para.trim(" "); // removes the spaces from the start and the end of the string.
console.log("\n.trim() check 👇");
console.log(removeSpaces);

// remove all spaces from the start of the string para
removeSpaces = para.trimStart();
console.log("\n.trimStart() check 👇");
console.log(removeSpaces);

// remove all spaces from the end of the string para
removeSpaces = para.trimEnd();
console.log("\n.trimEnd() check 👇");
console.log(removeSpaces);

// get a substring of the string para starting from index 10 and ending at index 19
let sliceIt = para.slice(10, 19);
console.log("\n.slice() check 👇");
console.log(sliceIt);
