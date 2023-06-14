console.log("1. Understanding Objects:\n");
// Defining an object called "person"
const person = {
  name: "Swayam Terode", // property: name
  age: 19, // property: age
  draw: function () {
    // Defining a method named "draw" inside the object
    console.log("This is the draw method!"); // Displaying a message when the method is called
  },
};
console.log(person); // Printing the entire object "person"
person.draw(); // Calling the "draw" method of the "person" object
console.log(person.name); // Printing the value of the "name" property of the "person" object
console.log("==========================================================");
// 1. Factory function
// Factory function that creates and returns an object
console.log(
  "\n2. Understanding Factory Functions (1st type to define Objects):\n"
);
function createRectangle() {
  return (details = {
    length: 3,
    breadth: 5,
    display() {
      console.log("This is an example of a factory function.");
    },
  });
}

let object1 = createRectangle(); // Creating an object using the factory function
console.log(object1); // Printing the created object

// Factory function that takes parameters
function createUser(name, age) {
  return (userDetails = {
    name,
    age,
    display() {
      console.log("This is an example of a factory function.");
    },
  });
}

let obj = createUser("Ravi", 43); // Creating an object using the factory function with parameters
console.log(obj); // Printing the created object
console.log("==========================================================\n");

// Constructor Object
//its job is to initialize the properties/function.
console.log("3. Understanding Constructor function:\n");

function Newfunc() {
  this.userName = "Drake";
  this.userAge = 32;
  this.userAddress = "NY";
  this.draw = function () {
    console.log("This is Constructor Function.");
  };
}
let obj2 = new Newfunc();
console.log(obj2);
console.log(obj2.draw());
// Constructor does not return anything! This is used to initialize values

console.log(
  "=========================================================================\n"
);
console.log("4. Understanding Constructor function with passing parameter:\n");
// Passing arguments
function Funct(Username, Userage) {
  this.userName = Username;
  this.userAge = Userage;
  this.draw = function () {
    console.log("This is Constructor Function.");
  };
}
let obj3 = new Funct("Travis", 32);
console.log(obj3);
console.log(
  "=========================================================================\n"
);

// Dynamic Nature of Objects
console.log("\n5. Dynamic Nature of Objects ⬇️\n");
const person1 = {
  name: "Swayam Terode", // property: name
  age: 19, // property: age
  draw: function () {
    // Defining a method named "draw" inside the object
    console.log("This is the draw method!"); // Displaying a message when the method is called
  },
};
console.log("Before Adding property:\n");
console.log(person1);
person1.address = "New York";
console.log("\nAfter Adding property:\n");
console.log(person1);
console.log("\n===========================");
console.log("\nBefore Deletion:\n");
console.log(person1);
delete person1.address;
console.log("\nAfter Deletion:\n");
console.log(person1);
console.log("\n==========================================================");

// Passing by value and passing by reference
console.log("6. Pass by value example ⬇️");
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);

console.log("==========================================================\n");

console.log("7. Pass by reference example ⬇️");
let num = { value: 10 };
let num2 = num;
num.value++;
console.log(num.value);
console.log(num2.value);

// Iterating through loops

console.log("==========================================================\n");

console.log("8. Iterating through loops ⬇️\n");
// - for in loop

const car = {
  car1: "Audi",
  car2: "BMW",
};

for (let key in car) {
  console.log(key, car[key]);
}
// You can access the value "Audi" using key "car1" (e.g., car1[key])
// "Audi" can be accessed by car1[key] 👍
console.log("==========================================================\n");