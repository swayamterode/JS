# JavaScript Revision 🚀

## Coding Variables In JS

<details>

<br>

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

5. **Objects**: If we want to store the key-value pair, we  use Objects. Here the key will be unique.

Example:

``` js
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


## Using Special Characters

<details>

<br>

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

<img src="./Programming%20with%20JS/consoleOutputs/04.SpecialChars.png" alt = "Special Char output"/>

---

</details>

<!---Array Methods Here--->

## Initializing an Array

<details>

<br>

The variable names is declared and assigned an array of strings.
The array contains four elements: `"Swayam", "Ram", "Sham",` and `"Raj"`.

```js
let names = ["Swayam", "Ram", "Sham", "Raj"];
```

**Outputting the Array:**

```js
console.log(names); // [ 'Swayam', 'Ram', 'Sham', 'Raj' ]
```

The code uses `console.log()` to print the value of the names array to the console.

**Another way of Declaring an Array (Not Recommended ❌):**

The code demonstrates an alternative way of declaring an array using the `new Array()` syntax. However, this method is not recommended and is less commonly used.

```js
let myNames = new Array("Name1", "Name2");
```

---

</details>

## Playing with index and `.length`

<details>

<br>
Consider this array

```js
let names = ["Swayam", "Ram", "Sham", "Raj"];
```

**Length of the array:**

The code starts by outputting a message to the console to indicate that it will display the length of the array.

```js
console.log(names.length); //4
```

**Displaying the array before modification:**

The code uses console.log() to print the current value of the names array to the console.

```js
console.log("Before: ", names); // Before:  [ 'Swayam', 'Ram', 'Sham', 'Raj' ]
```

**Modifying an array element:**

The code modifies the value at index 3 of the names array. It replaces the string "Raj" with "Vivek".

```js
names[3] = "Vivek"; // replacing string value at index 3 with Vivek.
```

**Displaying the array after modification:**

The code uses console.log() to print the modified value of the names array to the console.

```js
console.log("After: ", names); // After:  [ 'Swayam', 'Ram', 'Sham', 'Vivek' ]
```

---

</details>

## Methods in Arrays

<details>

### 1. push( )

<details>

<br>

> `.push()` method is used to add one or more elements to the end of an array.

**Displaying the array before modification:**

```js
console.log("\nBefore: ", names);
// [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]
```

**Inserting a new value at the end of the array:**

`.push()` method to add the string "Rahul" to the end of the names array.

```js
names.push("Rahul");
```

**Displaying the array after modification:**

```js
console.log("After: ", names);
// [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]
```

---

</details>

### 2. pop( )

<details>

<br>

- pops **last element** form the array.

```js
const num = [2, 3, 4, 5, 61, 1, 777];
num.pop(); //77
console.log(num);
// [ 2, 3, 4, 5, 61, 1 ]
```

---

</details>

### 3. slice( )

<details>

<br>

Using the `.slice()` method:

- This method allows us to create a new array that contains a portion of the original array, **specified by the starting and ending indices**.

```js
let names = [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]
console.log("names);
// [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]
console.log(names.slice(1, 3));
// [ 'Ram', 'Sham' ]
```

The code utilizes the `.slice()` method on the names array.

- In this case, `.slice(1, 3)` is called on the names array. It creates a new array that includes elements **starting from index 1 (inclusive) and ending before index 3 (exclusive).**

- Therefore, it extracts elements at indices `1` and `2`, which are `"Ram"` and `"Sham"` respectively.

---

</details>

### 4. splice( )

<details>

<br>

`.splice()` is used to modify an array **by removing, replacing, or adding elements** at a specified position.

```js
let fruits = ["Banana", "Apple", "Pineaaple", "watermellon"];
fruits.splice(1, 2, "Kiwi");
console.log("After: ", fruits);
// [ 'Banana', 'Kiwi', 'watermellon' ]
```

- In this case, `.splice(1, 2, "Kiwi")` is called on the fruits array. **This means starting at index 1, two elements will be removed, and the element "Kiwi" will be added in their place**.
- As a result, the element at index 1 ("Apple") and the element at index 2 ("Pineapple") are removed, and "Kiwi" is inserted in their position.

---

</details>

### 5. concat()

<details>

<br>

`concat()` method is used to combine two or more arrays into a new array. Here's an explanation of how concat() works:

```js
let array1 = [42, 2, 32];
let array2 = ["a", "gg", "cs"];
let array3 = [true, false];

let newArray = array1.concat(array2, array3);
console.log(newArray);
// [42, 2, 32, "a", "gg", "cs", true, false]
```

---

</details>

### 6. fill( )

<details>

<br>

`.fill()` method is used to fill all the elements of an array with a specified value. Here's an explanation of how .fill() works:

**Syntax:**

```js
array.fill(value, start, end);
```

```js
let cars = ["Honda", "Audi", "BMW", "Nothing", "Kia", "newCar"];
cars.fill("Maruti", 0, 3);
console.log(cars);
// Modified array: ["Maruti", "Maruti", "Maruti", "Nothing", "Kia", "newCar"]
```

The method `.fill()` is provided with three arguments:

- The value to fill the array with, which is "Maruti".
  - The **start index**, which is `0`. It indicates the index from which the filling should **start**.
  - The **end index**, which is `3`. It indicates the index before which the filling should **stop** (exclusive).
- Therefore, the elements at indices 0, 1, and 2 of the cars array ("Honda", "Audi", and "BMW") will be replaced with the value "Maruti".

---

</details>

### 7. includes( )

<details>

<br>

The `.includes()` method returns a boolean value.
It returns true if the specified element is found in the array, and false otherwise.

```js
// cars = ["Maruti", "Maruti", "Maruti", "Nothing", "Kia", "newCar"]
let ans = cars.includes("Kia");
console.log(ans); //returns true as Kia is present in the array.

ans = cars.includes("Ferrari");
console.log(ans); //returns flase as Ferrari is not present in the array.
```

---

</details>

### 8. indexOf()

<details>

<br>

The `.indexOf()` method returns the index of the first occurrence of the specified element within the array.

```js
const num = [1, 23, 4, 5, 4];
console.log(indexOf(4)); //returns 2
```

---

</details>

### 9. Array.isArray()

<details>

<br>

The `Array.isArray()` method returns a boolean value.

- It returns true if the provided value is an array.
- It returns false if the provided value is not an array.

```js
let numbers = [1, 2, 3];
console.log(Array.isArray(numbers)); // true

let name = "John";
console.log(Array.isArray(name)); // false

let object = { key: "value" };
console.log(Array.isArray(object)); // false
```

---

</details>

### 10. join()

<details>

<br>

**Parameters**:

**separator** (optional): The string used to separate each element of the array when they are concatenated into a single string. If not provided, a comma (,) is used as the default separator.
Return Value:

The `.join()` method returns a new string that is the result of concatenating all the elements of the array together, separated by the specified separator.

```js
let fruits = ["apple", "banana", "cherry"];
let result = fruits.join(", ");

console.log(result); // "apple, banana, cherry"
```

---

</details>

### 11. reverse( )

<details>

<br>

- reverse the entire array.

```js
let fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits);
//["cherry", "banana", "apple" ]
```

----

</details>

### 12. shift( )

<details>

<br>

**Parameters:**

The `.shift()` method does not accept any parameters.

**Return Value:**

The `.shift()` method removes and returns the first element of an array.

```js
let numbers = [1, 2, 3, 4, 5];

let shiftedNumber = numbers.shift();
console.log(shiftedNumber); // 1
console.log(numbers); // [2, 3, 4, 5]
```

---

</details>

### 13. unshift( )

<details>

<br>

**Syntax:**

```js
array.unshift(element1, element2, ..., elementN)
```

**Parameters:**

element1, element2, ..., elementN: The elements to be added to the beginning of the array.

**Return Value:**

- The .unshift() method modifies the original array by adding one or more elements to the beginning of the array.
- It returns the new length of the array after the elements have been added.

**Functionality:**

- The `.unshift()` method adds one or more elements to the beginning of an array.
- It shifts the existing elements to higher indices to make space for the new elements.
- The elements are appended in the order they are provided as arguments, so the first element specified will be the first element in the modified array.

**Example:**

```js
let numbers = [4, 5, 6];

let newLength = numbers.unshift(1, 2, 3);
console.log(newLength); // 6
console.log(numbers); // [1, 2, 3, 4, 5, 6]
```

---

</details>

<!-- Methods End -->

### 14. split()

<details>

<br>

- The `.split()` method takes a string and splits it into an array of substrings based on the specified separator.
- It scans the original string from left to right and separates it into substrings whenever the separator is encountered.
- The resulting substrings are stored as elements in the resulting array.
- If the separator is not found in the string, the resulting array will contain only one element, which is the entire original string.

```js
let sentence = "This is a sample sentence.";

let words = sentence.split(" ");
console.log(words); // ["This", "is", "a", "sample", "sentence."]

let characters = sentence.split("");
console.log(characters);
// ["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "s", "a", "m", "p", "l", "e", " ", "s", "e", "n", "t", "e", "n", "c", "e", "."]
```

</details>

---

</details>

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


## Object

<details>
 
<summary>Details</summary>
 
<br>
 
> **Objects has property and behaviour.** Collection of key value pair.

**How do we add behavior to the object?**

We can add behavior by means of function. But any function created inside the object is **`Method`**.

### a. Object creation

- <details>

    <br>

  ``` js
  const objectName = {
    property1: value,
    property2: "value",
    property3: 10,

    //Method -> which gives behaviour to the Object
    functionName: function () {
      //console.log("I am a Method!")
      //args...
    },
  };
  ```

  Example:

  ``` js
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

  ``` js
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
  rectangle.draw; //this won't print anything as the draw is a Method!
  ```

  ***

    </details>

  </details>

## Two ways to create an Object

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
