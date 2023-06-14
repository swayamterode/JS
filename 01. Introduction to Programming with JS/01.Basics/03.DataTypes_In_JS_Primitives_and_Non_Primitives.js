//datatypes
//NUMBER
console.log("\nNumber DataType ⬇️\n");
var num = 10;
console.log(num);

// STRING
// there are three ways to define string
console.log("\nString DataType ⬇️\n");
var myName = `Swayam`;
console.log("Using backticks:", myName);
myName = "Akshay";
console.log("Using double quotes:", myName);
myName = "Kartik";
console.log("Using single quotes:", myName);

// BOOLEAN - true or false
console.log("\nBoolean DataType ⬇️\n");
var time = "10pm";
if (time == "10pm") console.log(true);

var time = "1pm";
if (time == "10pm") console.log(true);
else console.log(false);

// UNDEFINED
console.log("\nnUnderstanding Undefined DataType ⬇️\n");
var profession;
console.log(profession);

//OBJECTS
//acts as key-value pair❗️
console.log("\nUnderstanding Objects as Non-Primitive DataType ⬇️\n");
var person = {
  name: "Swayam Terode",
  age: 21,
  gender: "Male",
  address: "📍Pune",
  college: "SPPU",
};
console.log(person);
