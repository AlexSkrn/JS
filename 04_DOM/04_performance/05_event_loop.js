// What the heck is the event loop anyway? by Philip Roberts on YouTube
// https://www.youtube.com/watch?v=8aGhZQkoFbQ

const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});

//  string '123' will only be logged if there's a click
console.log('howdy');
document.addEventListener('click', function numbers() {  // pass an event handler (numbers) to the browser for future use
    console.log('123');
});
console.log('ice cream is tasty');

// JavaScript Event Loop
// JavaScript's concurrency model uses two rules:
// (1) If some JavaScript is running, let it run until it is finished ("run-to-completion").
// (2) If no JavaScript is running, run any pending event handlers. this is known as an event loop
