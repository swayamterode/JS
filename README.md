# JavaScript Revision 🤩

## Coding Variables In JS

There are three ways to declare a variable in JS:

1. with the help of the `var` keyword.
2. with the help of the `let` keyword.
3. with the help of the `const` keyword.

[Example](./01.%20Introduction%20to%20Programming%20with%20JS/01.Declaring_a_variable.js)

## Use of `;` in code

The Js code will still run if you miss writing the `;` but it is considered as best practice to learn the best syntax practices.

## Rules for variable creation

1. Variable can contain small alphabets, capital alphabets, digits, underscore `_`, and `$` is allowed.
2. Variables **can't** have space or any other special char like: `first var` OR `#firstVar` OR `@name = "Ravi"` ❌.
3. We give meaningful names to your variables.
4. Variables name cannot start with a digit but it can have digits in between or at the last.
   Example: 0james = 10 ❌ but james0 = 10✅

---

## Showing data to the user

Displaying some value to the user will use `console.log()`. This is a built-in Function of JS.

This will take some input and it will display some output.

- We can pass direct value inside the `console.log()`  
  **Example:** `console.log(10)` will give us 10 as the output!

- We can even pass the variable to the `console.log()`
  **Example:** let num = 10;
  `console.log(num)` will give us 10 as the output because num is 10 stored in it

We can also pass multiple values to the console.log() which will print in the same line ❗️

Example:

```js
var name = "Swayam Terode";
console.log(12, name, "Pune");
```

Output:

12 Swayam Terode Pune

---

## DataTypes In JS Primitives and Non Primitives

**Primitve DataTypes:**

- Atomic DataTypes.

  Example: Number

**Non-Primitive DataTypes:**

- DataType which is a composition of some other types.

  Example: Objects

What values we can store in JS?

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
```

Output:

![3.DataType](./01.%20Introduction%20to%20Programming%20with%20JS/consoleOutputs/03.DataTypes.png)

[Link to Code](./01.%20Introduction%20to%20Programming%20with%20JS/03.DataTypes_In_JS_Primitives_and_Non_Primitives.js)

---

## Using Special characters

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
