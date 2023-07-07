# JavaScript Revision 🚀

## Coding Variables In JS

<details>

<summary>Details</summary>

<br/>

There are three ways to declare a variable in JS:

1. with the help of the `var` keyword.
2. with the help of the `let` keyword.
3. with the help of the `const` keyword.

[Code 🔗](./01.%20Introduction%20to%20Programming%20with%20JS/01.Declaring_a_variable.js)

---

</details>

<!-- ### Rules for variable creation

<details>

<summary>Details</summary>

<br/>

1. Variable can contain small alphabets, capital alphabets, digits, underscore `_`, and `$` is allowed.
2. Variables **can't** have space or any other special char like: `first var` OR `#firstVar` OR `@name = "Ravi"` ❌.
3. We give meaningful names to your variables.
4. Variables name cannot start with a digit but it can have digits in between or at the last.

  Example: 0james = 10 ❌ but james0 = 10✅

----
</details> -->

<br>

## Showing data to the user

<details>

<summary>Deatils</summary>

<br>

Displaying some value to the user will use `console.log()`. This is a built-in Function of JS.

This will take some input and it will display some output.

- We can pass direct value inside the `console.log()`  
  **Example:** `console.log(10)` will give us 10 as the output!

- We can even pass the variable to the `console.log()`
  **Example:** let num = 10;
  `console.log(num)` will give us 10 as the output because num is 10 stored in it

We can also pass multiple values to the console.log() which will print in the same line ❗️

**Example:**

```js
var name = "Swayam Terode";
console.log(12, name, "Pune");
```

**Output:**

```text
12 Swayam Terode Pune
```

---

</details>

<br>

## DataTypes

 <details>
 
 <summary>Details</summary>
 
 <br>

**Primitve DataTypes:**

- Atomic DataTypes.

  Example: Number

**Non-Primitive DataTypes:**

- DataType which is a composition of some other types.

  Example: Objects

### What values we can store in JS?

1. **Number**: `0`, `-324`, `234`, etc .....

2. **String**: Either "Swayam" OR 'Swayam' are the correct ways to declare a string. You can also use backtick ` `` `.

3. Boolean: True or False these technical keywords. In other words `0` or `1`
4. **Undefined**: This is keyword.

   This signifies that something which is not defined yet but may be in the future will be defined 🤔...

5. **Objects**: If we want to store the key-value pair then we use Objects. Here the key will be unique.

Example:

```js
//NUMBER
console.log("\nNumber DataType ⬇️\n");
var num = 10;
console.log(num);

// STRING
// There are three ways to define string
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
console.log("\nUnderstanding Undefined DataType ⬇️\n");
var profession;
console.log(profession);

//OBJECTS => Important
//acts as key-value pair

console.log("\nUnderstanding Objects as Non-Primitive DataType ⬇️\n");
var person = {
  name: "Swayam Terode",
  age: 21,
  gender: "Male",
  address: "📍Pune",
  college: "SPPU",
};
console.log(person);
```

**Output:**

![3.DataType](./Programming%20with%20JS/consoleOutputs/03.DataTypes.png)

[Code 🔗](./Programming%20with%20JS/01.Basics/03.DataTypes_In_JS_Primitives_and_Non_Primitives.js)

---

  </details>

<br>

## Using Special Characters

<details>

<summary>Details</summary>

In Js, there are many special characters but the most commonly used special character are `\n` and `\t`.

- `\n`: This means the end of the line.
- `\t`: This provides 4 spaces to the text.

Example:

```js
var text = "My name is Swayam \nI'm from Pune";
console.log(text);
text = "My name is Swayam \tI'm from Pune";
console.log(text);
```

Output:

<img src="./01.%20Introduction%20to%20Programming%20with%20JS/consoleOutputs/04.SpecialChars.png" alt = "Special Char output"/>

---

</details>

<br>

## Writing Comments in JS code

<details>

<summary>Details</summary>

<br>

Comments are the line of code that is ignored by the Compiler. This is beneficial for the user to understand the codebase.

There are two types of comments in any programming language:

- Single-line comment
- Multiline comment

The single-line comment is presented by `//`

The Multiline comment is presented by `/* ... */`

Example:

```js
// this is comment
// I am declaring a variable which store the name of the person 👍
var userName = "Swayam";

/*
This are multiline comments
.
.
.
.
*/
```

---

</details>

<br>

## Operators

<details>

<summary>Details</summary>

<br>

There are different types of operators

1. Arithmetic Operations:

- `+` : Addition
- `-` : Subtarction
- `/` : Division
- `*` : Multiplication
- `%` : Gives Remainder
- `**` : Exponent

2. Assignment Operators

- `=` : Directly assigns the value to the variable.
- `+=` : This is same as A = A + 2 OR A+=2 both are same.
- `-=` : This is same as A = A - 2 OR A-=2 both are same.
- `*=` : This is same as A = A _ 2 OR A_=2 both are same.
- `/=` : This is same as A = A / 2 OR A/=2 both are same.
- `%=` : This is same as A = A % 2 OR A%=2 both are same.

[Code 🔗](./01.%20Introduction%20to%20Programming%20with%20JS/05.Operators.js)

---

</details>

<br>

## Object

<details>
 
<summary>Details</summary>
 
<br>
 
> **Objects has property and behaviour.** Collection of key value pair.

**How do we add behaviour to the object?**

We can add behaviour by the means of function. But any function created inside the object is **`Method`**.

### a. Object creation

- <details>

    <br>

  ```js
  const objectName = {
    property1: value,
    property2: "value",
    property3: 10,

    //Method -> which give behaviour to the Object
    functionName: function () {
      //console.log("I am a Method!")
      //args...
    },
  };
  ```

  Example:

  ```js
  const rectangle = {
    length: 1,
    breadth: 2,
    draw: function () {
      console.log("This is Draw Method!");
    },
  };
  ```

  ***

    </details>

### b. Accessing the value of the objects:

- <details>

  Whenever we want to call the properties of the object we can use:

  ```js
  console.log(rectangle.length);
  // rectangle.length in console directly 🚀
  ```

  **Output:**

  ```text
  1
  ```

  But when we have to call the **Method** we simply call it by:

  ```js
  rectangle.draw();
  ```

  **Output:**

  ```js
  This is Draw Method!
  ```

  ```js
  rectangle.draw; //this wont print anything as draw is an Method!
  ```

  ***

    </details>

  </details>

<br>

## Two ways to create Object

<details>

### `Factory Function`

<details>

<br>

> Factory function is mainly used to create multiple objects.

**Syntax:**

```js
function createRectangle() {
  return (details = {
    length: 3,
    breadth: 5,
    display() {
      console.log("This is an example of a factory function.");
    },
  });
}
```

**Accessing prop of the factory function:**

```js
let obj1 = createRectangle(); //this is how you access the factory function.
console.log(obj1); //this will print the function as object.
console.log(obj1.length); //this is how ypu can access any property.
console.log(obj1.display()); //this is how you access the METHOD.
```

**Passing parameters to the factory function:**

```js
function createUser(name, age) {
  return (userDetails = {
    name,
    age,
    display() {
      console.log("This is an example of a factory function.");
    },
  });
}
```

**Passing arguments to the factory function:**

```js
let obj = createUser("Ravi", 43); // Creating an object using the factory function and passing parameters.
console.log(obj); // Printing the created factory function -> gives o/p as Object.
```

---

<br>

</details>

### `Constructor Function`

<details>

- A constructor function is a function that is used to create objects.

- When a constructor function is called, it creates a new object and assigns it to the this keyword.
- The `this` keyword refers to the newly created object. The constructor function can then be used to set the properties of the object.

Example:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

- Accessing the constructor function:

```js
let obj2 = new Person();
```

</details>

---

</details>

<br>

## Dynamic Nature of Objects

<details>

<summary>Details</summary>

```js
// Dynamic Nature of Objects
console.log("\nDynamic Nature of Objects ⬇️\n");
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
person1.address = "New York"; //📝 new property added
console.log("\nAfter Adding property:\n");
console.log(person1);
console.log("\n===========================");
console.log("\nBefore Deletion:\n");
console.log(person1);
delete person1.address; //Deleting the added property
console.log("\nAfter Deletion:\n");
console.log(person1);
```

**Output:**

![1](../JS/Programming%20with%20JS/consoleOutputs/5.DynamicNatureOfObejcts_1.png)

![2](../JS/Programming%20with%20JS/consoleOutputs/6.DynamicNatureOfObejcts_2.png)


> Functions are Object
> - Primitives are copied by the values.
>
> - References are copied by their Address ⭐️

---

</details>

<br>

## Iterating through Loops

<details>
  
  <br>

- <details>

  <summary>for-in loop</summary>

  ```js
  const car = {
    car1: "Audi",
    car2: "BMW",
  };

  for (let key in car) {
    console.log(key, car[key]);
  }
  ```

  > You can access the `car1:"Audi"` by `car1` by `key` and `Audi` by `car1[key]`.

  <br>

  </details>

  <br>

- <details>

  <summary>for-of loop</summary>

  ```js
  const countries = ["India", "Sri Lanka", "China", "USA"];
  const newCountries = [];

  // for of loop
  for (let country of countries) {
    newCountries.push(country.toUpperCase());
  }
  ```

  **Code Explaination:**

  - The code declares a constant variable called countries and assigns an array of country names to it: ["India", "Sri Lanka", "China", "USA"].
  - It declares an empty array called newCountries.
  - It uses a for...of loop to iterate over each element (country name) in the countries array.
  - Inside the loop, it converts each country name to uppercase using the toUpperCase() method.
  - It appends the capitalized country name to the newCountries array using the push() method.
  - After the loop finishes, the newCountries array will contain the capitalized versions of the country names from the countries array.

  **Output:**

  ```js
  ["INDIA", "SRI LANKA", "CHINA", "USA"];
  ```

  </details>

  ***

  <br>

</details>

</details>

<br>

## Object Cloning

<details>

<summary>Details</summary>

<br>

```js
// Object Cloning:
console.log("Object Cloning ⬇️\n");
console.log("Iteration Method:\n");

// Declaring an object car.
const car = {
  car1: "Audi",
  car2: "BMW",
};

console.log("car Object:", car);
//📝 Printing the car Object
// for (let key in car) {
//   console.log(car[key]);
// }

/** 🤔💭
 * Now I want to clone the exact same object into a different object
 * How to do it?
 */

// creating new object;
const newCar = {};
for (let key in car) {
  newCar[key] = car[key];
}
console.log("\nnewCar Object:", newCar);

//📝 Printing the newCar Object
// for (let key in newCar) {
//   console.log(newCar[key]);
//}
console.log("============================================");
// End of iterative method ✅

// 2.Object.assign method 🔥
console.log("\nObject.assign():\n");
console.log("car Object:", car);

const wip = Object.assign({}, car);
//Printing the new wip Object: using a for-in loop
// for (let key in wip) {
//   console.log(wip[key]);
// }

console.log("wip Object:", wip);
console.log("============================================");
// End of Object.assign code ✅

// Spread Operator
let marks = {
  eng: 90,
  math: 91,
  history: 90,
};

console.log("\nSpread Operator: \n", "\nObject marks ➡️ ", marks, "\n");
let updatedMarks = { ...marks };
console.log("Object updatedMarks ➡️ ", updatedMarks, "\n");
console.log("==========================================================\n");
// End of Spread Operator
```

**Output:**

<img src= "./01. Introduction to Programming with JS/consoleOutputs/Object cloning.png">

[Code 🔗](../JS/Programming%20with%20JS/01.Basics/07.Object%20Cloning.js)

---

</details>

<br>
