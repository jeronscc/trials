// rest (grabs all remaining keys into a new object)

function convertToArray (...args) {
    console.log(args)
}
convertToArray(2,3,4)

// spread (copies or merges objects)

const numbers = [1, 2, 3]
console.log(...numbers)

//spread
const arr1 = [1,2,3,4]
const arr2 = [...arr1]

console.log(arr1, arr2)

//spread

const array1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let array2;

    array2 = [...array1];
    array1[0] = 'potato'

console.log(array2);

//no destructuring

var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; 
var y = voxel.y; 
var z = voxel.z; 
console.log(x,y,z)

// destrucutring (pulls specific keys into variables)
const { x : a, y : b, z : c } = voxel;
console.log(a,b,c)

// no destructuring
const LOCAL_FORECAST = {
    today : {min : 78, max: 80},
    tomorrow : {min : 80, max : 85}
}

console.log(LOCAL_FORECAST["today"]["max"])

// destructuring
function getMaxToday () {
    "use strict";

    const {today : {max : maxToday}} = LOCAL_FORECAST
    return maxToday
}

console.log(getMaxToday());
 
