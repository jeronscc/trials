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

// getters and setters
// always use _ or # for naming convention to avoid recursion
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