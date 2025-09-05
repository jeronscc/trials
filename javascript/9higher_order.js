// high order function (takes one or more functions as arguments)
function greet(name, formatter) {
  console.log("Hello " + formatter(name));
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Alice", upperCaseName);

// high order function using .map (transform each element → returns new array)
let numbers = [1,2,3,4,5]

let double = numbers.map(num => num * 2)
console.log(double)


// high order func (.map())

const show = numbers.map((num => num*1));
console.log(show)


// high order function using .filter (keep only some elements → returns new array)
let evens = numbers.filter(num => num % 2 === 0);

console.log(evens);

// high order function using .reduce (converts array into one value)

// as sum of all elements
let sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum)

// as max number of the array
let max = numbers.reduce((acc, num) => acc > num ? acc : num, numbers[0]);

console.log(max);