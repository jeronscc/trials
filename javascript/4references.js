//references
// objects are equal (===) only if they point to the same reference
let a = { x: 10 };
let b = { x: 10 };
console.log(a === b); // false

let c = a;
console.log(a === c); // true

// shallow copy
// radius is a primitive (number), so it gets copied as a value. center is an object, so only its reference gets copied.
// that's why example below, circle2 copies the value for center of circle1 even using spread operator
let circle1 = {
  radius: 100,
  center: { x: 100, y: 100 }
};

let circle2 = { ...circle1 };  // shallow copy

circle1.center.x = 200;

console.log(circle2.center.x);

// wherein in this example, array 2 didnt change because the value is in primitive (string)
const array1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let array2;

    array2 = [...array1];
    array1[0] = 'potato'

console.log(array2);

// deep clone
// use structuredClone() so complex types wont share its reference when you copy
// example below doesnt change unlike the first one at the top even though they both have a property of an object
let obj1 = {
  radius: 100,
  center: { x: 100, y: 100 }
};

let obj2 = structuredClone(obj1);
obj1.center.x = 400;

console.log(obj2.center.x);
