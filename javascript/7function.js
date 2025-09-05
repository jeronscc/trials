// function
// only put function keyword in object literals or constructor functions and not in class methods

function sayName (name) {
    console.log(`Hi ${name}`);
}

sayName("Jeron");

// function (return)

function add (a, b){
    return a + b
}

console.log(add(3,4));


// function expression 

let greet = function (){
    console.log("Good Day!")
}
greet();

// factory function (function that creates and returns objects.)
function createCounter() {
  let count = 0;                 // private variable
  return {
    inc() { count++; },
    get() { return count; }
  };
}

const c = createCounter();
c.inc();
console.log(c.get()); // 1
console.log(c.count); // undefined  (can't access private var)

// constructor function (old way before Class)
// "new" keyword makes it an object. while Car is still considered as fucntion when you use new Car(...), JavaScript creates a new object
// no return in constructor function or classes unlike usual functions
function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color
  this.drive = function() {console.log(`I drive a ${this.color} ${this.make} ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Red")
console.log(car1.make)
car1.drive();

// parameters validation
function getMeanTemp(temperatures) {
  if (!(temperatures instanceof Array)) {
    return NaN; // invalid input
  }
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

//callback function
function outer(callback) {
  console.log("outer start");
  callback();
  console.log("outer end");
}

outer(() => console.log("inner"));

// callback function (for setTimeout)
setTimeout(() => console.log("inner after 1s"), 1000);
console.log("outer end first");

