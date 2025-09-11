// use () in calling functions and methods. setters, getters, constructors, and classes dont use () in calling 
// since setters & getters act as a property and constructors and classes are objects after the keyword "new"

// in class you dont need to put "function" keyword when adding a function inside since it is considered as method



/* Array let arr = [1,2,3];
arr.push(x) → add at the end
arr.pop() → remove last
arr.unshift(x) → add at the beginning
arr.shift() → remove first
arr.splice(start, deleteCount, ...items) → remove/replace/add
arr.slice(start, end) → copy part (non-destructive)
arr.concat(otherArr) → join arrays
arr.includes(x) → check if contains
arr.indexOf(x) → first index of x
arr.find(fn) → first element that matches
arr.filter(fn) → all elements that match
arr.map(fn) → transform array
arr.reduce(fn, init) → reduce to single value
arr.forEach(fn) → loop over
arr.sort(fn) → sort
arr.reverse() → reverse order 
*/

/* String let str = "hello world";
str.length → length
str.toUpperCase() / str.toLowerCase()
str.includes("lo")
str.indexOf("o")
str.slice(start, end) → substring
str.substring(start, end) → substring (similar)
str.replace("world", "JS")
str.split(" ") → ["hello","world"]
str.trim() → remove spaces
str.charAt(i) or str[i] → get character
*/

/* Objects let user = {name:"Jeron", age:20};
user.name / user["name"] → get property
Object.keys(user) → ["name","age"]
Object.values(user) → ["Jeron",20]
Object.entries(user) → [["name","Jeron"],["age",20]]
delete user.age → remove property
...spread → copy/merge objects
*/

/* Loops 
for(let i=0;i<10;i++) {...}
for (let x of arr) {...} → values in iterable
for (let key in obj) {...} → keys in object
arr.forEach(el => {...})
*/

/* Functions
function foo(x,y) {...}
const foo = (x,y) => {...}
Default params: function foo(x=10){...}
Rest: function foo(...args){...}
Return: return value;
*/

/* Classes
new User("Jeron") → instance
this → refers to object
extends → inheritance
super(...) → call parent constructor
get / set → define computed property
static → called on class, not instance
*/

/* Misc
=== → strict equal (no type convert)
== → loose equal (converts types)
typeof x → type of value
Array.isArray(x) → check array
JSON.stringify(obj) → object → JSON string
JSON.parse(str) → JSON string → object
*/


/*
Array [] → list of items, duplicates allowed, index-based
Object {} → key-value store, keys unique
Set new Set() → unique values only, no keys, easy existence check
Map new Map() → key-value store, keys can be any type, ordered
*/