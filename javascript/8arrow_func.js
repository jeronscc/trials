
// "this" refers to the object that owns the method at runtime.
// arrow func (no property for .this)
const person = {
    name : "Jeron",
    sayHello : () => console.log(`Hello ${this.name}`)
}
person.sayHello()

// normal func
const person1 = {
    name : "Jeron",
    sayHello : function (){ console.log(`Hello ${this.name}`)}
}
person1.sayHello()


// callback
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  const name = "Jeron";
  callback(name); // Calling the function you gave it
}

processUserInput(greet);


// arrow func
// 1. Basic syntax (one parameter, one expression)
const addOne = num => num + 1;

// 2. Multiple parameters
const add = (a, b) => a + b;

// 3. Multiple statements (need curly braces + return)
const multiplyAndLog = (a, b) => {
  console.log(`Multiplying ${a} and ${b}`);
  return a * b;
};

// 4. No parameters (use empty parentheses)
const greet1 = () => "Hello!";

