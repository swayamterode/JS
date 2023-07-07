// Declaring an Array
console.log("\nDeclaring an Array:");
let names = ["Swayam", "Ram", "Sham", "Raj"];
console.log(names); // [ 'Swayam', 'Ram', 'Sham', 'Raj' ]

// Another way of Declaring an Array (Not Recoommended ❌)
// let myNames = new Array("Name1", "Name2");
// console.log(myNames); // [ 'Name1', 'Name2' ]

// Operations on arrays:
console.log("\nLength of the array: ", names.length); // Length of the array:  4
console.log("Before: ", names); // Before:  [ 'Swayam', 'Ram', 'Sham', 'Raj' ]
names[3] = "Vivek"; // replacing string value at index 3 with Vivek.
console.log("After: ", names); // After:  [ 'Swayam', 'Ram', 'Sham', 'Vivek' ]

// Inserting new value inside the array names
// push()
console.log("\npush():");
console.log("\nBefore: ", names); // [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]
names.push("Rahul");
console.log("After: ", names); // [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]

// Slice()
// names = [ 'Swayam', 'Ram', 'Sham', 'Vivek', 'Rahul' ]
console.log("\nslice():");
console.log("Before: ", names);
console.log(names.slice(1, 3)); // [ 'Ram', 'Sham' ]

// splice()
console.log("\nSplice():");
let fruits = ["Banana", "Apple", "Pineaaple", "watermellon"];
console.log("Before: ", fruits);
fruits.splice(1, 2, "Kiwi");
console.log("After: ", fruits);

// Concat
console.log("\nConcat():");
let arr1 = [1, 2, 23, 4];
let arr2 = [3, 23232, 3];
let arr3 = [232, 2, 1, 23, 4, 5, 6, 67, 8];
let concat_arr1_arr2 = arr1.concat(arr2);
console.log(concat_arr1_arr2);
let concat_arr1_arr2_arr3 = arr1.concat(arr2, arr3);
console.log(concat_arr1_arr2_arr3);

// fill
let cars = ["Honda", "Audi", "BMW", "Nothing", "Kia", "newCar"];
console.log("Before: ", cars);
cars.fill("Maruti", 0, 3);
console.log("After: ", cars);
console.log(cars);

// includes
// using the same cars array
console.log("\nincludes(): ");
console.log("Cars Array:", cars);

let ans = cars.includes("Kia");
console.log(ans); //return true as Kia is present in the array.

ans = cars.includes("Ferrari");
console.log(ans); //returns flase as Ferrari is not present in the array.

// index of
// using the same cars array
console.log("\nindexOf():");
console.log(cars.indexOf("Nothing"));

// isArray()
console.log("\nisArray(): ");
let myCar = "Eon";
console.log(Array.isArray(cars));
console.log(Array.isArray(myCar));

// join
console.log("\njoin():");
myCar = [1, 2, 4, 2, 3];
console.log("Array myCar:", myCar);
console.log("Type of myCar:", typeof myCar);
ans = myCar.join(",");
console.log(ans);
console.log("Type of myCar:", typeof ans);

// map
console.log("\nmap():");
let maths = [25, 4, 121, 36];
console.log("Before map(): ", maths);
let sqaureRoot = maths.map(Math.sqrt);
console.log("After map():", sqaureRoot);
console.log("Type of array: ", typeof sqaureRoot);

// pop
console.log("\npop(): ");
console.log("Pop Value: ", maths.pop());
console.log(maths);

//reverse
console.log("\nreverse(): ");
console.log("Orignal Array:", maths);
console.log("Reversed Array:", maths.reverse());

// shift -> removes element from head
console.log("\nshift(): ");
console.log("Array Elements: ", maths);
console.log(maths.shift());
console.log("Array Contains: ", maths);

// unshift()
console.log("\nunshift(): ");
let veggies = ["Potato", "Caroot", "Beetroot"];
console.log("Veggies are: ", veggies);
veggies.unshift("lettuce");
console.log("Veggies are: ", veggies);

// ----------------------------------------------------------
// Converting to array
console.log("\nsplit(): ");
let animal = "Horse";
console.log("animal: ", animal);
console.log("Type of animal: ", typeof animal);
let charInAnimal = animal.split("");
console.log("Chars in Animal: ", charInAnimal);
console.log("Type of chazrInAnimal:", typeof charInAnimal);
// ----------------------------------------------------------

// toUpperCase()
const countries = ["India", "Sri Lanka", "China", "USA"];
console.log("\ntoUpperCase():");
const newCountries = [];

// for of loop
for (let country of countries) {
  newCountries.push(country.toUpperCase());
}
console.log("Countries:", countries);
console.log("Uppercase Countries:", newCountries);
// ----------------------------------------------------------
