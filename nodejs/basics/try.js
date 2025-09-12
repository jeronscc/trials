// Import the url module
import url from "url";

// A sample URL
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
