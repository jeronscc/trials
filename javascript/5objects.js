// objects (properties can hold any type)
let test = {
    nr: 10,                 // number               
    b: false,               // boolean    
    arr: [1, 2, 3],         // array    
    obj: { x: 1, y: 2 },    // object    
    fn: function(v) {       // function    
        console.log(v); }
};

test.fn("hello");


// methods (functions that are inside objects)
// "this" refers to the object that owns the method at runtime.
// for methods inside objects, always use normal functions, not arrow functions because arrow func does not have "this"
let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(d) {
        this.x += d;
    }
};

point.moveHorizontally(10);
console.log(point.x);

// this always refers to the immediate owner object, not the parent.
let outer = {
  name: "outer",
  inner: {
    name: "inner",
    sayName() {
      console.log(this.name);
    }
  }
};

outer.inner.sayName(); // "inner"

// dot and bracket ntoation
let contact = { 
  tel: "123-4567", 
  email: "test@mail.com" 
};
console.log(contact.tel);
console.log(contact["email"]) // use when keys are special char or has space

// bracket notation
let contact1 = {
  email_1: "ronald@mail.com",
  email_2: "tim@mail.com"
};

for (let i = 1; i <= 2; i++) {
  let key = "email_" + i;     // makes "email_1", "email_2"
  console.log(contact1[key]);  // 
}

// getters and setters
// Use a plain property if it’s just raw data.
// Use getters/setters when you need control, computed values, validation, or future-proofing.

let contact2 = {
  _tel: "207-662-5412",

  // getter
  get tel() {
    return this._tel;
  },

  // setter
  set tel(value) {
    this._tel = value;
  }
};

console.log(contact2.tel);      // calls getter → "207-662-5412"
contact2.tel = "100-100-1000";  // calls setter
console.log(contact2.tel); 

// objects in an array
let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

contacts.push({name : "Maisie Haley", phone : "0913 531 3030", email : "risus.Quisque@urna.ca"});
console.log(`${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`);
console.log(`${contacts[contacts.length - 1].name}/${contacts[contacts.length - 1].phone}/${contacts[contacts.length - 1].email}`);
