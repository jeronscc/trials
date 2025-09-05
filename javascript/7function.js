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

