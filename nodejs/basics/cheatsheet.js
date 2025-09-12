// 1. http/createServer
import http from 'http'

const requestListener = function(req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}
const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: '+ port);
server.listen(port);

// 2. new Date()
export function getDate(){
    let aestTime = new Date().toLocaleDateString("en-US", {
    timeZone: "Australia/Brisbane",
  });
  return aestTime;
}


// 3. IMPORT

// addTwoNos.mjs
function addTwo(num) {
  return num + 4;
}
export { addTwo };

// app.js
import { addTwo } from './addTwoNos.mjs';

console.log(addTwo(4));

//4. EXPRESS JS
import express from 'express';

const app = express(); // creates an express instance
app.use(express.json());  // to parse JSON bodies

app.get("/books", (req, res) => {
  res.json([{ title: "Learn Node", rating: 4 }]);  // return JSON response
});

app.listen(3000, () => console.log("Server running on port 3000"));


//5. .json() and .writeHeader (both do the same)
// With res.send()
res.setHeader("Content-Type", "application/json");
res.send(JSON.stringify({ name: "Jeron" }));

// With res.json()
res.json({ name: "Jeron" }); // does the same automatically