// Update Existing Content:
// .innerHTML
// .textContent
// .innerText

<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"


// Given the following HTML:
<h1 id="test">Ice Cream Flavors</h1>

// Running the following code
const myElement = document.querySelector('#test');

myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors'; // doesn't work as expected

myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  // works as expected


// .textContent returns all of the text regardless of CSS
// .innerText returns all of the text as seen visually
