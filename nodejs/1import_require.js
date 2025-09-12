// module - a file containing related codes (function, variables, classes) for reusability

// module specifications (CommonJS vs ES Module)

// 1. CommonJS uses require() to import and module.exports or exports to export
// older, synchronous, dynamic (resolved at runtime)

// math.js
module.exports = {add: (a, b) => a + b};

// app.js 
const math = require("./math");
console.log(math.add(2, 3))

// 2. ES Module uses import and export
// modern, async, static (resolved at compile time)

// math.js
export const add1 = (a,b) => a + b;

// app.js
import { add1 } from "./math.js"
console.log(math.add1(2, 3));

// no {} in import if:
// 1. Default Export (Only one default export per file.)

// math.mjs
export default function add(a, b) {
  return a + b;
}

// app.mjs
import add from "./math.mjs"; // no {}
console.log(add(2, 3)); // 5

// use {} in import if:
// 1. Named Export

// math.mjs
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// app.mjs
import { add, multiply } from "./math.mjs"; // with {}
console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6

// 2. Aliasing Named Exports
import { add as sum } from "./math.mjs";
console.log(sum(10, 5)); // 15

// 3. Mixing Default and Named Exports (A file can have one default export + multiple named exports.)

// math.mjs
export default function subtract(a, b) { return a - b; }
export const pi = 3.14159;

// app.mjs
import subtract, { pi } from "./math.mjs";
console.log(subtract(10, 3)); // 7
console.log(pi);              // 3.14159