let arr = [1, 2, 3, 4, 5];

for (let i in arr) {
  console.log(i);
}


for (let i of arr) {
  console.log(i);
}

arr.forEach((i) => console.log(i))

for (let i = 0; i < arr.length; i ++) {
  console.log(i);
}

