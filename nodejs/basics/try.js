class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sayName = () => {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Person("Jeron", 21);
p1.sayName();

console.log(p1.age);

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}