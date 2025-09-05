//Use .then().catch() → quick one-liners, simple tasks.

// Create a Promise
const myPromise = new Promise((resolve, reject) => {
  // Do some async task (e.g., fetch, setTimeout, DB query)
  const success = false;

  if (success) {
    resolve("✅ Success result here");
  } else {
    reject("❌ Error happened here");
  }
});

// Use the Promise
myPromise
  .then(result => {
    console.log("Result:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Always runs at the end (cleanup)");
  });


//real life example
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())   // convert to object
  .then(data => console.log("Data:", data))
  .catch(error => console.error("Error:", error));


// i tried it myself
const result = fetch("https://jsonplaceholder.typicode.com/todos/1");

result
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("done"))
