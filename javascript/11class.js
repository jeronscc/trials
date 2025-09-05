// class
// most preferred to use in modern instead of constructors
// in class you dont need to put "function" keyword since it is considered as method

class Agent {
    constructor(agent, role){
        this.agent = agent;
        this.role = role;
    }

    greet () {
        console.log(`I am ${this.agent} and I am a ${this.role}.`)
    }
}

let jett = new Agent("Jett", "Duelist" )
jett.greet()

// class expression
let Car = class {
  constructor(id){
    this.id = id;
  }
  showId(){
    console.log(`Vehicle ID: ${this.id}`);
  }
}

const car = new Car('CAR002');
car.showId()

// function constructor (always put properties inside the constructor and methods on the class body if using class or copy below if using func constructor)
function Person (age, name, gender){
  this.age = age;
  this.name = name;
  this.gender = gender;
}

Person.prototype.run = function(){console.log("I am running!")}
Person.prototype.talk = function(){console.log("I am talking!")}
Person.prototype.walk = function(){console.log("I am walking!")}

const me = new Person()
me.run()


// getters and setters
// always use _ or # for naming convention to avoid recursion or just dont make the getter/setter name the same with the this.property
// getters and setters are considered as property so no "()" if calling them. only functions and methods require "()" in calling
class Book {
  constructor(author){
    this._author = author
  }

  get writer(){
    return this._author;
  }

  set writer (updatedWriter){
    this._author = updatedWriter;
  }
}

const chamber = new Book("chamber");
console.log(chamber.writer)
chamber.writer = "jett"
console.log(chamber.writer)

// private property using # and direct declaration wherein "status" will exist in every new Vehicle object
class Vehicle {
  status = "unavailable";
  #longitude;  // private
  #latitude;   // private

  constructor({id, latitude, longitude}) {
    this.id = id;
    this.setPosition({ latitude, longitude });
  }

  setPosition({ latitude, longitude }) {
    this.time = Date.now();
    this.#longitude = longitude;
    this.#latitude = latitude;
  }

  getPosition() {
    return {
      latitude: this.#latitude,
      longitude: this.#longitude
    };
  }
}

let v = new Vehicle({id: "AL1024", latitude: 59.3, longitude: 18.2});
console.log(v.getPosition());  // ✅ works
console.log(v.#longitude);     // ❌ SyntaxError