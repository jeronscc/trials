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

