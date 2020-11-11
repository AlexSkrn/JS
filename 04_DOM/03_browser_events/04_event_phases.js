// https://www.w3.org/TR/DOM-Level-3-Events/#event-flow
// Event lifecycle:
// capturing
// at target
// bubbling

// By default, when .addEventListener() is called with only two arguments,
// the method defaults to using the bubbling phase

// Here, .addEventListener() should invoke the listener earlier, during the capturing phase
document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);


// the third argument of the .addEventListener() method is the boolean for the capturing phase.
// if it false, event listener should not run during the capturing phase
// therefore it will run in the (default) bubble phase

// Quiz
// After running the code below and clicking on the page,
// two console.log messages will display in the console.
document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The body element was clicked');
});
// The body element was clicked
// The document was clicked


// Event Object
document.addEventListener('click', function (event) {  // note the `event` parameter
   console.log('The document was clicked');
});

// Preventing default action
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});
