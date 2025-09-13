// 1. addEventListener (Keeps JS separate from HTML and you can attach several functions to the same event.)
// element.addEventListener(eventType, handlerFunction)

// element: an HTML element to which you want to attach the event listener.
// event type: type of event to listen for (for example: 'click', 'change', 'mouseover', and so on).
// handlerFunction: JSON stores configuration settings, application states, and structured data in databases or files due to its simplicity and ease of use.

//  a. without addEventListener

// <button id="myButton" onClick="handleButtonClick()"> Click me! </button>
function handleButtonClick(){
    console.log("Button clicked!");
}

// b. with addEventListener

// <button id="myButton">Click me</button>
  // Get the button element
  const button = document.getElementById('myButton');

  // Add event listener for 'click' event
  button.addEventListener('click', handleButtonClick);

  // Function to handle button click
  function handleButtonClick() {
    console.log('Button clicked!');
  }


// 2. inline event

//<button onclick="sayHello()">Click me</button>
function sayHello() {
  alert("Hello!");
}
