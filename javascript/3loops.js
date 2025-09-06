// while

let n = 0;
while (n < 91) {
  console.log(n);
  n += 10;
}


//do while

let x = 0;
do {
    console.log(x);
    x += 10;
} while (x < 91);


// for loop             for(initialization; condition; increment)

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

//for loop
const agents = ["Jett", "Sova", "Chamber", "Raze", "Reyna", "Waylay", "Yoru"]
let valorant = []
for (let i=0; i < agents.length; i++){
    valorant.push(agents[i]);
    console.log(agents[i])
}
console.log(valorant)


// for loop
const numbers = [1, 2, 3, 4]
const array = []
for (let i=0; i < numbers.length; i ++) {
    array.push(numbers[i])
    
}console.log(array)

// for of (when you want values)

let values1 = [10, 30, 50, 100];
let sum1 = 0
for (let number of values) {
    sum += number;
}
console.log(sum)

// for in (when you want keys/properties)

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
for (let key in user) {
    console.log(key); 
};

//for in example (enumerating)
let a = {a:1, b:2, c:3, d:4}

for (key in a){
  console.log(key)
  console.log(a[key])
}

// break

let i = 0;
// An infinite loop if no break
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
     break;
    }
}
console.log(`Exited the loop with a break (${i}).`);

// continue (skip)

for (let i = 0; i < 10; i++) {
    if (i == 3) {
     continue;
    }
    console.log(i);
}

