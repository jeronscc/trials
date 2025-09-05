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

// only put function keyword in object literals or constructor functions and not in class methods
