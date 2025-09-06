// converts JSON string back to object/array.
// Receive from backend → JSON.parse → usable object in JS
let jsonData = '{"name":"Alice","age":25}'; 
let obj = JSON.parse(jsonData);

console.log(obj.name);

// converts object/array to JSON string.
// Send to backend → JSON.stringify → valid JSON string. json string is "{}"" and json object is {}
let user = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(user);

console.log(jsonString);

//.json() if it is from fetch since it has a response header


//regex (regular expresion) 
// a pattern to match text

let re = /c.t/;
console.log(re.test("cat")); // true 
console.log(re.exec("haircut")); // ["cut", index: 4, ...]

/* 
test(str) → returns true/false if matches
exec(str) → returns array with match info or null
*/

