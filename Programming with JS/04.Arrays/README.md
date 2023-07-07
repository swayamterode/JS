# Array Basics Code Documentation

The following code demonstrates various operations and functionalities related to arrays in JavaScript.

### Declaring an Array

The code begins by declaring an array called names and initializing it with some values. It demonstrates two ways of declaring an array.

```js
let names = ["Swayam", "Ram", "Sham", "Raj"];
```

## Operations on Arrays

Length of the Array
The code prints the length of the names array.

```js
console.log("\nLength of the array: ", names.length);
```

## Replacing Array Elements

The code demonstrates how to replace an element at a specific index in the names array.

```js
names[3] = "Vivek";
```

## Inserting Values into an Array (push)

The code adds an element to the end of the names array using the push() method.

```js
names.push("Rahul");
```

## Slicing an Array

The code uses the slice() method to create a new array containing elements from the names array.

```js
console.log(names.slice(1, 3));
```

## Modifying an Array (splice)

The code uses the splice() method to remove and insert elements in the fruits array.

```js
fruits.splice(1, 2, "Kiwi");
```

## Concatenating Arrays

The code demonstrates how to concatenate arrays using the concat() method.

```
let concat_arr1_arr2 = arr1.concat(arr2);
let concat_arr1_arr2_arr3 = arr1.concat(arr2, arr3);
```

## Filling an Array

The code uses the fill() method to replace elements in the cars array with a specified value.

```js
cars.fill("Maruti", 0, 3);
```

## Checking Array Inclusion

The code uses the includes() method to check if an element exists in the cars array.

```js
let ans = cars.includes("Kia");
ans = cars.includes("Ferrari");
```

## Finding the Index of an Element

The code uses the indexOf() method to find the index of an element in the cars array.

```js
console.log(cars.indexOf("Nothing"));
```

## Checking if a Variable is an Array

The code uses the isArray() method to check if a variable is an array.

```js
console.log(Array.isArray(cars));
console.log(Array.isArray(myCar));
```

## Joining Array Elements into a String

The code uses the join() method to join the elements of the myCar array into a string.

```js
ans = myCar.join(",");
```

## Mapping Array Elements

The code uses the map() method to perform a mathematical operation on each element of the maths array.

```js
let sqaureRoot = maths.map(Math.sqrt);
```

## Removing the Last Element of an Array (pop)

The code uses the pop() method to remove and return the last element of the maths array.

```js
console.log("Pop Value: ", maths.pop());
```
## Reversing an Array

The code uses the reverse() method to reverse the order of elements in the maths array.

```js
console.log("Reversed Array:", maths.reverse());
```

## Removing the First Element of an Array (shift)

The code uses the shift() method to remove and return the first element of the maths array.

```js
console.log(maths.shift());
```

## Adding Elements to the Beginning of an Array (unshift)

The code uses the unshift() method to add elements to the beginning of the veggies array.

```js
veggies.unshift("lettuce");
```

## Converting a String to an Array (split)

The code uses the split() method to convert a string into an array of characters.

```js
let charInAnimal = animal.split("");
```

## Converting Array Elements to Uppercase

The code uses a for...of loop to iterate over the countries array and converts each element to uppercase.

```js
for (let country of countries) {
  newCountries.push(country.toUpperCase());
}
```

It is important to note that this code serves as an illustrative example for array operations and is not intended to be used as a complete or production-ready solution.