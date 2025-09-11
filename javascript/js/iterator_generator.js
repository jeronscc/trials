// iterables (objects you can loop through with for...of, spread ..., or destructuring.)

let s = new Set([1, 30, 500, 50])

for(let e of s) {
    console.log(e)
};
console.log([...s])
console.log(...s)

// iterators
// An iterator is an object with a .next() method.
// Each .next() returns { value, done }.
// value → current element
// done → false until the end, then true.
//the protocol: any object with [Symbol.iterator] is iterable.

let arr = [10, 20, 30];
let it = arr[Symbol.iterator]();

console.log(it.next()); // {value: 10, done: false}
console.log(it.next()); // {value: 20, done: false}
console.log(it.next()); // {value: 30, done: false}
console.log(it.next()); // {value: undefined, done: true}

//generators
// Special functions with function* syntax.
// Use yield instead of return.
// Pauses and resumes execution.

function* gen () {
    yield 10;
    yield 20;
    yield 30;
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

// example 
function* game() {
  let name = yield "Enter your name:";
  yield `Welcome, ${name}!`;

  let move1 = yield "Choose your first move (attack/defend):";
  yield `You chose ${move1}`;

  let move2 = yield "Choose your second move:";
  yield `You chose ${move2}`;
}

let g1 = game();

console.log(g1.next().value);         // "Enter your name:"
console.log(g1.next("Alice").value);  // "Welcome, Alice!"
console.log(g1.next().value);         // "Choose your first move (attack/defend):"
console.log(g1.next("attack").value); // "You chose attack"
