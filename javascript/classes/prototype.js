

// makes a new object that inherits from proto
// but it does not copy properties. it links the new object to the prototype.
// dog doesn’t have its own speak method, so JS looks up the prototype chain and finds animal.speak
const animal = {
  speak() { console.log("..."); }
};

const dog = Object.create(animal);                    // Directly set prototype to another object
dog.speak();

// constructor + prototype
// adding methods to prototypes dynamically
// function must be created like this (outside a constructor same as with classes)

function Person (firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){             // Instances linked via constructor’s prototype
    return this.firstName + " " + this.lastName
}

const p1 = new Person("Elon", "Musk")

console.log(p1.getFullName())

// constructer + prototype
// good for creating many instances
let Figure = function() {
  this.getType = function() {
    return this.type ? this.type : "unknown";
  };
};

let figure = new Figure();

let Circle = function(center, radius) {
  this.type = "circle";
  this.center = center;
  this.radius = radius;
};
Circle.prototype = figure; // circle objects inherit from figure

let circle1 = new Circle({ x: 0, y: 0 }, 10);
console.log(circle1.getType()); // "circle"


// using prototype for class
class Car {
  contructor (brand, model){
    this.brand = brand;
    this.model = model;
  }

  drive () {
    console.log("broom")
  }
}

const car1 = new Car();
car1.drive()

// js process the class Car above in this form below

/* 
function Car (brand, model){
  this.brand = brand;
  this.model = model;
}

Person.prototype.drive = function(){ console.log("broom")} 
*/

// this means that you can only access the constructor using the new keyword 
// and the func outside the constructor which is drive() can be accessec by Person.prototype
// for example when you use Obejct.create() you must put Person.prototype to access the func outside the constructor



// .prototype only exist on constructor functions or classes
// .__proto__ (old way and not recommended) exist on objects or raather use Object.create instead
// example of .__proto__
let point = { x: 0, y: 0 };
let coloredPoint = { color: "red" };

coloredPoint.__proto__ = point;

console.log(coloredPoint.color); // "red" → own property
console.log(coloredPoint.x);     // 0 → inherited from prototype

// so just use Object.create instead
let coloredPoint = Object.create(point, {
  color: { value: "red", writable: true }
});

// or you can use Object.setPrototypeOf(obj, proto) which is use rarely, only if you really need to change the prototype of an existing object
// Obbject.create is still preferred


Object.setPrototypeOf(coloredPoint, point);

console.log(coloredPoint.x); // 0 (inherited from point)
