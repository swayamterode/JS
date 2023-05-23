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

Displaying some value to the user will use `console.log()`. This is an built-in Function of JS.

This will take some input and it will displays us some output.

- We can pass direct value inside the `console.log()`  
  **Example:** `console.log(10)` will give us 10 as the output!

- We can even pass the variable to the `console.log()`
  **Example:** let num = 10;
  `console.log(num)` will give us 10 as the output because num as 10 stored in it

We can also pass multiple values to the console.log() which will print in same line ❗️

Example:

```js
var name = "Swayam Terode";
console.log(12, name, "Pune");
```

Output:

12 Swayam Terode Pune

---