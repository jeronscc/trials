// Use async/await → longer sequences, cleaner error handling.


const myPromise = new Promise((resolve, reject) => {
  // Do some async task (e.g., fetch, setTimeout, DB query)
  const success = false;

  if (success) {
    resolve("✅ Success result here");
  } else {
    reject("❌ Error happened here");
  }
});

// Any function with async returns a Promise automatically
async function runTask() {
  try {
    // Await pauses until the Promise resolves
    const result = await myPromise;
    console.log("Result:", result);

  } catch (error) {
    console.error("Error:", error);

  } finally {
    console.log("Always runs at the end (cleanup)");
  }
}

// Call it
runTask();


// real life example
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getData();


// i tried it myself
const fetchPokemon = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
}

fetchPokemon(2);

// i tried it myself
const fetchPokemon1 = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    }
    catch (err) {
        console.error(err);
    }
}

fetchPokemon1(2);