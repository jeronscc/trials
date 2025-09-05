class Person {
    talk() {
        console.log("Talking");
    }
}
const me = new Person();
me.talk()

class SuperHuman extends Person{
    fly() {
        console.log("Flying");
    }
}

const you = new SuperHuman();
you.talk()