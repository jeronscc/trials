// USING A CLASS
// a static method or property belongs to the class itself

class TestClass {
  constructor(arg) {
    this.arg = arg;
    console.log(this.arg);
  }

  showSth() { // prototype method
    console.log("I'm prototyped!");
  }

  static showSth() { // static method
    console.log("Hi, I'm static!");
  }
}

let test = new TestClass("Hello");
test.showSth();      // -> I'm prototyped!
TestClass.showSth(); // -> Hi, I'm static!
console.log(test instanceof TestClass); // -> true





// USING A CONSTRUCTOR FUNCTION
function Test(arg) {
  this.arg = arg;
  console.log(this.arg);
}

// prototype method
Test.prototype.showSth = function() {
  console.log("I'm prototyped!");
}

// static method
Test.showSth = function() {
  console.log("Hi, I'm static!");
}

let test2 = new Test("Hello");
test2.showSth();    // -> I'm prototyped!
Test.showSth();     // -> Hi, I'm static!
console.log(test2 instanceof Test); // -> true
