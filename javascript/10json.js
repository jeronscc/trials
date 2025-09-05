// Receive from backend → JSON.parse → usable object in JS
let jsonData = '{"name":"Alice","age":25}'; 
let obj = JSON.parse(jsonData);

console.log(obj.name);


// Send to backend → JSON.stringify → valid JSON string. json string is "{}"" and json object is {}
let user = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(user);

console.log(jsonString);

//.json() if it is from fetch since it has a response header