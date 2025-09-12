// three types of modules

//1. core modules (built into node — no install required e.g. http, fs, path)
//2. local modules (files you write in your project.) (need to put .js)
//3. third party (npm packages (express, axios). install with npm i express)

// CORE MODULES
//1. http (lets clients and servers exchange resources)

// index.js
import {createServer} from 'http';

createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); //sends the client a header that tells that the body is plain text
                                                        // (for some 'application/json' for json and 'text/html' to render html)
    res.end('hello from server')
}).listen(6000);

// the purpose of res.writeHead is control:
//-control the status code (200, 404, 500, etc.)
//-control the headers (especially Content-Type)


//2. fs (used to interact with a file system)

import { readFile } from 'fs/promises';

try {
  const data = await readFile('sample.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

//3. path (retrieve and manipulate directory and file path)
import path from "path";
console.log("Dirname:", path.dirname(filePath)); //directory of the file

//4. os 
import os from "os";

// Get the computer's hostname
console.log("Hostname:", os.hostname());
// Get the operating system type
console.log("OS Type:", os.type());
// Get the platform (win32, linux, darwin, etc.)
console.log("Platform:", os.platform());
// Get total system memory (in MB)
console.log("Total Memory:", os.totalmem() / 1024 / 1024, "MB");
// Get free system memory (in MB)
console.log("Free Memory:", os.freemem() / 1024 / 1024, "MB");
// Get CPU information
console.log("CPU Info:", os.cpus()[0].model);

//5. url

import url from "url";

const myUrl = new URL("https://example.com:8080/path/page.html?id=123&name=jeron");

// Print different parts of the URL
console.log("Href:", myUrl.href);          // Full URL
console.log("Protocol:", myUrl.protocol);  // https:
console.log("Host:", myUrl.host);          // example.com:8080
console.log("Hostname:", myUrl.hostname);  // example.com
console.log("Port:", myUrl.port);          // 8080
console.log("Pathname:", myUrl.pathname);  // /path/page.html
console.log("Search:", myUrl.search);      // ?id=123&name=jeron
console.log("Search Params:", myUrl.searchParams.get("name")); // jeron