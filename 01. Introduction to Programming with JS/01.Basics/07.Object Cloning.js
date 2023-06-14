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
