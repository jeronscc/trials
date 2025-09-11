// interpolation
const person = {name: "Jeron", age: 22}

console.log(`Hi, I am ${person.name} and I am ${person.age} years old.`)

// unary (+ and - for string to number conversion)

let str = "5"
console.log(typeof str)
console.log(typeof +str)

// IIFE
(() => {
  console.log("I run immediately!");
})();

// block scope
{
  const x = 42;
  console.log("Block ran:", x);
}

//ARRAYS
// .forEach() (can be use in arrays only)
// template:
arr.forEach(function(element, index, array) {
  // do something with element
});

// sample
let nums = [10, 20, 30];
nums.forEach((num) => {
  console.log(num);
});
// 10
// 20
// 30

let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, i) => {
  console.log(i, fruit);
});
// 0 apple
// 1 banana
// 2 cherry

let letters = ["a", "b"];
letters.forEach((ch, i, arr) => {
  arr[i] = ch.toUpperCase();
});
console.log(letters); // ["A", "B"]


// .slice
let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(1, 3)); // [20, 30] (from index 1 up to 3, but not including 3)
console.log(arr.slice(2));    // [30, 40, 50] (from index 2 to end)
console.log(arr.slice());     // [10, 20, 30, 40, 50] (copy of the whole array)

// SET (doesnt allow duplicates)
let pets = new Set(["cat","dog","cat"]); // {"cat","dog"}
pets.size // 2
pets.has("cat") // true
pets.add("hamster")
pets.delete("dog")
pets.clear() // empties the set

// call, apply, bind
function show(msg) {
  console.log(`${msg}: ${this.x},${this.y}`);
}

let point = { x: 10, y: 20 };

show.call(point, "coords");   // coords: 10,20
show.apply(point, ["coords"]); // same but args in array
let bound = show.bind(point);  // returns new function
bound("coords"); // coords: 10,20