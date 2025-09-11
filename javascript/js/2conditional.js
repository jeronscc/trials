// if

let x = 5
if (x == 5) {
    console.log("equal 5")
}

// if else

let y = 6
if (y == 5) {
    console.log("equal 5")
}
else {console.log ("not equal 5")}

// else if
let z = 2;
if (z > 10) {
    console.log("more than 10")
}
else if (z < 10){
    console.log("less than 10")
}
else if (z == 10) {
    console.log("equal to 10")
}

// ternary operator (condition ? value_if_true : value_if_false)

let a = 10
a = a == 10 ? "equal" : "not equal"
console.log(a)

// switch case

let day = 3; 
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

