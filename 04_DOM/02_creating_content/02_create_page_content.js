// Adding Content To The Page:
// .createElement() to create new elements
// .appendChild() to add a child element to a parent element as its last child
// .createTextNode() to create a text node
// .insertAdjacentHTML() to put HTML text anywhere around an element

// creates and returns a <span> element
document.createElement('span');

// creates and returns an <h3> element
document.createElement('h3');

// to use the .appendChild() method, it needs to be called on another element
// create a brand new <span> element
const newSpan = document.createElement('span');

newSpan.textContent = ', right, now!';

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);

// Creating Text Nodes
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

// the code below will provide the exact same result:
const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);

// after running this code:
const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);
// only otherHeading will have 3 exclamation marks
// The .appendChild() method will move an element from its current position to the new position.

// Element.insertAdjecentHTML()

// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     Existing text/HTML content
//     <!-- beforeend -->
// </p>
// <!-- afterend -->

const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

// Notes
// if an element already exists in the DOM and this element is passed to .appendChild(),
//      the .appendChild() method will move it rather than duplicating it
// an element's .textContent property is used more often than creating a text node
//      with the .createTextNode() method
// the .insertAdjacentHTML() method's second argument has to be text, you can't pass an element
