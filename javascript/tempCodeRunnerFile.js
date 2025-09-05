
const animal = {
  speak() { console.log("..."); }
};

const dog = Object.create(animal);
dog.speak();         